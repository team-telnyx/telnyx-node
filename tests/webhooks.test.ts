import { Telnyx } from '../src/client';
import { TelnyxWebhook, TelnyxWebhookVerificationError } from '../src/webhooks';
import { CallAIGatherEndedWebhookEvent, CallAnsweredWebhookEvent } from '../src/resources/webhooks';
import * as nacl from 'tweetnacl';

describe('TelnyxWebhook', () => {
  let signingKey: nacl.SignKeyPair;
  let verifyKeyHex: string;

  beforeEach(() => {
    // Generate a test key pair for each test
    signingKey = nacl.sign.keyPair();
    verifyKeyHex = Buffer.from(signingKey.publicKey).toString('hex');
  });

  describe('initialization', () => {
    it('should initialize with hex string key', () => {
      const webhook = new TelnyxWebhook(verifyKeyHex);
      expect(webhook).toBeInstanceOf(TelnyxWebhook);
    });

    it('should initialize with Uint8Array key', () => {
      const webhook = new TelnyxWebhook(signingKey.publicKey);
      expect(webhook).toBeInstanceOf(TelnyxWebhook);
    });

    it('should reject invalid hex key format', () => {
      expect(() => new TelnyxWebhook('invalid_key_format')).toThrow(TelnyxWebhookVerificationError);
    });
  });

  describe('verification', () => {
    const payload = JSON.stringify({
      data: {
        id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
        event_type: 'call.ai_gather.ended',
        occurred_at: '2018-02-02T22:25:27.521992Z',
        payload: {
          call_control_id: 'v2:T02llQxIyaRkhfRKxgAP8nY511EhFLizdvdUKJiSw8d6A9BborherQ',
          call_leg_id: '428c31b6-7af4-4bcb-b7f5-5013ef9657c1',
          call_session_id: '428c31b6-7af4-4bcb-b7f5-5013ef9657c1',
          client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
          connection_id: '7267xxxxxxxxxxxxxx',
          from: '+35319605860',
          message_history: [
            { content: 'Hello, can you tell me your age and where you live?', role: 'assistant' },
            { content: "Hello, I'm 29 and I live in Paris?", role: 'user' },
          ],
          result: { age: 29, city: 'Paris' },
          status: 'valid',
          to: '+35319605860',
        },
        record_type: 'event',
      },
    });

    it('should verify valid webhook with correct headers', () => {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const signedPayload = new Uint8Array([
        ...Buffer.from(timestamp, 'utf8'),
        ...Buffer.from('|', 'utf8'),
        ...Buffer.from(payload, 'utf8'),
      ]);
      const signature = nacl.sign.detached(signedPayload, signingKey.secretKey);
      const signatureHex = Buffer.from(signature).toString('hex');

      const headers = {
        'Telnyx-Signature-Ed25519': signatureHex,
        'Telnyx-Timestamp': timestamp,
      };

      const webhook = new TelnyxWebhook(verifyKeyHex);
      expect(() => webhook.verify(payload, headers)).not.toThrow();
    });

    it('should verify valid webhook with lowercase headers', () => {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const signedPayload = new Uint8Array([
        ...Buffer.from(timestamp, 'utf8'),
        ...Buffer.from('|', 'utf8'),
        ...Buffer.from(payload, 'utf8'),
      ]);
      const signature = nacl.sign.detached(signedPayload, signingKey.secretKey);
      const signatureHex = Buffer.from(signature).toString('hex');

      const headers = {
        'telnyx-signature-ed25519': signatureHex,
        'telnyx-timestamp': timestamp,
      };

      const webhook = new TelnyxWebhook(verifyKeyHex);
      expect(() => webhook.verify(payload, headers)).not.toThrow();
    });

    it('should reject webhook with missing signature header', () => {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const headers = {
        'Telnyx-Timestamp': timestamp,
      };

      const webhook = new TelnyxWebhook(verifyKeyHex);
      expect(() => webhook.verify(payload, headers)).toThrow(TelnyxWebhookVerificationError);
    });

    it('should reject webhook with missing timestamp header', () => {
      const signatureHex = Buffer.from(nacl.randomBytes(64)).toString('hex');
      const headers = {
        'Telnyx-Signature-Ed25519': signatureHex,
      };

      const webhook = new TelnyxWebhook(verifyKeyHex);
      expect(() => webhook.verify(payload, headers)).toThrow(TelnyxWebhookVerificationError);
    });

    it('should reject webhook with invalid signature format', () => {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const headers = {
        'Telnyx-Signature-Ed25519': 'invalid_signature',
        'Telnyx-Timestamp': timestamp,
      };

      const webhook = new TelnyxWebhook(verifyKeyHex);
      expect(() => webhook.verify(payload, headers)).toThrow(TelnyxWebhookVerificationError);
    });

    it('should reject webhook with invalid timestamp format', () => {
      const signatureHex = Buffer.from(nacl.randomBytes(64)).toString('hex');
      const headers = {
        'Telnyx-Signature-Ed25519': signatureHex,
        'Telnyx-Timestamp': 'invalid_timestamp',
      };

      const webhook = new TelnyxWebhook(verifyKeyHex);
      expect(() => webhook.verify(payload, headers)).toThrow(TelnyxWebhookVerificationError);
    });

    it('should reject webhook with old timestamp', () => {
      const oldTimestamp = Math.floor(Date.now() / 1000) - 400; // 400 seconds ago
      const signatureHex = Buffer.from(nacl.randomBytes(64)).toString('hex');
      const headers = {
        'Telnyx-Signature-Ed25519': signatureHex,
        'Telnyx-Timestamp': oldTimestamp.toString(),
      };

      const webhook = new TelnyxWebhook(verifyKeyHex);
      expect(() => webhook.verify(payload, headers)).toThrow(TelnyxWebhookVerificationError);
    });

    it('should reject webhook with future timestamp', () => {
      const futureTimestamp = Math.floor(Date.now() / 1000) + 400; // 400 seconds in future
      const signatureHex = Buffer.from(nacl.randomBytes(64)).toString('hex');
      const headers = {
        'Telnyx-Signature-Ed25519': signatureHex,
        'Telnyx-Timestamp': futureTimestamp.toString(),
      };

      const webhook = new TelnyxWebhook(verifyKeyHex);
      expect(() => webhook.verify(payload, headers)).toThrow(TelnyxWebhookVerificationError);
    });

    it('should reject webhook with invalid signature', () => {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const invalidSignature = Buffer.from(nacl.randomBytes(64)).toString('hex');
      const headers = {
        'Telnyx-Signature-Ed25519': invalidSignature,
        'Telnyx-Timestamp': timestamp,
      };

      const webhook = new TelnyxWebhook(verifyKeyHex);
      expect(() => webhook.verify(payload, headers)).toThrow(TelnyxWebhookVerificationError);
    });
  });
});

describe('Webhooks Resource', () => {
  let client: Telnyx;
  let signingKey: nacl.SignKeyPair;
  let verifyKeyHex: string;

  beforeEach(() => {
    signingKey = nacl.sign.keyPair();
    verifyKeyHex = Buffer.from(signingKey.publicKey).toString('hex');
    client = new Telnyx({ apiKey: 'test-key', publicKey: verifyKeyHex });
  });

  describe('unwrap method', () => {
    const payload = JSON.stringify({
      data: {
        id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
        event_type: 'call.ai_gather.ended',
        occurred_at: '2018-02-02T22:25:27.521992Z',
        payload: {
          call_control_id: 'v2:T02llQxIyaRkhfRKxgAP8nY511EhFLizdvdUKJiSw8d6A9BborherQ',
          call_leg_id: '428c31b6-7af4-4bcb-b7f5-5013ef9657c1',
          call_session_id: '428c31b6-7af4-4bcb-b7f5-5013ef9657c1',
          client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
          connection_id: '7267xxxxxxxxxxxxxx',
          from: '+35319605860',
          message_history: [
            { content: 'Hello, can you tell me your age and where you live?', role: 'assistant' },
            { content: "Hello, I'm 29 and I live in Paris?", role: 'user' },
          ],
          result: { age: 29, city: 'Paris' },
          status: 'valid',
          to: '+35319605860',
        },
        record_type: 'event',
      },
    });

    it('should unwrap valid webhook with verification', () => {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const signedPayload = new Uint8Array([
        ...Buffer.from(timestamp, 'utf8'),
        ...Buffer.from('|', 'utf8'),
        ...Buffer.from(payload, 'utf8'),
      ]);
      const signature = nacl.sign.detached(signedPayload, signingKey.secretKey);
      const signatureHex = Buffer.from(signature).toString('hex');

      const headers = {
        'Telnyx-Signature-Ed25519': signatureHex,
        'Telnyx-Timestamp': timestamp,
      };

      const result = client.webhooks.unwrap<CallAIGatherEndedWebhookEvent>(payload, { headers });
      expect(result.data?.event_type).toBe('call.ai_gather.ended');
      expect(result.data?.payload?.call_control_id).toBe(
        'v2:T02llQxIyaRkhfRKxgAP8nY511EhFLizdvdUKJiSw8d6A9BborherQ',
      );
    });

    it('should unwrap valid webhook with provided key', () => {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const signedPayload = new Uint8Array([
        ...Buffer.from(timestamp, 'utf8'),
        ...Buffer.from('|', 'utf8'),
        ...Buffer.from(payload, 'utf8'),
      ]);
      const signature = nacl.sign.detached(signedPayload, signingKey.secretKey);
      const signatureHex = Buffer.from(signature).toString('hex');

      const headers = {
        'Telnyx-Signature-Ed25519': signatureHex,
        'Telnyx-Timestamp': timestamp,
      };

      const clientWithoutKey = new Telnyx({ apiKey: 'test-key' });
      const result = clientWithoutKey.webhooks.unwrap<CallAIGatherEndedWebhookEvent>(payload, {
        headers,
        key: verifyKeyHex,
      });
      expect(result.data?.event_type).toBe('call.ai_gather.ended');
    });

    it('should reject webhook without verification when no key available', () => {
      const clientWithoutKey = new Telnyx({ apiKey: 'test-key' });
      const headers = {
        'Telnyx-Signature-Ed25519': 'dummy',
        'Telnyx-Timestamp': Math.floor(Date.now() / 1000).toString(),
      };

      expect(() => clientWithoutKey.webhooks.unwrap(payload, { headers })).toThrow(
        TelnyxWebhookVerificationError,
      );
    });

    it('should unwrap without verification when no headers provided', () => {
      const result = client.webhooks.unwrap<CallAIGatherEndedWebhookEvent>(payload);
      expect(result.data?.event_type).toBe('call.ai_gather.ended');
    });

    it('should reject invalid webhook signature', () => {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const headers = {
        'Telnyx-Signature-Ed25519': 'invalid_signature',
        'Telnyx-Timestamp': timestamp,
      };

      expect(() => client.webhooks.unwrap(payload, { headers })).toThrow(TelnyxWebhookVerificationError);
    });
  });
});

describe('TelnyxWebhookVerificationError', () => {
  it('should create error with message', () => {
    const error = new TelnyxWebhookVerificationError('Test error');
    expect(error.message).toBe('Test error');
    expect(error.name).toBe('TelnyxWebhookVerificationError');
    expect(error).toBeInstanceOf(Error);
  });
});

describe('E2E Webhook Verification', () => {
  // This test case uses real webhook data structure from Telnyx
  // with a test key pair to simulate production scenario
  it('should verify webhook with real Telnyx payload structure', () => {
    // Generate test key pair (simulating Mission Control public key)
    const testSigningKey = nacl.sign.keyPair();
    const testPublicKeyHex = Buffer.from(testSigningKey.publicKey).toString('hex');

    // Real webhook payload structure from Telnyx (example)
    const realPayload = JSON.stringify({
      data: {
        id: '12345678-1234-1234-1234-123456789012',
        event_type: 'call.answered',
        occurred_at: '2023-10-28T15:30:00.000000Z',
        payload: {
          call_control_id: 'v2:12345678-1234-1234-1234-123456789012',
          call_leg_id: '87654321-4321-4321-4321-210987654321',
          call_session_id: '11111111-1111-1111-1111-111111111111',
          connection_id: '123456789',
          from: '+15551234567',
          to: '+15557654321',
          state: 'answered',
          start_time: '2023-10-28T15:30:00.000000Z',
        },
        record_type: 'event',
      },
      meta: {
        version: '2',
        attempt: '1',
      },
    });

    // Use current timestamp to pass validation
    const realTimestamp = Math.floor(Date.now() / 1000).toString();

    // Create signed payload with pipe separator as per Telnyx spec
    const signedPayload = new Uint8Array([
      ...Buffer.from(realTimestamp, 'utf8'),
      ...Buffer.from('|', 'utf8'),
      ...Buffer.from(realPayload, 'utf8'),
    ]);

    // Generate signature using test private key
    const signature = nacl.sign.detached(signedPayload, testSigningKey.secretKey);
    const signatureHex = Buffer.from(signature).toString('hex');

    // Real Telnyx webhook headers
    const realHeaders = {
      'telnyx-signature-ed25519': signatureHex,
      'telnyx-timestamp': realTimestamp,
      'user-agent': 'telnyx-webhooks',
      'content-type': 'application/json',
    };

    // Verify using the public key
    const webhook = new TelnyxWebhook(testPublicKeyHex);
    expect(() => webhook.verify(realPayload, realHeaders)).not.toThrow();

    // Test with client integration
    const client = new Telnyx({
      apiKey: 'test-api-key',
      publicKey: testPublicKeyHex,
    });

    const result = client.webhooks.unwrap<CallAnsweredWebhookEvent>(realPayload, {
      headers: realHeaders,
    });

    expect(result.data?.event_type).toBe('call.answered');
    expect(result.data?.payload?.call_control_id).toBe('v2:12345678-1234-1234-1234-123456789012');
    expect(result.data?.payload?.from).toBe('+15551234567');
    expect(result.data?.payload?.to).toBe('+15557654321');
  });

  it('should handle webhook with special characters in payload', () => {
    const testSigningKey = nacl.sign.keyPair();
    const testPublicKeyHex = Buffer.from(testSigningKey.publicKey).toString('hex');

    // Payload with special characters that might appear in real webhooks
    const specialPayload = JSON.stringify({
      data: {
        id: 'test-id',
        event_type: 'message.received',
        occurred_at: '2023-10-28T15:30:00.000000Z',
        payload: {
          from: '+15551234567',
          to: '+15557654321',
          text: 'Hello! This is a test with special chars: àáâãäåæçèéêë ñòóôõö ùúûüý ÿ 中文 🚀',
          media: [],
          direction: 'inbound',
        },
        record_type: 'event',
      },
    });

    const timestamp = Math.floor(Date.now() / 1000).toString();
    const signedPayload = new Uint8Array([
      ...Buffer.from(timestamp, 'utf8'),
      ...Buffer.from('|', 'utf8'),
      ...Buffer.from(specialPayload, 'utf8'),
    ]);

    const signature = nacl.sign.detached(signedPayload, testSigningKey.secretKey);
    const signatureHex = Buffer.from(signature).toString('hex');

    const headers = {
      'telnyx-signature-ed25519': signatureHex,
      'telnyx-timestamp': timestamp,
      'user-agent': 'telnyx-webhooks',
    };

    const webhook = new TelnyxWebhook(testPublicKeyHex);
    expect(() => webhook.verify(specialPayload, headers)).not.toThrow();
  });
});
