// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'call_control_applications',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/call_control_applications/{id}',
  operationId: 'DeleteCallControlApplication',
};

export const tool: Tool = {
  name: 'delete_call_control_applications',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletes a call control application.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/call_control_application_delete_response',\n  $defs: {\n    call_control_application_delete_response: {\n      type: 'object',\n      title: 'Call Control Application Response',\n      properties: {\n        data: {\n          $ref: '#/$defs/call_control_application'\n        }\n      }\n    },\n    call_control_application: {\n      type: 'object',\n      title: 'Call Control Application',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        active: {\n          type: 'boolean',\n          description: 'Specifies whether the connection can be used.'\n        },\n        anchorsite_override: {\n          type: 'string',\n          description: '<code>Latency</code> directs Telnyx to route media through the site with the lowest round-trip time to the user\\'s connection. Telnyx calculates this time using ICMP ping messages. This can be disabled by specifying a site to handle all media.',\n          enum: [            'Latency',\n            'Chicago, IL',\n            'Ashburn, VA',\n            'San Jose, CA',\n            'London, UK',\n            'Chennai, IN',\n            'Amsterdam, Netherlands',\n            'Toronto, Canada',\n            'Sydney, Australia'\n          ]\n        },\n        application_name: {\n          type: 'string',\n          description: 'A user-assigned name to help manage the application.'\n        },\n        call_cost_in_webhooks: {\n          type: 'boolean',\n          description: 'Specifies if call cost webhooks should be sent for this Call Control Application.'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the resource was created'\n        },\n        dtmf_type: {\n          type: 'string',\n          description: 'Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF digits sent to Telnyx will be accepted in all formats.',\n          enum: [            'RFC 2833',\n            'Inband',\n            'SIP INFO'\n          ]\n        },\n        first_command_timeout: {\n          type: 'boolean',\n          description: 'Specifies whether calls to phone numbers associated with this connection should hangup after timing out.'\n        },\n        first_command_timeout_secs: {\n          type: 'integer',\n          description: 'Specifies how many seconds to wait before timing out a dial command.'\n        },\n        inbound: {\n          $ref: '#/$defs/call_control_application_inbound'\n        },\n        outbound: {\n          $ref: '#/$defs/call_control_application_outbound'\n        },\n        record_type: {\n          type: 'string',\n          enum: [            'call_control_application'\n          ]\n        },\n        redact_dtmf_debug_logging: {\n          type: 'boolean',\n          description: 'When enabled, DTMF digits entered by users will be redacted in debug logs to protect PII data entered through IVR interactions.'\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags assigned to the Call Control Application.',\n          items: {\n            type: 'string'\n          }\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date of when the resource was last updated'\n        },\n        webhook_api_version: {\n          type: 'string',\n          description: 'Determines which webhook format will be used, Telnyx API v1 or v2.',\n          enum: [            '1',\n            '2'\n          ]\n        },\n        webhook_event_failover_url: {\n          type: 'string',\n          description: 'The failover URL where webhooks related to this connection will be sent if sending to the primary URL fails. Must include a scheme, such as `https`.'\n        },\n        webhook_event_url: {\n          type: 'string',\n          description: 'The URL where webhooks related to this connection will be sent. Must include a scheme, such as `https`.'\n        },\n        webhook_timeout_secs: {\n          type: 'integer'\n        }\n      }\n    },\n    call_control_application_inbound: {\n      type: 'object',\n      title: 'Call Control Application Inbound',\n      properties: {\n        channel_limit: {\n          type: 'integer',\n          description: 'When set, this will limit the total number of inbound calls to phone numbers associated with this connection.'\n        },\n        shaken_stir_enabled: {\n          type: 'boolean',\n          description: 'When enabled Telnyx will include Shaken/Stir data in the Webhook for new inbound calls.'\n        },\n        sip_subdomain: {\n          type: 'string',\n          description: 'Specifies a subdomain that can be used to receive Inbound calls to a Connection, in the same way a phone number is used, from a SIP endpoint. Example: the subdomain \"example.sip.telnyx.com\" can be called from any SIP endpoint by using the SIP URI \"sip:@example.sip.telnyx.com\" where the user part can be any alphanumeric value. Please note TLS encrypted calls are not allowed for subdomain calls.'\n        },\n        sip_subdomain_receive_settings: {\n          type: 'string',\n          description: 'This option can be enabled to receive calls from: \"Anyone\" (any SIP endpoint in the public Internet) or \"Only my connections\" (any connection assigned to the same Telnyx user).',\n          enum: [            'only_my_connections',\n            'from_anyone'\n          ]\n        }\n      }\n    },\n    call_control_application_outbound: {\n      type: 'object',\n      title: 'Call Control Application Outbound',\n      properties: {\n        channel_limit: {\n          type: 'integer',\n          description: 'When set, this will limit the total number of outbound calls to phone numbers associated with this connection.'\n        },\n        outbound_voice_profile_id: {\n          type: 'string',\n          description: 'Identifies the associated outbound voice profile.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.callControlApplications.delete(id)));
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
