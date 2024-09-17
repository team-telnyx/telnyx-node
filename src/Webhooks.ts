import {Buffer} from 'safe-buffer';
import nacl from 'tweetnacl';
import * as TelnyxError from './Error.js';

type WebhookPayload = string;
type WebhookHeader = string;

const Webhooks = {
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
      tolerance || Webhooks.DEFAULT_TOLERANCE,
    );

    const jsonPayload = JSON.parse(payload);
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

      const payloadBuffer = Buffer.from(
        `${timestampHeader}|${payload}`,
        'utf8',
      );

      let verification;

      try {
        // TODO: this cast is a workaround as the types are not compatible and this `method` is outdated
        verification = nacl.sign.detached.verify(
          payloadBuffer as unknown as Uint8Array,
          Buffer.from(signatureHeader, 'base64') as unknown as Uint8Array,
          Buffer.from(publicKey, 'base64') as unknown as Uint8Array,
        );
      } catch (_e) {
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

      const timestampAge =
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

export default Webhooks;
