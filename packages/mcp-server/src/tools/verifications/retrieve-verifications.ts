// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'verifications',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/verifications/{verification_id}',
  operationId: 'RetrieveVerification',
};

export const tool: Tool = {
  name: 'retrieve_verifications',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve verification\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/verification_retrieve_response',\n  $defs: {\n    verification_retrieve_response: {\n      type: 'object',\n      title: 'RetrieveVerificationResponse',\n      properties: {\n        data: {\n          $ref: '#/$defs/verification'\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    verification: {\n      type: 'object',\n      title: 'Verification',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string'\n        },\n        custom_code: {\n          type: 'string',\n          description: 'Send a self-generated numeric code to the end-user'\n        },\n        phone_number: {\n          type: 'string',\n          description: '+E164 formatted phone number.'\n        },\n        record_type: {\n          type: 'string',\n          title: 'VerificationRecordType',\n          description: 'The possible verification record types.',\n          enum: [            'verification'\n          ]\n        },\n        status: {\n          type: 'string',\n          title: 'VerificationStatus',\n          description: 'The possible statuses of the verification request.',\n          enum: [            'pending',\n            'accepted',\n            'invalid',\n            'expired',\n            'error'\n          ]\n        },\n        timeout_secs: {\n          type: 'integer',\n          description: 'This is the number of seconds before the code of the request is expired. Once this request has expired, the code will no longer verify the user. Note: this will override the `default_verification_timeout_secs` on the Verify profile.'\n        },\n        type: {\n          type: 'string',\n          title: 'VerificationType',\n          description: 'The possible types of verification.',\n          enum: [            'sms',\n            'call',\n            'flashcall'\n          ]\n        },\n        updated_at: {\n          type: 'string'\n        },\n        verify_profile_id: {\n          type: 'string',\n          description: 'The identifier of the associated Verify profile.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      verification_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['verification_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { verification_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.verifications.retrieve(verification_id)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
