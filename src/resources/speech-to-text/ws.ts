// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as WS from 'ws';
import { SpeechToTextEmitter, buildURL } from './internal-base';
import * as SpeechToTextAPI from './speech-to-text';
import { Telnyx } from '../../client';

export class SpeechToTextWS extends SpeechToTextEmitter {
  url: URL;
  socket: WS.WebSocket;
  private client: Telnyx;

  constructor(
    client: Telnyx,
    parameters: SpeechToTextAPI.SpeechToTextStreamParams,
    options?: WS.ClientOptions | null | undefined,
  ) {
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

    this.socket.on('open', () => {
      // Connection established, ready to send audio
    });

    this.socket.on('message', (wsEvent) => {
      const event = (() => {
        try {
          return JSON.parse(wsEvent.toString()) as SpeechToTextAPI.SttServerEvent;
        } catch (err) {
          this._onError(null, 'could not parse websocket event', err);
          return null;
        }
      })();

      if (event) {
        this._emit('event', event);

        if (event.type === 'error') {
          this._onError(event);
        } else {
          // @ts-ignore TS isn't smart enough to get the relationship right here
          this._emit(event.type, event);
        }
      }
    });

    this.socket.on('error', (err) => {
      this._onError(null, err.message, err);
    });

    this.socket.on('close', (code, reason) => {
      // Connection closed
    });
  }

  /**
   * Send binary audio data to the server for transcription.
   * @param data - Raw audio bytes (mp3 or wav format)
   */
  send(data: SpeechToTextAPI.SttClientEvent) {
    try {
      this.socket.send(data);
    } catch (err) {
      this._onError(null, 'could not send audio data', err);
    }
  }

  /**
   * Close the WebSocket connection.
   */
  close(props?: { code: number; reason: string }) {
    try {
      this.socket.close(props?.code ?? 1000, props?.reason ?? 'OK');
    } catch (err) {
      this._onError(null, 'could not close the connection', err);
    }
  }

  /**
   * Check if the WebSocket is open and ready to send data.
   */
  get isOpen(): boolean {
    return this.socket.readyState === WS.WebSocket.OPEN;
  }

  /**
   * Wait for the connection to be established.
   */
  waitForOpen(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.socket.readyState === WS.WebSocket.OPEN) {
        resolve();
        return;
      }

      const onOpen = () => {
        this.socket.off('open', onOpen);
        this.socket.off('error', onError);
        resolve();
      };

      const onError = (err: Error) => {
        this.socket.off('open', onOpen);
        this.socket.off('error', onError);
        reject(err);
      };

      this.socket.on('open', onOpen);
      this.socket.on('error', onError);
    });
  }

  private authHeaders(): Record<string, string> {
    if (this.client.apiKey) {
      return { Authorization: `Bearer ${this.client.apiKey}` };
    }
    return {};
  }
}
