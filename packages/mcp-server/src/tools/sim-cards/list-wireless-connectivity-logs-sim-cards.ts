// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'sim_cards',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sim_cards/{id}/wireless_connectivity_logs',
  operationId: 'GetWirelessConnectivityLogs',
};

export const tool: Tool = {
  name: 'list_wireless_connectivity_logs_sim_cards',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis API allows listing a paginated collection of Wireless Connectivity Logs associated with a SIM Card, for troubleshooting purposes.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sim_card_list_wireless_connectivity_logs_response',\n  $defs: {\n    sim_card_list_wireless_connectivity_logs_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'array',\n          items: {\n            type: 'object',\n            title: 'WirelessConnectivityLog',\n            description: 'This object represents a wireless connectivity session log that happened through a SIM card. It aids in finding out potential problems when the SIM is not able to attach properly.',\n            properties: {\n              id: {\n                type: 'integer',\n                description: 'Uniquely identifies the session.'\n              },\n              apn: {\n                type: 'string',\n                description: 'The Access Point Name (APN) identifies the packet data network that a mobile data user wants to communicate with.'\n              },\n              cell_id: {\n                type: 'string',\n                description: 'The cell ID to which the SIM connected.'\n              },\n              created_at: {\n                type: 'string',\n                description: 'ISO 8601 formatted date-time indicating when the record was created.'\n              },\n              imei: {\n                type: 'string',\n                description: 'The International Mobile Equipment Identity (or IMEI) is a number, usually unique, that identifies the device currently being used connect to the network.'\n              },\n              imsi: {\n                type: 'string',\n                description: 'SIM cards are identified on their individual network operators by a unique International Mobile Subscriber Identity (IMSI). <br/>\\nMobile network operators connect mobile phone calls and communicate with their market SIM cards using their IMSIs. The IMSI is stored in the Subscriber  Identity Module (SIM) inside the device and is sent by the device to the appropriate network. It is used to acquire the details of the device in the Home  Location Register (HLR) or the Visitor Location Register (VLR).\\n'\n              },\n              ipv4: {\n                type: 'string',\n                description: 'The SIM\\'s address in the currently connected network. This IPv4 address is usually obtained dynamically, so it may vary according to the location or new connections.\\n'\n              },\n              ipv6: {\n                type: 'string',\n                description: 'The SIM\\'s address in the currently connected network. This IPv6 address is usually obtained dynamically, so it may vary according to the location or new connections.\\n'\n              },\n              last_seen: {\n                type: 'string',\n                description: 'ISO 8601 formatted date-time indicating when the last heartbeat to the device was successfully recorded.'\n              },\n              log_type: {\n                type: 'string',\n                description: 'The type of the session, \\'registration\\' being the initial authentication session and \\'data\\' the actual data transfer sessions.',\n                enum: [                  'registration',\n                  'data'\n                ]\n              },\n              mobile_country_code: {\n                type: 'string',\n                description: 'It\\'s a three decimal digit that identifies a country.<br/><br/>\\nThis code is commonly seen joined with a Mobile Network Code (MNC) in a tuple that allows identifying a carrier known as PLMN (Public Land Mobile Network) code.'\n              },\n              mobile_network_code: {\n                type: 'string',\n                description: 'It\\'s a two to three decimal digits that identify a network.<br/><br/>\\n This code is commonly seen joined with a Mobile Country Code (MCC) in a tuple that allows identifying a carrier known as PLMN (Public Land Mobile Network) code.'\n              },\n              radio_access_technology: {\n                type: 'string',\n                description: 'The radio technology the SIM card used during the session.'\n              },\n              record_type: {\n                type: 'string'\n              },\n              sim_card_id: {\n                type: 'string',\n                description: 'The identification UUID of the related SIM card resource.'\n              },\n              start_time: {\n                type: 'string',\n                description: 'ISO 8601 formatted date-time indicating when the session started.'\n              },\n              state: {\n                type: 'string',\n                description: 'The state of the SIM card after when the session happened.'\n              },\n              stop_time: {\n                type: 'string',\n                description: 'ISO 8601 formatted date-time indicating when the session ended.'\n              }\n            }\n          }\n        },\n        meta: {\n          $ref: '#/$defs/pagination_meta'\n        }\n      }\n    },\n    pagination_meta: {\n      type: 'object',\n      properties: {\n        page_number: {\n          type: 'integer'\n        },\n        page_size: {\n          type: 'integer'\n        },\n        total_pages: {\n          type: 'integer'\n        },\n        total_results: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      'page[number]': {
        type: 'integer',
        description: 'The page number to load.',
      },
      'page[size]': {
        type: 'integer',
        description: 'The size of the page.',
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
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.simCards.listWirelessConnectivityLogs(id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
