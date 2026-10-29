/**
 * WebRTC login tokens minted locally, with no request to Telnyx.
 *
 * The token has the same shape as the one
 * `POST /v2/telephony_credentials/{id}/token` returns, so it is used the same
 * way: pass it to the WebRTC SDK as `login_token`. Telnyx verifies it on login.
 * It is the same computation as `TelephonyCredential#to_jwt` in telnyx-ruby.
 *
 * The signing material comes from the credential: `token_material` is in the
 * response of `POST /v2/telephony_credentials` and of
 * `GET /v2/telephony_credentials/{id}/token_material`. It is as sensitive as
 * the SIP password, so keep it on the server; never ship it to a browser.
 *
 * @example
 * const { data: credential } = await client.telephonyCredentials.create({ connection_id: '123' });
 * const loginToken = await client.telephonyCredentials.toJwt(credential);          // 1 hour
 * const shortLived = await client.telephonyCredentials.toJwt(credential, { ttl: 600 });
 *
 * @example From stored values, without a request at all
 * import { createLoginToken } from 'telnyx/lib/login-token';
 * const loginToken = await createLoginToken({
 *   id: '...', user_id: '...', sip_username: 'gencred...', expires_at: '2027-01-01T00:00:00Z',
 *   token_material: { kid: 'v1', tel_token: '...', signing_secret: '...' },
 * });
 */

import { TelnyxError } from '../core/error';
import { fromBase64, toBase64 } from '../internal/utils/base64';
import { decodeUTF8, encodeUTF8 } from '../internal/utils/bytes';

/** Token lifetime when `ttl` is not given: one hour. */
export const LOGIN_TOKEN_DEFAULT_TTL = 3600;
/** Longest lifetime a login token can have: one day, the same as API-minted tokens. */
export const LOGIN_TOKEN_MAX_TTL = 86400;
/** `cty` header of a locally minted token; voice-sdk-proxy selects the verification path by it. */
export const LOGIN_TOKEN_CONTENT_TYPE = 'telnyx-webrtc;v=1';

/**
 * What the API returns as `token_material`. `signing_secret` is base64url
 * (unpadded) bytes of the HS256 key; `tel_token` goes into the token as is.
 */
export interface TokenMaterial {
  /** Which key the material was derived with (`v1` today). Goes in the JWT header. */
  kid: string;
  /** The SIP credential encrypted for the gateway, the same value `/token` puts in the `tel_token` claim. */
  tel_token: string;
  /** The HS256 key the token is signed with, base64url. */
  signing_secret: string;
}

/** The fields of a telephony credential that a login token is built from. */
export interface LoginTokenCredential {
  /** The telephony credential `id`. */
  id?: string | undefined;
  /** The credential's `user_id`. */
  user_id?: string | undefined;
  /** The credential's `sip_username`; the token's `identity`. */
  sip_username?: string | undefined;
  /** The credential's `expires_at`, as the API returns it, or null. */
  expires_at?: string | null | undefined;
  /** `kid`, `tel_token`, `signing_secret`; present on a credential from `create`. */
  token_material?: TokenMaterial | undefined;
}

export interface LoginTokenOptions {
  /** Token lifetime in seconds, 1..86400. Default one hour. */
  ttl?: number | undefined;
  /** Signing material to use instead of `credential.token_material`. */
  tokenMaterial?: TokenMaterial | undefined;
  /** The token's issue time; defaults to now. */
  now?: Date | number | undefined;
}

export class TelnyxLoginTokenError extends TelnyxError {
  constructor(message: string) {
    super(message);
    this.name = 'TelnyxLoginTokenError';
  }
}

/**
 * Mints a login token for `credential`, valid from `now` for `ttl` seconds.
 * Pure computation: HMAC-SHA256 over the token with `token_material.signing_secret`.
 */
export async function createLoginToken(
  credential: LoginTokenCredential,
  options: LoginTokenOptions = {},
): Promise<string> {
  const credentialId = required(credential.id, 'id');
  const userId = required(credential.user_id, 'user_id');
  const identity = required(credential.sip_username, 'sip_username');
  const material = normalizeMaterial(options.tokenMaterial ?? credential.token_material);
  const ttl = clampTtl(options.ttl);
  const now = options.now === undefined ? Date.now() : Number(options.now);
  const iat = Math.floor(now / 1000);

  // Same field order as the Ruby SDK, so the two produce the same bytes.
  const header = { alg: 'HS256', typ: 'JWT', cty: LOGIN_TOKEN_CONTENT_TYPE, kid: material.kid };
  const payload = {
    sub: credentialId,
    user_id: userId,
    identity,
    cred_exp: credential.expires_at ?? null,
    tel_token: material.tel_token,
    iat,
    nbf: iat,
    exp: iat + ttl,
    jti: `${credentialId}-${iat}`,
  };

  const signingInput = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(payload))}`;
  return `${signingInput}.${base64url(await sign(signingInput, material.signing_secret))}`;
}

/**
 * Checks a token minted by `createLoginToken` against `signingSecret` and
 * returns its claims. For tests and debugging: Telnyx does the real
 * verification on login.
 */
export async function decodeLoginToken(jwt: string, signingSecret: string): Promise<Record<string, unknown>> {
  const [head, body, sig, ...rest] = String(jwt).split('.');
  if (!head || !body || sig === undefined || rest.length) {
    throw new TelnyxLoginTokenError('not a JWT');
  }
  const expected = await sign(`${head}.${body}`, signingSecret);
  const given = fromBase64url(sig);
  if (!bytesEqual(given, expected)) {
    throw new TelnyxLoginTokenError('Signature is invalid and does not match the payload');
  }
  return JSON.parse(decodeUTF8(fromBase64url(body))) as Record<string, unknown>;
}

function required(value: string | null | undefined, name: string): string {
  if (value === undefined || value === null || String(value) === '') {
    throw new TelnyxLoginTokenError(`${name} is required to mint a token`);
  }
  return String(value);
}

function normalizeMaterial(material: TokenMaterial | null | undefined): TokenMaterial {
  if (!material || typeof material !== 'object') {
    throw new TelnyxLoginTokenError('token_material is required to mint a token');
  }
  const out = {} as Record<keyof TokenMaterial, string>;
  for (const field of ['kid', 'tel_token', 'signing_secret'] as const) {
    const value = material[field];
    if (value === undefined || value === null || String(value) === '') {
      throw new TelnyxLoginTokenError(`token_material.${field} is missing`);
    }
    out[field] = String(value);
  }
  return out;
}

function clampTtl(ttl: number | undefined): number {
  const n = ttl === undefined ? LOGIN_TOKEN_DEFAULT_TTL : Math.trunc(Number(ttl));
  if (!Number.isFinite(n)) return LOGIN_TOKEN_DEFAULT_TTL;
  return Math.min(LOGIN_TOKEN_MAX_TTL, Math.max(1, n));
}

function base64url(data: string | Uint8Array): string {
  // Base64 pads with at most two '=': a bounded match keeps this linear on any input.
  return toBase64(data)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/={1,2}$/, '');
}

function fromBase64url(str: string): Uint8Array {
  const b64 = str.replace(/-/g, '+').replace(/_/g, '/');
  return fromBase64(b64 + '='.repeat((4 - (b64.length % 4)) % 4));
}

function bytesEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i]! ^ b[i]!;
  return diff === 0;
}

// HMAC-SHA256 through WebCrypto, which Node, Deno, Bun, browsers and edge runtimes all provide.
interface SubtleCryptoLike {
  importKey(
    format: string,
    keyData: Uint8Array,
    algorithm: { name: string; hash: string },
    extractable: boolean,
    keyUsages: string[],
  ): Promise<unknown>;
  sign(algorithm: string, key: unknown, data: Uint8Array): Promise<ArrayBuffer>;
}

async function getSubtle(): Promise<SubtleCryptoLike> {
  if (typeof globalThis.crypto !== 'undefined' && globalThis.crypto.subtle) {
    return globalThis.crypto.subtle as unknown as SubtleCryptoLike;
  }
  // Node.js < 19 may need webcrypto from crypto module
  const nodeCrypto = await import('crypto');
  return (nodeCrypto.webcrypto as unknown as { subtle: SubtleCryptoLike }).subtle;
}

async function sign(signingInput: string, signingSecret: string): Promise<Uint8Array> {
  const subtle = await getSubtle();
  const key = await subtle.importKey(
    'raw',
    fromBase64url(signingSecret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  return new Uint8Array(await subtle.sign('HMAC', key, encodeUTF8(signingInput)));
}
