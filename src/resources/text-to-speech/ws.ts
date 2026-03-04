// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as WS from 'ws';
import { TextToSpeechEmitter, buildURL } from './internal-base';
import * as TextToSpeechAPI from './text-to-speech';
import { Telnyx } from '../../client';

export class TextToSpeechWS extends TextToSpeechEmitter {
  url: URL;
  socket: WS.WebSocket;
  private client: Telnyx;

  constructor(client: Telnyx, parameters?: null | undefined, options?: WS.ClientOptions | null | undefined) {
    super();
    this.client = client;
    this.url = buildURL(client, parameters);
    this.socket = new WS.WebSocket(this.url, {
      ...options,
      headers: {
        ...this.authHeaders(),
        ...options?.headers,
      },
    });

    this.socket.on('message', (wsEvent) => {
      const event = (() => {
        try {
          return JSON.parse(wsEvent.toString()) as TextToSpeechAPI.StreamServerEvent;
        } catch (err) {
          this._onError(null, 'could not parse websocket event', err);
          return null;
        }
      })();

      if (event) {
        this._emit('event', event);

        // @ts-ignore TS isn't smart enough to get the relationship right here
        this._emit(event.type, event);
      }
    });

    this.socket.on('error', (err) => {
      this._onError(null, err.message, err);
    });
  }

  send(event: TextToSpeechAPI.StreamClientEvent) {
    try {
      this.socket.send(JSON.stringify(event));
    } catch (err) {
      this._onError(null, 'could not send data', err);
    }
  }

  close(props?: { code: number; reason: string }) {
    try {
      this.socket.close(props?.code ?? 1000, props?.reason ?? 'OK');
    } catch (err) {
      this._onError(null, 'could not close the connection', err);
    }
  }

  private authHeaders(): Record<string, string> {
    if (this.client.apiKey) {
      return { Authorization: `Bearer ${this.client.apiKey}` };
    }
    return {};
  }
}
