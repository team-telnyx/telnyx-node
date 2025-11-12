// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'verify_profiles',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/verify_profiles/templates/{template_id}',
  operationId: 'UpdateMessageTemplate',
};

export const tool: Tool = {
  name: 'update_template_verify_profiles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an existing Verify profile message template.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/message_template',\n  $defs: {\n    message_template: {\n      type: 'object',\n      title: 'MessageTemplateResponseDataWrapper',\n      properties: {\n        data: {\n          $ref: '#/$defs/verify_profile_message_template_response'\n        }\n      }\n    },\n    verify_profile_message_template_response: {\n      type: 'object',\n      title: 'VerifyProfileResponse',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        text: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      template_id: {
        type: 'string',
      },
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
    required: ['template_id', 'text'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { template_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.verifyProfiles.updateTemplate(template_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
