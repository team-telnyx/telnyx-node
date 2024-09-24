import nacl from 'tweetnacl';
import * as TelnyxError from './Error';

type WebhookPayload = string;
type WebhookHeader = Uint8Array;

const Webhooks = {
  DEFAULT_TOLERANCE: 300, // 5 minutes
  decoder: new TextDecoder('utf8'),

  constructEvent: function (
    payload: WebhookPayload,
    signatureHeader: WebhookHeader | undefined,
    timestampHeader: string | undefined = '',
    publicKey: Uint8Array,
    tolerance?: number,
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
      payload: WebhookPayload,
      signatureHeader: WebhookHeader | undefined,
      timestampHeader: string,
      publicKey: Uint8Array,
      tolerance?: number,
    ) {
      const payloadBuffer = Buffer.from(
        `${timestampHeader}|${payload}`,
        'utf8',
      );
      const signature = signatureHeader || Buffer.from('', 'base64');

      let verification;

      try {
        // https://bun.sh/guides/binary/buffer-to-typedarray
        verification = nacl.sign.detached.verify(
          payloadBuffer,
          signature,
          publicKey,
        );
      } catch (_e) {
        console.log(_e);

        throwSignatureVerificationError(payload, signature, timestampHeader);
      }

      if (!verification) {
        throwSignatureVerificationError(payload, signature, timestampHeader);
      }

      const timestampAge =
        Math.floor(Date.now() / 1000) - parseInt(timestampHeader);

      if (tolerance && tolerance > 0 && timestampAge > tolerance) {
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
  signatureHeader: WebhookHeader,
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
