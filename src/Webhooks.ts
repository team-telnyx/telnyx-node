import {Buffer} from 'safe-buffer';
import nacl from 'tweetnacl';
import * as TelnyxError from './Error.js';

type WebhookPayload = string;
type WebhookHeader = string;

const Webhook = {
  DEFAULT_TOLERANCE: 300, // 5 minutes

  constructEvent: function (
    payload: WebhookPayload,
    signatureHeader: WebhookHeader,
    timestampHeader: WebhookHeader,
    publicKey: string,
    tolerance: number,
  ) {
    this.signature.verifySignature(
      payload,
      signatureHeader,
      timestampHeader,
      publicKey,
      tolerance || Webhook.DEFAULT_TOLERANCE,
    );

    var jsonPayload = JSON.parse(payload);
    return jsonPayload;
  },

  signature: {
    verifySignature: function (
      payload: string,
      signatureHeader: WebhookHeader = '',
      timestampHeader: WebhookHeader = '',
      publicKey: string,
      tolerance: number,
    ) {
      payload = Buffer.isBuffer(payload) ? payload.toString('utf8') : payload;
      timestampHeader = Buffer.isBuffer(timestampHeader)
        ? timestampHeader.toString('utf8')
        : timestampHeader;

      var payloadBuffer = Buffer.from(`${timestampHeader}|${payload}`, 'utf8');

      var verification;

      try {
        // TODO: this cast is a workaround as the types are not compatible and this `method` is outdated
        verification = nacl.sign.detached.verify(
          payloadBuffer as unknown as Uint8Array,
          Buffer.from(signatureHeader, 'base64') as unknown as Uint8Array,
          Buffer.from(publicKey, 'base64') as unknown as Uint8Array,
        );
      } catch (err) {
        throwSignatureVerificationError(
          payload,
          signatureHeader,
          timestampHeader,
        );
      }

      if (!verification) {
        throwSignatureVerificationError(
          payload,
          signatureHeader,
          timestampHeader,
        );
      }

      var timestampAge =
        Math.floor(Date.now() / 1000) - parseInt(timestampHeader, 10);

      if (tolerance > 0 && timestampAge > tolerance) {
        throw new TelnyxError.TelnyxSignatureVerificationError({
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
  },
};

function throwSignatureVerificationError(
  payload: unknown,
  signatureHeader: string,
  timestampHeader: string,
) {
  throw new TelnyxError.TelnyxSignatureVerificationError({
    message: 'Signature is invalid and does not match the payload',
    detail: {
      signatureHeader: signatureHeader,
      timestampHeader: timestampHeader,
      payload: payload,
    },
  });
}

export default Webhook;
