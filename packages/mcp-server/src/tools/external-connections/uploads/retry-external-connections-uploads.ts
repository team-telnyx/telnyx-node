// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'external_connections.uploads',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/external_connections/{id}/uploads/{ticket_id}/retry',
  operationId: 'RetryUpload',
};

export const tool: Tool = {
  name: 'retry_external_connections_uploads',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nIf there were any errors during the upload process, this endpoint will retry the upload request. In some cases this will reattempt the existing upload request, in other cases it may create a new upload request. Please check the ticket_id in the response to determine if a new upload request was created.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/upload_retry_response',\n  $defs: {\n    upload_retry_response: {\n      type: 'object',\n      title: 'Get Upload Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/upload'\n        }\n      }\n    },\n    upload: {\n      type: 'object',\n      title: 'Upload',\n      properties: {\n        available_usages: {\n          type: 'array',\n          items: {\n            type: 'string',\n            description: 'Available usages for the numbers in the upload on Microsoft Teams.',\n            enum: [              'calling_user_assignment',\n              'first_party_app_assignment'\n            ]\n          }\n        },\n        error_code: {\n          type: 'string',\n          description: 'A code returned by Microsoft Teams if there is an error with the upload process.'\n        },\n        error_message: {\n          type: 'string',\n          description: 'A message set if there is an error with the upload process.'\n        },\n        location_id: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          description: 'Represents the status of the upload on Microsoft Teams.',\n          enum: [            'pending_upload',\n            'pending',\n            'in_progress',\n            'partial_success',\n            'success',\n            'error'\n          ]\n        },\n        tenant_id: {\n          type: 'string'\n        },\n        ticket_id: {\n          type: 'string',\n          title: 'UUID',\n          description: 'Uniquely identifies the resource.'\n        },\n        tn_upload_entries: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/tn_upload_entry'\n          }\n        }\n      }\n    },\n    tn_upload_entry: {\n      type: 'object',\n      title: 'TnUploadEntry',\n      properties: {\n        civic_address_id: {\n          type: 'string',\n          description: 'Identifies the civic address assigned to the phone number entry.'\n        },\n        error_code: {\n          type: 'string',\n          description: 'A code returned by Microsoft Teams if there is an error with the phone number entry upload.',\n          enum: [            'internal_error',\n            'unable_to_retrieve_default_location',\n            'unknown_country_code',\n            'unable_to_retrieve_location',\n            'unable_to_retrieve_partner_info',\n            'unable_to_match_geography_entry'\n          ]\n        },\n        error_message: {\n          type: 'string',\n          description: 'A message returned by Microsoft Teams if there is an error with the upload process.'\n        },\n        internal_status: {\n          type: 'string',\n          description: 'Represents the status of the phone number entry upload on Telnyx.',\n          enum: [            'pending_assignment',\n            'in_progress',\n            'all_internal_jobs_completed',\n            'release_requested',\n            'release_completed',\n            'error'\n          ]\n        },\n        location_id: {\n          type: 'string',\n          description: 'Identifies the location assigned to the phone number entry.'\n        },\n        number_id: {\n          type: 'string',\n          title: 'UUID',\n          description: 'Uniquely identifies the resource.'\n        },\n        phone_number: {\n          type: 'string',\n          description: 'Phone number in E164 format.'\n        },\n        status: {\n          type: 'string',\n          description: 'Represents the status of the phone number entry upload on Microsoft Teams.',\n          enum: [            'pending_upload',\n            'pending',\n            'in_progress',\n            'success',\n            'error'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      ticket_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'ticket_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { ticket_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.externalConnections.uploads.retry(ticket_id, body)),
  );
};

export default { metadata, tool, handler };
