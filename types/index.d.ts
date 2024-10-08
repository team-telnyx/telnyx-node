/* eslint-disable @typescript-eslint/triple-slash-reference */

///<reference path='./lib.d.ts' />
///<reference path='./TelnyxAPI.d.ts' />
///<reference path='./Webhooks.d.ts' />
///<reference path='./Errors.d.ts' />

// Resources imports
///<reference path='./AiAssistantsResource.d.ts' />
///<reference path='./AiAudioTranscriptionsResource.d.ts' />
///<reference path='./AiChatCompletionsResource.d.ts' />
///<reference path='./AiEmbeddingsResource.d.ts' />
///<reference path='./AiEmbeddingsBucketsResource.d.ts' />
///<reference path='./AiEmbeddingsSimilaritySearchResource.d.ts' />
///<reference path='./AiModelsResource.d.ts' />
///<reference path='./AiSummarizeResource.d.ts' />
///<reference path='./AuditEventsResource.d.ts' />
///<reference path='./AccessIpAddressResource.d.ts' />
///<reference path='./AccessIpAddressResource.d.ts' />
///<reference path='./AccessIpRangesResource.d.ts' />
///<reference path='./AuthenticationProvidersResource.d.ts' />
///<reference path='./AutorespConfigsResource.d.ts' />
///<reference path='./AddressesResource.d.ts' />
///<reference path='./AvailablePhoneNumbersResource.d.ts' />
///<reference path='./BalanceResource.d.ts' />
///<reference path='./BillingGroupsResource.d.ts' />
///<reference path='./BrandsResource.d.ts' />
///<reference path='./CallsResource.d.ts' />
///<reference path='./CallControlApplicationsResource.d.ts' />
///<reference path='./CallEventsResource.d.ts' />
///<reference path='./CallRecordingsResource.d.ts' />
///<reference path='./CdrUsageReportsResource.d.ts' />
///<reference path='./ChannelzonesResource.d.ts' />
///<reference path='./ConferencesResource.d.ts' />
///<reference path='./ConnectionsResource.d.ts' />
///<reference path='./CredentialConnectionsResource.d.ts' />
///<reference path='./CustomerServiceRecordsResource.d.ts' />
///<reference path='./DetailRecordsResource.d.ts' />
///<reference path='./DialogflowConnectionsResource.d.ts' />
///<reference path='./DocumentLinksResource.d.ts' />
///<reference path='./DocumentsResource.d.ts' />
///<reference path='./DynamicEmergencyResource.d.ts' />
///<reference path='./DynamicEmergencyAddressesResource.d.ts' />
///<reference path='./DynamicEmergencyEndpointsResource.d.ts' />
///<reference path='./ExternalConnectionsResource.d.ts' />
///<reference path='./FaxApplicationsResource.d.ts' />
///<reference path='./MessagingProfilesResource.d.ts' />
///<reference path='./MessagingProfileMetricsResource.d.ts' />
///<reference path='./NotificationEventsResource.d.ts' />
///<reference path='./PhoneNumberAssignmentByProfileResource.d.ts' />
///<reference path='./PhoneNumbersCsvDownloadsResource.d.ts' />
///<reference path='./PortingEventsResource.d.ts' />
///<reference path='./PortoutEventsResource.d.ts' />
///<reference path='./TelephonyCredentialsResource.d.ts' />
///<reference path='./TexmlApplicationsResource.d.ts' />
///<reference path='./StorageBucketsResource.d.ts' />
//

declare module 'telnyx' {
  // Added to in other modules, referenced above.
  export namespace Telnyx {}

  export class Telnyx {
    static Telnyx: typeof Telnyx;

    static webhooks: Telnyx.Webhooks;

    constructor(apiKey: string, version?: string);

    TelnyxResource: Telnyx.TelnyxResource;

    // Resources
    aiAssistants: Telnyx.AiAssistantsResource;
    aiAudioTranscriptions: Telnyx.AiAudioTranscriptionsResource;
    aiChatCompletions: Telnyx.AiChatCompletionsResource;
    aiEmbeddings: Telnyx.AiEmbeddingsResource;
    aiEmbeddingsBuckets: Telnyx.AiEmbeddingsBucketsResource;
    aiEmbeddingsSimilaritySearch: Telnyx.AiEmbeddingsSimilaritySearchResource;
    aiModels: Telnyx.AiModelsResource;
    aiSummarize: Telnyx.AiSummarizeResource;
    auditEvents: Telnyx.AuditEventsResource;
    accessIpAddress: Telnyx.AccessIpAddressResource;
    accessIpRanges: Telnyx.AccessIpRangesResource;
    authenticationProviders: Telnyx.AuthenticationProvidersResource;
    autorespConfigs: Telnyx.AutorespConfigsResource;
    addresses: Telnyx.AddressesResource;
    availablePhoneNumbers: Telnyx.AvailablePhoneNumbersResource;
    balance: Telnyx.BalanceResource;
    brands: Telnyx.BrandsResource;
    billingGroups: Telnyx.BillingGroupsResource;
    calls: Telnyx.CallsResource;
    callControlApplications: Telnyx.CallControlApplicationsResource;
    callEvents: Telnyx.CallEventsResource;
    callRecordings: Telnyx.CallRecordingsResource;
    cdrUsageReports: Telnyx.CdrUsageReportsResource;
    channelzones: Telnyx.ChannelzonesResource;
    customerServiceRecords: Telnyx.CustomerServiceRecordsResource;
    conferences: Telnyx.ConferencesResource;
    connections: Telnyx.ConnectionsResource;
    credentialConnections: Telnyx.CredentialConnectionsResource;
    detailRecords: Telnyx.DetailRecordsResource;
    dialogflowConnections: Telnyx.DialogflowConnectionsResource;
    documentLinks: Telnyx.DocumentLinksResource;
    documents: Telnyx.DocumentsResource;
    dynamicEmergency: Telnyx.DynamicEmergencyResource;
    dynamicEmergencyAddresses: Telnyx.DynamicEmergencyAddressesResource;
    dynamicEmergencyEndpoints: Telnyx.DynamicEmergencyEndpointsResource;
    externalConnections: Telnyx.ExternalConnectionsResource;
    faxApplications: Telnyx.FaxApplicationsResource;
    messagingProfiles: Telnyx.MessagingProfilesResource;
    notificationEvents: Telnyx.NotificationEventsResource;
    phoneNumberAssignmentByProfile: Telnyx.PhoneNumberAssignmentByProfileResource;
    phoneNumbersCsvDownloads: Telnyx.PhoneNumbersCsvDownloadsResource;
    portingEvents: Telnyx.PortingEventsResource;
    portoutEvents: Telnyx.PortoutEventsResource;
    telephonyCredentials: Telnyx.TelephonyCredentialsResource;
    texmlApplications: Telnyx.TexmlApplicationsResource;
    storageBuckets: Telnyx.StorageBucketsResource;
    //

    webhooks: Telnyx.Webhooks;
    /**
     * API Errors
     */
    errors: typeof Telnyx.errors;
  }

  export default Telnyx;
}
