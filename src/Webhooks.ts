import nacl from 'tweetnacl';
import * as TelnyxError from './Error';

type WebhookPayload = string | Uint8Array;
type WebhookHeader = string | Uint8Array;

const Webhooks = {
  DEFAULT_TOLERANCE: 300, // 5 minutes

  constructEvent: function (
    payload: WebhookPayload,
    signatureHeader: WebhookHeader,
    timestampHeader: WebhookHeader,
    publicKey: string,
    tolerance?: number,
  ) {
    this.signature.verifySignature(
      payload,
      signatureHeader,
      timestampHeader,
      publicKey,
      tolerance || Webhooks.DEFAULT_TOLERANCE,
    );

    const jsonPayload =
      payload instanceof Uint8Array
        ? JSON.parse(new TextDecoder('utf8').decode(payload))
        : JSON.parse(payload);

    return jsonPayload;
  },

  signature: {
    verifySignature: function (
      payload: WebhookPayload,
      signatureHeader: WebhookHeader = '',
      timestampHeader: WebhookHeader = '',
      publicKey: string,
      tolerance?: number,
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
        // https://bun.sh/guides/binary/buffer-to-typedarray
        if (signatureHeader instanceof Uint8Array) {
          // TODO: this cast is a workaround as the types are not compatible and this `method` is outdated
          verification = nacl.sign.detached.verify(
            payloadBuffer,
            Buffer.from(
              new TextDecoder('utf8').decode(signatureHeader),
              'base64',
            ),
            Buffer.from(publicKey, 'base64'),
          );
        } else {
          // TODO: this cast is a workaround as the types are not compatible and this `method` is outdated
          verification = nacl.sign.detached.verify(
            payloadBuffer,
            Buffer.from(signatureHeader, 'base64'),
            Buffer.from(publicKey, 'base64'),
          );
        }
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
        Math.floor(Date.now() / 1000) -
        parseInt(
          timestampHeader instanceof Uint8Array
            ? new TextDecoder('utf8').decode(timestampHeader)
            : timestampHeader,
          10,
        );

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
  timestampHeader: WebhookHeader,
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
