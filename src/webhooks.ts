/**
 * Telnyx webhook verification following the standardwebhooks pattern.
 *
 * This class provides ED25519 signature verification for Telnyx webhooks
 * using the same interface pattern as the standardwebhooks library.
 */

import * as nacl from 'tweetnacl';
import { TelnyxError } from './core/error';

export class TelnyxWebhookVerificationError extends TelnyxError {
  constructor(message: string) {
    super(message);
    this.name = 'TelnyxWebhookVerificationError';
  }
}

export class TelnyxWebhook {
  private verifyKey: Uint8Array;

  /**
   * Initialize the webhook verifier with a public key.
   *
   * @param key The public key for verification (hex string or Uint8Array)
   */
  constructor(key: string | Uint8Array) {
    // Convert key to Uint8Array if it's a string
    if (typeof key === 'string') {
      try {
        const keyBytes = Buffer.from(key, 'hex');
        if (keyBytes.length !== 32) {
          throw new TelnyxWebhookVerificationError(`Invalid key format: ${key}`);
        }
        this.verifyKey = new Uint8Array(keyBytes);
      } catch (exc) {
        if (exc instanceof TelnyxWebhookVerificationError) {
          throw exc;
        }
        console.error('Error parsing public key:', exc);
        throw new TelnyxWebhookVerificationError(`Invalid key format: ${key}`);
      }
    } else {
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
  verify(payload: string, headers: Record<string, string>): void {
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
      const webhookTime = parseInt(timestampHeader, 10);
      const currentTime = Math.floor(Date.now() / 1000);

      // Allow 5 minutes tolerance
      if (Math.abs(currentTime - webhookTime) > 300) {
        throw new TelnyxWebhookVerificationError(`Webhook timestamp too old or too new: ${timestampHeader}`);
      }
    } catch (exc) {
      if (exc instanceof TelnyxWebhookVerificationError) {
        throw exc;
      }
      console.error('Error validating timestamp:', exc);
      throw new TelnyxWebhookVerificationError(`Invalid timestamp format: ${timestampHeader}`);
    }

    // Decode the signature from hex
    let signature: Uint8Array;
    try {
      signature = new Uint8Array(Buffer.from(signatureHeader, 'hex'));
    } catch (exc) {
      console.error('Error decoding signature:', exc);
      throw new TelnyxWebhookVerificationError(`Invalid signature format: ${signatureHeader}`);
    }

    // Create the signed payload: timestamp|payload
    const signedPayload = new Uint8Array([
      ...Buffer.from(timestampHeader, 'utf8'),
      ...Buffer.from('|', 'utf8'),
      ...Buffer.from(payload, 'utf8'),
    ]);

    // Verify the signature
    let isValid: boolean;
    try {
      isValid = nacl.sign.detached.verify(signedPayload, signature, this.verifyKey);
    } catch (exc) {
      console.error('Error during signature verification:', exc);
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
