'use strict';

var telnyx = require('../testUtils').getSpyableTelnyx();
var expect = require('chai').expect;
var Buffer = require('safe-buffer').Buffer;
var crypto = require('crypto');
var nacl = require('tweetnacl');

var EVENT_PAYLOAD = {
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
      call_control_id: 'AgDIxmoRX6QMuaIj_uXRXnPAXP0QlNfXczRrZvZakpWxBlpw48KyZQ==',
      connection_id: '7267xxxxxxxxxxxxxx',
      call_leg_id: '428c31b6-7af4-4bcb-b7f5-5013ef9657c1',
      call_session_id: '428c31b6-abf3-3bc1-b7f4-5013ef9657c1',
      client_state: 'aGF2ZSBhIG5pY2UgZGF5ID1d',
      direction: 'incoming',
      state: 'parked'
    }
  }
};
var EVENT_PAYLOAD_STRING = JSON.stringify(EVENT_PAYLOAD, null, 2);

var PUBLIC_KEY = crypto.randomBytes(32);

describe('Webhooks', function() {
  describe('.constructEvent', function() {
    it('should return an Event instance from a valid JSON payload and valid signature header', function() {
      var timestamp = Math.floor(Date.now() / 1000).toString();
      var signature = generateSignature({
        payload: EVENT_PAYLOAD_STRING,
        timestamp: timestamp,
      });

      var event = telnyx.webhooks.constructEvent(EVENT_PAYLOAD_STRING, signature, timestamp, PUBLIC_KEY);

      expect(event.data.id).to.equal(EVENT_PAYLOAD.data.id);
    });

    it('should raise a JSON error from invalid JSON payload',
      function() {
        var timestamp = Math.floor(Date.now() / 1000).toString();
        var signature = generateSignature({
          payload: '} I am not valid JSON; 123][',
          timestamp: timestamp,
        });
        expect(function() {
          telnyx.webhooks.constructEvent('} I am not valid JSON; 123][', signature, timestamp, PUBLIC_KEY);
        }).to.throw(/Unexpected token/);
      });

    it('should raise a SignatureVerificationError from a valid JSON payload and an invalid signature header',
      function() {
        var signature = 'bad_header';
        var timestamp = Math.floor(Date.now() / 1000).toString();

        expect(function() {
          telnyx.webhooks.constructEvent(EVENT_PAYLOAD_STRING, signature, timestamp, PUBLIC_KEY);
        }).to.throw(/Signature is invalid and does not match the payload/);
      });
  });

  describe('.verifySignature', function() {
    it('should raise a SignatureVerificationError when there are no valid signatures for the payload', function() {
      var signature = "I'm not even a real signature header";
      var timestamp = Math.floor(Date.now() / 1000).toString();

      var expectedMessage = /Signature is invalid and does not match the payload/;

      expect(function() {
        telnyx.webhooks.signature.verifySignature(EVENT_PAYLOAD_STRING, signature, timestamp, PUBLIC_KEY);
      }).to.throw(expectedMessage);

      expect(function() {
        telnyx.webhooks.signature.verifySignature(EVENT_PAYLOAD_STRING, '', timestamp, PUBLIC_KEY);
      }).to.throw(expectedMessage);

      expect(function() {
        telnyx.webhooks.signature.verifySignature(EVENT_PAYLOAD_STRING, undefined, timestamp, PUBLIC_KEY);
      }).to.throw(expectedMessage);

      expect(function() {
        telnyx.webhooks.signature.verifySignature(EVENT_PAYLOAD_STRING, Buffer.from('foo', 'ascii'), timestamp, PUBLIC_KEY);
      }).to.throw(expectedMessage);
    });

    it('should raise a SignatureVerificationError when the timestamp is not within the tolerance', function() {
      var timestamp = ((Date.now() / 1000) - 15).toString();
      var signature = generateSignature({
        timestamp: timestamp,
      });

      expect(function() {
        telnyx.webhooks.signature.verifySignature(EVENT_PAYLOAD_STRING, signature, timestamp, PUBLIC_KEY, 10);
      }).to.throw(/Timestamp outside the tolerance zone/);
    });

    it('should return true when the header contains a valid signature and ' +
      'the timestamp is within the tolerance',
    function() {
      var timestamp = Math.floor(Date.now() / 1000).toString();
      var signature = generateSignature({
        timestamp: timestamp,
      });

      expect(telnyx.webhooks.signature.verifySignature(EVENT_PAYLOAD_STRING, signature, timestamp, PUBLIC_KEY, 10)).to.equal(true);
    });

    it('should return true when the header contains a valid signature ' +
      'and the timestamp is off but no tolerance is provided',
    function() {
      var timestamp = Math.floor(new Date('2012.08.10').getTime() / 1000).toString();
      var signature = generateSignature({
        timestamp: timestamp,
      });

      expect(telnyx.webhooks.signature.verifySignature(EVENT_PAYLOAD_STRING, signature, timestamp, PUBLIC_KEY)).to.equal(true);
    });

    it('should accept Buffer instances for the payload and header', function() {
      var timestamp = Math.floor(Date.now() / 1000).toString();
      var signature = generateSignature({
        timestamp: timestamp,
      });

      expect(telnyx.webhooks.signature.verifySignature(Buffer.from(EVENT_PAYLOAD_STRING), Buffer.from(signature), Buffer.from(timestamp), PUBLIC_KEY, 10)).to.equal(true);
    });
  });
});

function generateSignature(opts) {
  opts = opts || {};

  opts.timestamp = opts.timestamp || Math.floor(Date.now() / 1000).toString();
  opts.payload = opts.payload || EVENT_PAYLOAD_STRING;

  var payload = Buffer.from(`${opts.timestamp}|${opts.payload}`, 'utf8');

  return nacl.sign.detached(payload, nacl.sign.keyPair.fromSeed(Buffer.from(PUBLIC_KEY, 'base64')).secretKey);
}
