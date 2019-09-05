# CHANGELOG

#### v1.2.1 (2019-9-5)

##### Bug Fixes

* **webhooks:** replace c compiled ed25519 package with node tweetnacl

* **package:** fix install for node v12

### v1.2.0 (2019-8-19)

##### New Features

* **resources:** empty constructors on resources names, for Calls and Conferences

* **resources:** nested resources

* **resources:** new Aplhanumeric Sender ID endpoints

### v1.1.0 (2019-8-9)

##### New Features

* **webhooks:** validation algorithm update to ed25519

##### Bug Fixes

* **resources:** nested resources custom attributes assign

* **error-handling:** prevent undefined message on error handling

## v1.0.0 (2019-8-2)

##### New Features

* **Call Control:** Call commands, Call Events and Call Status

* **Number Reservations:** extend to have number reservations resources

* **Initial structure:** 
  * Remove references to charges and customers

  * Use safe example phone number

  * Load api base url from environment

  * Initial commit


##### Documentation Changes

* **README:** 
  * developer docs liks

  * fix integrations links

  * Improve wording in README regarding API key


##### Other Changes

* **testing:** `telnyx-mock` testing support

* **node:** Node version support
