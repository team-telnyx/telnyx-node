// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as TextToSpeechAPI from './text-to-speech';
import { Telnyx } from '../../client';

import { EventEmitter } from '../../core/EventEmitter';
import { TelnyxError } from '../../core/error';
import { stringifyQuery } from '../../internal/utils';

export class WebSocketError extends TelnyxError {
  /**
   * The error data that the API sent back in an error event.
   */
  error?: TextToSpeechAPI.StreamServerEvent.ErrorFrame | undefined;

  constructor(message: string, event: TextToSpeechAPI.StreamServerEvent.ErrorFrame | null) {
    super(message);

    this.error = event ?? undefined;
  }
}

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] } & {};

type WebSocketEvents = Simplify<
  {
    event: (event: TextToSpeechAPI.StreamServerEvent) => void;
    error: (error: WebSocketError) => void;
  } & {
    [EventType in Exclude<NonNullable<TextToSpeechAPI.StreamServerEvent['type']>, 'error'>]: (
      event: Extract<TextToSpeechAPI.StreamServerEvent, { type?: EventType }>,
    ) => unknown;
  }
>;

export abstract class TextToSpeechEmitter extends EventEmitter<WebSocketEvents> {
  /**
   * Send an event to the API.
   */
  abstract send(event: TextToSpeechAPI.StreamClientEvent): void;

  /**
   * Close the WebSocket connection.
   */
  abstract close(props?: { code: number; reason: string }): void;

  protected _onError(event: null, message: string, cause: any): void;
  protected _onError(event: TextToSpeechAPI.StreamServerEvent.ErrorFrame, message?: string | undefined): void;
  protected _onError(
    event: TextToSpeechAPI.StreamServerEvent.ErrorFrame | null,
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

export function buildURL(client: Telnyx, query?: object | null): URL {
  const path = '/text-to-speech/speech';
  const baseURL = client.baseURL;
  const url = new URL(baseURL + (baseURL.endsWith('/') ? path.slice(1) : path));
  if (query) {
    url.search = stringifyQuery(query);
  }
  url.protocol = url.protocol === 'http:' ? 'ws:' : 'wss:';
  return url;
}

function safeJSONStringify(value: unknown): string | null {
  try {
    return JSON.stringify(value);
  } catch {
    return null;
  }
}
