import { Telnyx } from '../src/client';
import {
  createLoginToken,
  decodeLoginToken,
  LOGIN_TOKEN_DEFAULT_TTL,
  LOGIN_TOKEN_MAX_TTL,
  TelnyxLoginTokenError,
} from '../src/lib/login-token';

// Synthetic inputs, built from readable strings so nothing here looks like a
// real key. The expected header, claims and signatures were produced by
// running Telnyx::AccessToken#to_jwt (telnyx-ruby 3.1.0) with these same
// values, so this suite also checks that the two SDKs mint identical tokens.
const material = {
  kid: 'v1',
  tel_token: Buffer.from(Array.from({ length: 32 }, (_, i) => i + 1)).toString('base64'),
  signing_secret: Buffer.from('secret-secret-secret-secret-12345').toString('base64url'),
};
const credential = {
  id: '0f0e5b0d-3b6e-4b0e-9d7c-6b1b0d3c4a5e',
  user_id: '7d1e4f2a-9c3b-4e8d-a1f6-2b5c8d9e0f13',
  sip_username: 'gencredQ1w2e3r4',
  expires_at: '2024-01-01T00:00:00Z',
  token_material: material,
};
// 2023-11-14T22:13:20Z: every reference token below expired years ago.
const NOW = 1700000000 * 1000;

// What the Ruby SDK produced, byte for byte: header and claims as JSON text
// (key order matters), plus the HMAC-SHA256 signature for each case.
const RUBY_HEADER = '{"alg":"HS256","typ":"JWT","cty":"telnyx-webrtc;v=1","kid":"v1"}';
const RUBY_CLAIMS_TTL_600 =
  '{"sub":"0f0e5b0d-3b6e-4b0e-9d7c-6b1b0d3c4a5e","user_id":"7d1e4f2a-9c3b-4e8d-a1f6-2b5c8d9e0f13","identity":"gencredQ1w2e3r4","cred_exp":"2024-01-01T00:00:00Z","tel_token":"AQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyA=","iat":1700000000,"nbf":1700000000,"exp":1700000600,"jti":"0f0e5b0d-3b6e-4b0e-9d7c-6b1b0d3c4a5e-1700000000"}';
const RUBY_SIGNATURE_TTL_600 = 'p-7ioXfS3XQdKpXnwV1Q2LzysB0WRhQ8BplZacuUaUk';
const RUBY_CLAIMS_NO_EXPIRY_DEFAULT_TTL =
  '{"sub":"0f0e5b0d-3b6e-4b0e-9d7c-6b1b0d3c4a5e","user_id":"7d1e4f2a-9c3b-4e8d-a1f6-2b5c8d9e0f13","identity":"gencredQ1w2e3r4","cred_exp":null,"tel_token":"AQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyA=","iat":1700000000,"nbf":1700000000,"exp":1700003600,"jti":"0f0e5b0d-3b6e-4b0e-9d7c-6b1b0d3c4a5e-1700000000"}';
const RUBY_SIGNATURE_NO_EXPIRY_DEFAULT_TTL = 'JdFMawyaBfoOewUP2ZbCilxBjFlNaCVMUqWmRw9oNEI';

const b64url = (s: string) => Buffer.from(s).toString('base64url');
const rubyToken = (claims: string, signature: string) =>
  `${b64url(RUBY_HEADER)}.${b64url(claims)}.${signature}`;
const b64urlJson = (part: string) => JSON.parse(Buffer.from(part, 'base64url').toString());

describe('createLoginToken', () => {
  test('produces the same token as telnyx-ruby for the same input', async () => {
    expect(await createLoginToken(credential, { ttl: 600, now: NOW })).toBe(
      rubyToken(RUBY_CLAIMS_TTL_600, RUBY_SIGNATURE_TTL_600),
    );
    expect(await createLoginToken({ ...credential, expires_at: null }, { now: NOW })).toBe(
      rubyToken(RUBY_CLAIMS_NO_EXPIRY_DEFAULT_TTL, RUBY_SIGNATURE_NO_EXPIRY_DEFAULT_TTL),
    );
  });

  test('header and claims', async () => {
    const token = await createLoginToken(credential, { ttl: 600, now: NOW });
    const [head, body] = token.split('.');
    expect(b64urlJson(head!)).toEqual({ alg: 'HS256', typ: 'JWT', cty: 'telnyx-webrtc;v=1', kid: 'v1' });
    expect(b64urlJson(body!)).toEqual({
      sub: credential.id,
      user_id: credential.user_id,
      identity: credential.sip_username,
      cred_exp: credential.expires_at,
      tel_token: material.tel_token,
      iat: 1700000000,
      nbf: 1700000000,
      exp: 1700000600,
      jti: `${credential.id}-1700000000`,
    });
  });

  test('ttl defaults to one hour and is clamped to 1..86400', async () => {
    const exp = async (opts: { ttl?: number }) =>
      b64urlJson((await createLoginToken(credential, { ...opts, now: NOW })).split('.')[1]!).exp - 1700000000;
    expect(await exp({})).toBe(LOGIN_TOKEN_DEFAULT_TTL);
    expect(await exp({ ttl: 0 })).toBe(1);
    expect(await exp({ ttl: -5 })).toBe(1);
    expect(await exp({ ttl: 10 ** 9 })).toBe(LOGIN_TOKEN_MAX_TTL);
  });

  test('tokenMaterial option wins over the credential', async () => {
    const other = { ...material, signing_secret: Buffer.alloc(32, 7).toString('base64url') };
    const token = await createLoginToken(credential, { tokenMaterial: other, now: NOW });
    await expect(decodeLoginToken(token, other.signing_secret)).resolves.toMatchObject({
      sub: credential.id,
    });
    await expect(decodeLoginToken(token, material.signing_secret)).rejects.toThrow(TelnyxLoginTokenError);
  });

  test('refuses to mint without the identity fields or the material', async () => {
    await expect(createLoginToken({ ...credential, id: '' })).rejects.toThrow(
      'id is required to mint a token',
    );
    await expect(createLoginToken({ ...credential, user_id: undefined })).rejects.toThrow(
      'user_id is required to mint a token',
    );
    await expect(createLoginToken({ ...credential, sip_username: undefined })).rejects.toThrow(
      'sip_username is required to mint a token',
    );
    await expect(createLoginToken({ ...credential, token_material: undefined })).rejects.toThrow(
      'token_material is required to mint a token',
    );
    await expect(
      createLoginToken({ ...credential, token_material: { ...material, signing_secret: '' } }),
    ).rejects.toThrow('token_material.signing_secret is missing');
  });
});

describe('decodeLoginToken', () => {
  const token = rubyToken(RUBY_CLAIMS_TTL_600, RUBY_SIGNATURE_TTL_600);

  test('verifies and returns the claims', async () => {
    const claims = await decodeLoginToken(token, material.signing_secret);
    expect(claims).toMatchObject({ sub: credential.id, identity: credential.sip_username, exp: 1700000600 });
  });

  test('rejects a tampered payload, a wrong secret and non-JWTs', async () => {
    const tampered = b64url(JSON.stringify({ ...JSON.parse(RUBY_CLAIMS_TTL_600), exp: 4102444800 }));
    await expect(
      decodeLoginToken(
        `${b64url(RUBY_HEADER)}.${tampered}.${RUBY_SIGNATURE_TTL_600}`,
        material.signing_secret,
      ),
    ).rejects.toThrow('Signature is invalid');
    await expect(decodeLoginToken(token, Buffer.alloc(32, 1).toString('base64url'))).rejects.toThrow(
      'Signature is invalid',
    );
    await expect(decodeLoginToken('nope', material.signing_secret)).rejects.toThrow('not a JWT');
  });
});

describe('client.telephonyCredentials.toJwt', () => {
  const expected = rubyToken(RUBY_CLAIMS_TTL_600, RUBY_SIGNATURE_TTL_600);

  test('uses the material on a credential from create, with no request', async () => {
    const fetch = jest.fn(async () => {
      throw new Error('no request expected');
    });
    const client = new Telnyx({ apiKey: 'My API Key', fetch });
    expect(await client.telephonyCredentials.toJwt(credential, { ttl: 600, now: NOW })).toBe(expected);
    expect(fetch).not.toHaveBeenCalled();
  });

  test('fetches token_material once for a credential without it', async () => {
    const calls: string[] = [];
    const fetch = jest.fn(async (url: string | URL | Request) => {
      calls.push(String(url));
      return new Response(JSON.stringify({ data: material }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      });
    });
    const client = new Telnyx({ apiKey: 'My API Key', fetch });
    const { token_material, ...bare } = credential;
    expect(await client.telephonyCredentials.toJwt(bare, { ttl: 600, now: NOW })).toBe(expected);
    expect(calls).toEqual([
      `https://api.telnyx.com/v2/telephony_credentials/${credential.id}/token_material`,
    ]);
  });

  test('retrieveTokenMaterial hits GET /telephony_credentials/{id}/token_material', async () => {
    const fetch = jest.fn(async (url: string | URL | Request, init?: RequestInit) => {
      expect(init?.method).toBe('GET');
      expect(String(url)).toBe('https://api.telnyx.com/v2/telephony_credentials/abc/token_material');
      return new Response(JSON.stringify({ data: material }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      });
    });
    const client = new Telnyx({ apiKey: 'My API Key', fetch });
    expect((await client.telephonyCredentials.retrieveTokenMaterial('abc')).data).toEqual(material);
  });
});
