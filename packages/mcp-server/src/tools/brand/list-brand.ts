// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'brand',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/brand',
  operationId: 'GetBrands',
};

export const tool: Tool = {
  name: 'list_brand',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint is used to list all brands associated with your organization.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/brand_list_response',\n  $defs: {\n    brand_list_response: {\n      type: 'object',\n      title: 'BrandRecordSetCSP',\n      properties: {\n        page: {\n          type: 'integer',\n          title: 'Page'\n        },\n        records: {\n          type: 'array',\n          title: 'Records',\n          items: {\n            type: 'object',\n            title: 'ListedBrand',\n            properties: {\n              assignedCampaingsCount: {\n                type: 'integer',\n                description: 'Number of campaigns associated with the brand'\n              },\n              brandId: {\n                type: 'string',\n                description: 'Unique identifier assigned to the brand.'\n              },\n              companyName: {\n                type: 'string',\n                description: '(Required for Non-profit/private/public) Legal company name.'\n              },\n              createdAt: {\n                type: 'string',\n                description: 'Date and time that the brand was created at.'\n              },\n              displayName: {\n                type: 'string',\n                description: 'Display or marketing name of the brand.'\n              },\n              email: {\n                type: 'string',\n                description: 'Valid email address of brand support contact.'\n              },\n              entityType: {\n                $ref: '#/$defs/entity_type'\n              },\n              failureReasons: {\n                type: 'string',\n                title: 'failureReasons',\n                description: 'Failure reasons for brand'\n              },\n              identityStatus: {\n                $ref: '#/$defs/brand_identity_status'\n              },\n              status: {\n                type: 'string',\n                title: 'status',\n                description: 'Status of the brand',\n                enum: [                  'OK',\n                  'REGISTRATION_PENDING',\n                  'REGISTRATION_FAILED'\n                ]\n              },\n              tcrBrandId: {\n                type: 'string',\n                description: 'Unique identifier assigned to the brand by the registry.'\n              },\n              updatedAt: {\n                type: 'string',\n                description: 'Date and time that the brand was last updated at.'\n              },\n              website: {\n                type: 'string',\n                description: 'Brand website URL.'\n              }\n            }\n          }\n        },\n        totalRecords: {\n          type: 'integer',\n          title: 'Totalrecords'\n        }\n      }\n    },\n    entity_type: {\n      type: 'string',\n      title: 'EntityType',\n      description: 'Entity type behind the brand. This is the form of business establishment.',\n      enum: [        'PRIVATE_PROFIT',\n        'PUBLIC_PROFIT',\n        'NON_PROFIT',\n        'GOVERNMENT'\n      ]\n    },\n    brand_identity_status: {\n      type: 'string',\n      title: 'BrandIdentityStatus',\n      description: 'The verification status of an active brand',\n      enum: [        'VERIFIED',\n        'UNVERIFIED',\n        'SELF_DECLARED',\n        'VETTED_VERIFIED'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      brandId: {
        type: 'string',
        title: 'BrandId',
        description: 'Filter results by the Telnyx Brand id',
      },
      country: {
        type: 'string',
        title: 'Country',
      },
      displayName: {
        type: 'string',
        title: 'Displayname',
      },
      entityType: {
        type: 'string',
        title: 'Entitytype',
      },
      page: {
        type: 'integer',
        title: 'Page',
      },
      recordsPerPage: {
        type: 'integer',
        title: 'Recordsperpage',
        description: 'number of records per page. maximum of 500',
      },
      sort: {
        type: 'string',
        title: 'Sort',
        description:
          'Specifies the sort order for results. If not given, results are sorted by createdAt in descending order.',
        enum: [
          'assignedCampaignsCount',
          '-assignedCampaignsCount',
          'brandId',
          '-brandId',
          'createdAt',
          '-createdAt',
          'displayName',
          '-displayName',
          'identityStatus',
          '-identityStatus',
          'status',
          '-status',
          'tcrBrandId',
          '-tcrBrandId',
        ],
      },
      state: {
        type: 'string',
        title: 'State',
      },
      tcrBrandId: {
        type: 'string',
        title: 'TCRBrandId',
        description: 'Filter results by the TCR Brand id',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.brand.list(body)));
};

export default { metadata, tool, handler };
