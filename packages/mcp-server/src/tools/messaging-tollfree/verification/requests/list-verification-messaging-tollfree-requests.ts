// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'telnyx-mcp/filtering';
import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messaging_tollfree.verification.requests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/messaging_tollfree/verification/requests',
  operationId: 'ListVerificationRequests',
};

export const tool: Tool = {
  name: 'list_verification_messaging_tollfree_requests',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of previously-submitted tollfree verification requests\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/request_list_response',\n  $defs: {\n    request_list_response: {\n      type: 'object',\n      title: 'Paginated[VerificationRequestStatus]',\n      description: 'A paginated response',\n      properties: {\n        records: {\n          type: 'array',\n          title: 'Records',\n          description: 'The records yielded by this request',\n          items: {\n            $ref: '#/$defs/verification_request_status'\n          }\n        },\n        total_records: {\n          type: 'integer',\n          title: 'Total Records',\n          description: 'The total amount of records for these query parameters'\n        }\n      }\n    },\n    verification_request_status: {\n      type: 'object',\n      title: 'VerificationRequestStatus',\n      description: 'A verification request and its status, suitable for returning to users',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        additionalInformation: {\n          type: 'string',\n          title: 'Additionalinformation'\n        },\n        businessAddr1: {\n          type: 'string',\n          title: 'Businessaddr1'\n        },\n        businessCity: {\n          type: 'string',\n          title: 'Businesscity'\n        },\n        businessContactEmail: {\n          type: 'string',\n          title: 'Businesscontactemail'\n        },\n        businessContactFirstName: {\n          type: 'string',\n          title: 'Businesscontactfirstname'\n        },\n        businessContactLastName: {\n          type: 'string',\n          title: 'Businesscontactlastname'\n        },\n        businessContactPhone: {\n          type: 'string',\n          title: 'Businesscontactphone'\n        },\n        businessName: {\n          type: 'string',\n          title: 'Businessname'\n        },\n        businessState: {\n          type: 'string',\n          title: 'Businessstate'\n        },\n        businessZip: {\n          type: 'string',\n          title: 'Businesszip'\n        },\n        corporateWebsite: {\n          type: 'string',\n          title: 'Corporatewebsite'\n        },\n        isvReseller: {\n          type: 'string',\n          title: 'Isvreseller'\n        },\n        messageVolume: {\n          $ref: '#/$defs/volume'\n        },\n        optInWorkflow: {\n          type: 'string',\n          title: 'Optinworkflow'\n        },\n        optInWorkflowImageURLs: {\n          type: 'array',\n          title: 'Optinworkflowimageurls',\n          items: {\n            $ref: '#/$defs/url'\n          }\n        },\n        phoneNumbers: {\n          type: 'array',\n          title: 'Phonenumbers',\n          items: {\n            $ref: '#/$defs/tf_phone_number'\n          }\n        },\n        productionMessageContent: {\n          type: 'string',\n          title: 'Productionmessagecontent'\n        },\n        useCase: {\n          $ref: '#/$defs/use_case_categories'\n        },\n        useCaseSummary: {\n          type: 'string',\n          title: 'Usecasesummary'\n        },\n        verificationStatus: {\n          $ref: '#/$defs/tf_verification_status'\n        },\n        ageGatedContent: {\n          type: 'boolean',\n          title: 'Agegatedcontent'\n        },\n        businessAddr2: {\n          type: 'string',\n          title: 'Businessaddr2'\n        },\n        businessRegistrationCountry: {\n          type: 'string',\n          title: 'Businessregistrationcountry'\n        },\n        businessRegistrationNumber: {\n          type: 'string',\n          title: 'Businessregistrationnumber'\n        },\n        businessRegistrationType: {\n          type: 'string',\n          title: 'Businessregistrationtype'\n        },\n        createdAt: {\n          type: 'string',\n          title: 'Createdat',\n          format: 'date-time'\n        },\n        doingBusinessAs: {\n          type: 'string',\n          title: 'Doingbusinessas'\n        },\n        entityType: {\n          $ref: '#/$defs/toll_free_verification_entity_type'\n        },\n        helpMessageResponse: {\n          type: 'string',\n          title: 'Helpmessageresponse'\n        },\n        optInConfirmationResponse: {\n          type: 'string',\n          title: 'Optinconfirmationresponse'\n        },\n        optInKeywords: {\n          type: 'string',\n          title: 'Optinkeywords'\n        },\n        privacyPolicyURL: {\n          type: 'string',\n          title: 'Privacypolicyurl'\n        },\n        reason: {\n          type: 'string',\n          title: 'Reason'\n        },\n        termsAndConditionURL: {\n          type: 'string',\n          title: 'Termsandconditionurl'\n        },\n        updatedAt: {\n          type: 'string',\n          title: 'Updatedat',\n          format: 'date-time'\n        },\n        webhookUrl: {\n          type: 'string',\n          title: 'Webhookurl'\n        }\n      },\n      required: [        'id',\n        'additionalInformation',\n        'businessAddr1',\n        'businessCity',\n        'businessContactEmail',\n        'businessContactFirstName',\n        'businessContactLastName',\n        'businessContactPhone',\n        'businessName',\n        'businessState',\n        'businessZip',\n        'corporateWebsite',\n        'isvReseller',\n        'messageVolume',\n        'optInWorkflow',\n        'optInWorkflowImageURLs',\n        'phoneNumbers',\n        'productionMessageContent',\n        'useCase',\n        'useCaseSummary',\n        'verificationStatus'\n      ]\n    },\n    volume: {\n      type: 'string',\n      title: 'Volume',\n      description: 'Message Volume Enums',\n      enum: [        '10',\n        '100',\n        '1,000',\n        '10,000',\n        '100,000',\n        '250,000',\n        '500,000',\n        '750,000',\n        '1,000,000',\n        '5,000,000',\n        '10,000,000+'\n      ]\n    },\n    url: {\n      type: 'object',\n      title: 'Url',\n      properties: {\n        url: {\n          type: 'string',\n          title: 'Url'\n        }\n      },\n      required: [        'url'\n      ]\n    },\n    tf_phone_number: {\n      type: 'object',\n      title: 'PhoneNumber',\n      description: 'A phone number',\n      properties: {\n        phoneNumber: {\n          type: 'string',\n          title: 'Phonenumber'\n        }\n      },\n      required: [        'phoneNumber'\n      ]\n    },\n    use_case_categories: {\n      type: 'string',\n      title: 'UseCaseCategories',\n      description: 'Tollfree usecase categories',\n      enum: [        '2FA',\n        'App Notifications',\n        'Appointments',\n        'Auctions',\n        'Auto Repair Services',\n        'Bank Transfers',\n        'Billing',\n        'Booking Confirmations',\n        'Business Updates',\n        'COVID-19 Alerts',\n        'Career Training',\n        'Chatbot',\n        'Conversational / Alerts',\n        'Courier Services & Deliveries',\n        'Emergency Alerts',\n        'Events & Planning',\n        'Financial Services',\n        'Fraud Alerts',\n        'Fundraising',\n        'General Marketing',\n        'General School Updates',\n        'HR / Staffing',\n        'Healthcare Alerts',\n        'Housing Community Updates',\n        'Insurance Services',\n        'Job Dispatch',\n        'Legal Services',\n        'Mixed',\n        'Motivational Reminders',\n        'Notary Notifications',\n        'Order Notifications',\n        'Political',\n        'Public Works',\n        'Real Estate Services',\n        'Religious Services',\n        'Repair and Diagnostics Alerts',\n        'Rewards Program',\n        'Surveys',\n        'System Alerts',\n        'Voting Reminders',\n        'Waitlist Alerts',\n        'Webinar Reminders',\n        'Workshop Alerts'\n      ]\n    },\n    tf_verification_status: {\n      type: 'string',\n      title: 'VerificationStatus',\n      description: 'Tollfree verification status',\n      enum: [        'Verified',\n        'Rejected',\n        'Waiting For Vendor',\n        'Waiting For Customer',\n        'Waiting For Telnyx',\n        'In Progress'\n      ]\n    },\n    toll_free_verification_entity_type: {\n      type: 'string',\n      title: 'EntityType',\n      description: 'Business entity classification',\n      enum: [        'SOLE_PROPRIETOR',\n        'PRIVATE_PROFIT',\n        'PUBLIC_PROFIT',\n        'NON_PROFIT',\n        'GOVERNMENT'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'integer',
        title: 'Page',
      },
      page_size: {
        type: 'integer',
        title: 'Page Size',
        description:
          '\n        Request this many records per page\n\n        This value is automatically clamped if the provided value is too large.\n        ',
      },
      date_end: {
        type: 'string',
        title: 'Date End',
        format: 'date-time',
      },
      date_start: {
        type: 'string',
        title: 'Date Start',
        format: 'date-time',
      },
      phone_number: {
        type: 'string',
        title: 'Phone Number',
      },
      status: {
        $ref: '#/$defs/tf_verification_status',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['page', 'page_size'],
    $defs: {
      tf_verification_status: {
        type: 'string',
        title: 'VerificationStatus',
        description: 'Tollfree verification status',
        enum: [
          'Verified',
          'Rejected',
          'Waiting For Vendor',
          'Waiting For Customer',
          'Waiting For Telnyx',
          'In Progress',
        ],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.messagingTollfree.verification.requests.list(body)),
  );
};

export default { metadata, tool, handler };
