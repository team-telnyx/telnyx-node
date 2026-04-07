import { Telnyx } from '../src/client';
import { TelnyxWebhook, TelnyxWebhookVerificationError } from '../src/lib/webhooks';
import { CallAIGatherEndedWebhookEvent, CallAnsweredWebhookEvent } from '../src/resources/webhooks';
import * as crypto from 'crypto';

// Helper to generate random bytes (typed cast for Node.js crypto)
function randomBytes(size: number): Buffer {
  return (crypto as unknown as { randomBytes: (size: number) => Buffer }).randomBytes(size);
}

// Helper to generate Ed25519 key pairs for testing
function generateKeyPair() {
  const { publicKey, privateKey } = crypto.generateKeyPairSync('ed25519');
  const publicKeyRaw = publicKey.export({ type: 'spki', format: 'der' }).subarray(-32);
  return {
    publicKey: publicKeyRaw,
    publicKeyBase64: publicKeyRaw.toString('base64'),
    privateKey,
  };
}

// Helper to sign a payload with Ed25519
function signPayload(payload: Uint8Array, privateKey: crypto.KeyObject): Buffer {
  return (crypto as unknown as { sign: (alg: null, data: Uint8Array, key: crypto.KeyObject) => Buffer }).sign(
    null,
    payload,
    privateKey,
  );
}

describe('TelnyxWebhook', () => {
  let keyPair: ReturnType<typeof generateKeyPair>;

  beforeEach(() => {
    // Generate a test key pair for each test
    keyPair = generateKeyPair();
  });

  describe('initialization', () => {
    it('should initialize with base64 string key', () => {
      const webhook = new TelnyxWebhook(keyPair.publicKeyBase64);
      expect(webhook).toBeInstanceOf(TelnyxWebhook);
    });

    it('should initialize with Uint8Array key', () => {
      const webhook = new TelnyxWebhook(keyPair.publicKey);
      expect(webhook).toBeInstanceOf(TelnyxWebhook);
    });

    it('should reject invalid base64 key format', () => {
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

    it('should verify valid webhook with correct headers', async () => {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const signedPayload = Buffer.concat([
        Buffer.from(timestamp, 'utf8'),
        Buffer.from('|', 'utf8'),
        Buffer.from(payload, 'utf8'),
      ]);
      const signature = signPayload(signedPayload, keyPair.privateKey);
      const signatureBase64 = signature.toString('base64');

      const headers = {
        'Telnyx-Signature-Ed25519': signatureBase64,
        'Telnyx-Timestamp': timestamp,
      };

      const webhook = new TelnyxWebhook(keyPair.publicKeyBase64);
      await expect(webhook.verify(payload, headers)).resolves.toBeUndefined();
    });

    it('should verify valid webhook with lowercase headers', async () => {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const signedPayload = Buffer.concat([
        Buffer.from(timestamp, 'utf8'),
        Buffer.from('|', 'utf8'),
        Buffer.from(payload, 'utf8'),
      ]);
      const signature = signPayload(signedPayload, keyPair.privateKey);
      const signatureBase64 = signature.toString('base64');

      const headers = {
        'telnyx-signature-ed25519': signatureBase64,
        'telnyx-timestamp': timestamp,
      };

      const webhook = new TelnyxWebhook(keyPair.publicKeyBase64);
      await expect(webhook.verify(payload, headers)).resolves.toBeUndefined();
    });

    it('should reject webhook with missing signature header', async () => {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const headers = {
        'Telnyx-Timestamp': timestamp,
      };

      const webhook = new TelnyxWebhook(keyPair.publicKeyBase64);
      await expect(webhook.verify(payload, headers)).rejects.toThrow(TelnyxWebhookVerificationError);
    });

    it('should reject webhook with missing timestamp header', async () => {
      const signatureBase64 = randomBytes(64).toString('base64');
      const headers = {
        'Telnyx-Signature-Ed25519': signatureBase64,
      };

      const webhook = new TelnyxWebhook(keyPair.publicKeyBase64);
      await expect(webhook.verify(payload, headers)).rejects.toThrow(TelnyxWebhookVerificationError);
    });

    it('should reject webhook with invalid signature format', async () => {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const headers = {
        'Telnyx-Signature-Ed25519': 'invalid_signature',
        'Telnyx-Timestamp': timestamp,
      };

      const webhook = new TelnyxWebhook(keyPair.publicKeyBase64);
      await expect(webhook.verify(payload, headers)).rejects.toThrow(TelnyxWebhookVerificationError);
    });

    it('should reject webhook with invalid timestamp format', async () => {
      const signatureBase64 = randomBytes(64).toString('base64');
      const headers = {
        'Telnyx-Signature-Ed25519': signatureBase64,
        'Telnyx-Timestamp': 'invalid_timestamp',
      };

      const webhook = new TelnyxWebhook(keyPair.publicKeyBase64);
      await expect(webhook.verify(payload, headers)).rejects.toThrow(TelnyxWebhookVerificationError);
    });

    it('should reject webhook with old timestamp', async () => {
      const oldTimestamp = Math.floor(Date.now() / 1000) - 400; // 400 seconds ago
      const signatureBase64 = randomBytes(64).toString('base64');
      const headers = {
        'Telnyx-Signature-Ed25519': signatureBase64,
        'Telnyx-Timestamp': oldTimestamp.toString(),
      };

      const webhook = new TelnyxWebhook(keyPair.publicKeyBase64);
      await expect(webhook.verify(payload, headers)).rejects.toThrow(TelnyxWebhookVerificationError);
    });

    it('should reject webhook with future timestamp', async () => {
      const futureTimestamp = Math.floor(Date.now() / 1000) + 400; // 400 seconds in future
      const signatureBase64 = randomBytes(64).toString('base64');
      const headers = {
        'Telnyx-Signature-Ed25519': signatureBase64,
        'Telnyx-Timestamp': futureTimestamp.toString(),
      };

      const webhook = new TelnyxWebhook(keyPair.publicKeyBase64);
      await expect(webhook.verify(payload, headers)).rejects.toThrow(TelnyxWebhookVerificationError);
    });

    it('should reject webhook with invalid signature', async () => {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const invalidSignature = randomBytes(64).toString('base64');
      const headers = {
        'Telnyx-Signature-Ed25519': invalidSignature,
        'Telnyx-Timestamp': timestamp,
      };

      const webhook = new TelnyxWebhook(keyPair.publicKeyBase64);
      await expect(webhook.verify(payload, headers)).rejects.toThrow(TelnyxWebhookVerificationError);
    });
  });
});

describe('Webhooks Resource', () => {
  let client: Telnyx;
  let keyPair: ReturnType<typeof generateKeyPair>;

  beforeEach(() => {
    keyPair = generateKeyPair();
    client = new Telnyx({ apiKey: 'test-key', publicKey: keyPair.publicKeyBase64 });
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

    it('should unwrap valid webhook with verification', async () => {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const signedPayload = Buffer.concat([
        Buffer.from(timestamp, 'utf8'),
        Buffer.from('|', 'utf8'),
        Buffer.from(payload, 'utf8'),
      ]);
      const signature = signPayload(signedPayload, keyPair.privateKey);
      const signatureBase64 = signature.toString('base64');

      const headers = {
        'Telnyx-Signature-Ed25519': signatureBase64,
        'Telnyx-Timestamp': timestamp,
      };

      const result = await client.webhooks.unwrap<CallAIGatherEndedWebhookEvent>(payload, { headers });
      expect(result.data?.event_type).toBe('call.ai_gather.ended');
      expect(result.data?.payload?.call_control_id).toBe(
        'v2:T02llQxIyaRkhfRKxgAP8nY511EhFLizdvdUKJiSw8d6A9BborherQ',
      );
    });

    it('should unwrap valid webhook with provided key', async () => {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const signedPayload = Buffer.concat([
        Buffer.from(timestamp, 'utf8'),
        Buffer.from('|', 'utf8'),
        Buffer.from(payload, 'utf8'),
      ]);
      const signature = signPayload(signedPayload, keyPair.privateKey);
      const signatureBase64 = signature.toString('base64');

      const headers = {
        'Telnyx-Signature-Ed25519': signatureBase64,
        'Telnyx-Timestamp': timestamp,
      };

      const clientWithoutKey = new Telnyx({ apiKey: 'test-key' });
      const result = await clientWithoutKey.webhooks.unwrap<CallAIGatherEndedWebhookEvent>(payload, {
        headers,
        key: keyPair.publicKeyBase64,
      });
      expect(result.data?.event_type).toBe('call.ai_gather.ended');
    });

    it('should reject webhook without verification when no key available', async () => {
      const clientWithoutKey = new Telnyx({ apiKey: 'test-key' });
      const headers = {
        'Telnyx-Signature-Ed25519': 'dummy',
        'Telnyx-Timestamp': Math.floor(Date.now() / 1000).toString(),
      };

      await expect(clientWithoutKey.webhooks.unwrap(payload, { headers })).rejects.toThrow(
        TelnyxWebhookVerificationError,
      );
    });

    it('should unwrap without verification when no headers provided', async () => {
      const result = await client.webhooks.unwrap<CallAIGatherEndedWebhookEvent>(payload);
      expect(result.data?.event_type).toBe('call.ai_gather.ended');
    });

    it('should reject invalid webhook signature', async () => {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const headers = {
        'Telnyx-Signature-Ed25519': 'invalid_signature',
        'Telnyx-Timestamp': timestamp,
      };

      await expect(client.webhooks.unwrap(payload, { headers })).rejects.toThrow(
        TelnyxWebhookVerificationError,
      );
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
  it('should verify webhook with real Telnyx payload structure', async () => {
    // Generate test key pair (simulating Mission Control public key)
    const testKeyPair = generateKeyPair();

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
    const signedPayload = Buffer.concat([
      Buffer.from(realTimestamp, 'utf8'),
      Buffer.from('|', 'utf8'),
      Buffer.from(realPayload, 'utf8'),
    ]);

    // Generate signature using test private key
    const signature = signPayload(signedPayload, testKeyPair.privateKey);
    const signatureBase64 = signature.toString('base64');

    // Real Telnyx webhook headers
    const realHeaders = {
      'telnyx-signature-ed25519': signatureBase64,
      'telnyx-timestamp': realTimestamp,
      'user-agent': 'telnyx-webhooks',
      'content-type': 'application/json',
    };

    // Verify using the public key
    const webhook = new TelnyxWebhook(testKeyPair.publicKeyBase64);
    await expect(webhook.verify(realPayload, realHeaders)).resolves.toBeUndefined();

    // Test with client integration
    const client = new Telnyx({
      apiKey: 'test-api-key',
      publicKey: testKeyPair.publicKeyBase64,
    });

    const result = await client.webhooks.unwrap<CallAnsweredWebhookEvent>(realPayload, {
      headers: realHeaders,
    });

    expect(result.data?.event_type).toBe('call.answered');
    expect(result.data?.payload?.call_control_id).toBe('v2:12345678-1234-1234-1234-123456789012');
    expect(result.data?.payload?.from).toBe('+15551234567');
    expect(result.data?.payload?.to).toBe('+15557654321');
  });

  it('should handle webhook with special characters in payload', async () => {
    const testKeyPair = generateKeyPair();

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
    const signedPayload = Buffer.concat([
      Buffer.from(timestamp, 'utf8'),
      Buffer.from('|', 'utf8'),
      Buffer.from(specialPayload, 'utf8'),
    ]);

    const signature = signPayload(signedPayload, testKeyPair.privateKey);
    const signatureBase64 = signature.toString('base64');

    const headers = {
      'telnyx-signature-ed25519': signatureBase64,
      'telnyx-timestamp': timestamp,
      'user-agent': 'telnyx-webhooks',
    };

    const webhook = new TelnyxWebhook(testKeyPair.publicKeyBase64);
    await expect(webhook.verify(specialPayload, headers)).resolves.toBeUndefined();
  });
});
