// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'external_connections.uploads',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/external_connections/{id}/uploads',
  operationId: 'ListExternalConnectionUploads',
};

export const tool: Tool = {
  name: 'list_external_connections_uploads',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of your Upload requests for the given external connection.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/upload_list_response',\n  $defs: {\n    upload_list_response: {\n      type: 'object',\n      title: 'List Uploads Response',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/upload'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/external_voice_integrations_pagination_meta'\n        }\n      }\n    },\n    upload: {\n      type: 'object',\n      title: 'Upload',\n      properties: {\n        available_usages: {\n          type: 'array',\n          items: {\n            type: 'string',\n            description: 'Available usages for the numbers in the upload on Microsoft Teams.',\n            enum: [              'calling_user_assignment',\n              'first_party_app_assignment'\n            ]\n          }\n        },\n        error_code: {\n          type: 'string',\n          description: 'A code returned by Microsoft Teams if there is an error with the upload process.'\n        },\n        error_message: {\n          type: 'string',\n          description: 'A message set if there is an error with the upload process.'\n        },\n        location_id: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          description: 'Represents the status of the upload on Microsoft Teams.',\n          enum: [            'pending_upload',\n            'pending',\n            'in_progress',\n            'partial_success',\n            'success',\n            'error'\n          ]\n        },\n        tenant_id: {\n          type: 'string'\n        },\n        ticket_id: {\n          type: 'string',\n          title: 'UUID',\n          description: 'Uniquely identifies the resource.'\n        },\n        tn_upload_entries: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/tn_upload_entry'\n          }\n        }\n      }\n    },\n    tn_upload_entry: {\n      type: 'object',\n      title: 'TnUploadEntry',\n      properties: {\n        civic_address_id: {\n          type: 'string',\n          description: 'Identifies the civic address assigned to the phone number entry.'\n        },\n        error_code: {\n          type: 'string',\n          description: 'A code returned by Microsoft Teams if there is an error with the phone number entry upload.',\n          enum: [            'internal_error',\n            'unable_to_retrieve_default_location',\n            'unknown_country_code',\n            'unable_to_retrieve_location',\n            'unable_to_retrieve_partner_info',\n            'unable_to_match_geography_entry'\n          ]\n        },\n        error_message: {\n          type: 'string',\n          description: 'A message returned by Microsoft Teams if there is an error with the upload process.'\n        },\n        internal_status: {\n          type: 'string',\n          description: 'Represents the status of the phone number entry upload on Telnyx.',\n          enum: [            'pending_assignment',\n            'in_progress',\n            'all_internal_jobs_completed',\n            'release_requested',\n            'release_completed',\n            'error'\n          ]\n        },\n        location_id: {\n          type: 'string',\n          description: 'Identifies the location assigned to the phone number entry.'\n        },\n        number_id: {\n          type: 'string',\n          title: 'UUID',\n          description: 'Uniquely identifies the resource.'\n        },\n        phone_number: {\n          type: 'string',\n          description: 'Phone number in E164 format.'\n        },\n        status: {\n          type: 'string',\n          description: 'Represents the status of the phone number entry upload on Microsoft Teams.',\n          enum: [            'pending_upload',\n            'pending',\n            'in_progress',\n            'success',\n            'error'\n          ]\n        }\n      }\n    },\n    external_voice_integrations_pagination_meta: {\n      type: 'object',\n      title: 'Pagination Meta',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      filter: {
        type: 'object',
        description:
          'Filter parameter for uploads (deepObject style). Supports filtering by status, civic_address_id, location_id, and phone_number with eq/contains operations.',
        properties: {
          civic_address_id: {
            type: 'object',
            properties: {
              eq: {
                type: 'string',
                description: 'The civic address ID to filter by',
              },
            },
          },
          location_id: {
            type: 'object',
            properties: {
              eq: {
                type: 'string',
                description: 'The location ID to filter by',
              },
            },
          },
          phone_number: {
            type: 'object',
            properties: {
              contains: {
                type: 'string',
                description: 'The phone number to filter by (partial match)',
              },
              eq: {
                type: 'string',
                description: 'The phone number to filter by (exact match)',
              },
            },
          },
          status: {
            type: 'object',
            properties: {
              eq: {
                type: 'array',
                description: 'The status of the upload to filter by',
                items: {
                  type: 'string',
                  enum: ['pending_upload', 'pending', 'in_progress', 'success', 'error'],
                },
              },
            },
          },
        },
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[size], page[number]',
        properties: {
          number: {
            type: 'integer',
            description: 'The page number to load',
          },
          size: {
            type: 'integer',
            description: 'The size of the page',
          },
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.externalConnections.uploads.list(id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
