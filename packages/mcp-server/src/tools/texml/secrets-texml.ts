// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'texml',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/texml/secrets',
  operationId: 'CreateTexmlSecret',
};

export const tool: Tool = {
  name: 'secrets_texml',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a TeXML secret which can be later used as a Dynamic Parameter for TeXML when using Mustache Templates in your TeXML. In your TeXML you will be able to use your secret name, and this name will be replaced by the actual secret value when processing the TeXML on Telnyx side.  The secrets are not visible in any logs.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Create TeXML Secret request',\n  properties: {\n    data: {\n      type: 'object',\n      title: 'Create TeXML Secret result',\n      properties: {\n        name: {\n          type: 'string'\n        },\n        value: {\n          type: 'string',\n          enum: [            'REDACTED'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description:
          'Name used as a reference for the secret, if the name already exists within the account its value will be replaced',
      },
      value: {
        type: 'string',
        description: 'Secret value which will be used when rendering the TeXML template',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['name', 'value'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.texml.secrets(body)));
};

export default { metadata, tool, handler };
