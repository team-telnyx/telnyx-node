// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * Telnyx webhook verification using native Ed25519.
 *
 * This class provides Ed25519 signature verification for Telnyx webhooks
 * using Node's built-in crypto module (no external dependencies).
 *
 * @example Using base64 public key from Mission Control
 * const webhook = new TelnyxWebhook('eu2zvPjhY6odxV34Z/EsRiERvTodkev4Fq0SlK90Izg=');
 * await webhook.verify(payload, headers);
 *
 * @example Using with Telnyx client
 * const client = new Telnyx({
 *   apiKey: process.env.TELNYX_API_KEY,
 *   publicKey: process.env.TELNYX_PUBLIC_KEY, // Base64 string from Mission Control
 * });
 *
 * // Express example
 * app.post('/webhooks', express.raw({ type: 'application/json' }), async (req, res) => {
 *   const event = await client.webhooks.unwrap(req.body.toString(), { headers: req.headers });
 *   // Signature automatically verified
 * });
 */

import { TelnyxError } from '../core/error';

export class TelnyxWebhookVerificationError extends TelnyxError {
  constructor(message: string) {
    super(message);
    this.name = 'TelnyxWebhookVerificationError';
  }
}

export interface WebhookUnwrapOptions {
  headers?: Record<string, string>;
  key?: string | Uint8Array | undefined;
}

export function unsafeUnwrapWebhook<T>(body: string): T {
  return JSON.parse(body) as T;
}

export async function unwrapWebhook<T>(
  body: string,
  options: WebhookUnwrapOptions | undefined,
  clientPublicKey: string | null,
): Promise<T> {
  if (!options?.headers) {
    throw new TelnyxWebhookVerificationError('Webhook headers are required for verification');
  }

  const key = options.key || clientPublicKey;
  if (!key) {
    throw new TelnyxWebhookVerificationError('No public key provided for webhook verification');
  }

  const webhook = new TelnyxWebhook(key);
  await webhook.verify(body, options.headers);
  return unsafeUnwrapWebhook<T>(body);
}

const BASE64_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

/** Decode strict, padded base64 without relying on Node's Buffer global. */
function decodeBase64(value: string): Uint8Array {
  if (value.length === 0 || value.length % 4 !== 0 || !/^[A-Za-z0-9+/]*={0,2}$/.test(value)) {
    throw new Error('Invalid base64');
  }

  const padding =
    value.endsWith('==') ? 2
    : value.endsWith('=') ? 1
    : 0;
  const output = new Uint8Array((value.length / 4) * 3 - padding);
  let outputIndex = 0;

  for (let index = 0; index < value.length; index += 4) {
    const a = BASE64_ALPHABET.indexOf(value[index]!);
    const b = BASE64_ALPHABET.indexOf(value[index + 1]!);
    const c = value[index + 2] === '=' ? 0 : BASE64_ALPHABET.indexOf(value[index + 2]!);
    const d = value[index + 3] === '=' ? 0 : BASE64_ALPHABET.indexOf(value[index + 3]!);
    if (a < 0 || b < 0 || c < 0 || d < 0) throw new Error('Invalid base64');

    const chunk = (a << 18) | (b << 12) | (c << 6) | d;
    if (outputIndex < output.length) output[outputIndex++] = (chunk >> 16) & 0xff;
    if (outputIndex < output.length) output[outputIndex++] = (chunk >> 8) & 0xff;
    if (outputIndex < output.length) output[outputIndex++] = chunk & 0xff;
  }

  return output;
}

// Type for the SubtleCrypto interface we need
// Using unknown for key type to avoid CryptoKey dependency
interface SubtleCryptoLike {
  importKey(
    format: 'raw',
    keyData: Uint8Array,
    algorithm: { name: string },
    extractable: boolean,
    keyUsages: string[],
  ): Promise<unknown>;
  verify(algorithm: string, key: unknown, signature: Uint8Array, data: Uint8Array): Promise<boolean>;
}

interface CryptoLike {
  subtle: SubtleCryptoLike;
}

// Get crypto implementation (works in Node.js and browsers)
async function getCrypto(): Promise<CryptoLike> {
  if (typeof globalThis.crypto !== 'undefined' && globalThis.crypto.subtle) {
    return globalThis.crypto as CryptoLike;
  }
  // Node.js < 19 may need webcrypto from crypto module
  const nodeCrypto = await import('crypto');
  return nodeCrypto.webcrypto as unknown as CryptoLike;
}

export class TelnyxWebhook {
  private verifyKey: Uint8Array;

  /**
   * Initialize the webhook verifier with a public key.
   *
   * @param key The public key for verification (base64 string from Telnyx Mission Control or Uint8Array)
   */
  constructor(key: string | Uint8Array) {
    // Convert key to Uint8Array if it's a string
    if (typeof key === 'string') {
      try {
        // Telnyx provides keys in base64 format
        const keyBytes = decodeBase64(key);
        if (keyBytes.length !== 32) {
          throw new TelnyxWebhookVerificationError(
            `Invalid public key: expected 32 bytes, got ${keyBytes.length} bytes`,
          );
        }
        this.verifyKey = keyBytes;
      } catch (exc) {
        if (exc instanceof TelnyxWebhookVerificationError) {
          throw exc;
        }
        throw new TelnyxWebhookVerificationError(`Invalid key format: ${key}`);
      }
    } else {
      if (key.length !== 32) {
        throw new TelnyxWebhookVerificationError(
          `Invalid public key: expected 32 bytes, got ${key.length} bytes`,
        );
      }
      this.verifyKey = key;
    }
  }

  /**
   * Verify a webhook payload and headers.
   *
   * @param payload The webhook payload string
   * @param headers The webhook headers
   * @throws TelnyxWebhookVerificationError If verification fails
   */
  async verify(payload: string, headers: Record<string, string>): Promise<void> {
    // Extract required headers (case-insensitive lookup)
    const signatureHeader = this.getHeader(headers, 'telnyx-signature-ed25519');
    const timestampHeader = this.getHeader(headers, 'telnyx-timestamp');

    // Validate required headers
    if (!signatureHeader) {
      throw new TelnyxWebhookVerificationError('Missing required header: Telnyx-Signature-Ed25519');
    }

    if (!timestampHeader) {
      throw new TelnyxWebhookVerificationError('Missing required header: Telnyx-Timestamp');
    }

    // Validate timestamp format and prevent replay attacks
    try {
      if (!/^\d+$/.test(timestampHeader)) {
        throw new TelnyxWebhookVerificationError(`Invalid timestamp format: ${timestampHeader}`);
      }
      const webhookTime = Number(timestampHeader);
      if (!Number.isSafeInteger(webhookTime)) {
        throw new TelnyxWebhookVerificationError(`Invalid timestamp format: ${timestampHeader}`);
      }
      const currentTime = Math.floor(Date.now() / 1000);

      // Allow 5 minutes tolerance
      if (Math.abs(currentTime - webhookTime) > 300) {
        throw new TelnyxWebhookVerificationError(`Webhook timestamp too old or too new: ${timestampHeader}`);
      }
    } catch (exc) {
      if (exc instanceof TelnyxWebhookVerificationError) {
        throw exc;
      }
      throw new TelnyxWebhookVerificationError(`Invalid timestamp format: ${timestampHeader}`);
    }

    // Decode the signature from base64
    let signature: Uint8Array;
    try {
      const signatureBuffer = decodeBase64(signatureHeader);

      if (signatureBuffer.length !== 64) {
        throw new Error(`Invalid signature length: expected 64 bytes, got ${signatureBuffer.length} bytes`);
      }

      signature = new Uint8Array(signatureBuffer);
    } catch (exc) {
      throw new TelnyxWebhookVerificationError(`Invalid signature format: ${signatureHeader}`);
    }

    // Create the exact signed payload: timestamp|unmodified payload
    const encoder = new TextEncoder();
    const signedPayload = encoder.encode(`${timestampHeader}|${payload}`);

    // Verify the signature using native crypto
    let isValid: boolean;
    try {
      const crypto = await getCrypto();
      const cryptoKey = await crypto.subtle.importKey('raw', this.verifyKey, { name: 'Ed25519' }, false, [
        'verify',
      ]);

      isValid = await crypto.subtle.verify('Ed25519', cryptoKey, signature, signedPayload);
    } catch (exc) {
      throw new TelnyxWebhookVerificationError('Signature verification failed due to cryptographic error');
    }

    if (!isValid) {
      throw new TelnyxWebhookVerificationError(
        'Signature verification failed: signature does not match payload',
      );
    }
  }

  /**
   * Helper method to get header value case-insensitively
   */
  private getHeader(headers: Record<string, string>, name: string): string | undefined {
    const lowerName = name.toLowerCase();
    for (const [key, value] of Object.entries(headers)) {
      if (key.toLowerCase() === lowerName) {
        return value;
      }
    }

    return undefined;
  }
}
