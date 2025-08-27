// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'ai.assistants.canary_deploys',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/ai/assistants/{assistant_id}/canary-deploys',
  operationId: 'update_canary_deploy_assistants__assistant_id__canary_deploys_put',
};

export const tool: Tool = {
  name: 'update_assistants_ai_canary_deploys',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEndpoint to update a canary deploy configuration for an assistant.\n\nUpdates the existing canary deploy configuration with new version IDs and percentages.\n  All old versions and percentages are replaces by new ones from this request.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/canary_deploy_response',\n  $defs: {\n    canary_deploy_response: {\n      type: 'object',\n      title: 'CanaryDeployResponse',\n      description: 'Response model for canary deploy operations.',\n      properties: {\n        assistant_id: {\n          type: 'string',\n          title: 'Assistant Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        },\n        versions: {\n          type: 'array',\n          title: 'Versions',\n          items: {\n            $ref: '#/$defs/version_config'\n          }\n        }\n      },\n      required: [        'assistant_id',\n        'created_at',\n        'updated_at',\n        'versions'\n      ]\n    },\n    version_config: {\n      type: 'object',\n      title: 'VersionConfig',\n      description: 'Configuration for a single version in canary deploy.',\n      properties: {\n        percentage: {\n          type: 'number',\n          title: 'Percentage',\n          description: 'Percentage of traffic for this version [1-99]'\n        },\n        version_id: {\n          type: 'string',\n          title: 'Version Id',\n          description: 'Version ID string that references assistant_versions.version_id'\n        }\n      },\n      required: [        'percentage',\n        'version_id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      assistant_id: {
        type: 'string',
        title: 'Assistant Id',
      },
      versions: {
        type: 'array',
        title: 'Versions',
        description: 'List of version configurations',
        items: {
          $ref: '#/$defs/version_config',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['assistant_id', 'versions'],
    $defs: {
      version_config: {
        type: 'object',
        title: 'VersionConfig',
        description: 'Configuration for a single version in canary deploy.',
        properties: {
          percentage: {
            type: 'number',
            title: 'Percentage',
            description: 'Percentage of traffic for this version [1-99]',
          },
          version_id: {
            type: 'string',
            title: 'Version Id',
            description: 'Version ID string that references assistant_versions.version_id',
          },
        },
        required: ['percentage', 'version_id'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { assistant_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.ai.assistants.canaryDeploys.update(assistant_id, body)),
  );
};

export default { metadata, tool, handler };
