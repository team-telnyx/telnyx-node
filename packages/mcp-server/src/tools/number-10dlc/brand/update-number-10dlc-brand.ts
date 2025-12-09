// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'number_10dlc.brand',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/10dlc/brand/{brandId}',
  operationId: 'UpdateBrand',
};

export const tool: Tool = {
  name: 'update_number_10dlc_brand',
  description: "Update a brand's attributes by `brandId`.",
  inputSchema: {
    type: 'object',
    properties: {
      brandId: {
        type: 'string',
        title: 'Brandid',
      },
      country: {
        type: 'string',
        title: 'Country',
        description: 'ISO2 2 characters country code. Example: US - United States',
      },
      displayName: {
        type: 'string',
        title: 'Displayname',
        description: 'Display or marketing name of the brand.',
      },
      email: {
        type: 'string',
        title: 'Email',
        description: 'Valid email address of brand support contact.',
      },
      entityType: {
        $ref: '#/$defs/entity_type',
      },
      vertical: {
        $ref: '#/$defs/vertical',
      },
      altBusiness_id: {
        type: 'string',
        title: 'Altbusiness Id',
        description: 'Alternate business identifier such as DUNS, LEI, or GIIN',
      },
      altBusinessIdType: {
        $ref: '#/$defs/alt_business_id_type',
      },
      businessContactEmail: {
        type: 'string',
        title: 'BusinessContactEmail',
        description:
          'Business contact email.\n\nRequired if `entityType` will be changed to `PUBLIC_PROFIT`. Otherwise, it is recommended to either omit this field or set it to `null`.',
      },
      city: {
        type: 'string',
        title: 'City',
        description: 'City name',
      },
      companyName: {
        type: 'string',
        title: 'Companyname',
        description: '(Required for Non-profit/private/public) Legal company name.',
      },
      ein: {
        type: 'string',
        title: 'Ein',
        description:
          '(Required for Non-profit) Government assigned corporate tax ID. EIN is 9-digits in U.S.',
      },
      firstName: {
        type: 'string',
        title: 'Firstname',
        description: 'First name of business contact.',
      },
      identityStatus: {
        $ref: '#/$defs/brand_identity_status',
      },
      ipAddress: {
        type: 'string',
        title: 'Ipaddress',
        description: 'IP address of the browser requesting to create brand identity.',
      },
      isReseller: {
        type: 'boolean',
        title: 'Isreseller',
      },
      lastName: {
        type: 'string',
        title: 'Lastname',
        description: 'Last name of business contact.',
      },
      phone: {
        type: 'string',
        title: 'Phone',
        description: 'Valid phone number in e.164 international format.',
      },
      postalCode: {
        type: 'string',
        title: 'Postalcode',
        description: 'Postal codes. Use 5 digit zipcode for United States',
      },
      state: {
        type: 'string',
        title: 'State',
        description: 'State. Must be 2 letters code for United States.',
      },
      stockExchange: {
        $ref: '#/$defs/stock_exchange',
      },
      stockSymbol: {
        type: 'string',
        title: 'Stocksymbol',
        description: '(Required for public company) stock symbol.',
      },
      street: {
        type: 'string',
        title: 'Street',
        description: 'Street number and name.',
      },
      webhookFailoverURL: {
        type: 'string',
        title: 'WebhookFailoverURL',
        description: 'Webhook failover URL for brand status updates.',
      },
      webhookURL: {
        type: 'string',
        title: 'WebhookURL',
        description: 'Webhook URL for brand status updates.',
      },
      website: {
        type: 'string',
        title: 'Website',
        description: 'Brand website URL.',
      },
    },
    required: ['brandId', 'country', 'displayName', 'email', 'entityType', 'vertical'],
    $defs: {
      entity_type: {
        type: 'string',
        title: 'EntityType',
        description: 'Entity type behind the brand. This is the form of business establishment.',
        enum: ['PRIVATE_PROFIT', 'PUBLIC_PROFIT', 'NON_PROFIT', 'GOVERNMENT'],
      },
      vertical: {
        type: 'string',
        title: 'Vertical',
        description: 'Vertical or industry segment of the brand or campaign.',
        enum: [
          'REAL_ESTATE',
          'HEALTHCARE',
          'ENERGY',
          'ENTERTAINMENT',
          'RETAIL',
          'AGRICULTURE',
          'INSURANCE',
          'EDUCATION',
          'HOSPITALITY',
          'FINANCIAL',
          'GAMBLING',
          'CONSTRUCTION',
          'NGO',
          'MANUFACTURING',
          'GOVERNMENT',
          'TECHNOLOGY',
          'COMMUNICATION',
        ],
      },
      alt_business_id_type: {
        type: 'string',
        title: 'AltBusinessIdType',
        description: 'An enumeration.',
        enum: ['NONE', 'DUNS', 'GIIN', 'LEI'],
      },
      brand_identity_status: {
        type: 'string',
        title: 'BrandIdentityStatus',
        description: 'The verification status of an active brand',
        enum: ['VERIFIED', 'UNVERIFIED', 'SELF_DECLARED', 'VETTED_VERIFIED'],
      },
      stock_exchange: {
        type: 'string',
        title: 'StockExchange',
        description: '(Required for public company) stock exchange.',
        enum: [
          'NONE',
          'NASDAQ',
          'NYSE',
          'AMEX',
          'AMX',
          'ASX',
          'B3',
          'BME',
          'BSE',
          'FRA',
          'ICEX',
          'JPX',
          'JSE',
          'KRX',
          'LON',
          'NSE',
          'OMX',
          'SEHK',
          'SSE',
          'STO',
          'SWX',
          'SZSE',
          'TSX',
          'TWSE',
          'VSE',
        ],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { brandId, ...body } = args as any;
  try {
    return asTextContentResult(await client.number10dlc.brand.update(brandId, body));
  } catch (error) {
    if (error instanceof Telnyx.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
