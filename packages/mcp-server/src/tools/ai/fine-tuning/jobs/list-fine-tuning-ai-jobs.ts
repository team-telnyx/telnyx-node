// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'ai.fine_tuning.jobs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ai/fine_tuning/jobs',
  operationId: 'get_finetuningjob_public_finetuning_get',
};

export const tool: Tool = {
  name: 'list_fine_tuning_ai_jobs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of all fine tuning jobs created by the user.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/job_list_response',\n  $defs: {\n    job_list_response: {\n      type: 'object',\n      title: 'FineTuningJobListData',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/fine_tuning_job'\n          }\n        }\n      },\n      required: [        'data'\n      ]\n    },\n    fine_tuning_job: {\n      type: 'object',\n      title: 'FineTuningJob',\n      description: 'The `fine_tuning.job` object represents a fine-tuning job that has been created through the API.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The name of the fine-tuned model that is being created.'\n        },\n        created_at: {\n          type: 'integer',\n          description: 'The Unix timestamp (in seconds) for when the fine-tuning job was created.'\n        },\n        finished_at: {\n          type: 'integer',\n          description: 'The Unix timestamp (in seconds) for when the fine-tuning job was finished. The value will be null if the fine-tuning job is still running.'\n        },\n        hyperparameters: {\n          type: 'object',\n          description: 'The hyperparameters used for the fine-tuning job.',\n          properties: {\n            n_epochs: {\n              type: 'integer',\n              description: 'The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset.'\n            }\n          },\n          required: [            'n_epochs'\n          ]\n        },\n        model: {\n          type: 'string',\n          description: 'The base model that is being fine-tuned.'\n        },\n        organization_id: {\n          type: 'string',\n          description: 'The organization that owns the fine-tuning job.'\n        },\n        status: {\n          type: 'string',\n          description: 'The current status of the fine-tuning job.',\n          enum: [            'queued',\n            'running',\n            'succeeded',\n            'failed',\n            'cancelled'\n          ]\n        },\n        trained_tokens: {\n          type: 'integer',\n          description: 'The total number of billable tokens processed by this fine-tuning job. The value will be null if the fine-tuning job is still running.'\n        },\n        training_file: {\n          type: 'string',\n          description: 'The storage bucket or object used for training.'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'finished_at',\n        'hyperparameters',\n        'model',\n        'organization_id',\n        'status',\n        'trained_tokens',\n        'training_file'\n      ]\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.ai.fineTuning.jobs.list()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
