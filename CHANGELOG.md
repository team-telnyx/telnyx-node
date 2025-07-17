# CHANGELOG

## v2

### v2.0.1

- Add Messaging Inbound Webhook example
- Add Calls `clientStateUpdate` method
- Remove usage of `ResponsePayload` generic type with specific types from types definitions, since required types are not accepted
- Remove `MessagingProfiles` resource `metrics` method
- Unnest `PhoneNumbers` resource `inboundChannels` method
- Update all type defs

### v2.0.0

- Typescript Support! :tada:

### v2.0.0-beta.6

- Add `connections` example
- Add `numbers` example
- Fix `WebhookHeader` type mismatch

### v2.0.0-beta.5

- Update `TelnyxAPI.d.ts` types
- Add missing `Events` and remove unused ones
- Remove `/tags` endpoint from `TelephonyCredentials` resource
- Update `ManagedAccounts` resource tests
- Remove network preferences endpoints from `SimCards` resource
- Remove unused `NumberOrderDocuments` resource
- Update `tsconfig.json` to use `Node16` module
- Update relative lib files to include js extension according to [moduleResolution](https://www.typescriptlang.org/tsconfig/#Modules_6244) config

### v2.0.0-beta.4

- Add `CONTRIBUTING.md` guidelines
- Update `README.md`
- Fix `tranformResponseData` misusage on `list` resource methods
- Update stale types on Portability, Porting and Portout resources methods

### v2.0.0-beta.3

- Add `Errors` type declaration
- Add `VERSIONS.md` information
- Update package dependencies for runtime usage

### v2.0.0-beta.2

- Add missing `Texml` resource methods
- Add missing `PhoneNumbers`, `NumberOrders` and `RegulatoryRequirements` resource methods
- Update types on stale resources methods

### v2.0.0-beta.1

- Fix `Queues` resource nested methods
- Fix `PortingOrders` and `Ips` resource nested methods param names
- Update legacy skipped tests
- Fix `Verifications`, `VerifyProfiles` and `VerifiedNumbers` resources method naming and params
- Remove dupe `Verify` resource
- Update nested methods types to match param values usage

### v2.0.0-beta.0

- Move `AutorespConfigs` resource to be nested in `MessagingProfiles`
- Fix nested resources in `Calls`, `MessagingProfiles` and `Conferences` ID usage instead of using constructors data
- Fix nested resources `Calls`, `MessagingProfiles` and `Conferences` method names
- Fix `Brand` resources method name
- Fix bug on `DELETE` operations empty `responseBody` JSON Parsing
- Update types on resources methods with multiple urlParams
- FIX: README Typo by @mpareja-godaddy in https://github.com/team-telnyx/telnyx-node/pull/186

### v2.0.0-alpha.7

- Export API callback `events` type definitions

### v2.0.0-alpha.6

- Update optional types on `Webhooks`
- Make optional types on `Fqdns`, `Ips`, `Messages` and `StorageBuckets` resources more strict

### v2.0.0-alpha.5

- Remove `ClientStateUpdate` resource
- Remove `MessagesAlphanumericSenderId` resource
- Remove `MessagingHostedNumber` resource
- Remove `MessagingPhoneNumbers` resource
- Remove `MessagingSenderIds` resource
- Remove `PublicKey` resource
- Remove `UpdateClientState` resource
- Remove `Debugging` dupe resource
- Update syntax on `Events` resources
- Update `ExternalConnections` stale resource
- Update `Messages` stale resource
- Update `Ip`s stale resources
- Update `AutorespConfigs` stale resource
- Update `DetailRecords` stale resource
- Update `InventoryCoverage` stale resource

### v2.0.0-alpha.4

- Add `Addresses` example
- Remove `BusinessIdentity` resource
- Remove `CallInformation` resource
- Remove duplicated `Credentials` resource
- Fixed `Conferences`, `Documents` and `TelephonyCredentials` method names
- Add missing resource types defs

### v2.0.0-alpha.3

- Update typing on Nested Resources

### v2.0.0-alpha.2

- Fix `AI` resource methods and created nested structure

### v2.0.0-alpha.1

- Update actions workflow versions to v4 and `.npmignore` to v2
- Update examples dependencies

### v2.0.0-alpha.0

- Add Typescript default config, linter and dependencies
- Bump default Node version to `20`
- Update README on [Development](./README.md#development) instructions
- Remove `yarn` in favor of `npm` 10
- Convert SDK files to Typescript
- Convert Resources to Typescript
- Use ES Modules syntax
- Update package `main` entrypoint to be compiled version of [src telnyx.ts](./src/telnyx.ts)
- Added `Jest` and create tests in Typescript
- Update tests expect matchers according to limitations with `prism mock`
- Add `nock` cleanup setup
- Make `setApiKey` TelnyxObject prototype method private
- Moved to `moduleResolution` Bundler to support better imports and tests with `Jest`
- Enabled `esModuleInterop` for Jest
- Update files included when publishing
- Remove custom resource get `generateAccessTokenFromCredential` from `TelephonyCredentials`
- Update `AutoRechargePreferences` resource
- Remove `RegisterCall` resource
- Remove `ProgrammableFaxCommants` specs
- Remove `BulkCreation` resource
- Update `TexmlApplications` resource
- Remove `Conferences` `dial_participant` action
- Remove `SimCards` `deletePublicIp` and `setPublicIp`
- Update `Queues` method names to camelCase
- Remove `VerifiedCallsDisplayProfile` resource
- Update examples to Typescript
- Remove duplicated `AccessTokens` resource
- Move custom `AdvancedOptinoptout` resource to be `AutoRespConfigs` resource
- Remove `Billing` resource
- Remove inexistent `Bucket` resource
- Move `BucketUsage` resource to `StorageBuckets`
- Remove duplicated `BulkPhoneNumberCampaigns` resource
- Remove duplicated `BulkPhoneNumberOperations` resource

## v1

### v1.26.2

- Fix Brand and Campaign redirects
- Update security

### v1.26.1

- Fix porting comments

### v1.26.0

- Endpoint additions
- Package upgrades
- Preparation for typescript migration/support

### v1.25.5

- Security Updates + API Additions

### v1.23.0 (2021-10-19)

- **Addresses** added `validate`
- **AuthenticationProvider** added `list`, `create`, `retrieve`, `update`, `del`
- **DynamicEmergency** (for `endpoints` and `addresses`) added `list`, `retrieve`, `create`, `del`
- **InventoryCoverage** added `request`
- **NumberBackgroundJobs** added `list`, `retrieve`, `updateEmergencySettings`, `updateNumbers`, `deleteNumbers`
- **PhoneNumbers** added `setEmergencySettings`
- **PortabilityChecks** added `run`
- **PortingOrders** added `listExceptionTypes`, `listActivationJobs`, `cancelOrder`, `listAllowedFocWindows`
- **PortingPhoneNumber** added `list`
- **PortoutRequests** added `list`, `retrieve`, `updateStatus`, `listComments`, `createComment`
- **SimCards** added `setStandby`, `retrievePublicIP`, `setPublicIP`, `deletePublicIP`
- **WirelessDetailRecordReports** added `list`, `create`, `retrieve`, `del`

### v1.22.0 (2021-09-23)

- **resources** Additional support for Verification endpoint

### v1.21.0 (2021-09-15)

- **Conference** added `retrieve`, `participants`, `speak`, `play`, `stop`, `record_start`, `record_stop`, `update`, `leave`

### v1.20.0 (2021-09-14)

- **PortingOrders** added porting orders endpoint

### v1.19.0 (2021-08-26)

- **DetailRecords** added detail records endpoint

### v1.18.0 (2021-07-28)

- **resources** Additional support for Telephony Credentials (WebRTC)

### v1.17.0 (2021-07-19)

- **SMS Verification** add support for BySMS Verification Codes

### v1.16.0 (2021-07-15)

- **call control** added enqueuing
- **SIM** added more coverage

### v1.15.0 (2021-04-26)

- **call control** added `gather_stop`, `record_pause`, `refer`, `record_resume`, `transcription_start`, `transcription_stop`

### v1.13.0 (2021-03-29)

- **resources** Hosted Messaging Support

### v1.12.0 (2021-03-15)

- **bug fix** PhoneNumberRegulatoryRequirements now hits `phone_numbers_regulatory_requirements`
- **resources** Fax support

### v1.11.1 (2021-01-19)

- **resources:** Fax Applications

### v1.11.0 (2020-12-18)

- **resources:** Verify Profiles

- **resources:** Verifications

- **build:** Github Actions

#### v1.10.3 (2020-12-15)

##### Bug Fixes

- **resources:** Add function `tryParseJSON` to avoid parse invalid objects.

##### New Features

- **resources:** Telephony Credentials

#### v1.10.2 (2020-10-16)

##### Bug Fixes

- **resources:** Add Phone Numbers Retrieve Method

#### v1.10.1 (2020-09-24)

##### Bug Fixes

- **resources:** Recreate resources on constructor call

### v1.10.0 (2020-08-07)

- **resources:** Messaging Profile Metrics

- **resources:** Short Codes

### v1.9.0 (2020-07-22)

- **resources:** SIM Card Enable/Disable Methods

### v1.8.0 (2020-07-14)

- **resources:** OTA Updates

- **resources:** SIM Card Groups

- **resources:** Mobile Operator Networks

- **resources:** SIM Card Network Preferences Methods

- **resources:** Number Lookup

- **resources:** Balance

- **resources:** Addresses

- **resources:** Faxes

#### v1.7.2 (2020-04-20)

##### New Features

- **resources:** Inbound Channels

- **resources:** Call Control Application

- **resources:** Outbound Voice Profiles

#### v1.7.1 (2020-01-30)

##### Bug Fixes

- **resources:** Clear leftover state in nested methods

- **webhook:** Update examples

### v1.7.0 (2020-01-30)

##### New Features

- **resources:** Connections

- **resources:** Ips

- **resources:** FQDNs

### v1.6.0 (2019-12-18)

##### New Features

- **resources:** Number Order Regulatory Requirements

- **resources:** Number Order Documents

### v1.5.0 (2019-12-16)

##### New Features

- **resources:** Credential Connections

- **resources:** FQDN Connections

- **resources:** IP Connections

### v1.4.0 (2019-12-12)

##### New Features

- **resources:** Billing Groups

- **webhooks:** Inbound Call Control example

### v1.3.0 (2019-11-14)

##### New Features

- **resources:** SIM Cards

- **resources:** Phone Numbers

#### v1.2.4 (2019-10-22)

##### Bug Fixes

- **resources:** fix content-length header calculation on requestData
  - account for multi-byte chars on getting request data length (e.g.: `en dash`)
  - improve specs

#### v1.2.3 (2019-9-25)

##### Bug Fixes

- **query-string:** fix query parameter array format. Use 'brackets'

#### v1.2.2 (2019-9-9)

##### Bug Fixes

- **webhooks:** fix signature verification with tweetnacl

#### v1.2.1 (2019-9-5)

##### Bug Fixes

- **webhooks:** replace c compiled ed25519 package with node tweetnacl

- **package:** fix install for node v12

### v1.2.0 (2019-8-19)

##### New Features

- **resources:** empty constructors on resources names, for Calls and Conferences

- **resources:** nested resources

- **resources:** new Aplhanumeric Sender ID endpoints

### v1.1.0 (2019-8-9)

##### New Features

- **webhooks:** validation algorithm update to ed25519

##### Bug Fixes

- **resources:** nested resources custom attributes assign

- **error-handling:** prevent undefined message on error handling

### v1.0.0 (2019-8-2)

##### New Features

- **Call Control:** Call commands, Call Events and Call Status

- **Number Reservations:** extend to have number reservations resources

- **Initial structure:**

  - Remove references to charges and customers

  - Use safe example phone number

  - Load api base url from environment

  - Initial commit

##### Documentation Changes

- **README:**

  - developer docs liks

  - fix integrations links

  - Improve wording in README regarding API key

##### Other Changes

- **testing:** `telnyx-mock` testing support

- **node:** Node version support
