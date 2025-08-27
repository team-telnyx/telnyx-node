// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'sim_cards',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sim_cards',
  operationId: 'GetSimCards',
};

export const tool: Tool = {
  name: 'list_sim_cards',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all SIM cards belonging to the user that match the given filters.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/simple_sim_card'\n      }\n    },\n    meta: {\n      $ref: '#/$defs/pagination_meta'\n    }\n  },\n  $defs: {\n    simple_sim_card: {\n      type: 'object',\n      title: 'SIMCard',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifies the resource.'\n        },\n        actions_in_progress: {\n          type: 'boolean',\n          description: 'Indicate whether the SIM card has any pending (in-progress) actions.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was created.'\n        },\n        current_billing_period_consumed_data: {\n          type: 'object',\n          description: 'The SIM card consumption so far in the current billing cycle.',\n          properties: {\n            amount: {\n              type: 'string'\n            },\n            unit: {\n              type: 'string'\n            }\n          }\n        },\n        data_limit: {\n          type: 'object',\n          description: 'The SIM card individual data limit configuration.',\n          properties: {\n            amount: {\n              type: 'string'\n            },\n            unit: {\n              type: 'string',\n              enum: [                'MB',\n                'GB'\n              ]\n            }\n          }\n        },\n        iccid: {\n          type: 'string',\n          description: 'The ICCID is the identifier of the specific SIM card/chip. Each SIM is internationally identified by its integrated circuit card identifier (ICCID). ICCIDs are stored in the SIM card\\'s memory and are also engraved or printed on the SIM card body during a process called personalization.\\n'\n        },\n        imsi: {\n          type: 'string',\n          description: 'SIM cards are identified on their individual network operators by a unique International Mobile Subscriber Identity (IMSI). <br/>\\nMobile network operators connect mobile phone calls and communicate with their market SIM cards using their IMSIs. The IMSI is stored in the Subscriber  Identity Module (SIM) inside the device and is sent by the device to the appropriate network. It is used to acquire the details of the device in the Home  Location Register (HLR) or the Visitor Location Register (VLR).\\n'\n        },\n        msisdn: {\n          type: 'string',\n          description: 'Mobile Station International Subscriber Directory Number (MSISDN) is a number used to identify a mobile phone number internationally. <br/>\\nMSISDN is defined by the E.164 numbering plan. It includes a country code and a National Destination Code which identifies the subscriber\\'s operator.\\n'\n        },\n        record_type: {\n          type: 'string'\n        },\n        sim_card_group_id: {\n          type: 'string',\n          description: 'The group SIMCardGroup identification. This attribute can be <code>null</code> when it\\'s present in an associated resource.'\n        },\n        status: {\n          $ref: '#/$defs/sim_card_status'\n        },\n        tags: {\n          type: 'array',\n          description: 'Searchable tags associated with the SIM card',\n          items: {\n            type: 'string'\n          }\n        },\n        type: {\n          type: 'string',\n          description: 'The type of SIM card',\n          enum: [            'physical',\n            'esim'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date-time indicating when the resource was updated.'\n        }\n      }\n    },\n    sim_card_status: {\n      type: 'object',\n      properties: {\n        reason: {\n          type: 'string',\n          description: 'It describes why the SIM card is in the current status.'\n        },\n        value: {\n          type: 'string',\n          description: 'The current status of the SIM card. It will be one of the following: <br/>\\n<ul>\\n <li><code>registering</code> - the card is being registered</li>\\n <li><code>enabling</code> - the card is being enabled</li>\\n <li><code>enabled</code> - the card is enabled and ready for use</li>\\n <li><code>disabling</code> - the card is being disabled</li>\\n <li><code>disabled</code> - the card has been disabled and cannot be used</li>\\n <li><code>data_limit_exceeded</code> - the card has exceeded its data consumption limit</li>\\n <li><code>setting_standby</code> - the process to set the card in stand by is in progress</li>\\n <li><code>standby</code> - the card is in stand by</li>\\n</ul>\\nTransitioning between the enabled and disabled states may take a period of time.',\n          enum: [            'registering',\n            'enabling',\n            'enabled',\n            'disabling',\n            'disabled',\n            'data_limit_exceeded',\n            'setting_standby',\n            'standby'\n          ]\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'object',
        description:
          'Consolidated filter parameter for SIM cards (deepObject style). Originally: filter[tags], filter[iccid], filter[status]',
        properties: {
          iccid: {
            type: 'string',
            description: "A search string to partially match for the SIM card's ICCID.",
          },
          status: {
            type: 'array',
            description: "Filter by a SIM card's status.",
            items: {
              type: 'string',
              enum: ['enabled', 'disabled', 'standby', 'data_limit_exceeded', 'unauthorized_imei'],
            },
          },
          tags: {
            type: 'array',
            description:
              "A list of SIM card tags to filter on.<br/><br/>\n If the SIM card contains <b><i>all</i></b> of the given <code>tags</code> they will be found.<br/><br/>\nFor example, if the SIM cards have the following tags: <ul>\n  <li><code>['customers', 'staff', 'test']</code>\n  <li><code>['test']</code></li>\n  <li><code>['customers']</code></li>\n</ul>\nSearching for <code>['customers', 'test']</code> returns only the first because it's the only one with both tags.<br/> Searching for <code>test</code> returns the first two SIMs, because both of them have such tag.<br/> Searching for <code>customers</code> returns the first and last SIMs.<br/>\n",
            items: {
              type: 'string',
            },
          },
        },
      },
      'filter[sim_card_group_id]': {
        type: 'string',
        description: 'A valid SIM card group ID.',
      },
      include_sim_card_group: {
        type: 'boolean',
        description: 'It includes the associated SIM card group object in the response when present.',
      },
      page: {
        type: 'object',
        description:
          'Consolidated pagination parameter (deepObject style). Originally: page[number], page[size]',
        properties: {
          number: {
            type: 'integer',
            description: 'The page number to load.',
          },
          size: {
            type: 'integer',
            description: 'The size of the page.',
          },
        },
      },
      sort: {
        type: 'string',
        description:
          'Sorts SIM cards by the given field. Defaults to ascending order unless field is prefixed with a minus sign.',
        enum: ['current_billing_period_consumed_data.amount'],
      },
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
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.simCards.list(body)));
};

export default { metadata, tool, handler };
