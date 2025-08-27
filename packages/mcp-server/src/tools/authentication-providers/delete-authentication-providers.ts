// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'authentication_providers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/authentication_providers/{id}',
  operationId: 'DeleteAuthenticationProvider',
};

export const tool: Tool = {
  name: 'delete_authentication_providers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletes an existing authentication provider.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/authentication_provider'\n    }\n  },\n  $defs: {\n    authentication_provider: {\n      type: 'object',\n      title: 'AuthenticationProvider',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Uniquely identifies the authentication provider.'\n        },\n        active: {\n          type: 'boolean',\n          description: 'The active status of the authentication provider'\n        },\n        created_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was created.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'The name associated with the authentication provider.'\n        },\n        organization_id: {\n          type: 'string',\n          description: 'The id from the Organization the authentication provider belongs to.'\n        },\n        record_type: {\n          type: 'string',\n          description: 'Identifies the type of the resource.'\n        },\n        settings: {\n          type: 'object',\n          description: 'The settings associated with the authentication provider.',\n          properties: {\n            assertion_consumer_service_url: {\n              type: 'string',\n              description: 'The Assertion Consumer Service URL for the service provider (Telnyx).'\n            },\n            idp_cert_fingerprint: {\n              type: 'string',\n              description: 'The certificate fingerprint for the identity provider (IdP)'\n            },\n            idp_cert_fingerprint_algorithm: {\n              type: 'string',\n              description: 'The algorithm used to generate the identity provider\\'s (IdP) certificate fingerprint',\n              enum: [                'sha1',\n                'sha256',\n                'sha384',\n                'sha512'\n              ]\n            },\n            idp_entity_id: {\n              type: 'string',\n              description: 'The Entity ID for the identity provider (IdP).'\n            },\n            idp_sso_target_url: {\n              type: 'string',\n              description: 'The SSO target url for the identity provider (IdP).'\n            },\n            name_identifier_format: {\n              type: 'string',\n              description: 'The name identifier format associated with the authentication provider. This must be the same for both the Identity Provider (IdP) and the service provider (Telnyx).'\n            },\n            service_provider_entity_id: {\n              type: 'string',\n              description: 'The Entity ID for the service provider (Telnyx).'\n            }\n          }\n        },\n        short_name: {\n          type: 'string',\n          description: 'The short name associated with the authentication provider. This must be unique and URL-friendly, as it\\'s going to be part of the login URL.'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'ISO 8601 formatted date indicating when the resource was updated.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.authenticationProviders.delete(id)));
};

export default { metadata, tool, handler };
