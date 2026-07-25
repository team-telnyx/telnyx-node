// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { ClientOptions } from 'telnyx';
import express from 'express';
import rateLimit from 'express-rate-limit';
import pino from 'pino';
import pinoHttp from 'pino-http';
import { getStainlessApiKey, isMcpServerRequestAuthorized, parseClientAuthHeaders } from './auth';
import { getLogger } from './logger';
import { McpOptions } from './options';
import { initMcpServer, newMcpServer } from './server';

const newServer = async ({
  clientOptions,
  mcpOptions,
  req,
  res,
}: {
  clientOptions: ClientOptions;
  mcpOptions: McpOptions;
  req: express.Request;
  res: express.Response;
}): Promise<McpServer | null> => {
  const stainlessApiKey = getStainlessApiKey(req, mcpOptions);
  const customInstructionsPath = mcpOptions.customInstructionsPath;
  const server = await newMcpServer({ stainlessApiKey, customInstructionsPath });

  const authOptions = parseClientAuthHeaders(req, false);

  let upstreamClientEnvs: Record<string, string> | undefined;
  const clientEnvsHeader = req.headers['x-stainless-mcp-client-envs'];
  if (typeof clientEnvsHeader === 'string') {
    try {
      const parsed = JSON.parse(clientEnvsHeader);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        upstreamClientEnvs = parsed;
      }
    } catch {
      // Ignore malformed header
    }
  }

  // Parse x-stainless-mcp-client-permissions header to override permission options
  //
  // Note: Permissions are best-effort and intended to prevent clients from doing unexpected things;
  // they're not a hard security boundary, so we allow arbitrary, client-driven overrides.
  //
  // See the Stainless MCP documentation for more details.
  let effectiveMcpOptions = mcpOptions;
  const clientPermissionsHeader = req.headers['x-stainless-mcp-client-permissions'];
  if (typeof clientPermissionsHeader === 'string') {
    try {
      const parsed = JSON.parse(clientPermissionsHeader);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        effectiveMcpOptions = {
          ...mcpOptions,
          ...(typeof parsed.allow_http_gets === 'boolean' && { codeAllowHttpGets: parsed.allow_http_gets }),
          ...(Array.isArray(parsed.allowed_methods) && { codeAllowedMethods: parsed.allowed_methods }),
          ...(Array.isArray(parsed.blocked_methods) && { codeBlockedMethods: parsed.blocked_methods }),
        };
        getLogger().info(
          { clientPermissions: parsed },
          'Overriding code execution permissions from x-stainless-mcp-client-permissions header',
        );
      }
    } catch (error) {
      getLogger().warn({ error }, 'Failed to parse x-stainless-mcp-client-permissions header');
    }
  }

  const mcpClientInfo =
    typeof req.body?.params?.clientInfo?.name === 'string' ?
      { name: req.body.params.clientInfo.name, version: String(req.body.params.clientInfo.version ?? '') }
    : undefined;

  await initMcpServer({
    server: server,
    mcpOptions: effectiveMcpOptions,
    clientOptions: {
      ...clientOptions,
      ...authOptions,
    },
    stainlessApiKey: stainlessApiKey,
    upstreamClientEnvs,
    mcpSessionId: (req as any).mcpSessionId,
    mcpClientInfo,
  });

  if (mcpClientInfo) {
    getLogger().info({ mcpSessionId: (req as any).mcpSessionId, mcpClientInfo }, 'MCP client connected');
  }

  return server;
};

const post =
  (options: { clientOptions: ClientOptions; mcpOptions: McpOptions }) =>
  async (req: express.Request, res: express.Response) => {
    const server = await newServer({ ...options, req, res });
    // If we return null, we already set the authorization error.
    if (server === null) return;
    const transport = new StreamableHTTPServerTransport();
    await server.connect(transport as any);
    await transport.handleRequest(req, res, req.body);
  };

const get = async (req: express.Request, res: express.Response) => {
  res.status(405).json({
    jsonrpc: '2.0',
    error: {
      code: -32000,
      message: 'Method not supported',
    },
  });
};

const del = async (req: express.Request, res: express.Response) => {
  res.status(405).json({
    jsonrpc: '2.0',
    error: {
      code: -32000,
      message: 'Method not supported',
    },
  });
};

const redactHeaders = (headers: Record<string, any>) => {
  const hiddenHeaders = /auth|cookie|key|token|x-stainless-mcp-client-envs/i;
  const filtered = { ...headers };
  Object.keys(filtered).forEach((key) => {
    if (hiddenHeaders.test(key)) {
      filtered[key] = '[REDACTED]';
    }
  });
  return filtered;
};

const requireMcpServerApiKey =
  (mcpOptions: McpOptions) => (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.path !== '/') {
      next();
      return;
    }

    if (isMcpServerRequestAuthorized(req, mcpOptions.serverApiKey)) {
      next();
      return;
    }

    res.status(401).json({
      jsonrpc: '2.0',
      error: {
        code: -32000,
        message: 'Unauthorized',
      },
    });
  };

export const streamableHTTPApp = ({
  clientOptions = {},
  mcpOptions,
}: {
  clientOptions?: ClientOptions;
  mcpOptions: McpOptions;
}): express.Express => {
  if (mcpOptions.includeCodeTool === undefined) {
    mcpOptions = { ...mcpOptions, includeCodeTool: false };
  }

  const app = express();
  app.set('query parser', 'extended');
  app.use(
    rateLimit({
      windowMs: 60 * 1000,
      limit: 60,
      standardHeaders: true,
      legacyHeaders: false,
      skip: (req) => req.path !== '/',
      skipSuccessfulRequests: true,
      handler: (_req, res) => {
        res.status(429).json({
          jsonrpc: '2.0',
          error: { code: -32000, message: 'Too many requests' },
        });
      },
    }),
  );
  app.use(requireMcpServerApiKey(mcpOptions));
  app.use(express.json());
  app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    const existing = req.headers['mcp-session-id'];
    const sessionId = (Array.isArray(existing) ? existing[0] : existing) || crypto.randomUUID();
    (req as any).mcpSessionId = sessionId;
    const origWriteHead = res.writeHead.bind(res);
    res.writeHead = function (statusCode: number, ...rest: any[]) {
      res.setHeader('mcp-session-id', sessionId);
      return origWriteHead(statusCode, ...rest);
    } as typeof res.writeHead;
    next();
  });
  app.use(
    pinoHttp({
      logger: getLogger(),
      customProps: (req) => ({
        mcpSessionId: (req as any).mcpSessionId,
      }),
      customLogLevel: (req, res) => {
        if (res.statusCode >= 500) {
          return 'error';
        } else if (res.statusCode >= 400) {
          return 'warn';
        }
        return 'info';
      },
      customSuccessMessage: function (req, res) {
        return `Request ${req.method} to ${req.url} completed with status ${res.statusCode}`;
      },
      customErrorMessage: function (req, res, err) {
        return `Request ${req.method} to ${req.url} errored with status ${res.statusCode}`;
      },
      serializers: {
        req: pino.stdSerializers.wrapRequestSerializer((req) => {
          return {
            ...req,
            headers: redactHeaders(req.raw.headers),
          };
        }),
        res: pino.stdSerializers.wrapResponseSerializer((res) => {
          return {
            ...res,
            headers: redactHeaders(res.headers),
          };
        }),
      },
    }),
  );

  app.get('/health', async (req: express.Request, res: express.Response) => {
    res.status(200).send('OK');
  });
  app.get('/', get);
  app.post('/', post({ clientOptions, mcpOptions }));
  app.delete('/', del);

  return app;
};

export const launchStreamableHTTPServer = async ({
  mcpOptions,
  host = '127.0.0.1',
  port,
}: {
  mcpOptions: McpOptions;
  host?: string;
  port: number | string | undefined;
}) => {
  if (!mcpOptions.serverApiKey) {
    throw new Error(
      'HTTP transport requires --server-api-key or the MCP_SERVER_API_KEY environment variable.',
    );
  }

  const app = streamableHTTPApp({ mcpOptions });
  const server = typeof port === 'number' ? app.listen(port, host) : app.listen(port);
  const address = server.address();

  const logger = getLogger();

  if (typeof address === 'string') {
    logger.info(`MCP Server running on streamable HTTP at ${address}`);
  } else if (address !== null) {
    logger.info(`MCP Server running on streamable HTTP on port ${address.port}`);
  } else {
    logger.info(`MCP Server running on streamable HTTP on port ${port}`);
  }
};
