// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'verify_profiles',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/verify_profiles/{verify_profile_id}',
  operationId: 'DeleteProfile',
};

export const tool: Tool = {
  name: 'delete_verify_profiles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete Verify profile\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/verify_profile_data',\n  $defs: {\n    verify_profile_data: {\n      type: 'object',\n      title: 'VerifyProfileResponseDataWrapper',\n      properties: {\n        data: {\n          $ref: '#/$defs/verify_profile'\n        }\n      }\n    },\n    verify_profile: {\n      type: 'object',\n      title: 'VerifyProfileResponse',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        call: {\n          type: 'object',\n          title: 'VerifyProfileCallResponse',\n          properties: {\n            app_name: {\n              type: 'string',\n              description: 'The name that identifies the application requesting 2fa in the verification message.'\n            },\n            code_length: {\n              type: 'integer',\n              description: 'The length of the verify code to generate.'\n            },\n            default_verification_timeout_secs: {\n              type: 'integer',\n              description: 'For every request that is initiated via this Verify profile, this sets the number of seconds before a verification request code expires. Once the verification request expires, the user cannot use the code to verify their identity.'\n            },\n            messaging_template_id: {\n              type: 'string',\n              description: 'The message template identifier selected from /verify_profiles/templates'\n            },\n            whitelisted_destinations: {\n              type: 'array',\n              description: 'Enabled country destinations to send verification codes. The elements in the list must be valid ISO 3166-1 alpha-2 country codes. If set to `[\"*\"]`, all destinations will be allowed.',\n              items: {\n                type: 'string',\n                description: 'ISO 3166-1 alpha-2 country code'\n              }\n            }\n          }\n        },\n        created_at: {\n          type: 'string'\n        },\n        flashcall: {\n          type: 'object',\n          title: 'VerifyProfileFlashcallResponse',\n          properties: {\n            default_verification_timeout_secs: {\n              type: 'integer',\n              description: 'For every request that is initiated via this Verify profile, this sets the number of seconds before a verification request code expires. Once the verification request expires, the user cannot use the code to verify their identity.'\n            }\n          }\n        },\n        language: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        record_type: {\n          type: 'string',\n          title: 'VerificationProfileRecordType',\n          description: 'The possible verification profile record types.',\n          enum: [            'verification_profile'\n          ]\n        },\n        sms: {\n          type: 'object',\n          title: 'VerifyProfileSMSResponse',\n          properties: {\n            alpha_sender: {\n              type: 'string',\n              description: 'The alphanumeric sender ID to use when sending to destinations that require an alphanumeric sender ID.'\n            },\n            app_name: {\n              type: 'string',\n              description: 'The name that identifies the application requesting 2fa in the verification message.'\n            },\n            code_length: {\n              type: 'integer',\n              description: 'The length of the verify code to generate.'\n            },\n            default_verification_timeout_secs: {\n              type: 'integer',\n              description: 'For every request that is initiated via this Verify profile, this sets the number of seconds before a verification request code expires. Once the verification request expires, the user cannot use the code to verify their identity.'\n            },\n            messaging_template_id: {\n              type: 'string',\n              description: 'The message template identifier selected from /verify_profiles/templates'\n            },\n            whitelisted_destinations: {\n              type: 'array',\n              description: 'Enabled country destinations to send verification codes. The elements in the list must be valid ISO 3166-1 alpha-2 country codes. If set to `[\"*\"]`, all destinations will be allowed.',\n              items: {\n                type: 'string',\n                description: 'ISO 3166-1 alpha-2 country code'\n              }\n            }\n          }\n        },\n        updated_at: {\n          type: 'string'\n        },\n        webhook_failover_url: {\n          type: 'string'\n        },\n        webhook_url: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      verify_profile_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['verify_profile_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { verify_profile_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.verifyProfiles.delete(verify_profile_id)),
  );
};

export default { metadata, tool, handler };
