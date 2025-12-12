// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'storage.migrations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/storage/migrations',
  operationId: 'ListMigrations',
};

export const tool: Tool = {
  name: 'list_storage_migrations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all Migrations\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/migration_list_response',\n  $defs: {\n    migration_list_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/migration_params'\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta_simple'\n        }\n      }\n    },\n    migration_params: {\n      type: 'object',\n      properties: {\n        source_id: {\n          type: 'string',\n          description: 'ID of the Migration Source from which to migrate data.'\n        },\n        target_bucket_name: {\n          type: 'string',\n          description: 'Bucket name to migrate the data into. Will default to the same name as the `source_bucket_name`.'\n        },\n        target_region: {\n          type: 'string',\n          description: 'Telnyx Cloud Storage region to migrate the data to.'\n        },\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the data migration.'\n        },\n        bytes_migrated: {\n          type: 'integer',\n          description: 'Total amount of data that has been succesfully migrated.'\n        },\n        bytes_to_migrate: {\n          type: 'integer',\n          description: 'Total amount of data found in source bucket to migrate.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Time when data migration was created',\n          format: 'date-time'\n        },\n        eta: {\n          type: 'string',\n          description: 'Estimated time the migration will complete.',\n          format: 'date-time'\n        },\n        last_copy: {\n          type: 'string',\n          description: 'Time when data migration was last copied from the source.',\n          format: 'date-time'\n        },\n        refresh: {\n          type: 'boolean',\n          description: 'If true, will continue to poll the source bucket to ensure new data is continually migrated over.'\n        },\n        speed: {\n          type: 'integer',\n          description: 'Current speed of the migration.'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the migration.',\n          enum: [            'pending',\n            'checking',\n            'migrating',\n            'complete',\n            'error',\n            'stopped'\n          ]\n        }\n      },\n      required: [        'source_id',\n        'target_bucket_name',\n        'target_region'\n      ]\n    },\n    pagination_meta_simple: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      },\n      required: [        'page_number',\n        'total_pages'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.storage.migrations.list()));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
