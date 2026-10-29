import { Telnyx } from '../src/client';
import {
  createLoginToken,
  decodeLoginToken,
  LOGIN_TOKEN_DEFAULT_TTL,
  LOGIN_TOKEN_MAX_TTL,
  TelnyxLoginTokenError,
} from '../src/lib/login-token';

// Synthetic inputs. The expected tokens below were produced by running
// Telnyx::AccessToken#to_jwt (telnyx-ruby 3.1.0) with these same values, so
// this suite also checks that the two SDKs mint identical tokens.
const material = {
  kid: 'v1',
  tel_token: 'AQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyA=',
  signing_secret: 'c2VjcmV0LXNlY3JldC1zZWNyZXQtc2VjcmV0LTEyMzQ1',
};
const credential = {
  id: '0f0e5b0d-3b6e-4b0e-9d7c-6b1b0d3c4a5e',
  user_id: '7d1e4f2a-9c3b-4e8d-a1f6-2b5c8d9e0f13',
  sip_username: 'gencredQ1w2e3r4',
  expires_at: '2027-01-01T00:00:00Z',
  token_material: material,
};
const NOW = 1793300000 * 1000;
const RUBY_TOKEN_TTL_600 =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InRlbG55eC13ZWJydGM7dj0xIiwia2lkIjoidjEifQ.eyJzdWIiOiIwZjBlNWIwZC0zYjZlLTRiMGUtOWQ3Yy02YjFiMGQzYzRhNWUiLCJ1c2VyX2lkIjoiN2QxZTRmMmEtOWMzYi00ZThkLWExZjYtMmI1YzhkOWUwZjEzIiwiaWRlbnRpdHkiOiJnZW5jcmVkUTF3MmUzcjQiLCJjcmVkX2V4cCI6IjIwMjctMDEtMDFUMDA6MDA6MDBaIiwidGVsX3Rva2VuIjoiQVFJREJBVUdCd2dKQ2dzTURRNFBFQkVTRXhRVkZoY1lHUm9iSEIwZUh5QT0iLCJpYXQiOjE3OTMzMDAwMDAsIm5iZiI6MTc5MzMwMDAwMCwiZXhwIjoxNzkzMzAwNjAwLCJqdGkiOiIwZjBlNWIwZC0zYjZlLTRiMGUtOWQ3Yy02YjFiMGQzYzRhNWUtMTc5MzMwMDAwMCJ9.TnmW2u-FTOvh5XQBqAZGhuYR5r0uuNVihN6_DHkbxYg';
const RUBY_TOKEN_NO_EXPIRY_DEFAULT_TTL =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InRlbG55eC13ZWJydGM7dj0xIiwia2lkIjoidjEifQ.eyJzdWIiOiIwZjBlNWIwZC0zYjZlLTRiMGUtOWQ3Yy02YjFiMGQzYzRhNWUiLCJ1c2VyX2lkIjoiN2QxZTRmMmEtOWMzYi00ZThkLWExZjYtMmI1YzhkOWUwZjEzIiwiaWRlbnRpdHkiOiJnZW5jcmVkUTF3MmUzcjQiLCJjcmVkX2V4cCI6bnVsbCwidGVsX3Rva2VuIjoiQVFJREJBVUdCd2dKQ2dzTURRNFBFQkVTRXhRVkZoY1lHUm9iSEIwZUh5QT0iLCJpYXQiOjE3OTMzMDAwMDAsIm5iZiI6MTc5MzMwMDAwMCwiZXhwIjoxNzkzMzAzNjAwLCJqdGkiOiIwZjBlNWIwZC0zYjZlLTRiMGUtOWQ3Yy02YjFiMGQzYzRhNWUtMTc5MzMwMDAwMCJ9.DbF1h8CLQj2kgBSiB4umOaKknIkw7H14v3Do34YortA';

const b64urlJson = (part: string) => JSON.parse(Buffer.from(part, 'base64url').toString());

describe('createLoginToken', () => {
  test('produces the same token as telnyx-ruby for the same input', async () => {
    expect(await createLoginToken(credential, { ttl: 600, now: NOW })).toBe(RUBY_TOKEN_TTL_600);
    expect(await createLoginToken({ ...credential, expires_at: null }, { now: NOW })).toBe(
      RUBY_TOKEN_NO_EXPIRY_DEFAULT_TTL,
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
      iat: 1793300000,
      nbf: 1793300000,
      exp: 1793300600,
      jti: `${credential.id}-1793300000`,
    });
  });

  test('ttl defaults to one hour and is clamped to 1..86400', async () => {
    const exp = async (opts: { ttl?: number }) =>
      b64urlJson((await createLoginToken(credential, { ...opts, now: NOW })).split('.')[1]!).exp - 1793300000;
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
  test('verifies and returns the claims', async () => {
    const claims = await decodeLoginToken(RUBY_TOKEN_TTL_600, material.signing_secret);
    expect(claims).toMatchObject({ sub: credential.id, identity: credential.sip_username, exp: 1793300600 });
  });

  test('rejects a tampered payload, a wrong secret and non-JWTs', async () => {
    const [head, body, sig] = RUBY_TOKEN_TTL_600.split('.');
    const tampered = Buffer.from(JSON.stringify({ ...b64urlJson(body!), exp: 4102444800 })).toString(
      'base64url',
    );
    await expect(decodeLoginToken(`${head}.${tampered}.${sig}`, material.signing_secret)).rejects.toThrow(
      'Signature is invalid',
    );
    await expect(
      decodeLoginToken(RUBY_TOKEN_TTL_600, Buffer.alloc(32, 1).toString('base64url')),
    ).rejects.toThrow('Signature is invalid');
    await expect(decodeLoginToken('nope', material.signing_secret)).rejects.toThrow('not a JWT');
  });
});

describe('client.telephonyCredentials.toJwt', () => {
  test('uses the material on a credential from create, with no request', async () => {
    const fetch = jest.fn(async () => {
      throw new Error('no request expected');
    });
    const client = new Telnyx({ apiKey: 'My API Key', fetch });
    expect(await client.telephonyCredentials.toJwt(credential, { ttl: 600, now: NOW })).toBe(
      RUBY_TOKEN_TTL_600,
    );
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
    expect(await client.telephonyCredentials.toJwt(bare, { ttl: 600, now: NOW })).toBe(RUBY_TOKEN_TTL_600);
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
