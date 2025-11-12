// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'audit_events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/audit_events',
  operationId: 'ListAuditLogs',
};

export const tool: Tool = {
  name: 'list_audit_events',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of audit log entries. Audit logs are a best-effort, eventually consistent record of significant account-related changes.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/audit_event_list_response',\n  $defs: {\n    audit_event_list_response: {\n      type: 'object',\n      title: 'Audit Log List',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'Audit Log Entry',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for the audit log entry.'\n              },\n              alternate_resource_id: {\n                type: 'string',\n                description: 'An alternate identifier for a resource which may be considered unique enough to identify the resource but is not the primary identifier for the resource. For example, this field could be used to store the phone number value for a phone number when the primary database identifier is a separate distinct value.'\n              },\n              change_made_by: {\n                type: 'string',\n                description: 'Indicates if the change was made by Telnyx on your behalf, the organization owner, a member of your organization, or in the case of managed accounts, the account manager.',\n                enum: [                  'telnyx',\n                  'account_manager',\n                  'account_owner',\n                  'organization_member'\n                ]\n              },\n              change_type: {\n                type: 'string',\n                description: 'The type of change that occurred.'\n              },\n              changes: {\n                type: 'array',\n                description: 'Details of the changes made to the resource.',\n                items: {\n                  type: 'object',\n                  title: 'Audit Event Changes',\n                  description: 'Details of the changes made to a resource.',\n                  properties: {\n                    field: {\n                      type: 'string',\n                      description: 'The name of the field that was changed. May use the dot notation to indicate nested fields.'\n                    },\n                    from: {\n                      anyOf: [                        {\n                          type: 'string'\n                        },\n                        {\n                          type: 'number'\n                        },\n                        {\n                          type: 'boolean'\n                        },\n                        {\n                          type: 'object',\n                          additionalProperties: true\n                        },\n                        {\n                          type: 'array',\n                          items: {\n                            type: 'object',\n                            additionalProperties: true\n                          }\n                        }\n                      ],\n                      description: 'The previous value of the field. Can be any JSON type.'\n                    },\n                    to: {\n                      anyOf: [                        {\n                          type: 'string'\n                        },\n                        {\n                          type: 'number'\n                        },\n                        {\n                          type: 'boolean'\n                        },\n                        {\n                          type: 'object',\n                          additionalProperties: true\n                        },\n                        {\n                          type: 'array',\n                          items: {\n                            type: 'object',\n                            additionalProperties: true\n                          }\n                        }\n                      ],\n                      description: 'The new value of the field. Can be any JSON type.'\n                    }\n                  }\n                }\n              },\n              created_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date indicating when the change occurred.',\n                format: 'date-time'\n              },\n              organization_id: {\n                type: 'string',\n                description: 'Unique identifier for the organization that owns the resource.'\n              },\n              record_type: {\n                type: 'string',\n                description: 'The type of the resource being audited.'\n              },\n              resource_id: {\n                type: 'string',\n                description: 'Unique identifier for the resource that was changed.'\n              },\n              user_id: {\n                type: 'string',\n                description: 'Unique identifier for the user who made the change.'\n              }\n            }\n          }\n        },\n        meta: {\n          type: 'object',\n          title: 'Pagination Meta',\n          properties: {\n            page_number: {\n              type: 'integer'\n            },\n            page_size: {\n              type: 'integer'\n            },\n            total_pages: {\n              type: 'integer'\n            },\n            total_results: {\n              type: 'integer'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter (deepObject style). Originally: filter[created_before], filter[created_after]',
        properties: {
          created_after: {
            type: 'string',
            description: 'Filter for audit events created after a specific date.',
            format: 'date-time',
          },
          created_before: {
            type: 'string',
            description: 'Filter for audit events created before a specific date.',
            format: 'date-time',
          },
        },
      },
      page: {
        type: 'object',
        description: 'Consolidated page parameter (deepObject style). Originally: page[number], page[size]',
        properties: {
          number: {
            type: 'integer',
            description: 'Page number to load.',
          },
          size: {
            type: 'integer',
            description: 'Number of items per page.',
          },
        },
      },
      sort: {
        type: 'string',
        description: 'Set the order of the results by the creation date.',
        enum: ['asc', 'desc'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.auditEvents.list(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
