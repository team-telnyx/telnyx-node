// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'storage.migration_sources',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/storage/migration_sources',
  operationId: 'CreateMigrationSource',
};

export const tool: Tool = {
  name: 'create_storage_migration_sources',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a source from which data can be migrated from.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/migration_source_params'\n    }\n  },\n  $defs: {\n    migration_source_params: {\n      type: 'object',\n      properties: {\n        bucket_name: {\n          type: 'string',\n          description: 'Bucket name to migrate the data from.'\n        },\n        provider: {\n          type: 'string',\n          description: 'Cloud provider from which to migrate data. Use \\'telnyx\\' if you want to migrate data from one Telnyx bucket to another.',\n          enum: [            'aws',\n            'telnyx'\n          ]\n        },\n        provider_auth: {\n          type: 'object',\n          properties: {\n            access_key: {\n              type: 'string',\n              description: 'AWS Access Key. For Telnyx-to-Telnyx migrations, use your Telnyx API key here.'\n            },\n            secret_access_key: {\n              type: 'string',\n              description: 'AWS Secret Access Key. For Telnyx-to-Telnyx migrations, use your Telnyx API key here as well.'\n            }\n          }\n        },\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the data migration source.'\n        },\n        source_region: {\n          type: 'string',\n          description: 'For intra-Telnyx buckets migration, specify the source bucket region in this field.'\n        }\n      },\n      required: [        'bucket_name',\n        'provider',\n        'provider_auth'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      bucket_name: {
        type: 'string',
        description: 'Bucket name to migrate the data from.',
      },
      provider: {
        type: 'string',
        description:
          "Cloud provider from which to migrate data. Use 'telnyx' if you want to migrate data from one Telnyx bucket to another.",
        enum: ['aws', 'telnyx'],
      },
      provider_auth: {
        type: 'object',
        properties: {
          access_key: {
            type: 'string',
            description: 'AWS Access Key. For Telnyx-to-Telnyx migrations, use your Telnyx API key here.',
          },
          secret_access_key: {
            type: 'string',
            description:
              'AWS Secret Access Key. For Telnyx-to-Telnyx migrations, use your Telnyx API key here as well.',
          },
        },
      },
      source_region: {
        type: 'string',
        description: 'For intra-Telnyx buckets migration, specify the source bucket region in this field.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['bucket_name', 'provider', 'provider_auth'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.storage.migrationSources.create(body)),
  );
};

export default { metadata, tool, handler };
