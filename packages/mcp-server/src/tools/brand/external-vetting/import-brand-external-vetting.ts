// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'brand.external_vetting',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/brand/{brandId}/externalVetting',
  operationId: 'PutExternalVettingRecord',
};

export const tool: Tool = {
  name: 'import_brand_external_vetting',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis operation can be used to import an external vetting record from a TCR-approved\nvetting provider. If the vetting provider confirms validity of the record, it will be\nsaved with the brand and will be considered for future campaign qualification.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/external_vetting_import_response',\n  $defs: {\n    external_vetting_import_response: {\n      type: 'object',\n      title: 'ExternalVetting',\n      properties: {\n        createDate: {\n          type: 'string',\n          title: 'createDate',\n          description: 'Vetting submission date. This is the date when the vetting request is generated in ISO 8601 format.'\n        },\n        evpId: {\n          type: 'string',\n          title: 'Evpid',\n          description: 'External vetting provider ID for the brand.'\n        },\n        vettedDate: {\n          type: 'string',\n          title: 'vettedDate',\n          description: 'Vetting effective date. This is the date when vetting was completed, or the starting effective date in ISO 8601 format. If this date is missing, then the vetting was not complete or not valid.'\n        },\n        vettingClass: {\n          type: 'string',\n          title: 'Vettingclass',\n          description: 'Identifies the vetting classification.'\n        },\n        vettingId: {\n          type: 'string',\n          title: 'vettingId',\n          description: 'Unique ID that identifies a vetting transaction performed by a vetting provider. This ID is provided by the vetting provider at time of vetting.'\n        },\n        vettingScore: {\n          type: 'integer',\n          title: 'vettingScore',\n          description: 'Vetting score ranging from 0-100.'\n        },\n        vettingToken: {\n          type: 'string',\n          title: 'vettingToken',\n          description: 'Required by some providers for vetting record confirmation.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      brandId: {
        type: 'string',
        title: 'Brandid',
      },
      evpId: {
        type: 'string',
        title: 'Evpid',
        description: 'External vetting provider ID for the brand.',
      },
      vettingId: {
        type: 'string',
        title: 'Vettingid',
        description:
          'Unique ID that identifies a vetting transaction performed by a vetting provider. This ID is provided by the vetting provider at time of vetting.',
      },
      vettingToken: {
        type: 'string',
        title: 'Vettingtoken',
        description: 'Required by some providers for vetting record confirmation.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['brandId', 'evpId', 'vettingId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { brandId, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.brand.externalVetting.import(brandId, body)),
  );
};

export default { metadata, tool, handler };
