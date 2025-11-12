// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'conferences.actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/conferences/{id}/actions/record_pause',
  operationId: 'PauseConferenceRecording',
};

export const tool: Tool = {
  name: 'record_pause_conferences_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPause conference recording.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_record_pause_response',\n  $defs: {\n    action_record_pause_response: {\n      type: 'object',\n      title: 'Conference Command Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/conference_command_result'\n        }\n      }\n    },\n    conference_command_result: {\n      type: 'object',\n      title: 'Conference Command Result',\n      properties: {\n        result: {\n          type: 'string'\n        }\n      },\n      required: [        'result'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      command_id: {
        type: 'string',
        description:
          'Use this field to avoid duplicate commands. Telnyx will ignore any command with the same `command_id` for the same `call_control_id`.',
      },
      recording_id: {
        type: 'string',
        description: 'Use this field to pause specific recording.',
      },
      region: {
        type: 'string',
        description:
          "Region where the conference data is located. Defaults to the region defined in user's data locality settings (Europe or US).",
        enum: ['Australia', 'Europe', 'Middle East', 'US'],
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
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.conferences.actions.recordPause(id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
