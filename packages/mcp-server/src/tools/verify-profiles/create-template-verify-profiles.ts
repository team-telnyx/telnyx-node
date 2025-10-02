// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'verify_profiles',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/verify_profiles/templates',
  operationId: 'CreateMessageTemplate',
};

export const tool: Tool = {
  name: 'create_template_verify_profiles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new Verify profile message template.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'MessageTemplateResponseDataWrapper',\n  properties: {\n    data: {\n      type: 'object',\n      title: 'VerifyProfileResponse',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        text: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      text: {
        type: 'string',
        description: 'The text content of the message template.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['text'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.verifyProfiles.createTemplate(body)));
};

export default { metadata, tool, handler };
