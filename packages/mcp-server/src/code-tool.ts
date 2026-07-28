// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { ContentBlock, McpRequestContext, McpTool, Metadata, ToolCallResult, asErrorResult } from './types';
import { Tool } from '@modelcontextprotocol/sdk/types.js';
import { WorkerOutput } from './code-tool-types';
import { getLogger } from './logger';
import { SdkMethod } from './methods';
import { McpCodeExecutionMode } from './options';
import { ClientOptions } from 'telnyx';

const prompt = `Runs JavaScript code to interact with the Telnyx API.

You are a skilled TypeScript programmer writing code to interface with the service.
Define an async function named "run" that takes a single parameter of an initialized SDK client and it will be run.
For example:

\`\`\`
async function run(client) {
  const response = await client.calls.dial({
    connection_id: 'conn12345',
    from: '+15557654321',
    to: '+15551234567',
    webhook_url: 'https://your-webhook.url/events',
  });

  console.log(response.data);
}
\`\`\`

You will be returned anything that your function returns, plus the results of any console.log statements.
Do not add try-catch blocks for single API calls. The tool will handle errors for you.
Do not add comments unless necessary for generating better code.
Code will run in a container, and cannot interact with the network outside of the given SDK client.
Variables will not persist between calls, so make sure to return or log any data you might need later.
Remember that you are writing TypeScript code, so you need to be careful with your types.
Always type dynamic key-value stores explicitly as Record<string, YourValueType> instead of {}.`;

/**
 * A tool that runs code against a copy of the SDK.
 *
 * Instead of exposing every endpoint as its own tool, which uses up too many tokens for LLMs to use at once,
 * we expose a single tool that can be used to search for endpoints by name, resource, operation, or tag, and then
 * a generic endpoint that can be used to invoke any endpoint with the provided arguments.
 *
 * @param blockedMethods - The SDK methods to reject at invocation time during local code execution.
 * Downstream API authorization remains the security boundary for direct HTTP requests or other code
 * that does not use the provided SDK client.
 * @param codeExecutionMode - Whether to execute code in a local Deno environment or in a remote
 * sandbox environment hosted by Stainless.
 */
export function codeTool({
  blockedMethods,
  codeExecutionMode,
}: {
  blockedMethods: SdkMethod[] | undefined;
  codeExecutionMode: McpCodeExecutionMode;
}): McpTool {
  const metadata: Metadata = { resource: 'all', operation: 'write', tags: [] };
  const tool: Tool = {
    name: 'execute',
    description: prompt,
    inputSchema: {
      type: 'object',
      properties: {
        code: {
          type: 'string',
          description: 'Code to execute.',
        },
        intent: {
          type: 'string',
          description: 'Task you are trying to perform. Used for improving the service.',
        },
      },
      required: ['code'],
    },
  };

  const logger = getLogger();

  const handler = async ({
    reqContext,
    args,
  }: {
    reqContext: McpRequestContext;
    args: any;
  }): Promise<ToolCallResult> => {
    let result: ToolCallResult;
    const startTime = Date.now();

    logger.debug('Executing code in local Deno environment');
    result = await localDenoHandler({ reqContext, args, blockedMethods });

    logger.info(
      {
        codeExecutionMode,
        durationMs: Date.now() - startTime,
        isError: result.isError,
        contentRows: result.content?.length ?? 0,
      },
      'Got code tool execution result',
    );
    return result;
  };

  return { metadata, tool, handler };
}

const codeWorkerRuntimeEnvNames = [
  'TSC_WATCHFILE',
  'TSC_NONPOLLING_WATCHER',
  'TSC_WATCHDIRECTORY',
  'NODE_INSPECTOR_IPC',
  'VSCODE_INSPECTOR_OPTIONS',
  'NODE_ENV',
  'TSC_WATCH_POLLINGINTERVAL_LOW',
  'TSC_WATCH_POLLINGINTERVAL_MEDIUM',
  'TSC_WATCH_POLLINGINTERVAL_HIGH',
  'TSC_WATCH_POLLINGCHUNKSIZE_LOW',
  'TSC_WATCH_POLLINGCHUNKSIZE_MEDIUM',
  'TSC_WATCH_POLLINGCHUNKSIZE_HIGH',
  'TSC_WATCH_UNCHANGEDPOLLTHRESHOLDS_LOW',
  'TSC_WATCH_UNCHANGEDPOLLTHRESHOLDS_MEDIUM',
  'TSC_WATCH_UNCHANGEDPOLLTHRESHOLDS_HIGH',
  'TELNYX_LOG',
  'TELNYX_CUSTOM_HEADERS',
] as const;

export const buildCodeWorkerEnvironment = ({
  serverEnv,
  clientEnv,
  allowedClientEnvNames,
}: {
  serverEnv: NodeJS.ProcessEnv;
  clientEnv: Record<string, unknown> | undefined;
  allowedClientEnvNames: readonly string[];
}): { env: Record<string, string>; readableClientEnvNames: string[] } => {
  const runtimeEnvKeys = ['PATH', 'HOME', 'TMPDIR', 'TEMP', 'TMP', 'DENO_DIR'] as const;
  const runtimeEnv = Object.fromEntries(
    runtimeEnvKeys.flatMap((key) => {
      const value = serverEnv[key];
      return value === undefined ? [] : [[key, value]];
    }),
  );
  const allowedNames = new Set(allowedClientEnvNames);
  const safeClientEnv = Object.fromEntries(
    Object.entries(clientEnv ?? {}).filter(
      (entry): entry is [string, string] => allowedNames.has(entry[0]) && typeof entry[1] === 'string',
    ),
  );
  return {
    env: { ...runtimeEnv, ...safeClientEnv },
    readableClientEnvNames: Object.keys(safeClientEnv),
  };
};

const codeWorkerClientEnvNames = [
  'TELNYX_API_KEY',
  'TELNYX_PUBLIC_KEY',
  'TELNYX_CLIENT_ID',
  'TELNYX_CLIENT_SECRET',
  'TELNYX_BASE_URL',
] as const;

const localDenoHandler = async ({
  reqContext,
  args,
  blockedMethods,
}: {
  reqContext: McpRequestContext;
  args: unknown;
  blockedMethods: SdkMethod[] | undefined;
}): Promise<ToolCallResult> => {
  const fs = await import('node:fs');
  const path = await import('node:path');
  const url = await import('node:url');
  const { newDenoHTTPWorker } = await import('@valtown/deno-http-worker');
  const { getWorkerPath } = await import('./code-tool-paths.cjs');
  const workerPath = getWorkerPath();

  const client = reqContext.client;
  const baseURLHostname = new URL(client.baseURL).hostname;
  const { code } = args as { code: string };

  let denoPath: string;

  const packageRoot = path.resolve(path.dirname(workerPath), '..');
  const packageNodeModulesPath = path.resolve(packageRoot, 'node_modules');

  // Check if deno is in PATH
  const { execSync, spawn } = await import('node:child_process');
  try {
    denoPath = execSync('command -v deno', { encoding: 'utf8' }).trim();
  } catch {
    try {
      // Use deno binary in node_modules if it's found
      const denoNodeModulesPath = path.resolve(packageNodeModulesPath, 'deno', 'bin.cjs');
      await fs.promises.access(denoNodeModulesPath, fs.constants.X_OK);
      denoPath = denoNodeModulesPath;
    } catch {
      return asErrorResult(
        'Deno is required for code execution but was not found. ' +
          'Install it from https://deno.land or run: npm install deno',
      );
    }
  }

  const allowReadPaths = [
    'code-tool-worker.mjs',
    `${workerPath.replace(/([\/\\]node_modules)[\/\\].+$/, '$1')}/`,
    packageRoot,
  ];

  // Follow symlinks in node_modules to allow read access to workspace-linked packages
  try {
    const sdkPkgName = 'telnyx';
    const sdkDir = path.resolve(packageNodeModulesPath, sdkPkgName);
    const realSdkDir = fs.realpathSync(sdkDir);
    if (realSdkDir !== sdkDir) {
      allowReadPaths.push(realSdkDir);
    }
  } catch {
    // Ignore if symlink resolution fails
  }

  const allowRead = allowReadPaths.join(',');

  const { env: workerEnv } = buildCodeWorkerEnvironment({
    serverEnv: process.env,
    clientEnv: reqContext.upstreamClientEnvs,
    allowedClientEnvNames: codeWorkerClientEnvNames,
  });

  const worker = await newDenoHTTPWorker(url.pathToFileURL(workerPath), {
    denoExecutable: denoPath,
    runFlags: [
      `--node-modules-dir=manual`,
      `--allow-read=${allowRead}`,
      `--allow-net=${baseURLHostname}`,
      `--allow-env=${[...codeWorkerRuntimeEnvNames, ...codeWorkerClientEnvNames].join(',')}`,
    ],
    printOutput: true,
    spawnFunc: (command, commandArgs, options) => {
      // Deno 2 requires net permission for the private Unix socket. Grant only the
      // socket path generated internally by deno-http-worker.
      const socketPath = commandArgs.find((arg) => path.isAbsolute(arg) && arg.endsWith('-deno-http.sock'));
      const allowNetIndex = commandArgs.findIndex((arg) => arg.startsWith('--allow-net='));
      if (!socketPath || allowNetIndex < 0) {
        throw new Error('Could not determine Deno worker socket permissions');
      }
      const spawnArgs = [...commandArgs];
      spawnArgs[allowNetIndex] += `,unix:${socketPath}`;
      return spawn(command, spawnArgs, options);
    },
    spawnOptions: {
      cwd: path.dirname(workerPath),
      // Do not expose the MCP server's inherited environment to executed code.
      // Only non-secret runtime variables and client-provided variables are forwarded.
      env: workerEnv,
    },
  });

  try {
    const resp = await new Promise<Response>((resolve, reject) => {
      worker.addEventListener('exit', (exitCode) => {
        reject(new Error(`Worker exited with code ${exitCode}`));
      });

      // Strip null/undefined values so that the worker SDK client can fall back to
      // reading from environment variables (including any upstreamClientEnvs).
      const opts = {
        ...(client.baseURL != null ? { baseURL: client.baseURL } : undefined),
        ...(client.apiKey != null ? { apiKey: client.apiKey } : undefined),
        ...(client.publicKey != null ? { publicKey: client.publicKey } : undefined),
        ...(client.clientID != null ? { clientID: client.clientID } : undefined),
        ...(client.clientSecret != null ? { clientSecret: client.clientSecret } : undefined),
        defaultHeaders: {
          'X-Stainless-MCP': 'true',
        },
      } satisfies Partial<ClientOptions> as ClientOptions;

      const req = worker.request(
        'http://localhost',
        {
          headers: {
            'content-type': 'application/json',
          },
          method: 'POST',
        },
        (resp) => {
          const body: Uint8Array[] = [];
          resp.on('error', (err) => {
            reject(err);
          });
          resp.on('data', (chunk) => {
            body.push(chunk);
          });
          resp.on('end', () => {
            resolve(
              new Response(Buffer.concat(body).toString(), {
                status: resp.statusCode ?? 200,
                headers: resp.headers as any,
              }),
            );
          });
        },
      );

      const body = JSON.stringify({
        opts,
        code,
        blockedMethods: blockedMethods?.map((method) => method.fullyQualifiedName) ?? [],
      });

      req.write(body, (err) => {
        if (err != null) {
          reject(err);
        }
      });

      req.end();
    });

    if (resp.status === 200) {
      const { result, log_lines, err_lines } = (await resp.json()) as WorkerOutput;
      const returnOutput: ContentBlock | null =
        result == null ? null : (
          {
            type: 'text',
            text: typeof result === 'string' ? result : JSON.stringify(result),
          }
        );
      const logOutput: ContentBlock | null =
        log_lines.length === 0 ?
          null
        : {
            type: 'text',
            text: log_lines.join('\n'),
          };
      const errOutput: ContentBlock | null =
        err_lines.length === 0 ?
          null
        : {
            type: 'text',
            text: 'Error output:\n' + err_lines.join('\n'),
          };
      return {
        content: [returnOutput, logOutput, errOutput].filter((block) => block !== null),
      };
    } else {
      const { result, log_lines, err_lines } = (await resp.json()) as WorkerOutput;
      const messageOutput: ContentBlock | null =
        result == null ? null : (
          {
            type: 'text',
            text: typeof result === 'string' ? result : JSON.stringify(result),
          }
        );
      const logOutput: ContentBlock | null =
        log_lines.length === 0 ?
          null
        : {
            type: 'text',
            text: log_lines.join('\n'),
          };
      const errOutput: ContentBlock | null =
        err_lines.length === 0 ?
          null
        : {
            type: 'text',
            text: 'Error output:\n' + err_lines.join('\n'),
          };
      return {
        content: [messageOutput, logOutput, errOutput].filter((block) => block !== null),
        isError: true,
      };
    }
  } finally {
    worker.terminate();
  }
};
