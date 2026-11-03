/**
 * Mints a WebRTC login token for a telephony credential on this machine, with
 * client.telephonyCredentials.toJwt, instead of asking the API for one per login.
 *
 * TELNYX_API_KEY=KEY... TELNYX_CONNECTION_ID=123... npm start
 * Optional: TELNYX_CREDENTIAL_ID to reuse a credential instead of creating one.
 */

import Telnyx from 'telnyx';

const client = new Telnyx({ apiKey: process.env['TELNYX_API_KEY'] || '' });

async function credential(): Promise<Telnyx.TelephonyCredential> {
  const id = process.env['TELNYX_CREDENTIAL_ID'];
  if (id) {
    console.log(`Reusing credential ${id}`);
    const { data } = await client.telephonyCredentials.retrieve(id);
    return data!;
  }
  const connectionId = process.env['TELNYX_CONNECTION_ID'];
  if (!connectionId) throw new Error('set TELNYX_CONNECTION_ID or TELNYX_CREDENTIAL_ID');
  console.log(`Creating a credential on connection ${connectionId}`);
  const { data } = await client.telephonyCredentials.create({
    connection_id: connectionId,
    name: `toJwt example ${new Date().toISOString()}`,
    include: 'token_material', // the API returns the signing material only when asked
  });
  return data!;
}

async function main() {
  const cred = await credential();
  console.log(`Credential ${cred.id} (${cred.sip_username})`);

  // A credential from `create` carries its token_material, so this is a pure
  // local computation. A retrieved credential fetches the material once.
  const started = performance.now();
  const loginToken = await client.telephonyCredentials.toJwt(cred, { ttl: 3600 });
  console.log(`Minted a login token in ${(performance.now() - started).toFixed(1)} ms (valid for 1 hour):`);
  console.log(loginToken);
  console.log('Hand a token like this to the WebRTC SDK as its login_token.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
