// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'calls.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/calls/{call_control_id}/actions/suppression_start',
  operationId: 'noiseSuppressionStart',
};

export const tool: Tool = {
  name: 'start_noise_suppression_calls_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nNoise Suppression Start (BETA)\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_start_noise_suppression_response',\n  $defs: {\n    action_start_noise_suppression_response: {\n      type: 'object',\n      title: 'Call Control Command Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/call_control_command_result'\n        }\n      }\n    },\n    call_control_command_result: {\n      type: 'object',\n      title: 'Call Control Command Result',\n      properties: {\n        result: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      call_control_id: {
        type: 'string',
      },
      client_state: {
        type: 'string',
        description:
          'Use this field to add state to every subsequent webhook. It must be a valid Base-64 encoded string.',
      },
      command_id: {
        type: 'string',
        description:
          'Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.',
      },
      direction: {
        type: 'string',
        title: 'Noise Suppression Direction',
        description: 'The direction of the audio stream to be noise suppressed.',
        enum: ['inbound', 'outbound', 'both'],
      },
      noise_suppression_engine: {
        type: 'string',
        title: 'Noise Suppression Engine',
        description:
          'The engine to use for noise suppression.\nFor backward compatibility, engines A and B are also supported, but are deprecated:\n A - Denoiser\n B - DeepFilterNet',
        enum: ['Denoiser', 'DeepFilterNet'],
      },
      noise_suppression_engine_config: {
        type: 'object',
        title: 'Noise Suppression Engine Configuration',
        description: 'Configuration parameters for noise suppression engines.',
        properties: {
          attenuation_limit: {
            type: 'integer',
            description:
              'The attenuation limit for noise suppression (0-100). Only applicable for DeepFilterNet.',
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
    required: ['call_control_id'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { call_control_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.calls.actions.startNoiseSuppression(call_control_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
