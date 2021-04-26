# CHANGELOG

### v1.15.0 (2021-04-26)

- **call control** added `gather_stop`, `record_pause`, `refer`, `record_resume`, `transcription_start`, `transcription_stop`

### v1.13.0 (2021-03-29)

- **resources** Hosted Messaging Support

### v1.12.0 (2021-03-15)

- **bug fix** PhoneNumberRegulatoryRequirements now hits `phone_numbers_regulatory_requirements`
- **resources** Fax support

### v1.11.1 (2021-01-19)

##### New Features

- **resources:** Fax Applications

### v1.11.0 (2020-12-18)

##### New Features

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

##### New Features

- **resources:** Messaging Profile Metrics

- **resources:** Short Codes

### v1.9.0 (2020-07-22)

##### New Features

- **resources:** SIM Card Enable/Disable Methods

### v1.8.0 (2020-07-14)

##### New Features

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

## v1.0.0 (2019-8-2)

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
