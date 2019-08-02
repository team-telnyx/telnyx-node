'use strict';

var telnyx = require('../testUtils').getSpyableTelnyx();
var expect = require('chai').expect;
var Buffer = require('safe-buffer').Buffer;
var crypto = require('crypto');

var EVENT_PAYLOAD = {
  data: {
    record_type: 'event',
    id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
    event_type: 'port_request.ported',
    occurred_at: '2018-02-02T22:25:27.521992Z',
    payload: {
      id: '5ccc7b54-4df3-4bca-a65a-3da1ecc777f0'
    }
  }
};
var EVENT_PAYLOAD_STRING = JSON.stringify(EVENT_PAYLOAD, null, 2);

var PUBLIC_KEY = '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwy/jPkkgBo7oQermYujj\nAmSqN+aHNg+D4K85lKn6T3khJ8O2t/FrgN5qSGqg+0U5hoIHZflEon28lbLdf6gZ\njPeKQ2a24w5zroR6e4MM00RyJWA6MWXdo6Tn6xqKMYuT8LffEJGnXCH4yTIkxAVD\nyK0dfewhtrlpmW5ojXcDCrZ3Oo1o588PLNwSIuQwU7wHZwOLglWxFt6LZ9Ps8zYf\nQNH/pXNczf1E4rGZ1QxrzqFbndvjCE5VDRhULhycT/X0H2EMvNgHsDQk4OhENnzo\nCal3vO5+P9MgC7NSZCR8Ubebq0tanL5dj5GGYyjWmeq3QhfDLX2mTpIv/B0e8+hg\n8QIDAQAB\n-----END PUBLIC KEY-----\n';

var PRIVATE_KEY = '-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAwy/jPkkgBo7oQermYujjAmSqN+aHNg+D4K85lKn6T3khJ8O2\nt/FrgN5qSGqg+0U5hoIHZflEon28lbLdf6gZjPeKQ2a24w5zroR6e4MM00RyJWA6\nMWXdo6Tn6xqKMYuT8LffEJGnXCH4yTIkxAVDyK0dfewhtrlpmW5ojXcDCrZ3Oo1o\n588PLNwSIuQwU7wHZwOLglWxFt6LZ9Ps8zYfQNH/pXNczf1E4rGZ1QxrzqFbndvj\nCE5VDRhULhycT/X0H2EMvNgHsDQk4OhENnzoCal3vO5+P9MgC7NSZCR8Ubebq0ta\nnL5dj5GGYyjWmeq3QhfDLX2mTpIv/B0e8+hg8QIDAQABAoIBAQCNwoP6wsVdvgD1\njxNQlu/41v/Bpc5h9xbC4sChNmqzubfY144nPlHjwKXUfoz4sag8Bsg0ybuNgGCt\nIME6a+5SsZ5boYgGlIJ0J4eFmQKBll6IwsDBC8jTh3thB1+C6GrEE+cQc5jnk0zL\nY33MWD6IyyJ2SD+cJEGLy+JnjB5LckGCQXWPQXwvpIKgGmFoLQzHCKfeKHZ3olB8\nC1+YKrQzLtyuuH9obDWxRSrqI5gOI/76PWmo+weNa4OrfFtBf5O9bo5OD17ilIT/\nuNpxb/7rOkpwU9x6D00/D/S7ecCdVoL2yBB5L635TNQKXxhvdSmBg1ceLlztwsUL\nOHIlglTZAoGBAOY3wyincm8iAUxLE+Z3AeTD94pjND4g2JXFF9E7UDxgRD6E3n38\nubNRdAMkxDmDYgyIOZsebykMadQ2vNiWqTjOBr6hxyQMFutHWrIJOU+peFCepn8u\nNX3Xg44l7KcwwqX5svoqgFl1FKwNpBOSo50oGX4lAgqtjYqEeMInfjZ7AoGBANkL\nz0wBNAr9oXsc0BN2WkQXB34RU/WcrymhxHfc+ZRzRShk9LOdBTuMYnj4rtjdG849\nJDDWlMk7UlzGjI07G5aT+n8Aq69BhV0IARC9PafTncE6G3sHswAQudHiurLflP9C\noj6kTakunrq8Kgj3Q1p6Ie+Hv7E01A3D0Difr4CDAoGAXORrLuBB4G3MMEirAvdK\nIFCidYiJ7/e47NXWQmq4eWQupTtfu15aX+yh7xLKypok2gGtnNWu7NVBbouXr507\nMtyPBCSrAfSO2uizw9rM8UPkdENP00mF8/0d7CGJV/zozafve9niaDZB3Rqz9eHZ\nevRPNQMhy8Uzs4y4XT8qQjkCgYBNuLjmkpe8R86Hc23fSkZQk56POk1CanUfB1p/\nQZXt3skpCd3GY7f39vFcOFEEP0kxtRs8kdp9pMx9hGvYNw5OAXd1+xt/iorjIXag\nM+PcMR8QjmpAyCUFJPglfHc2jnGgZpAKtnNI3fThEXhL9Z8cyxdT2tx97FjzBOeP\nHz+NWQKBgQCU0bSxTp2rbOCxHosQ/GDDTY0JkQ2z5q1SkibSiEnyAZ3yCHpXZRD7\nsa5BWs4qlasSKmxdmT9xgRDAL6CJH6kJizF3UIaIPOvPjIroOa7Mk1OFNbOi6Cao\n0LcWp5w1I2r5g7sOIRM/AcS3yVT5RJO4KB8WyDOvxCfP8cFsTacZmQ==\n-----END RSA PRIVATE KEY-----\n';

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
  opts.publicKey = opts.publicKey || PUBLIC_KEY;
  opts.privateKey = opts.privateKey || PRIVATE_KEY;

  const sign = crypto.createSign('SHA256');
  sign.write(`${opts.timestamp}|${opts.payload}`);
  sign.end();
  const signature = sign.sign(opts.privateKey, 'base64');

  return signature;
}
