'use strict';

var Buffer = require('safe-buffer').Buffer;
var nacl = require('tweetnacl');

var Error = require('./Error');

var Webhook = {
  DEFAULT_TOLERANCE: 300, // 5 minutes

  constructEvent: function(payload, signatureHeader, timestampHeader, publicKey, tolerance) {
    this.signature.verifySignature(payload, signatureHeader, timestampHeader, publicKey, tolerance || Webhook.DEFAULT_TOLERANCE);

    var jsonPayload = JSON.parse(payload);
    return jsonPayload;
  },
};

var signature = {
  verifySignature: function(payload, signatureHeader = '', timestampHeader = '', publicKey, tolerance) {
    payload = Buffer.isBuffer(payload) ? payload.toString('utf8') : payload;
    timestampHeader = Buffer.isBuffer(timestampHeader) ? timestampHeader.toString('utf8') : timestampHeader;

    var payloadBuffer = Buffer.from(`${timestampHeader}|${payload}`, 'utf8');

    var verification;

    try {
      verification = nacl.sign.detached.verify(
        payloadBuffer,
        Buffer.from(signatureHeader, 'base64'),
        Buffer.from(publicKey, 'base64')
      );
    } catch (err) {
      throwSignatureVerificationError(payload, signatureHeader, timestampHeader);
    }

    if (!verification) {
      throwSignatureVerificationError(payload, signatureHeader, timestampHeader);
    }

    var timestampAge = Math.floor(Date.now() / 1000) - parseInt(timestampHeader, 10);

    if (tolerance > 0 && timestampAge > tolerance) {
      throw new Error.TelnyxSignatureVerificationError({
        message: 'Timestamp outside the tolerance zone',
        detail: {
          signatureHeader: signatureHeader,
          timestampHeader: timestampHeader,
          payload: payload,
        },
      });
    }

    return true;
  },
};

function throwSignatureVerificationError(payload, signatureHeader, timestampHeader) {
  throw new Error.TelnyxSignatureVerificationError({
    message: 'Signature is invalid and does not match the payload',
    detail: {
      signatureHeader: signatureHeader,
      timestampHeader: timestampHeader,
      payload: payload,
    },
  });
}

Webhook.signature = signature;

module.exports = Webhook;
