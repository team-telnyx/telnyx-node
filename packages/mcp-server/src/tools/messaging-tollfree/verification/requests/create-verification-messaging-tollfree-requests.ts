// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'messaging_tollfree.verification.requests',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/messaging_tollfree/verification/requests',
  operationId: 'SubmitVerificationRequest',
};

export const tool: Tool = {
  name: 'create_verification_messaging_tollfree_requests',
  description: 'Submit a new tollfree verification request',
  inputSchema: {
    type: 'object',
    properties: {
      additionalInformation: {
        type: 'string',
        title: 'Additionalinformation',
        description: 'Any additional information',
      },
      businessAddr1: {
        type: 'string',
        title: 'Businessaddr1',
        description: 'Line 1 of the business address',
      },
      businessCity: {
        type: 'string',
        title: 'Businesscity',
        description: 'The city of the business address; the first letter should be capitalized',
      },
      businessContactEmail: {
        type: 'string',
        title: 'Businesscontactemail',
        description: 'The email address of the business contact',
      },
      businessContactFirstName: {
        type: 'string',
        title: 'Businesscontactfirstname',
        description: 'First name of the business contact; there are no specific requirements on formatting',
      },
      businessContactLastName: {
        type: 'string',
        title: 'Businesscontactlastname',
        description: 'Last name of the business contact; there are no specific requirements on formatting',
      },
      businessContactPhone: {
        type: 'string',
        title: 'Businesscontactphone',
        description: 'The phone number of the business contact in E.164 format',
      },
      businessName: {
        type: 'string',
        title: 'Businessname',
        description: 'Name of the business; there are no specific formatting requirements',
      },
      businessState: {
        type: 'string',
        title: 'Businessstate',
        description:
          'The full name of the state (not the 2 letter code) of the business address; the first letter should be capitalized',
      },
      businessZip: {
        type: 'string',
        title: 'Businesszip',
        description: 'The ZIP code of the business address',
      },
      corporateWebsite: {
        type: 'string',
        title: 'Corporatewebsite',
        description: 'A URL, including the scheme, pointing to the corporate website',
      },
      isvReseller: {
        type: 'string',
        title: 'Isvreseller',
        description: 'ISV name',
      },
      messageVolume: {
        $ref: '#/$defs/volume',
      },
      optInWorkflow: {
        type: 'string',
        title: 'Optinworkflow',
        description:
          'Human-readable description of how end users will opt into receiving messages from the given phone numbers',
      },
      optInWorkflowImageURLs: {
        type: 'array',
        title: 'Optinworkflowimageurls',
        description: 'Images showing the opt-in workflow',
        items: {
          $ref: '#/$defs/url',
        },
      },
      phoneNumbers: {
        type: 'array',
        title: 'Phonenumbers',
        description: 'The phone numbers to request the verification of',
        items: {
          $ref: '#/$defs/tf_phone_number',
        },
      },
      productionMessageContent: {
        type: 'string',
        title: 'Productionmessagecontent',
        description: 'An example of a message that will be sent from the given phone numbers',
      },
      useCase: {
        $ref: '#/$defs/use_case_categories',
      },
      useCaseSummary: {
        type: 'string',
        title: 'Usecasesummary',
        description: 'Human-readable summary of the desired use-case',
      },
      ageGatedContent: {
        type: 'boolean',
        title: 'Agegatedcontent',
        description:
          'Indicates if messaging content requires age gating (e.g., 18+). Defaults to false if not provided.',
      },
      businessAddr2: {
        type: 'string',
        title: 'Businessaddr2',
        description: 'Line 2 of the business address',
      },
      businessRegistrationCountry: {
        type: 'string',
        title: 'Businessregistrationcountry',
        description:
          'ISO 3166-1 alpha-2 country code of the issuing business authority. Must be exactly 2 letters. Automatically converted to uppercase. Required from January 2026.',
      },
      businessRegistrationNumber: {
        type: 'string',
        title: 'Businessregistrationnumber',
        description:
          'Official business registration number (e.g., Employer Identification Number (EIN) in the U.S.). Required from January 2026.',
      },
      businessRegistrationType: {
        type: 'string',
        title: 'Businessregistrationtype',
        description: 'Type of business registration being provided. Required from January 2026.',
      },
      doingBusinessAs: {
        type: 'string',
        title: 'Doingbusinessas',
        description: 'Doing Business As (DBA) name if different from legal name',
      },
      entityType: {
        type: 'string',
        title: 'EntityType',
        description: 'Business entity classification',
        enum: ['SOLE_PROPRIETOR', 'PRIVATE_PROFIT', 'PUBLIC_PROFIT', 'NON_PROFIT', 'GOVERNMENT'],
      },
      helpMessageResponse: {
        type: 'string',
        title: 'Helpmessageresponse',
        description: "The message returned when users text 'HELP'",
      },
      optInConfirmationResponse: {
        type: 'string',
        title: 'Optinconfirmationresponse',
        description: 'Message sent to users confirming their opt-in to receive messages',
      },
      optInKeywords: {
        type: 'string',
        title: 'Optinkeywords',
        description: 'Keywords used to collect and process consumer opt-ins',
      },
      privacyPolicyURL: {
        type: 'string',
        title: 'Privacypolicyurl',
        description: "URL pointing to the business's privacy policy. Plain string, no URL format validation.",
      },
      termsAndConditionURL: {
        type: 'string',
        title: 'Termsandconditionurl',
        description:
          "URL pointing to the business's terms and conditions. Plain string, no URL format validation.",
      },
      webhookUrl: {
        type: 'string',
        title: 'Webhookurl',
        description: 'URL that should receive webhooks relating to this verification request',
      },
    },
    required: [
      'additionalInformation',
      'businessAddr1',
      'businessCity',
      'businessContactEmail',
      'businessContactFirstName',
      'businessContactLastName',
      'businessContactPhone',
      'businessName',
      'businessState',
      'businessZip',
      'corporateWebsite',
      'isvReseller',
      'messageVolume',
      'optInWorkflow',
      'optInWorkflowImageURLs',
      'phoneNumbers',
      'productionMessageContent',
      'useCase',
      'useCaseSummary',
    ],
    $defs: {
      volume: {
        type: 'string',
        title: 'Volume',
        description: 'Message Volume Enums',
        enum: [
          '10',
          '100',
          '1,000',
          '10,000',
          '100,000',
          '250,000',
          '500,000',
          '750,000',
          '1,000,000',
          '5,000,000',
          '10,000,000+',
        ],
      },
      url: {
        type: 'object',
        title: 'Url',
        properties: {
          url: {
            type: 'string',
            title: 'Url',
          },
        },
        required: ['url'],
      },
      tf_phone_number: {
        type: 'object',
        title: 'PhoneNumber',
        description: 'A phone number',
        properties: {
          phoneNumber: {
            type: 'string',
            title: 'Phonenumber',
          },
        },
        required: ['phoneNumber'],
      },
      use_case_categories: {
        type: 'string',
        title: 'UseCaseCategories',
        description: 'Tollfree usecase categories',
        enum: [
          '2FA',
          'App Notifications',
          'Appointments',
          'Auctions',
          'Auto Repair Services',
          'Bank Transfers',
          'Billing',
          'Booking Confirmations',
          'Business Updates',
          'COVID-19 Alerts',
          'Career Training',
          'Chatbot',
          'Conversational / Alerts',
          'Courier Services & Deliveries',
          'Emergency Alerts',
          'Events & Planning',
          'Financial Services',
          'Fraud Alerts',
          'Fundraising',
          'General Marketing',
          'General School Updates',
          'HR / Staffing',
          'Healthcare Alerts',
          'Housing Community Updates',
          'Insurance Services',
          'Job Dispatch',
          'Legal Services',
          'Mixed',
          'Motivational Reminders',
          'Notary Notifications',
          'Order Notifications',
          'Political',
          'Public Works',
          'Real Estate Services',
          'Religious Services',
          'Repair and Diagnostics Alerts',
          'Rewards Program',
          'Surveys',
          'System Alerts',
          'Voting Reminders',
          'Waitlist Alerts',
          'Webinar Reminders',
          'Workshop Alerts',
        ],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.messagingTollfree.verification.requests.create(body));
};

export default { metadata, tool, handler };
