// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'actions.register',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/actions/register/sim_cards',
  operationId: 'RegisterSimCards',
};

export const tool: Tool = {
  name: 'create_actions_register',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRegister the SIM cards associated with the provided registration codes to the current user's account.<br/><br/>\nIf <code>sim_card_group_id</code> is provided, the SIM cards will be associated with that group. Otherwise, the default group for the current user will be used.<br/><br/>\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/register_create_response',\n  $defs: {\n    register_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          description: 'Successfully registered SIM cards.',\n          items: {\n            $ref: '#/$defs/simple_sim_card'\n          }\n        },\n        errors: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              code: {\n                type: 'string'\n              },\n              title: {\n                type: 'string'\n              },\n              detail: {\n                type: 'string'\n              },\n              meta: {\n                type: 'object',\n                additionalProperties: true\n              },\n              source: {\n                type: 'object',\n                properties: {\n                  parameter: {\n                    type: 'string',\n                    description: 'Indicates which query parameter caused the error.'\n                  },\n                  pointer: {\n                    type: 'string',\n                    description: 'JSON pointer (RFC6901) to the offending entity.'\n                  }\n                }\n              }\n            },\n            required: [              'code',\n              'title'\n            ]\n          }\n        }\n      }\n    },\n    simple_sim_card: {\n      type: 'object',\n      title: 'SIMCard',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        actions_in_progress: {\n          type: 'boolean',\n          description: 'Indicate whether the SIM card has any pending (in-progress) actions.'\n        },\n        authorized_imeis: {\n          type: 'array',\n          description: 'List of IMEIs authorized to use a given SIM card.',\n          items: {\n            type: 'string'\n          }\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        current_billing_period_consumed_data: {\n          type: 'object',\n          description: 'The SIM card consumption so far in the current billing cycle.',\n          properties: {\n            amount: {\n              type: 'string'\n            },\n            unit: {\n              type: 'string'\n            }\n          }\n        },\n        data_limit: {\n          type: 'object',\n          description: 'The SIM card individual data limit configuration.',\n          properties: {\n            amount: {\n              type: 'string'\n            },\n            unit: {\n              type: 'string',\n              enum: [                'MB',\n                'GB'\n              ]\n            }\n          }\n        },\n        eid: {\n          type: 'string',\n          description: 'The Embedded Identity Document (eID) for eSIM cards.'\n        },\n        esim_installation_status: {\n          type: 'string',\n          description: 'The installation status of the eSIM. Only applicable for eSIM cards.',\n          enum: [            'released',\n            'disabled'\n          ]\n        },\n        iccid: {\n          type: 'string',\n          description: 'The ICCID is the identifier of the specific SIM card/chip. Each SIM is internationally identified by its integrated circuit card identifier (ICCID). ICCIDs are stored in the SIM card\\'s memory and are also engraved or printed on the SIM card body during a process called personalization.\\n'\n        },\n        imsi: {\n          type: 'string',\n          description: 'SIM cards are identified on their individual network operators by a unique International Mobile Subscriber Identity (IMSI). <br/>\\nMobile network operators connect mobile phone calls and communicate with their market SIM cards using their IMSIs. The IMSI is stored in the Subscriber  Identity Module (SIM) inside the device and is sent by the device to the appropriate network. It is used to acquire the details of the device in the Home  Location Register (HLR) or the Visitor Location Register (VLR).\\n'\n        },\n        msisdn: {\n          type: 'string',\n          description: 'Mobile Station International Subscriber Directory Number (MSISDN) is a number used to identify a mobile phone number internationally. <br/>\\nMSISDN is defined by the E.164 numbering plan. It includes a country code and a National Destination Code which identifies the subscriber\\'s operator.\\n'\n        },\n        record_type: {\n          type: 'string'\n        },\n        resources_with_in_progress_actions: {\n          type: 'array',\n          description: 'List of resources with actions in progress.',\n          items: {\n            type: 'object',\n            additionalProperties: true\n          }\n        },\n        sim_card_group_id: {\n          type: 'string',\n          description: 'The group SIMCardGroup identification. This attribute can be <code>null</code> when it\\'s present in an associated resource.'\n        },\n        status: {\n          $ref: '#/$defs/sim_card_status'\n        },\n        tags: {\n          type: 'array',\n          description: 'Searchable tags associated with the SIM card',\n          items: {\n            type: 'string'\n          }\n        },\n        type: {\n          type: 'string',\n          description: 'The type of SIM card',\n          enum: [            'physical',\n            'esim'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        },\n        version: {\n          type: 'string',\n          description: 'The version of the SIM card.'\n        }\n      }\n    },\n    sim_card_status: {\n      type: 'object',\n      properties: {\n        reason: {\n          type: 'string',\n          description: 'It describes why the SIM card is in the current status.'\n        },\n        value: {\n          type: 'string',\n          description: 'The current status of the SIM card. It will be one of the following: <br/>\\n<ul>\\n <li><code>registering</code> - the card is being registered</li>\\n <li><code>enabling</code> - the card is being enabled</li>\\n <li><code>enabled</code> - the card is enabled and ready for use</li>\\n <li><code>disabling</code> - the card is being disabled</li>\\n <li><code>disabled</code> - the card has been disabled and cannot be used</li>\\n <li><code>data_limit_exceeded</code> - the card has exceeded its data consumption limit</li>\\n <li><code>setting_standby</code> - the process to set the card in stand by is in progress</li>\\n <li><code>standby</code> - the card is in stand by</li>\\n</ul>\\nTransitioning between the enabled and disabled states may take a period of time.',\n          enum: [            'registering',\n            'enabling',\n            'enabled',\n            'disabling',\n            'disabled',\n            'data_limit_exceeded',\n            'setting_standby',\n            'standby'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      registration_codes: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      sim_card_group_id: {
        type: 'string',
        description:
          "The group SIMCardGroup identification. This attribute can be <code>null</code> when it's present in an associated resource.",
      },
      status: {
        type: 'string',
        description: 'Status on which the SIM card will be set after being successful registered.',
        enum: ['enabled', 'disabled', 'standby'],
      },
      tags: {
        type: 'array',
        description: 'Searchable tags associated with the SIM card',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['registration_codes'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.actions.register.create(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
