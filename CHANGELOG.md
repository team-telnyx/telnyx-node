# Changelog

## 5.17.2 (2026-02-03)

Full Changelog: [v5.17.1...v5.17.2](https://github.com/team-telnyx/telnyx-node/compare/v5.17.1...v5.17.2)

### Bug Fixes

* **client/oauth:** send grant_type in the right location ([186b688](https://github.com/team-telnyx/telnyx-node/commit/186b688640ae2eb855879c28f57143e6b0f6326c))


### Chores

* **internal:** support oauth authorization code flow for MCP servers ([a45c24c](https://github.com/team-telnyx/telnyx-node/commit/a45c24c7057009df92775020d121bd3dbb017ba5))

## 5.17.1 (2026-02-02)

Full Changelog: [v5.17.0...v5.17.1](https://github.com/team-telnyx/telnyx-node/compare/v5.17.0...v5.17.1)

### Bug Fixes

* **client:** avoid memory leak with abort signals ([42d0342](https://github.com/team-telnyx/telnyx-node/commit/42d034266820cb830c3bac92967dbea63930ef07))


### Chores

* **client:** do not parse responses with empty content-length ([39126a0](https://github.com/team-telnyx/telnyx-node/commit/39126a0ddefc3a0ee2617d85507c70d4b3cd9cef))

## 5.17.0 (2026-01-30)

Full Changelog: [v5.16.1...v5.17.0](https://github.com/team-telnyx/telnyx-node/compare/v5.16.1...v5.17.0)

### Features

* **api:** manual updates ([2b7d971](https://github.com/team-telnyx/telnyx-node/commit/2b7d9718f0f37bbc9d8045a94b47c923bd1a1d39))

## 5.16.1 (2026-01-30)

Full Changelog: [v5.16.0...v5.16.1](https://github.com/team-telnyx/telnyx-node/compare/v5.16.0...v5.16.1)

### Bug Fixes

* remove deprecated TeXML API endpoints from OpenAPI spec ([4198616](https://github.com/team-telnyx/telnyx-node/commit/4198616230cc94187cd610c5ebe9eca1b662ddb9))
* use PaginationMeta schema for ListFaxesResponse.meta ([cac839b](https://github.com/team-telnyx/telnyx-node/commit/cac839ba21def2a874b89aea352359565cbabe2f))

## 5.16.0 (2026-01-29)

Full Changelog: [v5.15.0...v5.16.0](https://github.com/team-telnyx/telnyx-node/compare/v5.15.0...v5.16.0)

### Features

* **api:** revert bad update to spec ([fcaa321](https://github.com/team-telnyx/telnyx-node/commit/fcaa3212136c8f03032c776f9ac682c21a44b74d))

## 5.15.0 (2026-01-29)

Full Changelog: [v5.14.0...v5.15.0](https://github.com/team-telnyx/telnyx-node/compare/v5.14.0...v5.15.0)

### Features

* Add deepgram/nova-3 transcription engine option to record_start ([19ab790](https://github.com/team-telnyx/telnyx-node/commit/19ab790ae1e50316423dbdd328c0a419bbde29c8))


### Chores

* **mcp:** up tsconfig lib version to es2022 ([c1d7354](https://github.com/team-telnyx/telnyx-node/commit/c1d7354af5513c6da1794e0a4d6c08b2431b0705))

## 5.14.0 (2026-01-28)

Full Changelog: [v5.13.1...v5.14.0](https://github.com/team-telnyx/telnyx-node/compare/v5.13.1...v5.14.0)

### Features

* Fix broken documentation links ([5b98b5b](https://github.com/team-telnyx/telnyx-node/commit/5b98b5bc667c698723dd69d7d7e41af38e7b8327))


### Bug Fixes

* **docs:** fix mcp installation instructions for remote servers ([4dab2e8](https://github.com/team-telnyx/telnyx-node/commit/4dab2e8d324cb33be0d1aa6cacbe36ef27801706))

## 5.13.1 (2026-01-28)

Full Changelog: [v5.13.0...v5.13.1](https://github.com/team-telnyx/telnyx-node/compare/v5.13.0...v5.13.1)

### Bug Fixes

* **mcp:** allow falling back for required env variables ([b43fc58](https://github.com/team-telnyx/telnyx-node/commit/b43fc584c8260e2a77cbabf04799d84321d330de))

## 5.13.0 (2026-01-27)

Full Changelog: [v5.12.0...v5.13.0](https://github.com/team-telnyx/telnyx-node/compare/v5.12.0...v5.13.0)

### Features

* Deploy dev/mc vady wip ([17e0e6b](https://github.com/team-telnyx/telnyx-node/commit/17e0e6bc099f4e15643c0be8eb0d154aef7adc9f))


### Chores

* **internal:** codegen related update ([4d412d0](https://github.com/team-telnyx/telnyx-node/commit/4d412d0bf2881d00093e5e802bd236dbdd543b7d))

## 5.12.0 (2026-01-27)

Full Changelog: [v5.11.0...v5.12.0](https://github.com/team-telnyx/telnyx-node/compare/v5.11.0...v5.12.0)

### Features

* jira-engdesk-49089 add new connection jitter buffer related fields ([36b7e86](https://github.com/team-telnyx/telnyx-node/commit/36b7e866c9f18c5f5a8f50def12cc777d7dedf12))


### Chores

* **ci:** upgrade `actions/github-script` ([50d4ada](https://github.com/team-telnyx/telnyx-node/commit/50d4adae6560bb752f7c6df653beb58a73ae845d))

## 5.11.0 (2026-01-22)

Full Changelog: [v5.10.0...v5.11.0](https://github.com/team-telnyx/telnyx-node/compare/v5.10.0...v5.11.0)

### Features

* **api:** manual updates ([db90274](https://github.com/team-telnyx/telnyx-node/commit/db90274fa1be194621f79cbe1008cc80fbd4c1a6))
* Deploy dev/mc vady wip ([09563d0](https://github.com/team-telnyx/telnyx-node/commit/09563d0f94b48a1414de62521ba8a5dcf9b3f31b))

## 5.10.0 (2026-01-21)

Full Changelog: [v5.9.0...v5.10.0](https://github.com/team-telnyx/telnyx-node/compare/v5.9.0...v5.10.0)

### Features

* fix-redocly-lint-issues ([4266b94](https://github.com/team-telnyx/telnyx-node/commit/4266b942b9b52799c52531a50d4c40556a841db0))

## 5.9.0 (2026-01-20)

Full Changelog: [v5.8.0...v5.9.0](https://github.com/team-telnyx/telnyx-node/compare/v5.8.0...v5.9.0)

### Features

* Add Post /v2/calls/:call_control_id/actions/ai_assistant_add_messages ([cc048a5](https://github.com/team-telnyx/telnyx-node/commit/cc048a5cdbf0d18e54e08b66a04976b692fa6e90))


### Chores

* **internal:** codegen related update ([28ab632](https://github.com/team-telnyx/telnyx-node/commit/28ab63254137189a4ed13b71d65439c8869ecb9d))
* **internal:** codegen related update ([386696f](https://github.com/team-telnyx/telnyx-node/commit/386696f257f2888df7568906e7568cc0db6da831))

## 5.8.0 (2026-01-20)

Full Changelog: [v5.7.1...v5.8.0](https://github.com/team-telnyx/telnyx-node/compare/v5.7.1...v5.8.0)

### Features

* Update voicemail_detection description with AMD enablement info ([a384d06](https://github.com/team-telnyx/telnyx-node/commit/a384d0630e9b2558ccbb20119728b58c71c516d3))

## 5.7.1 (2026-01-19)

Full Changelog: [v5.7.0...v5.7.1](https://github.com/team-telnyx/telnyx-node/compare/v5.7.0...v5.7.1)

### Bug Fixes

* correct broken link to List SIM Card Actions endpoint in SIM car… ([844c5eb](https://github.com/team-telnyx/telnyx-node/commit/844c5eb2eb9c931c6a56f1b205eb0127c1391c4c))

## 5.7.0 (2026-01-19)

Full Changelog: [v5.6.0...v5.7.0](https://github.com/team-telnyx/telnyx-node/compare/v5.6.0...v5.7.0)

### Features

* Add AI Assistant spec updates for FE tickets ([e41680b](https://github.com/team-telnyx/telnyx-node/commit/e41680b25d8cda0ae0e029b8e4c14f717fc465e5))


### Chores

* formatting ([d6ca87e](https://github.com/team-telnyx/telnyx-node/commit/d6ca87edcfd2aa4243673e9cb3876efccd076d4a))
* update lockfile ([58dd42b](https://github.com/team-telnyx/telnyx-node/commit/58dd42b2dff23aefcd5bfc5a8e12e71bae9d032d))

## 5.6.0 (2026-01-19)

Full Changelog: [v5.5.0...v5.6.0](https://github.com/team-telnyx/telnyx-node/compare/v5.5.0...v5.6.0)

### Features

* fix-external-connection-link ([5acda1b](https://github.com/team-telnyx/telnyx-node/commit/5acda1bcf2a6e470b3a4df74a0b0971ce0a28d02))

## 5.5.0 (2026-01-16)

Full Changelog: [v5.4.0...v5.5.0](https://github.com/team-telnyx/telnyx-node/compare/v5.4.0...v5.5.0)

### Features

* TELAPPS-5507: Add Krisp engine description for noise suppression ([00b6de9](https://github.com/team-telnyx/telnyx-node/commit/00b6de93fd60aca0b44ac684e4fb4948268bc7bf))


### Bug Fixes

* update broken MDR report link in GetMessage endpoint ([0918b35](https://github.com/team-telnyx/telnyx-node/commit/0918b35972dba786824fbeefd1528d3f93b3c7b0))

## 5.4.0 (2026-01-16)

Full Changelog: [v5.3.0...v5.4.0](https://github.com/team-telnyx/telnyx-node/compare/v5.3.0...v5.4.0)

### Features

* fix links ([85a71db](https://github.com/team-telnyx/telnyx-node/commit/85a71dbb46db9add803535fdc1c7e7623c60c74e))


### Chores

* **internal:** update `actions/checkout` version ([91bd1ed](https://github.com/team-telnyx/telnyx-node/commit/91bd1ed98588453e9658796d232efb45d23b0851))

## 5.3.0 (2026-01-16)

Full Changelog: [v5.2.2...v5.3.0](https://github.com/team-telnyx/telnyx-node/compare/v5.2.2...v5.3.0)

### Features

* jira-engdesk-48800 add organizations-related docs to the external api… ([180acfe](https://github.com/team-telnyx/telnyx-node/commit/180acfed6213534df680f8ef9f6ff662fefc0976))
* MSG-6148: adding the new campaignVerifyAuthorizationToken field and missing GET OTP endpoint ([e3a915f](https://github.com/team-telnyx/telnyx-node/commit/e3a915f9870a1c32a97c3bb26ac85bdb22aa1283))
* MSG-6228: MSG-6228: Add smart_encoding option for SMS character encoding optimization ([711fa10](https://github.com/team-telnyx/telnyx-node/commit/711fa10202dab429008931e2fea004b725bfdd26))
* TELAPPS-ENGDESK-48790 Remove duplicated webhooks ([0e1ae0c](https://github.com/team-telnyx/telnyx-node/commit/0e1ae0cc14c89ed5f0301bbb49f72a2f4c82731e))


### Bug Fixes

* **lint:** resolve linting errors ([58f9224](https://github.com/team-telnyx/telnyx-node/commit/58f92241dd6233c9df79dc4d7f866ad99029056c))


### Chores

* **internal:** update lock file ([b92852e](https://github.com/team-telnyx/telnyx-node/commit/b92852ed14e5fd03cbe82fc8c138d260d2c38ff7))
* **internal:** upgrade babel, qs, js-yaml ([7074a11](https://github.com/team-telnyx/telnyx-node/commit/7074a117bc247b2d9df586d442f124a61bf33eb2))
* **internal:** upgrade brace-expansion and @babel/helpers ([2ced243](https://github.com/team-telnyx/telnyx-node/commit/2ced2430709cb5f1b4f5a9e25196ebc194d98d22))

## 5.2.2 (2026-01-14)

Full Changelog: [v5.2.1...v5.2.2](https://github.com/team-telnyx/telnyx-node/compare/v5.2.1...v5.2.2)

### Chores

* **internal:** bump MCP dependencies ([ea0deaf](https://github.com/team-telnyx/telnyx-node/commit/ea0deaf887160193c184cc63561dc47bd927f1ef))
* **internal:** codegen related update ([7b9645d](https://github.com/team-telnyx/telnyx-node/commit/7b9645d53bbcc78ef7745c9d10959701219d04c9))
* **internal:** codegen related update ([161b9c9](https://github.com/team-telnyx/telnyx-node/commit/161b9c9e0b3780931d5699812bb9550ca3ece08a))
* **internal:** codegen related update ([6cd4091](https://github.com/team-telnyx/telnyx-node/commit/6cd4091ad5550747c23139e31abe4d2d16743676))
* **mcp:** pass intent param to execute handler ([59d00b0](https://github.com/team-telnyx/telnyx-node/commit/59d00b094725bcf699f26d830d4dd084f92c8339))

## 5.2.1 (2026-01-14)

Full Changelog: [v5.2.0...v5.2.1](https://github.com/team-telnyx/telnyx-node/compare/v5.2.0...v5.2.1)

### Bug Fixes

* flag defaults ([9fd8e39](https://github.com/team-telnyx/telnyx-node/commit/9fd8e39070f7b5e145e7a966cf00d75a8d970486))


### Chores

* **internal:** codegen related update ([44dc53a](https://github.com/team-telnyx/telnyx-node/commit/44dc53aabe624395646e34f70c323d6aa8a32f09))
* **internal:** codegen related update ([9eda1d5](https://github.com/team-telnyx/telnyx-node/commit/9eda1d5e02a2e35f03e0e22bcc1a8efeb4a2a54c))
* **mcp:** add intent param to execute tool ([2eebcab](https://github.com/team-telnyx/telnyx-node/commit/2eebcab3511d148acbffb609c6088141e82fb178))

## 5.2.0 (2026-01-14)

Full Changelog: [v5.1.0...v5.2.0](https://github.com/team-telnyx/telnyx-node/compare/v5.1.0...v5.2.0)

### Features

* **api:** fix default pagination by correctly using nested params ([b88be4a](https://github.com/team-telnyx/telnyx-node/commit/b88be4a8e08ab2c477c5f15a5a8e6345bc278cf6))


### Chores

* **mcp:** upgrade dependencies ([da8ec21](https://github.com/team-telnyx/telnyx-node/commit/da8ec218cc8c456cc5ba020dcff37e119e49f9f4))

## 5.1.0 (2026-01-13)

Full Changelog: [v5.0.0...v5.1.0](https://github.com/team-telnyx/telnyx-node/compare/v5.0.0...v5.1.0)

### Features

* Add widget_settings to AI Assistant and import_ids to ImportAssistant… ([caf118b](https://github.com/team-telnyx/telnyx-node/commit/caf118b27c5c376e5b321d12f52e9637fe273a26))
* **api:** manual updates ([b928fbd](https://github.com/team-telnyx/telnyx-node/commit/b928fbde25bfb988a746b60ce05ba32a3634cd91))
* TELAPPS Add GET /texml/Accounts/{account_sid}/Queues endpoint ([000d1e6](https://github.com/team-telnyx/telnyx-node/commit/000d1e6b7fdef4bced3cae144fe46ca9938b4a4d))
* TELAPPS-ENGDESK-47967 Add black_threshold parameter to send_fax request ([245244b](https://github.com/team-telnyx/telnyx-node/commit/245244be65960fedb159448bbc3eb799ccab8287))


### Chores

* fix typo in descriptions ([9cc116e](https://github.com/team-telnyx/telnyx-node/commit/9cc116e80d7002adfefab896460bd894757ab6b5))
* **internal:** codegen related update ([a65d3e6](https://github.com/team-telnyx/telnyx-node/commit/a65d3e6c94a9a658b6e112979093113d4add8fdd))
* **internal:** codegen related update ([121e210](https://github.com/team-telnyx/telnyx-node/commit/121e210085ac0ff79cc90be620edc657f4e28c7e))

## 5.0.0 (2026-01-12)

Full Changelog: [v4.6.0...v5.0.0](https://github.com/team-telnyx/telnyx-node/compare/v4.6.0...v5.0.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.
* Resolved all codegen errors

### Features

* [PORT-4538] Fix ambiguous oneOf instances on porting service and documents ([9c3c817](https://github.com/team-telnyx/telnyx-node/commit/9c3c8177155c9705cb67c5cfa425a6a44cf6b38d))
* Add AI assistant voice settings, telephony config, and tools updates ([411c794](https://github.com/team-telnyx/telnyx-node/commit/411c7946061c1aefd9c360869671a4b7c7148aa4))
* **api:** join all 10dlc operations into messaging_10dlc group ([f76f636](https://github.com/team-telnyx/telnyx-node/commit/f76f6361bf6ca1abd80cacbd84f144c33bded979))
* **api:** manual updates ([4cdc5a5](https://github.com/team-telnyx/telnyx-node/commit/4cdc5a545c2f5cec61ddd8b79cbf374c13b0b135))
* **api:** manual updates ([e8f8ade](https://github.com/team-telnyx/telnyx-node/commit/e8f8adef9495efffdb24bea3befa7521f2e98894))
* **api:** manual updates ([181375b](https://github.com/team-telnyx/telnyx-node/commit/181375b426e9c08a91d8f6cca498f1e19ab62d78))
* **api:** manual updates ([277c1b9](https://github.com/team-telnyx/telnyx-node/commit/277c1b97385d8c5a752043e21ae8bcabe172a0c0))
* **api:** manual updates ([6f0cdb7](https://github.com/team-telnyx/telnyx-node/commit/6f0cdb70e7dd8f616fd4dd0257e6a4522c1792d8))
* **api:** messaging_10dlc group with all their endpoints ([a9ceb01](https://github.com/team-telnyx/telnyx-node/commit/a9ceb0169bb7d92c71b3d7ac015b87b92e520234))
* **api:** reverted previous commit ([19d4fce](https://github.com/team-telnyx/telnyx-node/commit/19d4fce4304ecaf040d3a3b959a4243e9c202f8f))
* Document supervising leg of call ([21062d5](https://github.com/team-telnyx/telnyx-node/commit/21062d5c4c5652f5810db8ebbb444827d4d63759))
* DOTCOM-5145. Update redocly lint to block new lint errors or warning being introduced ([657cc7d](https://github.com/team-telnyx/telnyx-node/commit/657cc7de7a6421dd71b83e43decd3a98f795192b))
* DOTCOM-5179. Fix Redocly errors in outbound-voice-profiles.json ([ea4365d](https://github.com/team-telnyx/telnyx-node/commit/ea4365d60f7b100e92a607de3e83f615bb655f3b))
* Draft. DOTCOM-5184. Fix 44 errors in the spec as reported by Redocly on video ([a777f1a](https://github.com/team-telnyx/telnyx-node/commit/a777f1af201ca317ad0cc39226a1de7a255a3d5e))
* Engdesk 47920/wireless cleanup ([7f03be7](https://github.com/team-telnyx/telnyx-node/commit/7f03be7cbf2cd21aa1ed888eda4ebd89a579ec26))
* ENGDESK-47883: Fix all lint errors in telapps owned APIs ([a88c260](https://github.com/team-telnyx/telnyx-node/commit/a88c26000c1849fb9da2c02bb197b237b74c1050))
* ENGDESK-47914 - fix warnings in numbers.json file ([6ff5cd6](https://github.com/team-telnyx/telnyx-node/commit/6ff5cd60896a78cb99aaa27fb353711118005eac))
* ENGDESK-47947 - fix wrong type on user-addresses request object ([92713e7](https://github.com/team-telnyx/telnyx-node/commit/92713e7e7cfe4408690bf1686e2f4504084869b2))
* ENGDESK-48016 - document simultaneous ringing for CredentialConnections ([861c99a](https://github.com/team-telnyx/telnyx-node/commit/861c99a323e88b86927adcde827985c734c01292))
* ENGDESK-48254: Release noise suppression details docs to prod ([d582676](https://github.com/team-telnyx/telnyx-node/commit/d582676cdfae792e4dd00ddb2aa265a35c55e01a))
* Fix campaign usecase endpoint: /registry/enum/usecase → /10dlc/enum/usecase ([9dfb6f3](https://github.com/team-telnyx/telnyx-node/commit/9dfb6f37a33d4860d1f9cdfd307ab534e59fcbd7))
* fix redocly lint issues ([a595f98](https://github.com/team-telnyx/telnyx-node/commit/a595f988c2b65a4b77cadd6435b73819825ad48f))
* hotfix: restore 10dlc prefixes ([584b0a7](https://github.com/team-telnyx/telnyx-node/commit/584b0a72e47cd42bd9773c87bdeb79828a6f7d14))
* Improve messaging API naming and navigation ([d9417c5](https://github.com/team-telnyx/telnyx-node/commit/d9417c5db73a06820feb414d0f011e449b1b3759))
* messaging meta object with required fields ([7a81665](https://github.com/team-telnyx/telnyx-node/commit/7a81665ec537af458e649c2910b576aa592f68a5))
* Msg 6152 ([938de08](https://github.com/team-telnyx/telnyx-node/commit/938de08e31ef07d4cc3522e4b6560de23c14440b))
* MSG-6140: Add SMS OTP endpoints for Sole Prop brands ([acc122c](https://github.com/team-telnyx/telnyx-node/commit/acc122cd2e4828402c9fe11c5cd2fc09056cc3d0))
* port-4551: remove CustomerServiceRecordStatusChanged webhook doc ([63ac0f3](https://github.com/team-telnyx/telnyx-node/commit/63ac0f36733bfe6a23ae19813a1d9b039c44c598))
* PORT-4553: Add a discriminator to portout webhook ([576bfa4](https://github.com/team-telnyx/telnyx-node/commit/576bfa4101e42f646eb3697520948994fa81eed0))
* PORTAL-5787 - document query parameter to handle messaging service error ([c563140](https://github.com/team-telnyx/telnyx-node/commit/c56314056da7dc23e8791a989429732c6a5cd634))
* TBS-3422: Fix redocly errors ([9ca5b7d](https://github.com/team-telnyx/telnyx-node/commit/9ca5b7d3aab2bdbe64f4a0867ee6b233cddf82d9))
* TELAPPS-47889 Add texml queue endpoint ([3ec7d0e](https://github.com/team-telnyx/telnyx-node/commit/3ec7d0e00b244ed6bd79e24cc84ff0da1c8c8ec1))
* TELAPPS-5428 Add speech-to-text WS endpoint ([100a4bc](https://github.com/team-telnyx/telnyx-node/commit/100a4bc95e43e3edcaf311d336794df60e6533c9))


### Bug Fixes

* **client:** lint ([3eb0ba2](https://github.com/team-telnyx/telnyx-node/commit/3eb0ba20a6c32abdf719b7ed41da57adb0545c93))
* **client:** restore generated webhooks code ([1b65f0d](https://github.com/team-telnyx/telnyx-node/commit/1b65f0de43ccfaa341881210a444b4d6b37fd7a0))
* correct broken hyperlinks in Submit Campaign endpoint description ([06ee84e](https://github.com/team-telnyx/telnyx-node/commit/06ee84ee3e91fc546348d3c3fc900ed5523dbfb0))
* make text field optional in AssistantSmsChatReq schema ([74102ea](https://github.com/team-telnyx/telnyx-node/commit/74102eac6be6b5e623eb8b168edf3b557fdccb3b))
* **mcp:** add client instantiation options to code tool ([5bd6ec8](https://github.com/team-telnyx/telnyx-node/commit/5bd6ec84b0fb7fd16e1d69703b95a3dd96b1f08a))
* **mcp:** correct code tool api output types ([683c0b3](https://github.com/team-telnyx/telnyx-node/commit/683c0b302fecbf19d773db5926b3290c511800eb))
* **mcp:** fix options parsing ([31fb727](https://github.com/team-telnyx/telnyx-node/commit/31fb7278e7155fe11634768648121202c479afcf))
* **mcp:** pass base url to code tool ([364b539](https://github.com/team-telnyx/telnyx-node/commit/364b539dff8dd4cc0b963b8be9816794f455b844))
* **mcp:** update code tool prompt ([f0dde0e](https://github.com/team-telnyx/telnyx-node/commit/f0dde0e52bde0e2fe929f5be1a08625a4ded18f4))
* **stainless:** fixes the messsages typo ([e6e60db](https://github.com/team-telnyx/telnyx-node/commit/e6e60dbcf7a2ae18abeab5aa981cf06e20904987))
* **test:** resolve prettier failure ([7146dcf](https://github.com/team-telnyx/telnyx-node/commit/7146dcf3ecc47ff7689eca3c555f9fbb1bb3a31d))


### Chores

* break long lines in snippets into multiline ([67a28b6](https://github.com/team-telnyx/telnyx-node/commit/67a28b6d1b4ba83cce3af11bd7dadd68eea43f86))
* **internal:** codegen related update ([f39a0c8](https://github.com/team-telnyx/telnyx-node/commit/f39a0c8d515b37ce80f7d9b04160d678e8474e7c))
* **internal:** codegen related update ([f88a57b](https://github.com/team-telnyx/telnyx-node/commit/f88a57b8d7865d0e44dcab0107659d61da35b066))
* **internal:** codegen related update ([3e5f17b](https://github.com/team-telnyx/telnyx-node/commit/3e5f17b64d3054db3042b37c87706ec278384c3a))
* **mcp:** remove deprecated tool schemes ([afd7155](https://github.com/team-telnyx/telnyx-node/commit/afd715554e9a516d68c96662ea7031ece1ee5bfd))
* Resolved all codegen errors ([8da376e](https://github.com/team-telnyx/telnyx-node/commit/8da376e3135660348141550f8743e38f46796199))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([6ed1cbe](https://github.com/team-telnyx/telnyx-node/commit/6ed1cbe6685f92e9e21226c88f32c559e603b9cd))

## 4.6.0 (2025-12-08)

Full Changelog: [v4.5.1...v4.6.0](https://github.com/team-telnyx/telnyx-node/compare/v4.5.1...v4.6.0)

### Features

* (draft/don't review) ENGDESK-38070-c: add deepgram keyword documentation ([e664006](https://github.com/team-telnyx/telnyx-node/commit/e664006382da1368161a13bd280d8d5a820c502e))
* Chat completions response schema update ([15f6c03](https://github.com/team-telnyx/telnyx-node/commit/15f6c035f27f995c20191e02dfea5410b51cc4a4))
* ENGDESK-47706: Update TranscriptionEngineDeepgramConfig Schema ([d89f89d](https://github.com/team-telnyx/telnyx-node/commit/d89f89d3e8d7db4de4e650c6199aa6272d05b108))
* ENGDESK-47886: Fix API spec for emergency.json ([1d989c8](https://github.com/team-telnyx/telnyx-node/commit/1d989c8b2ae75598bd5e885daf7584e5e8bb3e47))
* MSG-6179: Add discriminator fields to Messaging API schemas for improved SDK performance ([a6a9d89](https://github.com/team-telnyx/telnyx-node/commit/a6a9d89fb46df93a1ea4bb2414f6132940502317))
* Update default GATHER_USING_AI_MODEL ([7c6ca86](https://github.com/team-telnyx/telnyx-node/commit/7c6ca86a1684836f3e2d4df10fbdaaf4f6c8f8e0))


### Bug Fixes

* **api:** 10dlc prefixes ([7665612](https://github.com/team-telnyx/telnyx-node/commit/76656123576fdb89e90f6bb61532fe48ec33496e))

## 4.5.1 (2025-12-05)

Full Changelog: [v4.5.0...v4.5.1](https://github.com/team-telnyx/telnyx-node/compare/v4.5.0...v4.5.1)

### Bug Fixes

* **mcp:** correct code tool API endpoint ([ec78834](https://github.com/team-telnyx/telnyx-node/commit/ec788341d296a870056eb4c378bb7ceade8d50e0))


### Chores

* **internal:** codegen related update ([a95cda0](https://github.com/team-telnyx/telnyx-node/commit/a95cda0da06c1e4d6d44d8aa7f0c79439289c88d))

## 4.5.0 (2025-12-05)

Full Changelog: [v4.4.0...v4.5.0](https://github.com/team-telnyx/telnyx-node/compare/v4.4.0...v4.5.0)

### Features

* ENGDESK-47736: added discriminator fields to oneOffs that were missing them ([68c6537](https://github.com/team-telnyx/telnyx-node/commit/68c653786d7d9c1779655e8501ecf449959b6048))
* FILE-1066: presigned url doc strings ([8e1c1a8](https://github.com/team-telnyx/telnyx-node/commit/8e1c1a840e1b206c508d5c11aab2f542c2c37d6b))
* **mcp:** add typescript check to code execution tool ([a2d14ea](https://github.com/team-telnyx/telnyx-node/commit/a2d14ea85cd440e8d089aeaf225c3a9eb34ab780))
* **mcp:** handle code mode calls in the Stainless API ([beb90f6](https://github.com/team-telnyx/telnyx-node/commit/beb90f6808c4f6bfc39864d15aadc6e8be8dae91))
* MSG-6160 fix messaging lint issues ([e84af5a](https://github.com/team-telnyx/telnyx-node/commit/e84af5a98e36a2176f8f8d633f87605469f5d1d7))
* MSG-6181: Reorganize mobile phone number messaging endpoints and fix … ([ef7e61b](https://github.com/team-telnyx/telnyx-node/commit/ef7e61b7bd5adc6eb4c1bbb60b817c795857299b))
* NETAPPS_687: Fixed IGW spec to match current API. ([6adc872](https://github.com/team-telnyx/telnyx-node/commit/6adc872d6a78a78cd1f83a111401d211e10ba35f))
* NUM-6334/NUM-6335 - fix redocly lint errors ([8ec4feb](https://github.com/team-telnyx/telnyx-node/commit/8ec4feba0b205d195077db92bf4e43a2aa5bb2c0))


### Bug Fixes

* **mcp:** return correct lines on typescript errors ([30b6e26](https://github.com/team-telnyx/telnyx-node/commit/30b6e261e3a4c1bece7579408a4b22833f2d6c56))


### Chores

* **internal:** codegen related update ([1c01c97](https://github.com/team-telnyx/telnyx-node/commit/1c01c97e52aed570184d45908f7160afdb5a498d))
* **internal:** configure pnpm minimumReleaseAge to 1 day ([acee3ca](https://github.com/team-telnyx/telnyx-node/commit/acee3cacb53bcc24c7e92217b736f38d19a80ede))
* use latest @modelcontextprotocol/sdk ([58a7cd2](https://github.com/team-telnyx/telnyx-node/commit/58a7cd21057815e1ced041a29635c208ba2f59cb))

## 4.4.0 (2025-12-03)

Full Changelog: [v4.3.0...v4.4.0](https://github.com/team-telnyx/telnyx-node/compare/v4.3.0...v4.4.0)

### Features

* Add response schemas for telco data usage report endpoints ([4ea33f4](https://github.com/team-telnyx/telnyx-node/commit/4ea33f4d883f9009fa06a46dc59e12d4030f8de3))
* alright, shut up redocly ([95e2756](https://github.com/team-telnyx/telnyx-node/commit/95e275687b1d20ef1086feab4c60b89df27541a4))
* ENGDESK-47507: Update error responses for revenue service APIs ([b274a23](https://github.com/team-telnyx/telnyx-node/commit/b274a23c65be6f2ddb00274c5136e670e634c8ef))
* ENGDESK-47580: Add quickship and exclude_held_numbers filters to inexplicit number order API ([39a5dae](https://github.com/team-telnyx/telnyx-node/commit/39a5daed3b98733bc3de733aff6095a0ed933e97))
* ENGDESK-47580: Add quickship and exclude_held_numbers to InexplicitNumberOrderResponse ([08d871e](https://github.com/team-telnyx/telnyx-node/commit/08d871e0387c9c7f596d753b535b73662ceb52d7))
* ENGDESK-47759 - fix missing meta definition in authorized ips spec ([2e9885a](https://github.com/team-telnyx/telnyx-node/commit/2e9885ada22dad79028589b0de952cf6e85d2f66))
* **mcp:** return logs on code tool errors ([1855f01](https://github.com/team-telnyx/telnyx-node/commit/1855f01faba455be82ddf49292da49d85e12cf18))
* MSG-6166 fix empty schema responses ([c1c4cf3](https://github.com/team-telnyx/telnyx-node/commit/c1c4cf361260576fe91ebf3753bc8de537be3ffa))
* TBS-3422: Fix TBS redocly errors ([f9d593e](https://github.com/team-telnyx/telnyx-node/commit/f9d593e7b1772aeb3a491bf796f7c78e73f095c3))
* TBS-3422: Fix TBS redocly errors ([f49e23e](https://github.com/team-telnyx/telnyx-node/commit/f49e23ea0f93cff7b27ef1a510df6090aaadf13f))


### Bug Fixes

* remove duplicate resource ([71a0116](https://github.com/team-telnyx/telnyx-node/commit/71a0116fe3ec41c1d88ba6e35743a1e4f75c9c0f))


### Chores

* formatting ([56b04a3](https://github.com/team-telnyx/telnyx-node/commit/56b04a351c5b400b9c56ab515ca011c12178ee80))
* **internal:** upgrade eslint ([ef60a1b](https://github.com/team-telnyx/telnyx-node/commit/ef60a1b0a8e82cb186853ecbe7ffcc73ef50f2f0))

## 4.3.0 (2025-12-01)

Full Changelog: [v4.2.1...v4.3.0](https://github.com/team-telnyx/telnyx-node/compare/v4.2.1...v4.3.0)

### Features

* Ai 1967 ([150951e](https://github.com/team-telnyx/telnyx-node/commit/150951eb69325ff9ba9c3dead80c41ea1704160e))
* Ai 1967 part 2 ([89d1d16](https://github.com/team-telnyx/telnyx-node/commit/89d1d1673a0c80ce13cf1989791a9fa17a06fb8c))
* **client:** add separate models for 2 events ([91582fd](https://github.com/team-telnyx/telnyx-node/commit/91582fdf921baf94db805961da5fa6193ef09ffe))
* ENGDESK-47508 - part 2 shared schema fixes ([505fbc8](https://github.com/team-telnyx/telnyx-node/commit/505fbc84adfc2525e9b5367a92bc07257b475a53))
* ENGDESK-47518 document mobile number and mobile voice connection endpoints ([08909d9](https://github.com/team-telnyx/telnyx-node/commit/08909d9f74919e5e5f20a55a665e65155275997f))
* Fix invalid responses ([645c396](https://github.com/team-telnyx/telnyx-node/commit/645c396ec6f494d26fed5c4a8e70d24015c46646))
* Fix Redocly linting errors and warnings in TDA reporting specs ([b30cb80](https://github.com/team-telnyx/telnyx-node/commit/b30cb80a701db5cae14b39d5d1031f7ab5b4ee45))
* Fix Redocly linting warnings in Number Lookup spec ([1a5268b](https://github.com/team-telnyx/telnyx-node/commit/1a5268b358352e70be50019aae6d8cfa16492cd9))
* Fix Redocly linting warnings in OAuth and Integration Secrets specs ([cff8efe](https://github.com/team-telnyx/telnyx-node/commit/cff8efefd70aa074e2e4f8d904e95b826cca4cd5))
* Fixing lint errors ([8b85c19](https://github.com/team-telnyx/telnyx-node/commit/8b85c198f4b54085830ad58fad36fc0675f66de7))
* **mcp:** add detail field to docs search tool ([b3a0941](https://github.com/team-telnyx/telnyx-node/commit/b3a09410bdb86c691dd455ebe9277ff4046db443))
* MSG-6076: webhook event for 10DLC campaign suspended status ([33300e0](https://github.com/team-telnyx/telnyx-node/commit/33300e0d39ec672fbe4db241f26937bc51fbcf6a))
* PORT-4528: Fix lint errors for porting ([506b81c](https://github.com/team-telnyx/telnyx-node/commit/506b81ce627a20d617d8c5ae6f74ef327ea5c783))
* Refactored README to only contain useful information and reflect accu… ([f70a804](https://github.com/team-telnyx/telnyx-node/commit/f70a804a060e36fe509daa1d633ac15465bff4ae))
* TELAPPS-5459: Add Azure to transcription start ([b2e5c32](https://github.com/team-telnyx/telnyx-node/commit/b2e5c320f5e657f03c4ba704bce94af1f9b9fe50))
* Updated README to include the step for make buildcontainer bundle to … ([818196a](https://github.com/team-telnyx/telnyx-node/commit/818196a1619df6e94bedfd7812c2e91149d824f8))


### Bug Fixes

* **mcp:** return tool execution error on api error ([d00d683](https://github.com/team-telnyx/telnyx-node/commit/d00d683f42ed2448de33a848e1501192bea3a612))


### Chores

* **client:** fix logger property type ([2690d0d](https://github.com/team-telnyx/telnyx-node/commit/2690d0dceaf2a3126de820a0a516306f0ad48fb9))
* **internal:** codegen related update ([b76c33f](https://github.com/team-telnyx/telnyx-node/commit/b76c33f82cad4a02fb8c3f1608a7cfa1010ee5cf))
* **mcp:** upgrade jq-web ([ec06dff](https://github.com/team-telnyx/telnyx-node/commit/ec06dffdad5180e230741c77df8a5550a01bb837))

## 4.2.1 (2025-11-12)

Full Changelog: [v4.2.0...v4.2.1](https://github.com/team-telnyx/telnyx-node/compare/v4.2.0...v4.2.1)

### Bug Fixes

* **mcp:** return tool execution error on jq failure ([09a537f](https://github.com/team-telnyx/telnyx-node/commit/09a537ff093e64a7047ab7211135199675f7659d))


### Chores

* **internal:** codegen related update ([9f31f58](https://github.com/team-telnyx/telnyx-node/commit/9f31f58adc6fb24df883f42ca53a9a9dce3b021a))

## 4.2.0 (2025-11-10)

Full Changelog: [v4.1.0...v4.2.0](https://github.com/team-telnyx/telnyx-node/compare/v4.1.0...v4.2.0)

### Features

* **mcp:** enable optional code execution tool on http mcp servers ([0dfdac9](https://github.com/team-telnyx/telnyx-node/commit/0dfdac9a258da6e9ebcd4c04ccda0c516a647727))


### Bug Fixes

* **mcp:** use raw responses for binary content ([ca612de](https://github.com/team-telnyx/telnyx-node/commit/ca612de99651076c99a1ea04eeabf1a62c6ad771))


### Chores

* **internal:** codegen related update ([96e790b](https://github.com/team-telnyx/telnyx-node/commit/96e790b03cb73d34fcbcc3c547642caa94b8ca78))
* **internal:** codegen related update ([5b6f7e5](https://github.com/team-telnyx/telnyx-node/commit/5b6f7e5953719ada9dc75b599736a4e38291a305))
* **internal:** codegen related update ([f0e8b62](https://github.com/team-telnyx/telnyx-node/commit/f0e8b62868817e5060e388dac25f7b124b47951f))
* **internal:** codegen related update ([4ec8e20](https://github.com/team-telnyx/telnyx-node/commit/4ec8e209d083ca2f52eda61a66e7d9aaf10daaa5))
* **internal:** grammar fix (it's -&gt; its) ([34ac1d4](https://github.com/team-telnyx/telnyx-node/commit/34ac1d4b3f31645162d008c5d7c4e94bbdd29a6e))
* mcp code tool explicit error message when missing a run function ([18b18f8](https://github.com/team-telnyx/telnyx-node/commit/18b18f8f4f2f386afc13feb14ec7cd33b9ffe9c4))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([ba7f3dd](https://github.com/team-telnyx/telnyx-node/commit/ba7f3ddbe9245f132f786b46b3b89afa542b64ed))
* **mcp:** add line numbers to code tool errors ([89b3c1b](https://github.com/team-telnyx/telnyx-node/commit/89b3c1ba0e51804a9f7fed87199e039e775d3dfc))
* **mcp:** clarify http auth error ([c494baf](https://github.com/team-telnyx/telnyx-node/commit/c494bafd31948f7149e385bfb8d58f7ddf01cfb9))
* use structured error when code execution tool errors ([d9011cc](https://github.com/team-telnyx/telnyx-node/commit/d9011cc865a65351938eef7636db68e48131459a))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([620a474](https://github.com/team-telnyx/telnyx-node/commit/620a47429e476c7a9b05fe63bf83843d65fe38a9))
* **mcp:** add a README link to add server to VS Code or Claude Code ([14661ac](https://github.com/team-telnyx/telnyx-node/commit/14661ac96a5a0aea5de886eda2ed5abe42c186bf))

## 4.1.0 (2025-10-30)

Full Changelog: [v4.0.2...v4.1.0](https://github.com/team-telnyx/telnyx-node/compare/v4.0.2...v4.1.0)

### Features

* ENGDESK-44767 - Document force remove calls from queue ([a70a078](https://github.com/team-telnyx/telnyx-node/commit/a70a0789b108220bfdb51bd45335bc1098c81586))
* TELAPPS-ENGDESK-46395 Add keep_after_hangup to enqueue command ([0b0250d](https://github.com/team-telnyx/telnyx-node/commit/0b0250d96cd0bff7582505c893b925bf0dc81976))
* TELAPPS-ENGDESK-46395 Add PATCH /queues/{queue_name}/calls/{call_control_id} endpoint ([5fb666e](https://github.com/team-telnyx/telnyx-node/commit/5fb666ef9d75078716b3c1f3fd043aab2076842e))


### Bug Fixes

* **mcpb:** pin @anthropic-ai/mcpb version ([05e2767](https://github.com/team-telnyx/telnyx-node/commit/05e27671ed7152577748a8e7ac310c440ad33a4e))

## 4.0.2 (2025-10-29)

Full Changelog: [v4.0.1...v4.0.2](https://github.com/team-telnyx/telnyx-node/compare/v4.0.1...v4.0.2)

## 4.0.1 (2025-10-29)

Full Changelog: [v4.0.0...v4.0.1](https://github.com/team-telnyx/telnyx-node/compare/v4.0.0...v4.0.1)

### Bug Fixes

* use base64 format for webhook verification instead of hex ([#11](https://github.com/team-telnyx/telnyx-node/issues/11)) ([50b7b0a](https://github.com/team-telnyx/telnyx-node/commit/50b7b0a2e759d4a19f648df7c1a3e55389551e52))

## 4.0.0 (2025-10-29)

Full Changelog: [v3.9.2...v4.0.0](https://github.com/team-telnyx/telnyx-node/compare/v3.9.2...v4.0.0)

### ⚠ BREAKING CHANGES

* Webhooks.unwrap() method now accepts optional headers parameter for signature verification. Backward compatible when no headers provided.

### Features

* add Telnyx webhook verification with ED25519 signatures ([#5](https://github.com/team-telnyx/telnyx-node/issues/5)) ([f6624fe](https://github.com/team-telnyx/telnyx-node/commit/f6624feed9136010f3fc1336ec730f47a88b2eb8))


### Bug Fixes

* **client:** fix issue with example webhook payload ([5b40234](https://github.com/team-telnyx/telnyx-node/commit/5b4023489622dfaaaa0dec5ad49c612c35dc77cd))

## 3.9.2 (2025-10-28)

Full Changelog: [v3.9.1...v3.9.2](https://github.com/team-telnyx/telnyx-node/compare/v3.9.1...v3.9.2)

### Chores

* **internal:** codegen related update ([a80105a](https://github.com/team-telnyx/telnyx-node/commit/a80105a555b847b6d4a58da315f22497f28956de))

## 3.9.1 (2025-10-27)

Full Changelog: [v3.9.0...v3.9.1](https://github.com/team-telnyx/telnyx-node/compare/v3.9.0...v3.9.1)

### Documentation

* update package description ([#7](https://github.com/team-telnyx/telnyx-node/issues/7)) ([ab4daaa](https://github.com/team-telnyx/telnyx-node/commit/ab4daaa4c597b7a399df4580cf46b98c206e1605))

## 3.9.0 (2025-10-21)

Full Changelog: [v3.8.0...v3.9.0](https://github.com/team-telnyx/telnyx-node/compare/v3.8.0...v3.9.0)

### Features

* **api:** manual updates ([321ec57](https://github.com/team-telnyx/telnyx-node/commit/321ec57ffe87aa853cb82224b47298ccfbf2a609))

## 3.8.0 (2025-10-21)

Full Changelog: [v3.7.0...v3.8.0](https://github.com/team-telnyx/telnyx-node/compare/v3.7.0...v3.8.0)

### Features

* **api:** add method to upload JSON documents ([0d66ffe](https://github.com/team-telnyx/telnyx-node/commit/0d66ffe6aa317a095b4f08318b66cb805adbde66))

## 3.7.0 (2025-10-21)

Full Changelog: [v3.6.0...v3.7.0](https://github.com/team-telnyx/telnyx-node/compare/v3.6.0...v3.7.0)

### Features

* **api:** manual updates ([b8370d9](https://github.com/team-telnyx/telnyx-node/commit/b8370d9e23351012dfd1d41c8683905df75ca597))
* **api:** manual updates ([50cdba3](https://github.com/team-telnyx/telnyx-node/commit/50cdba3f66f24ea7f3669353fb355f616b88c305))
* define more models ([78333eb](https://github.com/team-telnyx/telnyx-node/commit/78333eb96b31ff39952cb326babeba1c67220a1b))


### Chores

* **internal:** codegen related update ([4d43301](https://github.com/team-telnyx/telnyx-node/commit/4d433014f1535432eabbed82be230335ffa1d0e2))
* **internal:** codegen related update ([d8e56c5](https://github.com/team-telnyx/telnyx-node/commit/d8e56c56eaf53d6917b61a28c731b2c468de4497))

## 3.6.0 (2025-10-16)

Full Changelog: [v3.5.0...v3.6.0](https://github.com/team-telnyx/telnyx-node/compare/v3.5.0...v3.6.0)

### Features

* ENGDESK-45836: Document private endpoint for republishing account events ([f3b9f32](https://github.com/team-telnyx/telnyx-node/commit/f3b9f32b42af2311a5929d70837da01f6267d164))
* Fix broken link to List SIM card action ([d44b337](https://github.com/team-telnyx/telnyx-node/commit/d44b337a7e09efb9bc4acda26b47feb31a300ddd))
* MSG-5978: Add BRN fields to toll-free verification OpenAPI specs ([2300793](https://github.com/team-telnyx/telnyx-node/commit/230079357a585ddf662c6270561687d238250718))
* Retell assistants import ([513faa8](https://github.com/team-telnyx/telnyx-node/commit/513faa814282ff84290f5bf51ab364bcf1869037))


### Chores

* extract some types in mcp docs ([b45844d](https://github.com/team-telnyx/telnyx-node/commit/b45844d53659301083167e1dd1cb0820d2ad177e))
* **internal:** codegen related update ([ad29708](https://github.com/team-telnyx/telnyx-node/commit/ad2970892fc3b11ffbcfdfaab0745ed925be90a1))
* **internal:** codegen related update ([7f79aed](https://github.com/team-telnyx/telnyx-node/commit/7f79aedd2ffff4fcf874c4d08880eba3f253282f))

## 3.5.0 (2025-10-06)

Full Changelog: [v3.4.2...v3.5.0](https://github.com/team-telnyx/telnyx-node/compare/v3.4.2...v3.5.0)

### Features

* ENGDESK-45343: Add CustomHeaders documentation to TeXML Dial endpoints ([3e71dcc](https://github.com/team-telnyx/telnyx-node/commit/3e71dccfec90ff05be30c6321c950523b5930b3f))
* MSG-5944: added mobile_only field to messaging profiles ([19ffb9d](https://github.com/team-telnyx/telnyx-node/commit/19ffb9d01bceaa8167bef13776efa2b27cf7ae9e))


### Chores

* **internal:** use npm pack for build uploads ([e31b3d0](https://github.com/team-telnyx/telnyx-node/commit/e31b3d02c96134e1aca3e38879e195cb334c0be3))

## 3.4.2 (2025-10-06)

Full Changelog: [v3.4.1...v3.4.2](https://github.com/team-telnyx/telnyx-node/compare/v3.4.1...v3.4.2)

### Bug Fixes

* change NPM version url ([b4f5059](https://github.com/team-telnyx/telnyx-node/commit/b4f50594285905fbd015a1b6f981ae11073ebbcf))

## 3.4.1 (2025-10-06)

Full Changelog: [v3.4.0...v3.4.1](https://github.com/team-telnyx/telnyx-node/compare/v3.4.0...v3.4.1)

### Bug Fixes

* change NPM version url ([d174c20](https://github.com/team-telnyx/telnyx-node/commit/d174c2086354a2c66e12e21f6cce2b31637c5054))


### Chores

* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([28c153f](https://github.com/team-telnyx/telnyx-node/commit/28c153f14ffaed8ac97ffd01ba250fd7e01fa10c))

## 3.4.0 (2025-10-03)

Full Changelog: [v3.3.3...v3.4.0](https://github.com/team-telnyx/telnyx-node/compare/v3.3.3...v3.4.0)

### Features

* **api:** manual updates ([15826f5](https://github.com/team-telnyx/telnyx-node/commit/15826f54f9a7f5ff366a979f482beab1b3de736c))
* Fix listing deepgram languages for transcription start ([5e0ef02](https://github.com/team-telnyx/telnyx-node/commit/5e0ef02d4245e4b3b425a67b6770fb0ea1d165c2))
* TELAPPS-5367: Update transcription start docs ([e6b4120](https://github.com/team-telnyx/telnyx-node/commit/e6b4120046314fdf20953e352944712a658a6d0c))


### Chores

* **internal:** codegen related update ([af78ee3](https://github.com/team-telnyx/telnyx-node/commit/af78ee3adc7cd1cdefa904c2e6cbadebf09dd331))

## 3.3.3 (2025-10-01)

Full Changelog: [v3.3.2...v3.3.3](https://github.com/team-telnyx/telnyx-node/compare/v3.3.2...v3.3.3)

### Bug Fixes

* remove websiteUrl to avoid domain validation error ([1270a53](https://github.com/team-telnyx/telnyx-node/commit/1270a53edbfb3b13cef0b5f8d0af5f39a8d015af))

## 3.3.2 (2025-10-01)

Full Changelog: [v3.3.1...v3.3.2](https://github.com/team-telnyx/telnyx-node/compare/v3.3.1...v3.3.2)

### Bug Fixes

* update websiteUrl to GitHub domain for MCP registry validation ([f2fdb35](https://github.com/team-telnyx/telnyx-node/commit/f2fdb354636c4f439ee81d8ecbfcbfb4035d4adc))

## 3.3.1 (2025-10-01)

Full Changelog: [v3.3.0...v3.3.1](https://github.com/team-telnyx/telnyx-node/compare/v3.3.0...v3.3.1)

### Chores

* update mcp-publisher to v1.2.3 ([65406d7](https://github.com/team-telnyx/telnyx-node/commit/65406d74b940b65ca18de16853f9fd9022da34f9))

## 3.3.0 (2025-10-01)

Full Changelog: [v3.2.0...v3.3.0](https://github.com/team-telnyx/telnyx-node/compare/v3.2.0...v3.3.0)

### Features

* Engdesk 44932 ([eeb03ac](https://github.com/team-telnyx/telnyx-node/commit/eeb03ac5da4974e8c9df63383b3cc4e4ee5a53bc))


### Bug Fixes

* use pre-built binary for mcp-publisher installation ([35f6ead](https://github.com/team-telnyx/telnyx-node/commit/35f6eadf6bc8d33704acb7a47d971847170cb7b4))

## 3.2.0 (2025-10-01)

Full Changelog: [v3.1.0...v3.2.0](https://github.com/team-telnyx/telnyx-node/compare/v3.1.0...v3.2.0)

### Features

* add MCP registry publishing support ([c0f3af4](https://github.com/team-telnyx/telnyx-node/commit/c0f3af44cd015f5df3bb273ce993f3dd0a3260e1))


### Chores

* configure new SDK language ([cd33dc9](https://github.com/team-telnyx/telnyx-node/commit/cd33dc97ac4603ed6a832c790d3df92f9c218fb2))
* inject version into server.json at publish time ([b0852a6](https://github.com/team-telnyx/telnyx-node/commit/b0852a682439a94ecf700d94a38e1309d78acd27))
* **internal:** codegen related update ([cd2d7ed](https://github.com/team-telnyx/telnyx-node/commit/cd2d7ed24b0e71081d842405e9c3718742f92a7a))
* **internal:** remove .eslintcache ([45de54c](https://github.com/team-telnyx/telnyx-node/commit/45de54cabebd6d54b18aa2c212f86383b9d12084))
* update server.json version to 3.2.0 ([32ef313](https://github.com/team-telnyx/telnyx-node/commit/32ef3132c78101cb6fecc1212ff4443c4394fa47))

## 3.1.0 (2025-09-30)

Full Changelog: [v3.0.0...v3.1.0](https://github.com/team-telnyx/telnyx-node/compare/v3.0.0...v3.1.0)

### Features

* AISWE-458: Remove S3 operations from OpenAPI spec ([db7da4a](https://github.com/team-telnyx/telnyx-node/commit/db7da4a67029a89f1d1c35e2df87ac77d4d19e89))
* recommend against using businessContactEmail ([3a96fad](https://github.com/team-telnyx/telnyx-node/commit/3a96fad9acb34a71e797179c3f3baa7993c4855e))
* warm transfer ([0d73737](https://github.com/team-telnyx/telnyx-node/commit/0d73737e883f2b25aa89b31a3fa91bdfd6bd103b))


### Bug Fixes

* **mcp:** fix cli argument parsing logic ([db0f51f](https://github.com/team-telnyx/telnyx-node/commit/db0f51f29ee9c3802e84851a7b7c264718fd546e))
* **mcp:** resolve a linting issue in server code ([5a184ec](https://github.com/team-telnyx/telnyx-node/commit/5a184ecb4fd22c497e3853ec1e926dec31ad40aa))


### Performance Improvements

* faster formatting ([10a3442](https://github.com/team-telnyx/telnyx-node/commit/10a3442f01453cd01e6c1b02250f29fb44a8313a))


### Chores

* add extension variable on dev docs ([d79e9cf](https://github.com/team-telnyx/telnyx-node/commit/d79e9cfc8f9fd724a8532d81761f5cf143794c25))
* **internal:** codegen related update ([3bed3f9](https://github.com/team-telnyx/telnyx-node/commit/3bed3f96f456e0560e2dac631a6fe0f77171f0a9))
* **internal:** codegen related update ([0a46e03](https://github.com/team-telnyx/telnyx-node/commit/0a46e036e2e8a9d5d9b8a46182d2100befbfc08c))
* **internal:** fix incremental formatting in some cases ([3af2e07](https://github.com/team-telnyx/telnyx-node/commit/3af2e0772b0348fb125fe9115ee5ce708e861524))
* **internal:** ignore .eslintcache ([878841a](https://github.com/team-telnyx/telnyx-node/commit/878841a7ca9e931bb15f4359e0fe302087b181c4))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([29287ba](https://github.com/team-telnyx/telnyx-node/commit/29287baadbea52f3d409c9bcfcdb3110ddd77af7))
* **mcp:** allow pointing `docs_search` tool at other URLs ([86cdd03](https://github.com/team-telnyx/telnyx-node/commit/86cdd03a8961c7d40094358e889ebbf09048d7ca))
* update lockfile ([f90b0c9](https://github.com/team-telnyx/telnyx-node/commit/f90b0c990f93a957d90849938e6b204ab1a4587b))

## 3.0.0 (2025-09-24)

Full Changelog: [v3.0.0-alpha...v3.0.0](https://github.com/team-telnyx/telnyx-node/compare/v3.0.0-alpha...v3.0.0)

### ⚠ BREAKING CHANGES

* **api:** extract APIError to shared models

### Features

* AISWE-456: Fix OpenAPI filter properties to use proper nested object structure ([203a96a](https://github.com/team-telnyx/telnyx-node/commit/203a96a4cb854f53693f5a3a7ac7927919dcd96d))
* **api:** extract APIError to shared models ([5571b5c](https://github.com/team-telnyx/telnyx-node/commit/5571b5cfc5f759da6fc2b2f148078207d4ea9d4a))
* **api:** manual updates ([620b95d](https://github.com/team-telnyx/telnyx-node/commit/620b95d9f79326f7b1ba22a68609c09a4206e934))
* **api:** manual updates ([59d10a2](https://github.com/team-telnyx/telnyx-node/commit/59d10a2b245f29db9275b3179fd00c4267b4a6cc))
* **api:** manual updates ([71ba430](https://github.com/team-telnyx/telnyx-node/commit/71ba430b620b63727c74625523354357a22e20b3))
* FILE-1746: Convert edge-compute API from Swagger 2.0 to OpenAPI 3.1.0 ([f6a2415](https://github.com/team-telnyx/telnyx-node/commit/f6a2415ad99e1553089c5fb71e3edc0b4fab6b31))
* **mcp:** add docs search tool ([9a0f9dc](https://github.com/team-telnyx/telnyx-node/commit/9a0f9dc11434196c2af0b36a78ca34af2453c834))
* **mcp:** enable experimental docs search tool ([b05c502](https://github.com/team-telnyx/telnyx-node/commit/b05c5021f87e4b2f664a0d6d29b8726ac6dba9e9))


### Chores

* do not install brew dependencies in ./scripts/bootstrap by default ([b60d830](https://github.com/team-telnyx/telnyx-node/commit/b60d8302615a0f430c11c6cdfbf0f8392675c195))
* improve example values ([1549850](https://github.com/team-telnyx/telnyx-node/commit/15498503f68c888cea2313ac76d12b473020832c))
* **internal:** codegen related update ([8a03de6](https://github.com/team-telnyx/telnyx-node/commit/8a03de6335e8fa54dc731f071da3e3a19975fe6b))
* **internal:** codegen related update ([d198e2f](https://github.com/team-telnyx/telnyx-node/commit/d198e2f986228fb81db383748794759a82c134c6))
* **internal:** gitignore .mcpb files ([b3479c9](https://github.com/team-telnyx/telnyx-node/commit/b3479c9946785bf089195048e0bcd27660185a13))

## 3.0.0-alpha (2025-09-18)

Full Changelog: [v0.0.1...v3.0.0-alpha](https://github.com/team-telnyx/telnyx-node/compare/v0.0.1...v3.0.0-alpha)

### Features

* add examples ([c56e3cb](https://github.com/team-telnyx/telnyx-node/commit/c56e3cb108e5672b96fc7db3855762e4eb673ba0))
* AISWE-429: Upgrade call-control call-control OpenAPI to 3.1 with Standard Webhooks ([5dfb757](https://github.com/team-telnyx/telnyx-node/commit/5dfb7571520be21de72ab04fefcd04799de666f5))
* AISWE-429: Upgrade messaging 10dlc OpenAPI to 3.1 with Standard Webhooks ([5429c16](https://github.com/team-telnyx/telnyx-node/commit/5429c168e7ba09b5452dc58ae36a47baaf70ca8c))
* AISWE-429: Upgrade messaging messaging OpenAPI to 3.1 with Standard Webhooks ([aa2c4e3](https://github.com/team-telnyx/telnyx-node/commit/aa2c4e3794ff3f6d83da61d0d6453dd1644654d3))
* AISWE-429: Upgrade numbers numbers OpenAPI to 3.1 with Standard Webhooks ([2503e69](https://github.com/team-telnyx/telnyx-node/commit/2503e69ba794e5cd085dbdf3b8581c3a9b2c408f))
* AISWE-429: Upgrade programmable-fax programmable-fax OpenAPI to 3.1 with Standard Webhooks ([ccfd630](https://github.com/team-telnyx/telnyx-node/commit/ccfd630602d06a09d19b28b9cacc135d9653dbef))
* **api:** manual updates ([0920722](https://github.com/team-telnyx/telnyx-node/commit/0920722b7855943397a910ec3e639d747fc468d5))
* **api:** manual updates ([c058929](https://github.com/team-telnyx/telnyx-node/commit/c0589291e364232ab7050b2c23672eded7a28f2f))
* **api:** manual updates ([97109c0](https://github.com/team-telnyx/telnyx-node/commit/97109c083d8daad9f1e8fb207ab44c0f509908d2))
* **api:** manual updates ([bbb8381](https://github.com/team-telnyx/telnyx-node/commit/bbb8381d778006c21e70081f20addfba2fa280fd))
* **api:** manual updates ([0d596b9](https://github.com/team-telnyx/telnyx-node/commit/0d596b972daa4f4b01fd9bbe0e95940377d6f691))
* **api:** rename enums with problematic characters ([91a94fc](https://github.com/team-telnyx/telnyx-node/commit/91a94fc1607015f90f98b17e953d9a945983abff))
* **api:** rename Error to MessagesError ([ce91e63](https://github.com/team-telnyx/telnyx-node/commit/ce91e63c7a58f4e7c9fb4224c22f554d650dfac3))
* **examples:** Add inbound call control webhook examples ([#17](https://github.com/team-telnyx/telnyx-node/issues/17)) ([4667342](https://github.com/team-telnyx/telnyx-node/commit/4667342381ed4200efcc0b8fe80fd545d0d14bb1))
* **mcp:** allow setting logging level ([203b4c0](https://github.com/team-telnyx/telnyx-node/commit/203b4c089965dd95f6f20ae6d20df6867a91dc22))
* **mcp:** expose client options in `streamableHTTPApp` ([ebc4653](https://github.com/team-telnyx/telnyx-node/commit/ebc46533e009155b5e70d27118cfc81a32fe98a8))
* NUM-6108: Update Advanced Order API reference to include requirement_groups ([6351263](https://github.com/team-telnyx/telnyx-node/commit/6351263e560cd7b73d39dcfd9e6a1a399710bc93))
* port-4304: add public download document link specs ([5ed329c](https://github.com/team-telnyx/telnyx-node/commit/5ed329cba424644a1367a0a97aa113c9fc34564c))
* port-4315: add country_code filter to description ([38131f3](https://github.com/team-telnyx/telnyx-node/commit/38131f3eb47d985b6d60660e2e93fdbc7c22533e))
* port-4315: add filter by country code ([da60cd1](https://github.com/team-telnyx/telnyx-node/commit/da60cd15ac92fd8f4e29a44fc6ccda18cf11135f))
* **resources:** add Connections Resource ([#24](https://github.com/team-telnyx/telnyx-node/issues/24)) ([477c701](https://github.com/team-telnyx/telnyx-node/commit/477c701bc04ba5b254efde24bdc46b89a368cd24))
* **resources:** add Ips and Fqdns Resources ([#25](https://github.com/team-telnyx/telnyx-node/issues/25)) ([92b4ee0](https://github.com/team-telnyx/telnyx-node/commit/92b4ee0ca0cb1db202d193389ce4f8d93b133f02))
* **resources:** add Mobile Operator Networks Resource ([#39](https://github.com/team-telnyx/telnyx-node/issues/39)) ([039f86c](https://github.com/team-telnyx/telnyx-node/commit/039f86cc121f4f9378cd5b4dcddd44c6a7198a95))
* **resources:** Addresses ([#34](https://github.com/team-telnyx/telnyx-node/issues/34)) ([eea89a7](https://github.com/team-telnyx/telnyx-node/commit/eea89a77c35ccd7459dba6d63dc58aec090e666d))
* **resources:** alphanumeric sender ids ([#4](https://github.com/team-telnyx/telnyx-node/issues/4)) ([cb5d21b](https://github.com/team-telnyx/telnyx-node/commit/cb5d21b6db8f3720a1363fa048f0769d7b88a69d))
* **resources:** Balance ([#35](https://github.com/team-telnyx/telnyx-node/issues/35)) ([46f89f9](https://github.com/team-telnyx/telnyx-node/commit/46f89f9c5bc4f1d09da1efbbb1bada2f51a2198b))
* **resources:** Billing Groups ([#18](https://github.com/team-telnyx/telnyx-node/issues/18)) ([1df78d4](https://github.com/team-telnyx/telnyx-node/commit/1df78d409d7c922c613316f15f4ebdc7cd067608))
* **resources:** Credential Connections ([#21](https://github.com/team-telnyx/telnyx-node/issues/21)) ([a6cfae5](https://github.com/team-telnyx/telnyx-node/commit/a6cfae5958252ca8af068782c2216b10bb05b8de))
* **resources:** empty constructors ([#5](https://github.com/team-telnyx/telnyx-node/issues/5)) ([5da3047](https://github.com/team-telnyx/telnyx-node/commit/5da3047b009301de3693ee2313354f153d1f92ca))
* **resources:** Fax Applications ([#57](https://github.com/team-telnyx/telnyx-node/issues/57)) ([06e55cf](https://github.com/team-telnyx/telnyx-node/commit/06e55cf4d65614ef5682173154e214dc8bb75585))
* **resources:** Faxes ([#37](https://github.com/team-telnyx/telnyx-node/issues/37)) ([d826a17](https://github.com/team-telnyx/telnyx-node/commit/d826a179cecc5d6abd56fcecc4dff003ada80fa8))
* **resources:** FQDN Connections ([#20](https://github.com/team-telnyx/telnyx-node/issues/20)) ([7e03173](https://github.com/team-telnyx/telnyx-node/commit/7e031736d434bc60097c2fb9c0b6a11036d9f4db))
* **resources:** IP Connections ([#19](https://github.com/team-telnyx/telnyx-node/issues/19)) ([ceff8f7](https://github.com/team-telnyx/telnyx-node/commit/ceff8f7d0e9b96517c82022bb2aee455fb222114))
* **resources:** Messaging Profile Metrics and Short Codes ([#43](https://github.com/team-telnyx/telnyx-node/issues/43)) ([e4097e3](https://github.com/team-telnyx/telnyx-node/commit/e4097e34f17e99cb76cb67e65afd3b4650691813))
* **resources:** Number Lookup ([#36](https://github.com/team-telnyx/telnyx-node/issues/36)) ([3d4b955](https://github.com/team-telnyx/telnyx-node/commit/3d4b955877ac6fac080160b9fd1fd7c166360f7e))
* **resources:** Number Order Regulatory Requirements and Number Order Documents ([#22](https://github.com/team-telnyx/telnyx-node/issues/22)) ([b4b6000](https://github.com/team-telnyx/telnyx-node/commit/b4b6000ac66f0688e88fdba993c69185ddfd02e0))
* **resources:** OTA Updates ([#40](https://github.com/team-telnyx/telnyx-node/issues/40)) ([993b770](https://github.com/team-telnyx/telnyx-node/commit/993b77008fafe40ea2462fdcc855f729e7f1032c))
* **resources:** Phone Numbers Resource ([#15](https://github.com/team-telnyx/telnyx-node/issues/15)) ([e63b496](https://github.com/team-telnyx/telnyx-node/commit/e63b496491259821af5979a8cca53c78cf36cdd1))
* **resources:** Sim Card Enable/Disable ([#42](https://github.com/team-telnyx/telnyx-node/issues/42)) ([372f63a](https://github.com/team-telnyx/telnyx-node/commit/372f63a6320433ca85014b904875e799b806bce2))
* **resources:** SIM Card Groups Resource ([#38](https://github.com/team-telnyx/telnyx-node/issues/38)) ([2f06b8a](https://github.com/team-telnyx/telnyx-node/commit/2f06b8a98436157147c39aaea234a8949cf7adaa))
* **resources:** SIM Card Network Preferences Methods ([#41](https://github.com/team-telnyx/telnyx-node/issues/41)) ([a43c54b](https://github.com/team-telnyx/telnyx-node/commit/a43c54b8fd9cde27aeb3f4f24398afcc41d302ab))
* **resources:** SIM Cards Resource ([#16](https://github.com/team-telnyx/telnyx-node/issues/16)) ([1db136f](https://github.com/team-telnyx/telnyx-node/commit/1db136fa5a0c3a25510f9a664c6ceecda73f6c78))
* **resources:** Verifications ([#52](https://github.com/team-telnyx/telnyx-node/issues/52)) ([54a963b](https://github.com/team-telnyx/telnyx-node/commit/54a963b36daf93b0b75ab78d46cd7e9ea59672e4))
* **resources:** Verify Profiles ([#51](https://github.com/team-telnyx/telnyx-node/issues/51)) ([b111f82](https://github.com/team-telnyx/telnyx-node/commit/b111f828ca8e185ba9e7fc2426ad74c81d53f7e2))
* **WEBRTC-215:** add ondemand credential resource ([#48](https://github.com/team-telnyx/telnyx-node/issues/48)) ([bf34fa1](https://github.com/team-telnyx/telnyx-node/commit/bf34fa10ac3e010590eef8703943833b1f25b756))


### Bug Fixes

* **ci:** set permissions for DXT publish action ([6967e14](https://github.com/team-telnyx/telnyx-node/commit/6967e141f9dc491577474d9948c1c330090aff00))
* **client:** handle multiple auth options gracefully ([50e892e](https://github.com/team-telnyx/telnyx-node/commit/50e892e16b63c6e559d68aef066452a5081fb6c5))
* coerce nullable values to undefined ([ec47205](https://github.com/team-telnyx/telnyx-node/commit/ec472053638e9e96c2a2514732aa2ddcb5ff8657))
* **error-handling:** prevent `undefined` on error handling ([#3](https://github.com/team-telnyx/telnyx-node/issues/3)) ([c3ac08f](https://github.com/team-telnyx/telnyx-node/commit/c3ac08f9383de9eb4067e4aefd501dd7a54b2757))
* **internal:** use globalThis.error to avoid collision with SDK Error resource ([32e9a12](https://github.com/team-telnyx/telnyx-node/commit/32e9a120b9a4fdb37c510414d4d01b0909913d98))
* **mcp:** fix query options parsing ([14330d6](https://github.com/team-telnyx/telnyx-node/commit/14330d6a85522087ce7127f0536367c70387d4dc))
* **mcp:** fix uploading dxt release assets ([80d2f83](https://github.com/team-telnyx/telnyx-node/commit/80d2f83de9aaf309c1ccde995da60e171e27d346))
* **mcp:** update dxt manifest.json files ([8d5dead](https://github.com/team-telnyx/telnyx-node/commit/8d5dead33433b0e44a8d756cd5fa6d1fe4eea2dd))
* **query-string:** use arrayFormat of brackets ([#13](https://github.com/team-telnyx/telnyx-node/issues/13)) ([5428da4](https://github.com/team-telnyx/telnyx-node/commit/5428da450a455740aa0fc13a4318b5185d0d5f5e))
* **resources:** add Phone Numbers Retrieve method ([#47](https://github.com/team-telnyx/telnyx-node/issues/47)) ([ce2b0ac](https://github.com/team-telnyx/telnyx-node/commit/ce2b0ac7ef8019cecb0a4c94e7cbb2f484c911a7))
* **resources:** fix content-length header calculation on requestData ([ae2a4c3](https://github.com/team-telnyx/telnyx-node/commit/ae2a4c320be0d2d7fb7e3c22d67736ca8ad7e628))
* **resources:** leave resource previous method spec paramValues intact ([#27](https://github.com/team-telnyx/telnyx-node/issues/27)) ([42a4b6d](https://github.com/team-telnyx/telnyx-node/commit/42a4b6de68fb3225250287ef4612c9708ad1e476))
* **resources:** outdated specs ([#33](https://github.com/team-telnyx/telnyx-node/issues/33)) ([bf6da65](https://github.com/team-telnyx/telnyx-node/commit/bf6da65afe0a07ecf9de58391ca523e33b0d267d))
* **resources:** recreate resources on constructor call ([#44](https://github.com/team-telnyx/telnyx-node/issues/44)) ([364be00](https://github.com/team-telnyx/telnyx-node/commit/364be00fb978da4d7048c5695b2924664321045b))
* **resources:** update Calls and Messaging specs ([#45](https://github.com/team-telnyx/telnyx-node/issues/45)) ([ec3a4d0](https://github.com/team-telnyx/telnyx-node/commit/ec3a4d0dda8794d3509d29a9fa8e8cd958c08441))
* **resources:** update CredentialConnections Create specs ([#50](https://github.com/team-telnyx/telnyx-node/issues/50)) ([d89df0e](https://github.com/team-telnyx/telnyx-node/commit/d89df0ef29e26d82666f95bb62727066724ca444))
* **tests:** skip 2 tests unsupported by prism ([d8ba30f](https://github.com/team-telnyx/telnyx-node/commit/d8ba30fe435600e289ebbd465c922ffa2fdfaf9c))
* **webhooks:** replace c compiled ed25519 package with native one ([#8](https://github.com/team-telnyx/telnyx-node/issues/8)) ([9e6364f](https://github.com/team-telnyx/telnyx-node/commit/9e6364f9c56323927f84e2e32c9f2194f98cd424))
* **webhooks:** signature verification for Tweetnacl ([#10](https://github.com/team-telnyx/telnyx-node/issues/10)) ([a6f0e4b](https://github.com/team-telnyx/telnyx-node/commit/a6f0e4b1d499c507443fd2584a7d36599c619fbd))


### Chores

* bump version of pnpm/action-setup in CI ([8e4bcd0](https://github.com/team-telnyx/telnyx-node/commit/8e4bcd0f0cb8271df23842824e14259138c5d226))
* ci build action ([9f6d649](https://github.com/team-telnyx/telnyx-node/commit/9f6d6492cc3eb07cc01330b7324fcb8acbccc218))
* configure new SDK language ([590fa48](https://github.com/team-telnyx/telnyx-node/commit/590fa4894025b4f15d36a4d908b821837a161a5f))
* configure new SDK language ([179723a](https://github.com/team-telnyx/telnyx-node/commit/179723aa4efe19fd6912775d16e96609e282d0c7))
* **internal:** codegen related update ([037bc36](https://github.com/team-telnyx/telnyx-node/commit/037bc366fc67c8e86b437d5804c7a5e84e436a70))
* **internal:** codegen related update ([960626a](https://github.com/team-telnyx/telnyx-node/commit/960626a338a5ab3c6a542d889156fe5934655c77))
* **internal:** codegen related update ([d2cad7d](https://github.com/team-telnyx/telnyx-node/commit/d2cad7d2ab0b08ca55b50b356d6c0037c88addb4))
* **internal:** codegen related update ([a5bd40f](https://github.com/team-telnyx/telnyx-node/commit/a5bd40ff6475b8e269bc0fd5d328ccc3d5839199))
* **internal:** codegen related update ([741a3e7](https://github.com/team-telnyx/telnyx-node/commit/741a3e7a09f09be944dd163db9bace564be97645))
* **internal:** codegen related update ([46a5285](https://github.com/team-telnyx/telnyx-node/commit/46a5285a068dc05981050c85db8e59969da6098c))
* **internal:** codegen related update ([622b82b](https://github.com/team-telnyx/telnyx-node/commit/622b82b07417f2879a6b543a02f480f0a82afe5b))
* **internal:** codegen related update ([873ed56](https://github.com/team-telnyx/telnyx-node/commit/873ed56ef328fa804f9cc6580e53b55821b36839))
* **internal:** codegen related update ([23e51a6](https://github.com/team-telnyx/telnyx-node/commit/23e51a6a5b31dfd37ac26fbd49c7e5432c121a36))
* **internal:** codegen related update ([e76f32b](https://github.com/team-telnyx/telnyx-node/commit/e76f32bfd633a345d2d451085d36e2a551410e94))
* **internal:** codegen related update ([ad7aff4](https://github.com/team-telnyx/telnyx-node/commit/ad7aff4e669758267f503be680b2d3653893394c))
* **internal:** codegen related update ([20df184](https://github.com/team-telnyx/telnyx-node/commit/20df1845c14803e4dc0a674859d4d99a79f8e828))
* **internal:** codegen related update ([56f3e40](https://github.com/team-telnyx/telnyx-node/commit/56f3e40da5cbbea3484a2ab59059eb3e87ef74d9))
* **internal:** codegen related update ([9b205f7](https://github.com/team-telnyx/telnyx-node/commit/9b205f70c8156229fb741637912f9a20f8628777))
* **internal:** codegen related update ([5732f84](https://github.com/team-telnyx/telnyx-node/commit/5732f84e91b61cfcded030af121c00a772b50e86))
* **internal:** codegen related update ([be048cd](https://github.com/team-telnyx/telnyx-node/commit/be048cdfe6fdd17d062740b17b272ea4939d8429))
* **internal:** codegen related update ([342934f](https://github.com/team-telnyx/telnyx-node/commit/342934f6439291c71981b8edf227c7ec9f4f487c))
* **internal:** codegen related update ([17d7c12](https://github.com/team-telnyx/telnyx-node/commit/17d7c12ab624c36fccb986fc59071bd58f5fb070))
* **internal:** codegen related update ([b366b98](https://github.com/team-telnyx/telnyx-node/commit/b366b9887e942f9476bb1a06220637a5dc68e859))
* **internal:** codegen related update ([fd97856](https://github.com/team-telnyx/telnyx-node/commit/fd97856c63c60642e41d6446d8bef2088a777bae))
* **internal:** codegen related update ([6adfe26](https://github.com/team-telnyx/telnyx-node/commit/6adfe26f1977c1de9499737c85da18e4534f566e))
* **internal:** codegen related update ([0446d46](https://github.com/team-telnyx/telnyx-node/commit/0446d467465f340b7ed806cd3265a0e4a0fd3b6e))
* **internal:** codegen related update ([fa9d06a](https://github.com/team-telnyx/telnyx-node/commit/fa9d06a03ccd93baa3d31c923bbf44745aa225e8))
* **internal:** codegen related update ([35bfdca](https://github.com/team-telnyx/telnyx-node/commit/35bfdcab4f56010db80c77a54d06d28eee7ccb55))
* **internal:** codegen related update ([7a60b73](https://github.com/team-telnyx/telnyx-node/commit/7a60b73f4ff655bebcc54dd3593f4bb705e93abb))
* **internal:** codegen related update ([c6f6948](https://github.com/team-telnyx/telnyx-node/commit/c6f6948cf0131a45cacc3b09cf758e1fffd92762))
* **internal:** codegen related update ([34d3bc4](https://github.com/team-telnyx/telnyx-node/commit/34d3bc4b39ed9b136f69edf196644f7da9d2664a))
* **internal:** codegen related update ([3e772b7](https://github.com/team-telnyx/telnyx-node/commit/3e772b7d5f390c9b1de7eeee83fbe45b8157c73a))
* **internal:** codegen related update ([cde77fa](https://github.com/team-telnyx/telnyx-node/commit/cde77fa8dccaea1080feaa83c68d338f3a4b8479))
* **internal:** codegen related update ([4247d02](https://github.com/team-telnyx/telnyx-node/commit/4247d0240595d93fb0c4efcf9e68cac0d638af64))
* **internal:** codegen related update ([4146b58](https://github.com/team-telnyx/telnyx-node/commit/4146b58f4a38cf2f2b4b53158f908d3934616762))
* **internal:** codegen related update ([b390b3a](https://github.com/team-telnyx/telnyx-node/commit/b390b3a39fc66c229e0e7830058cfbf943365d07))
* **internal:** enable and auto-fix @typescript-eslint/consistent-type-imports lint rule ([f4e93c3](https://github.com/team-telnyx/telnyx-node/commit/f4e93c34efaaa2bf56323dc232d363d06a0e7e36))
* **mcp:** rename dxt to mcpb ([b73b5e5](https://github.com/team-telnyx/telnyx-node/commit/b73b5e50dff2af86cd088371b7da77610e7f2056))
* **mcp:** skip webhook method generation in MCP ([ec206bb](https://github.com/team-telnyx/telnyx-node/commit/ec206bba4e0d4eea90331b9789d6b75b7a0cb369))
* **mcp:** upload dxt as release asset ([24b6fae](https://github.com/team-telnyx/telnyx-node/commit/24b6fae83b394eb741dbd0b654768fce1d13d8bd))
* sync repo ([49bb654](https://github.com/team-telnyx/telnyx-node/commit/49bb6545061ed0e3c99e490c4e8954b624d90821))
* update CONTRIBUTING.md ([535ccda](https://github.com/team-telnyx/telnyx-node/commit/535ccda9ebbf6cefc60e62887e2769ed1e06336c))
* update SDK settings ([338d6f3](https://github.com/team-telnyx/telnyx-node/commit/338d6f33be9c44d57fd6a459bd32fe709250de6e))
* update SDK settings ([38df483](https://github.com/team-telnyx/telnyx-node/commit/38df48331bb8ba8de3e716f8d48aa088baa83679))
* update SDK settings ([ea46774](https://github.com/team-telnyx/telnyx-node/commit/ea467743424b62ccb65d83efdf4f596d9e53f54f))
* update SDK settings ([e6c50ac](https://github.com/team-telnyx/telnyx-node/commit/e6c50acd3f7de62fe6e3c5fda29320717748a971))
* update SDK settings ([51ccef9](https://github.com/team-telnyx/telnyx-node/commit/51ccef9488910b33b335b7b10a3aae3cd5f70765))
* update SDK settings ([346736d](https://github.com/team-telnyx/telnyx-node/commit/346736d2a5c0f27ceb823ae3d9538fce982fdc33))


### Documentation

* **webhooks:** keep eslint config ([24fef8e](https://github.com/team-telnyx/telnyx-node/commit/24fef8e2b9d3f01f35a4a29f52270ea381f14818))
* **webhooks:** Signing Example cleanup ([#11](https://github.com/team-telnyx/telnyx-node/issues/11)) ([7fb614e](https://github.com/team-telnyx/telnyx-node/commit/7fb614e07bbcbbdfd86ef8f143d4097916a9fa7a))
* **webhooks:** update lock and eslint ([3441b40](https://github.com/team-telnyx/telnyx-node/commit/3441b404421428a4eb25017f590f15633b9f530d))
* **webhooks:** update telnyx package version in example ([9c874b1](https://github.com/team-telnyx/telnyx-node/commit/9c874b1be77abd1f819bef5bab6bb4186a171f78))
* **webhooks:** use telnyx package v1.7 in example ([19b30f2](https://github.com/team-telnyx/telnyx-node/commit/19b30f2b1d0fac8927b534940d94b793e0665ef8))
