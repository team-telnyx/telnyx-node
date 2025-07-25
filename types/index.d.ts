/* eslint-disable @typescript-eslint/triple-slash-reference */

///<reference path='./lib.d.ts' />
///<reference path='./TelnyxAPI.d.ts' />
///<reference path='./Webhooks.d.ts' />
///<reference path='./Events.d.ts' />
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
///<reference path='./AddressesResource.d.ts' />
///<reference path='./AvailablePhoneNumbersResource.d.ts' />
///<reference path='./AvailablePhoneNumbersBlocksResource.d.ts' />
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
///<reference path='./FaxesResource.d.ts' />
///<reference path='./FaxApplicationsResource.d.ts' />
///<reference path='./FqdnConnectionsResource.d.ts' />
///<reference path='./FqdnsResource.d.ts' />
///<reference path='./InventoryCoverageResource.d.ts' />
///<reference path='./IpConnectionsResource.d.ts' />
///<reference path='./IpsResource.d.ts' />
///<reference path='./MessagesResource.d.ts' />
///<reference path='./MessagingProfilesResource.d.ts' />
///<reference path='./NotificationEventsResource.d.ts' />
///<reference path='./NumberOrdersResource.d.ts' />
///<reference path='./PhoneNumberAssignmentByProfileResource.d.ts' />
///<reference path='./PhoneNumbersCsvDownloadsResource.d.ts' />
///<reference path='./InboundChannelsResource.d.ts' />
///<reference path='./PhoneNumbersMessagingResource.d.ts' />
///<reference path='./PhoneNumbersVoiceResource.d.ts' />
///<reference path='./PhoneNumbersSlimResource.d.ts' />
///<reference path='./PhoneNumbersRegulatoryRequirementsResource.d.ts' />
///<reference path='./PhoneNumbersResource.d.ts' />
///<reference path='./PortabilityChecksResource.d.ts' />
///<reference path='./PortingEventsResource.d.ts' />
///<reference path='./PortingLoaConfigurationsResource.d.ts' />
///<reference path='./PortingPhoneNumbersResource.d.ts' />
///<reference path='./PortingOrdersResource.d.ts' />
///<reference path='./PortingReportsResource.d.ts' />
///<reference path='./PortoutEventsResource.d.ts' />
///<reference path='./RegulatoryRequirementsResource.d.ts' />
///<reference path='./TelephonyCredentialsResource.d.ts' />
///<reference path='./TexmlResource.d.ts' />
///<reference path='./TexmlApplicationsResource.d.ts' />
///<reference path='./StorageBucketsResource.d.ts' />
///<reference path='./VerificationsResource.d.ts' />
///<reference path='./VerifiedNumbersResource.d.ts' />
///<reference path='./VerifyProfilesResource.d.ts' />
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
    addresses: Telnyx.AddressesResource;
    availablePhoneNumbers: Telnyx.AvailablePhoneNumbersResource;
    availablePhoneNumbersBlocks: Telnyx.AvailablePhoneNumbersBlocksResource;
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
    faxes: Telnyx.FaxesResource;
    faxApplications: Telnyx.FaxApplicationsResource;
    fqdnConnections: Telnyx.FqdnConnectionsResource;
    fqdns: Telnyx.FqdnsResource;
    inboundChannels: Telnyx.InboundChannelsResource;
    inventoryCoverage: Telnyx.InventoryCoverageResource;
    ipConnections: Telnyx.IpConnectionsResource;
    ips: Telnyx.IpsResource;
    messages: Telnyx.MessagesResource;
    messagingProfiles: Telnyx.MessagingProfilesResource;
    notificationEvents: Telnyx.NotificationEventsResource;
    numberOrders: Telnyx.NumberOrdersResource;
    phoneNumberAssignmentByProfile: Telnyx.PhoneNumberAssignmentByProfileResource;
    phoneNumbersCsvDownloads: Telnyx.PhoneNumbersCsvDownloadsResource;
    phoneNumbersMessaging: Telnyx.PhoneNumbersMessagingResource;
    phoneNumbersVoice: Telnyx.PhoneNumbersVoiceResource;
    phoneNumbersSlim: Telnyx.PhoneNumbersSlimResource;
    phoneNumbersRegulatoryRequirements: Telnyx.PhoneNumbersRegulatoryRequirementsResource;
    phoneNumbers: Telnyx.PhoneNumbersResource;
    portabilityChecks: Telnyx.PortabilityChecksResource;
    portingEvents: Telnyx.PortingEventsResource;
    portingLoaConfigurations: Telnyx.PortingLoaConfigurationsResource;
    portingPhoneNumbers: Telnyx.PortingPhoneNumbersResource;
    portingOrders: Telnyx.PortingOrdersResource;
    portingReports: Telnyx.PortingReportsResource;
    portoutEvents: Telnyx.PortoutEventsResource;
    regulatoryRequirements: Telnyx.RegulatoryRequirementsResource;
    telephonyCredentials: Telnyx.TelephonyCredentialsResource;
    texml: Telnyx.TexmlResource;
    texmlApplications: Telnyx.TexmlApplicationsResource;
    storageBuckets: Telnyx.StorageBucketsResource;
    verifications: Telnyx.VerificationsResource;
    verifiedNumbers: Telnyx.VerifiedNumbersResource;
    verifyProfiles: Telnyx.VerifyProfilesResource;
    //

    webhooks: Telnyx.Webhooks;
    /**
     * API Errors
     */
    errors: typeof Telnyx.errors;
  }

  export default Telnyx;
}
