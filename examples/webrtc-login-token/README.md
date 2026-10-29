# Node SDK Example - WebRTC Login Token

Mints a WebRTC login token for a telephony credential on your own server with
`client.telephonyCredentials.toJwt`, with no request to Telnyx per login.

A WebRTC client (the Telnyx WebRTC SDKs) logs in with a token for a telephony
credential. The API mints one on `POST /v2/telephony_credentials/{id}/token`
(`createToken`). With `toJwt` your backend signs the same kind of token itself,
from the credential's `token_material`: the material comes with the credential
when it is created, or from `retrieveTokenMaterial` for an existing one. Store
it with the credential and you can mint tokens for as long as the credential
lives, with no further requests. It is as sensitive as the SIP password: keep it
on the server.

## Setup

```bash
npm install
export TELNYX_API_KEY=KEY...
export TELNYX_CONNECTION_ID=1234567890   # a credential connection
npm start
```

Set `TELNYX_CREDENTIAL_ID` to reuse an existing credential instead of creating
one on every run.

## What it does

1. Creates a telephony credential on the connection (or retrieves the one in
   `TELNYX_CREDENTIAL_ID`).
2. Mints a login token valid for one hour locally and prints it. Hand a token
   like this to the WebRTC SDK as its `login_token`.

```ts
const { data: credential } = await client.telephonyCredentials.create({ connection_id });
const loginToken = await client.telephonyCredentials.toJwt(credential, { ttl: 3600 });
```
