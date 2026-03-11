// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as SpeechToTextAPI from './speech-to-text';
import { Telnyx } from '../../client';

import { EventEmitter } from '../../core/EventEmitter';
import { TelnyxError } from '../../core/error';
import { stringifyQuery } from '../../internal/utils';

export class WebSocketError extends TelnyxError {
  /**
   * The error data that the API sent back in an error event.
   */
  error?: SpeechToTextAPI.SttServerEvent.ErrorFrame | undefined;

  constructor(message: string, event: SpeechToTextAPI.SttServerEvent.ErrorFrame | null) {
    super(message);

    this.error = event ?? undefined;
  }
}

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] } & {};

type WebsocketEvents = Simplify<
  {
    event: (event: SpeechToTextAPI.SttServerEvent) => void;
    error: (error: WebSocketError) => void;
  } & {
    [EventType in Exclude<NonNullable<SpeechToTextAPI.SttServerEvent['type']>, 'error'>]: (
      event: Extract<SpeechToTextAPI.SttServerEvent, { type?: EventType }>,
    ) => unknown;
  }
>;

export abstract class SpeechToTextEmitter extends EventEmitter<WebsocketEvents> {
  /**
   * Send binary audio data to the API.
   */
  abstract send(data: SpeechToTextAPI.SttClientEvent): void;

  /**
   * Close the websocket connection.
   */
  abstract close(props?: { code: number; reason: string }): void;

  protected _onError(event: null, message: string, cause: any): void;
  protected _onError(event: SpeechToTextAPI.SttServerEvent.ErrorFrame, message?: string | undefined): void;
  protected _onError(
    event: SpeechToTextAPI.SttServerEvent.ErrorFrame | null,
    message?: string | undefined,
    cause?: any,
  ): void {
    message = message ?? safeJSONStringify(event) ?? 'unknown error';

    if (!this._hasListener('error')) {
      const error = new WebSocketError(
        message +
          `\n\nTo resolve these unhandled rejection errors you should bind an \`error\` callback, e.g. \`ws.on('error', (error) => ...)\` `,
        event,
      );
      // @ts-ignore
      error.cause = cause;
      Promise.reject(error);
      return;
    }

    const error = new WebSocketError(message, event);
    // @ts-ignore
    error.cause = cause;

    this._emit('error', error);
  }
}

export function buildURL(client: Telnyx, query?: SpeechToTextAPI.SpeechToTextStreamParams | null): URL {
  const path = '/speech-to-text/transcription';
  const baseURL = client.baseURL;
  const url = new URL(baseURL + (baseURL.endsWith('/') ? path.slice(1) : path));
  if (query) {
    url.search = stringifyQuery(query);
  }
  url.protocol = 'wss';
  return url;
}

function safeJSONStringify(value: unknown): string | null {
  try {
    return JSON.stringify(value);
  } catch {
    return null;
  }
}
