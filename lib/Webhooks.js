'use strict';

var Buffer = require('safe-buffer').Buffer;
var crypto = require('crypto');

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
  verifySignature: function(payload, signatureHeader, timestampHeader, publicKey, tolerance) {
    payload = Buffer.isBuffer(payload) ? payload.toString('utf8') : payload;
    signatureHeader = Buffer.isBuffer(signatureHeader) ? signatureHeader.toString('utf8') : signatureHeader;
    timestampHeader = Buffer.isBuffer(timestampHeader) ? timestampHeader.toString('utf8') : timestampHeader;

    signature = Buffer.from(signatureHeader, 'base64');
    const signedPayload = `${timestampHeader}|${payload}`;

    const verifier = crypto.createVerify('sha256');
    verifier.update(signedPayload);
    verifier.end();

    const verification = verifier.verify(publicKey, signature);

    if (!verification) {
      throw new Error.TelnyxSignatureVerificationError({
        message: 'Signature is invalid and does not match the payload',
        detail: {
          signatureHeader: signatureHeader,
          timestampHeader: timestampHeader,
          payload: payload,
        },
      });
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

Webhook.signature = signature;

module.exports = Webhook;
