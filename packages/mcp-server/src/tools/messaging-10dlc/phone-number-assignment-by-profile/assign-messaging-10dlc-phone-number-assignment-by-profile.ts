// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messaging_10dlc.phone_number_assignment_by_profile',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/10dlc/phoneNumberAssignmentByProfile',
  operationId: 'PostAssignMessagingProfileToCampaign',
};

export const tool: Tool = {
  name: 'assign_messaging_10dlc_phone_number_assignment_by_profile',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to link all phone numbers associated with a Messaging Profile to a campaign. **Please note:** if you want to assign phone numbers to a campaign that you did not create with Telnyx 10DLC services, this endpoint allows that provided that you've shared the campaign with Telnyx. In this case, only provide the parameter, `tcrCampaignId`, and not `campaignId`. In all other cases (where the campaign you're assigning was created with Telnyx 10DLC services), only provide `campaignId`, not `tcrCampaignId`.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/phone_number_assignment_by_profile_assign_response',\n  $defs: {\n    phone_number_assignment_by_profile_assign_response: {\n      type: 'object',\n      title: 'AssignProfileToCampaignResponse',\n      properties: {\n        messagingProfileId: {\n          type: 'string',\n          title: 'Messagingprofileid',\n          description: 'The ID of the messaging profile that you want to link to the specified campaign.'\n        },\n        taskId: {\n          type: 'string',\n          title: 'Taskid',\n          description: 'The ID of the task associated with assigning a messaging profile to a campaign.'\n        },\n        campaignId: {\n          type: 'string',\n          title: 'Campaignid',\n          description: 'The ID of the campaign you want to link to the specified messaging profile. If you supply this ID in the request, do not also include a tcrCampaignId.'\n        },\n        tcrCampaignId: {\n          type: 'string',\n          title: 'Tcrcampaignid',\n          description: 'The TCR ID of the shared campaign you want to link to the specified messaging profile (for campaigns not created using Telnyx 10DLC services only). If you supply this ID in the request, do not also include a campaignId.'\n        }\n      },\n      required: [        'messagingProfileId',\n        'taskId'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      messagingProfileId: {
        type: 'string',
        title: 'Messagingprofileid',
        description: 'The ID of the messaging profile that you want to link to the specified campaign.',
      },
      campaignId: {
        type: 'string',
        title: 'Campaignid',
        description:
          'The ID of the campaign you want to link to the specified messaging profile. If you supply this ID in the request, do not also include a tcrCampaignId.',
      },
      tcrCampaignId: {
        type: 'string',
        title: 'Tcrcampaignid',
        description:
          'The TCR ID of the shared campaign you want to link to the specified messaging profile (for campaigns not created using Telnyx 10DLC services only). If you supply this ID in the request, do not also include a campaignId.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['messagingProfileId'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.messaging10dlc.phoneNumberAssignmentByProfile.assign(body)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
