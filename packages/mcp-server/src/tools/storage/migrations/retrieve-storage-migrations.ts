// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'storage.migrations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/storage/migrations/{id}',
  operationId: 'GetMigration',
};

export const tool: Tool = {
  name: 'retrieve_storage_migrations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a Migration\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/migration_retrieve_response',\n  $defs: {\n    migration_retrieve_response: {\n      type: 'object',\n      properties: {\n        data: {\n          $ref: '#/$defs/migration_params'\n        }\n      }\n    },\n    migration_params: {\n      type: 'object',\n      properties: {\n        source_id: {\n          type: 'string',\n          description: 'ID of the Migration Source from which to migrate data.'\n        },\n        target_bucket_name: {\n          type: 'string',\n          description: 'Bucket name to migrate the data into. Will default to the same name as the `source_bucket_name`.'\n        },\n        target_region: {\n          type: 'string',\n          description: 'Telnyx Cloud Storage region to migrate the data to.'\n        },\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the data migration.'\n        },\n        bytes_migrated: {\n          type: 'integer',\n          description: 'Total amount of data that has been succesfully migrated.'\n        },\n        bytes_to_migrate: {\n          type: 'integer',\n          description: 'Total amount of data found in source bucket to migrate.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Time when data migration was created',\n          format: 'date-time'\n        },\n        eta: {\n          type: 'string',\n          description: 'Estimated time the migration will complete.',\n          format: 'date-time'\n        },\n        last_copy: {\n          type: 'string',\n          description: 'Time when data migration was last copied from the source.',\n          format: 'date-time'\n        },\n        refresh: {\n          type: 'boolean',\n          description: 'If true, will continue to poll the source bucket to ensure new data is continually migrated over.'\n        },\n        speed: {\n          type: 'integer',\n          description: 'Current speed of the migration.'\n        },\n        status: {\n          type: 'string',\n          description: 'Status of the migration.',\n          enum: [            'pending',\n            'checking',\n            'migrating',\n            'complete',\n            'error',\n            'stopped'\n          ]\n        }\n      },\n      required: [        'source_id',\n        'target_bucket_name',\n        'target_region'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.storage.migrations.retrieve(id)));
};

export default { metadata, tool, handler };
