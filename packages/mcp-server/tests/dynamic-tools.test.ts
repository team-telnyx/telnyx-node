import { dynamicTools } from '../src/dynamic-tools';
import { Endpoint } from '../src/tools';

describe('dynamicTools', () => {
  const fakeClient = {} as any;

  const endpoints: Endpoint[] = [
    makeEndpoint('test_read_endpoint', 'test_resource', 'read', ['test']),
    makeEndpoint('test_write_endpoint', 'test_resource', 'write', ['test']),
    makeEndpoint('user_endpoint', 'user', 'read', ['user', 'admin']),
    makeEndpoint('admin_endpoint', 'admin', 'write', ['admin']),
  ];

  const tools = dynamicTools(endpoints);

  const toolsMap = {
    list_api_endpoints: toolOrError('list_api_endpoints'),
    get_api_endpoint_schema: toolOrError('get_api_endpoint_schema'),
    read_api_endpoint: toolOrError('read_api_endpoint'),
    invoke_api_endpoint: toolOrError('invoke_api_endpoint'),
  };

  describe('list_api_endpoints', () => {
    it('should return all endpoints when no search query is provided', async () => {
      const content = await toolsMap.list_api_endpoints.handler(fakeClient, {});
      const result = JSON.parse(content.content[0].text);

      expect(result.tools).toHaveLength(endpoints.length);
      expect(result.tools.map((t: { name: string }) => t.name)).toContain('test_read_endpoint');
      expect(result.tools.map((t: { name: string }) => t.name)).toContain('test_write_endpoint');
      expect(result.tools.map((t: { name: string }) => t.name)).toContain('user_endpoint');
      expect(result.tools.map((t: { name: string }) => t.name)).toContain('admin_endpoint');
      expect(
        result.tools.find((t: { name: string }) => t.name === 'test_read_endpoint').invocation_tool,
      ).toBe('read_api_endpoint');
      expect(
        result.tools.find((t: { name: string }) => t.name === 'test_write_endpoint').invocation_tool,
      ).toBe('invoke_api_endpoint');
    });

    it('should filter endpoints by name', async () => {
      const content = await toolsMap.list_api_endpoints.handler(fakeClient, { search_query: 'user' });
      const result = JSON.parse(content.content[0].text);

      expect(result.tools).toHaveLength(1);
      expect(result.tools[0].name).toBe('user_endpoint');
    });

    it('should filter endpoints by resource', async () => {
      const content = await toolsMap.list_api_endpoints.handler(fakeClient, { search_query: 'admin' });
      const result = JSON.parse(content.content[0].text);

      expect(result.tools.some((t: { resource: string }) => t.resource === 'admin')).toBeTruthy();
    });

    it('should filter endpoints by tag', async () => {
      const content = await toolsMap.list_api_endpoints.handler(fakeClient, { search_query: 'admin' });
      const result = JSON.parse(content.content[0].text);

      expect(result.tools.some((t: { tags: string[] }) => t.tags.includes('admin'))).toBeTruthy();
    });

    it('should be case insensitive in search', async () => {
      const content = await toolsMap.list_api_endpoints.handler(fakeClient, { search_query: 'ADMIN' });
      const result = JSON.parse(content.content[0].text);

      expect(result.tools.length).toBe(2);
      result.tools.forEach((tool: { name: string; resource: string; tags: string[] }) => {
        expect(
          tool.name.toLowerCase().includes('admin') ||
            tool.resource.toLowerCase().includes('admin') ||
            tool.tags.some((tag: string) => tag.toLowerCase().includes('admin')),
        ).toBeTruthy();
      });
    });

    it('should filter endpoints by description', async () => {
      const content = await toolsMap.list_api_endpoints.handler(fakeClient, {
        search_query: 'Test endpoint for user_endpoint',
      });
      const result = JSON.parse(content.content[0].text);

      expect(result.tools).toHaveLength(1);
      expect(result.tools[0].name).toBe('user_endpoint');
      expect(result.tools[0].description).toBe('Test endpoint for user_endpoint');
    });

    it('should filter endpoints by partial description match', async () => {
      const content = await toolsMap.list_api_endpoints.handler(fakeClient, {
        search_query: 'endpoint for user',
      });
      const result = JSON.parse(content.content[0].text);

      expect(result.tools).toHaveLength(1);
      expect(result.tools[0].name).toBe('user_endpoint');
    });
  });

  describe('get_api_endpoint_schema', () => {
    it('should return schema for existing endpoint', async () => {
      const content = await toolsMap.get_api_endpoint_schema.handler(fakeClient, {
        endpoint: 'test_read_endpoint',
      });
      const result = JSON.parse(content.content[0].text);

      expect(result).toEqual({
        ...endpoints[0]?.tool,
        inputSchema: {
          ...endpoints[0]?.tool.inputSchema,
          properties: {
            ...endpoints[0]?.tool.inputSchema.properties,
            nested: {
              ...(endpoints[0]?.tool.inputSchema.properties?.nested as Record<string, unknown>),
              additionalProperties: false,
            },
          },
          additionalProperties: false,
        },
      });
    });

    it('should throw error for non-existent endpoint', async () => {
      await expect(
        toolsMap.get_api_endpoint_schema.handler(fakeClient, { endpoint: 'non_existent_endpoint' }),
      ).rejects.toThrow('Endpoint non_existent_endpoint not found');
    });

    it('should throw error when no endpoint provided', async () => {
      await expect(toolsMap.get_api_endpoint_schema.handler(fakeClient, undefined)).rejects.toThrow(
        'No endpoint provided',
      );
    });
  });

  describe('read_api_endpoint', () => {
    it('should successfully invoke a read endpoint with valid arguments', async () => {
      const mockHandler = endpoints[0]?.handler as jest.Mock;
      mockHandler.mockClear();

      await toolsMap.read_api_endpoint.handler(fakeClient, {
        endpoint_name: 'test_read_endpoint',
        args: { testParam: 'test value' },
      });

      expect(mockHandler).toHaveBeenCalledWith(fakeClient, { testParam: 'test value' });
    });

    it('should reject write endpoints', async () => {
      await expect(
        toolsMap.read_api_endpoint.handler(fakeClient, {
          endpoint_name: 'test_write_endpoint',
          args: { testParam: 'test value' },
        }),
      ).rejects.toThrow(/write endpoint.*invoke_api_endpoint/);
    });

    it('advertises an explicit read-only contract', () => {
      expect(toolsMap.read_api_endpoint.tool.annotations).toMatchObject({
        readOnlyHint: true,
        destructiveHint: false,
        openWorldHint: true,
      });
      expect(toolsMap.read_api_endpoint.tool.title).toBeTruthy();
    });
  });

  describe('invoke_api_endpoint', () => {
    it('should successfully invoke a write endpoint with valid arguments', async () => {
      const mockHandler = endpoints[1]?.handler as jest.Mock;
      mockHandler.mockClear();

      await toolsMap.invoke_api_endpoint.handler(fakeClient, {
        endpoint_name: 'test_write_endpoint',
        args: { testParam: 'test value' },
      });

      expect(mockHandler).toHaveBeenCalledWith(fakeClient, { testParam: 'test value' });
    });

    it('should reject read endpoints', async () => {
      await expect(
        toolsMap.invoke_api_endpoint.handler(fakeClient, {
          endpoint_name: 'test_read_endpoint',
          args: { testParam: 'test value' },
        }),
      ).rejects.toThrow(/read endpoint.*read_api_endpoint/);
    });

    it('should throw error for non-existent endpoint', async () => {
      await expect(
        toolsMap.invoke_api_endpoint.handler(fakeClient, {
          endpoint_name: 'non_existent_endpoint',
          args: { testParam: 'test value' },
        }),
      ).rejects.toThrow(/Endpoint non_existent_endpoint not found/);
    });

    it('should throw error when no arguments provided', async () => {
      await expect(toolsMap.invoke_api_endpoint.handler(fakeClient, undefined)).rejects.toThrow(
        'No endpoint provided',
      );
    });

    it('should throw error for invalid argument schema', async () => {
      await expect(
        toolsMap.invoke_api_endpoint.handler(fakeClient, {
          endpoint_name: 'test_write_endpoint',
          args: { wrongParam: 'test value' }, // Missing required testParam
        }),
      ).rejects.toThrow(/Invalid arguments for endpoint/);
    });

    it('rejects undocumented fields instead of forwarding them to the SDK', async () => {
      const mockHandler = endpoints[1]?.handler as jest.Mock;
      mockHandler.mockClear();

      await expect(
        toolsMap.invoke_api_endpoint.handler(fakeClient, {
          endpoint_name: 'test_write_endpoint',
          args: {
            testParam: 'test value',
            planted_webhook_url: 'https://attacker.example/capture',
          },
        }),
      ).rejects.toThrow(/Invalid arguments for endpoint/);
      expect(mockHandler).not.toHaveBeenCalled();
    });

    it('rejects undocumented nested fields while preserving documented free-form maps', async () => {
      const mockHandler = endpoints[1]?.handler as jest.Mock;
      mockHandler.mockClear();

      await expect(
        toolsMap.invoke_api_endpoint.handler(fakeClient, {
          endpoint_name: 'test_write_endpoint',
          args: {
            testParam: 'test value',
            nested: { known: 'safe', planted: 'blocked' },
          },
        }),
      ).rejects.toThrow(/Invalid arguments for endpoint/);
      expect(mockHandler).not.toHaveBeenCalled();

      await toolsMap.invoke_api_endpoint.handler(fakeClient, {
        endpoint_name: 'test_write_endpoint',
        args: {
          testParam: 'test value',
          freeForm: { documentedByMapContract: 'allowed' },
        },
      });
      expect(mockHandler).toHaveBeenCalledWith(fakeClient, {
        testParam: 'test value',
        freeForm: { documentedByMapContract: 'allowed' },
      });
    });

    it('advertises a conservative write contract', () => {
      expect(toolsMap.invoke_api_endpoint.tool.annotations).toMatchObject({
        readOnlyHint: false,
        destructiveHint: true,
        openWorldHint: true,
      });
      expect(toolsMap.invoke_api_endpoint.tool.title).toBeTruthy();
    });
  });

  function toolOrError(name: string) {
    const tool = tools.find((tool) => tool.tool.name === name);
    if (!tool) throw new Error(`Tool ${name} not found`);
    return tool;
  }
});

function makeEndpoint(
  name: string,
  resource: string,
  operation: 'read' | 'write',
  tags: string[] = [],
): Endpoint {
  return {
    metadata: {
      resource,
      operation,
      tags,
    },
    tool: {
      name,
      description: `Test endpoint for ${name}`,
      inputSchema: {
        type: 'object',
        properties: {
          testParam: { type: 'string' },
          nested: {
            type: 'object',
            properties: {
              known: { type: 'string' },
            },
          },
          freeForm: {
            type: 'object',
            additionalProperties: true,
          },
        },
        required: ['testParam'],
      },
    },
    handler: jest.fn().mockResolvedValue({ success: true }),
  };
}
