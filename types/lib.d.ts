import {Agent} from 'http';

declare module 'telnyx' {
  namespace Telnyx {
    type TelnyxResourceClass = typeof TelnyxResource;

    interface TelnyxResourceExtension<T extends object>
      extends TelnyxResourceClass {
      new (telnyx: Telnyx): TelnyxResource & T;
    }

    export class TelnyxResource {
      static extend<T extends {[prop: string]: unknown}>(
        spec: T,
      ): TelnyxResourceExtension<T>;
      static method<ResponseObject = object>(spec: {
        method: string;
        path?: string;
        // Please note, methodType === 'list' uses autoPagination
        methodType?: 'list' | 'retrieve' | 'create';
      }): (...args: unknown[]) => Response<ResponseObject>;
      static MAX_BUFFERED_REQUEST_METRICS: number;
    }
    export type HttpAgent = Agent;
    export type HttpProtocol = 'http' | 'https';

    export interface RequestOptions {
      auth?: string | null;

      /**
       * Specify headers for this request.
       */
      headers?: Record<string, string | number | string[]>;
    }

    export type NestedResponseData<T, N> = {data?: T & N};

    export type Response<T> = T & {
      lastResponse: {
        headers: Record<string, string | number | string[]>;
        requestId: string;
        statusCode: number;
      };
    };
  }
}
