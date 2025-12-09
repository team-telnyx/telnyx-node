// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'number_10dlc.brand',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/10dlc/brand/{brandId}',
  operationId: 'GetBrand',
};

export const tool: Tool = {
  name: 'retrieve_number_10dlc_brand',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a brand by `brandId`.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/brand_retrieve_response',\n  $defs: {\n    brand_retrieve_response: {\n      allOf: [        {\n          $ref: '#/$defs/telnyx_brand'\n        }\n      ],\n      description: 'Telnyx-specific extensions to The Campaign Registry\\'s `Brand` type'\n    },\n    telnyx_brand: {\n      type: 'object',\n      title: 'TelnyxBrand',\n      description: 'Telnyx-specific extensions to The Campaign Registry\\'s `Brand` type',\n      properties: {\n        brandRelationship: {\n          type: 'string',\n          title: 'BrandRelationship',\n          description: 'Brand relationship to the CSP.',\n          enum: [            'BASIC_ACCOUNT',\n            'SMALL_ACCOUNT',\n            'MEDIUM_ACCOUNT',\n            'LARGE_ACCOUNT',\n            'KEY_ACCOUNT'\n          ]\n        },\n        country: {\n          type: 'string',\n          title: 'Country',\n          description: 'ISO2 2 characters country code. Example: US - United States'\n        },\n        displayName: {\n          type: 'string',\n          title: 'Displayname',\n          description: 'Display or marketing name of the brand.'\n        },\n        email: {\n          type: 'string',\n          title: 'Email',\n          description: 'Valid email address of brand support contact.'\n        },\n        entityType: {\n          $ref: '#/$defs/entity_type'\n        },\n        vertical: {\n          type: 'string',\n          title: 'Vertical',\n          description: 'Vertical or industry segment of the brand.'\n        },\n        altBusinessId: {\n          type: 'string',\n          title: 'Altbusinessid',\n          description: 'Alternate business identifier such as DUNS, LEI, or GIIN'\n        },\n        altBusinessIdType: {\n          $ref: '#/$defs/alt_business_id_type'\n        },\n        brandId: {\n          type: 'string',\n          title: 'Brandid',\n          description: 'Unique identifier assigned to the brand.'\n        },\n        businessContactEmail: {\n          type: 'string',\n          title: 'BusinessContactEmail',\n          description: 'Business contact email.\\n\\nRequired if `entityType` is `PUBLIC_PROFIT`.'\n        },\n        city: {\n          type: 'string',\n          title: 'City',\n          description: 'City name'\n        },\n        companyName: {\n          type: 'string',\n          title: 'Companyname',\n          description: '(Required for Non-profit/private/public) Legal company name.'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date and time that the brand was created at.'\n        },\n        cspId: {\n          type: 'string',\n          title: 'Cspid',\n          description: 'Unique identifier assigned to the csp by the registry.'\n        },\n        ein: {\n          type: 'string',\n          title: 'Ein',\n          description: '(Required for Non-profit) Government assigned corporate tax ID. EIN is 9-digits in U.S.'\n        },\n        failureReasons: {\n          type: 'string',\n          title: 'failureReasons',\n          description: 'Failure reasons for brand'\n        },\n        firstName: {\n          type: 'string',\n          title: 'Firstname',\n          description: 'First name of business contact.'\n        },\n        identityStatus: {\n          $ref: '#/$defs/brand_identity_status'\n        },\n        ipAddress: {\n          type: 'string',\n          title: 'Ipaddress',\n          description: 'IP address of the browser requesting to create brand identity.'\n        },\n        isReseller: {\n          type: 'boolean',\n          title: 'Isreseller',\n          description: 'Indicates whether this brand is known to be a reseller'\n        },\n        lastName: {\n          type: 'string',\n          title: 'Lastname',\n          description: 'Last name of business contact.'\n        },\n        mobilePhone: {\n          type: 'string',\n          title: 'Mobilephone',\n          description: 'Valid mobile phone number in e.164 international format.'\n        },\n        mock: {\n          type: 'boolean',\n          title: 'Mock',\n          description: 'Mock brand for testing purposes'\n        },\n        optionalAttributes: {\n          type: 'object',\n          title: 'BrandOptionalAttributes',\n          properties: {\n            taxExemptStatus: {\n              type: 'string',\n              title: 'Taxexemptstatus',\n              description: 'The tax exempt status of the brand'\n            }\n          }\n        },\n        phone: {\n          type: 'string',\n          title: 'Phone',\n          description: 'Valid phone number in e.164 international format.'\n        },\n        postalCode: {\n          type: 'string',\n          title: 'Postalcode',\n          description: 'Postal codes. Use 5 digit zipcode for United States'\n        },\n        referenceId: {\n          type: 'string',\n          title: 'Referenceid',\n          description: 'Unique identifier Telnyx assigned to the brand - the brandId'\n        },\n        state: {\n          type: 'string',\n          title: 'State',\n          description: 'State. Must be 2 letters code for United States.'\n        },\n        status: {\n          type: 'string',\n          title: 'status',\n          description: 'Status of the brand',\n          enum: [            'OK',\n            'REGISTRATION_PENDING',\n            'REGISTRATION_FAILED'\n          ]\n        },\n        stockExchange: {\n          $ref: '#/$defs/stock_exchange'\n        },\n        stockSymbol: {\n          type: 'string',\n          title: 'Stocksymbol',\n          description: '(Required for public company) stock symbol.'\n        },\n        street: {\n          type: 'string',\n          title: 'Street',\n          description: 'Street number and name.'\n        },\n        tcrBrandId: {\n          type: 'string',\n          title: 'TcrBrandid',\n          description: 'Unique identifier assigned to the brand by the registry.'\n        },\n        universalEin: {\n          type: 'string',\n          title: 'Universalein',\n          description: 'Universal EIN of Brand, Read Only.'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date and time that the brand was last updated at.'\n        },\n        webhookFailoverURL: {\n          type: 'string',\n          title: 'WebhookFailoverURL',\n          description: 'Failover webhook to which brand status updates are sent.'\n        },\n        webhookURL: {\n          type: 'string',\n          title: 'WebhookURL',\n          description: 'Webhook to which brand status updates are sent.'\n        },\n        website: {\n          type: 'string',\n          title: 'Website',\n          description: 'Brand website URL.'\n        }\n      },\n      required: [        'brandRelationship',\n        'country',\n        'displayName',\n        'email',\n        'entityType',\n        'vertical'\n      ]\n    },\n    entity_type: {\n      type: 'string',\n      title: 'EntityType',\n      description: 'Entity type behind the brand. This is the form of business establishment.',\n      enum: [        'PRIVATE_PROFIT',\n        'PUBLIC_PROFIT',\n        'NON_PROFIT',\n        'GOVERNMENT'\n      ]\n    },\n    alt_business_id_type: {\n      type: 'string',\n      title: 'AltBusinessIdType',\n      description: 'An enumeration.',\n      enum: [        'NONE',\n        'DUNS',\n        'GIIN',\n        'LEI'\n      ]\n    },\n    brand_identity_status: {\n      type: 'string',\n      title: 'BrandIdentityStatus',\n      description: 'The verification status of an active brand',\n      enum: [        'VERIFIED',\n        'UNVERIFIED',\n        'SELF_DECLARED',\n        'VETTED_VERIFIED'\n      ]\n    },\n    stock_exchange: {\n      type: 'string',\n      title: 'StockExchange',\n      description: '(Required for public company) stock exchange.',\n      enum: [        'NONE',\n        'NASDAQ',\n        'NYSE',\n        'AMEX',\n        'AMX',\n        'ASX',\n        'B3',\n        'BME',\n        'BSE',\n        'FRA',\n        'ICEX',\n        'JPX',\n        'JSE',\n        'KRX',\n        'LON',\n        'NSE',\n        'OMX',\n        'SEHK',\n        'SSE',\n        'STO',\n        'SWX',\n        'SZSE',\n        'TSX',\n        'TWSE',\n        'VSE'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      brandId: {
        type: 'string',
        title: 'Brandid',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['brandId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { brandId, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number10dlc.brand.retrieve(brandId)),
    );
  } catch (error) {
    if (error instanceof Telnyx.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
