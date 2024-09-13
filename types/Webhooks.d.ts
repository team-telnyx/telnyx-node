type WebhookPayload = string;
type WebhookHeader = string;

declare module 'telnyx' {
  namespace Telnyx {
    export class Webhooks {
      DEFAULT_TOLERANCE: number;
      constructEvent: (
        payload: WebhookPayload,
        signatureHeader: WebhookHeader,
        timestampHeader: WebhookHeader,
        publicKey: string,
        tolerance: number,
      ) => unknown;
      signature: {
        verifySignature: (
          payload: string,
          signatureHeader: WebhookHeader | undefined,
          timestampHeader: WebhookHeader | undefined,
          publicKey: string,
          tolerance: number,
        ) => boolean;
      };
    }
  }
}
