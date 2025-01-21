type WebhookPayload = string;
type WebhookHeader = Uint8Array;

declare module 'telnyx' {
  namespace Telnyx {
    export class Webhooks {
      DEFAULT_TOLERANCE: number;
      constructEvent: (
        payload: WebhookPayload,
        signatureHeader: WebhookHeader | undefined,
        timestampHeader: string | undefined,
        publicKey: Uint8Array,
        tolerance?: number,
      ) => unknown;
      signature: {
        verifySignature: (
          payload: WebhookPayload,
          signatureHeader: WebhookHeader | undefined,
          timestampHeader: string,
          publicKey: Uint8Array,
          tolerance?: number,
        ) => boolean;
      };
    }
  }
}
