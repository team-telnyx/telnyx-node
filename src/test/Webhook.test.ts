import {utils as testUtils} from './utils';

const telnyx = testUtils.getSpyableTelnyx();

import crypto from 'crypto';
import nacl from 'tweetnacl';

const EVENT_PAYLOAD = {
  data: {
    record_type: 'event',
    id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
    event_type: 'call_initiated',
    created_at: '2018-02-02T22:25:27.521992Z',
    payload: {
      to: '+13129457420',
      start_time: '2018-02-02T22:25:27.521992Z',
      occurred_at: '2018-02-02T22:25:27.521992Z',
      from: '+35319605860',
      call_control_id:
        'AgDIxmoRX6QMuaIj_uXRXnPAXP0QlNfXczRrZvZakpWxBlpw48KyZQ==',
      connection_id: '7267xxxxxxxxxxxxxx',
      call_leg_id: '428c31b6-7af4-4bcb-b7f5-5013ef9657c1',
      call_session_id: '428c31b6-abf3-3bc1-b7f4-5013ef9657c1',
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
      direction: 'incoming',
      state: 'parked',
    },
  },
};
const EVENT_PAYLOAD_STRING = JSON.stringify(EVENT_PAYLOAD, null, 2);

const KEY_PAIR = nacl.sign.keyPair.fromSeed(crypto.randomBytes(32));
const PUBLIC_KEY = new TextDecoder('utf8').decode(KEY_PAIR.publicKey);

describe('Webhooks', function () {
  describe('.constructEvent', function () {
    test('should return an Event instance from a valid JSON payload and valid signature header', function () {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const signature = generateSignature({
        payload: EVENT_PAYLOAD_STRING,
        timestamp: timestamp,
      });

      const event = telnyx.webhooks.constructEvent(
        EVENT_PAYLOAD_STRING,
        signature,
        timestamp,
        PUBLIC_KEY,
      );

      expect(event.data.id).toBe(EVENT_PAYLOAD.data.id);
    });

    test('should raise a JSON error from invalid JSON payload', function () {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const signature = generateSignature({
        payload: '} I am not valid JSON; 123][',
        timestamp: timestamp,
      });
      expect(function () {
        telnyx.webhooks.constructEvent(
          '} I am not valid JSON; 123][',
          signature,
          timestamp,
          PUBLIC_KEY,
        );
      }).toThrow(/Unexpected token/);
    });

    test('should raise a SignatureVerificationError from a valid JSON payload and an invalid signature header', function () {
      const signature = 'bad_header';
      const timestamp = Math.floor(Date.now() / 1000).toString();

      expect(function () {
        telnyx.webhooks.constructEvent(
          EVENT_PAYLOAD_STRING,
          signature,
          timestamp,
          PUBLIC_KEY,
        );
      }).toThrow(/Signature is invalid and does not match the payload/);
    });
  });

  describe('.verifySignature', function () {
    test('should raise a SignatureVerificationError when there are no valid signatures for the payload', function () {
      const signature = "I'm not even a real signature header";
      const timestamp = Math.floor(Date.now() / 1000).toString();

      const expectedMessage =
        /Signature is invalid and does not match the payload/;

      expect(function () {
        telnyx.webhooks.signature.verifySignature(
          EVENT_PAYLOAD_STRING,
          signature,
          timestamp,
          PUBLIC_KEY,
        );
      }).toThrow(expectedMessage);

      expect(function () {
        telnyx.webhooks.signature.verifySignature(
          EVENT_PAYLOAD_STRING,
          '',
          timestamp,
          PUBLIC_KEY,
        );
      }).toThrow(expectedMessage);

      expect(function () {
        telnyx.webhooks.signature.verifySignature(
          EVENT_PAYLOAD_STRING,
          undefined,
          timestamp,
          PUBLIC_KEY,
        );
      }).toThrow(expectedMessage);

      expect(function () {
        telnyx.webhooks.signature.verifySignature(
          EVENT_PAYLOAD_STRING,
          Buffer.from('foo', 'ascii'),
          timestamp,
          PUBLIC_KEY,
        );
      }).toThrow(expectedMessage);
    });

    test('should raise a SignatureVerificationError when the timestamp is not within the tolerance', function () {
      const timestamp = (Date.now() / 1000 - 15).toString();
      const signature = generateSignature({
        timestamp: timestamp,
      });

      expect(function () {
        telnyx.webhooks.signature.verifySignature(
          EVENT_PAYLOAD_STRING,
          signature,
          timestamp,
          PUBLIC_KEY,
          10,
        );
      }).toThrow(/Timestamp outside the tolerance zone/);
    });

    test(
      'should return true when the header contains a valid signature and ' +
        'the timestamp is within the tolerance',
      function () {
        const timestamp = Math.floor(Date.now() / 1000).toString();
        const signature = generateSignature({
          timestamp: timestamp,
        });

        expect(
          telnyx.webhooks.signature.verifySignature(
            EVENT_PAYLOAD_STRING,
            signature,
            timestamp,
            PUBLIC_KEY,
            10,
          ),
        ).toBe(true);
      },
    );

    test(
      'should return true when the header contains a valid signature ' +
        'and the timestamp is off but no tolerance is provided',
      function () {
        const timestamp = Math.floor(
          new Date('2012.08.10').getTime() / 1000,
        ).toString();
        const signature = generateSignature({
          timestamp: timestamp,
        });

        expect(
          telnyx.webhooks.signature.verifySignature(
            EVENT_PAYLOAD_STRING,
            signature,
            timestamp,
            PUBLIC_KEY,
          ),
        ).toBe(true);
      },
    );

    test('should accept Buffer instances for the payload and header', function () {
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const signature = generateSignature({
        timestamp: timestamp,
      });

      expect(
        telnyx.webhooks.signature.verifySignature(
          Buffer.from(EVENT_PAYLOAD_STRING),
          Buffer.from(signature),
          Buffer.from(timestamp),
          PUBLIC_KEY,
          10,
        ),
      ).toBe(true);
    });
  });
});

function generateSignature(opts: {payload?: string; timestamp?: string}) {
  opts = opts || {};

  opts.timestamp = opts.timestamp || Math.floor(Date.now() / 1000).toString();
  opts.payload = opts.payload || EVENT_PAYLOAD_STRING;

  const payload = Buffer.from(`${opts.timestamp}|${opts.payload}`, 'utf8');

  return nacl.sign.detached(payload, KEY_PAIR.secretKey);
}
