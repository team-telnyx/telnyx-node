// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'custom_storage_credentials',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/custom_storage_credentials/{connection_id}',
  operationId: 'UpdateCustomStorageCredentials',
};

export const tool: Tool = {
  name: 'update_custom_storage_credentials',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a stored custom credentials configuration.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'CredentialsResponse',\n  properties: {\n    connection_id: {\n      type: 'string',\n      description: 'Uniquely identifies a Telnyx application (Call Control, TeXML) or Sip connection resource.'\n    },\n    data: {\n      $ref: '#/$defs/custom_storage_configuration'\n    },\n    record_type: {\n      type: 'string',\n      description: 'Identifies record type.',\n      enum: [        'custom_storage_credentials'\n      ]\n    }\n  },\n  required: [    'connection_id',\n    'data',\n    'record_type'\n  ],\n  $defs: {\n    custom_storage_configuration: {\n      type: 'object',\n      title: 'Custom Storage Configuration',\n      properties: {\n        backend: {\n          type: 'string',\n          enum: [            'gcs',\n            's3',\n            'azure'\n          ]\n        },\n        configuration: {\n          anyOf: [            {\n              $ref: '#/$defs/gcs_configuration_data'\n            },\n            {\n              $ref: '#/$defs/s3_configuration_data'\n            },\n            {\n              $ref: '#/$defs/azure_configuration_data'\n            }\n          ]\n        }\n      },\n      required: [        'backend',\n        'configuration'\n      ]\n    },\n    gcs_configuration_data: {\n      type: 'object',\n      title: 'Google Cloud Storage Configuration Data',\n      properties: {\n        bucket: {\n          type: 'string',\n          description: 'Name of the bucket to be used to store recording files.'\n        },\n        credentials: {\n          type: 'string',\n          description: 'Opaque credential token used to authenticate and authorize with storage provider.'\n        }\n      }\n    },\n    s3_configuration_data: {\n      type: 'object',\n      title: 'AWS S3 Storage Configuration Data',\n      properties: {\n        aws_access_key_id: {\n          type: 'string',\n          description: 'AWS credentials access key id.'\n        },\n        aws_secret_access_key: {\n          type: 'string',\n          description: 'AWS secret access key.'\n        },\n        bucket: {\n          type: 'string',\n          description: 'Name of the bucket to be used to store recording files.'\n        },\n        region: {\n          type: 'string',\n          description: 'Region where the bucket is located.'\n        }\n      }\n    },\n    azure_configuration_data: {\n      type: 'object',\n      title: 'Azure Blob Storage Configuration Data',\n      properties: {\n        account_key: {\n          type: 'string',\n          description: 'Azure Blob Storage account key.'\n        },\n        account_name: {\n          type: 'string',\n          description: 'Azure Blob Storage account name.'\n        },\n        bucket: {\n          type: 'string',\n          description: 'Name of the bucket to be used to store recording files.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      connection_id: {
        type: 'string',
      },
      backend: {
        type: 'string',
        enum: ['gcs', 's3', 'azure'],
      },
      configuration: {
        anyOf: [
          {
            $ref: '#/$defs/gcs_configuration_data',
          },
          {
            $ref: '#/$defs/s3_configuration_data',
          },
          {
            $ref: '#/$defs/azure_configuration_data',
          },
        ],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['connection_id', 'backend', 'configuration'],
    $defs: {
      gcs_configuration_data: {
        type: 'object',
        title: 'Google Cloud Storage Configuration Data',
        properties: {
          bucket: {
            type: 'string',
            description: 'Name of the bucket to be used to store recording files.',
          },
          credentials: {
            type: 'string',
            description: 'Opaque credential token used to authenticate and authorize with storage provider.',
          },
        },
      },
      s3_configuration_data: {
        type: 'object',
        title: 'AWS S3 Storage Configuration Data',
        properties: {
          aws_access_key_id: {
            type: 'string',
            description: 'AWS credentials access key id.',
          },
          aws_secret_access_key: {
            type: 'string',
            description: 'AWS secret access key.',
          },
          bucket: {
            type: 'string',
            description: 'Name of the bucket to be used to store recording files.',
          },
          region: {
            type: 'string',
            description: 'Region where the bucket is located.',
          },
        },
      },
      azure_configuration_data: {
        type: 'object',
        title: 'Azure Blob Storage Configuration Data',
        properties: {
          account_key: {
            type: 'string',
            description: 'Azure Blob Storage account key.',
          },
          account_name: {
            type: 'string',
            description: 'Azure Blob Storage account name.',
          },
          bucket: {
            type: 'string',
            description: 'Name of the bucket to be used to store recording files.',
          },
        },
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { connection_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.customStorageCredentials.update(connection_id, body)),
  );
};

export default { metadata, tool, handler };
