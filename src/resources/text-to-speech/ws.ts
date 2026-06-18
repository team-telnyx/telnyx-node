// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as WS from 'ws';
import { NodeWebSocket } from '../../internal/ws-adapter-node';
import { TextToSpeechWSBase, type TextToSpeechWSBaseOptions } from './ws-base';
import { Telnyx } from '../../client';

export type { TextToSpeechWSReconnectOptions } from './ws-base';

export interface TextToSpeechWSClientOptions extends WS.ClientOptions, TextToSpeechWSBaseOptions {}

export class TextToSpeechWS extends TextToSpeechWSBase<NodeWebSocket> {
  private _wsOptions: WS.ClientOptions | null | undefined;

  constructor(
    client: Telnyx,
    parameters?: Record<string, unknown> | undefined,
    options?: TextToSpeechWSClientOptions | null | undefined,
  ) {
    if (!WS?.WebSocket) {
      throw new Error(
        'TextToSpeechWS from "telnyx/resources/text-to-speech/ws" requires the "ws" package but it could not be loaded.',
      );
    }

    const { reconnect, maxQueueSize, ...wsOptions } = options ?? {};
    super(client, parameters, { reconnect, maxQueueSize });
    this._wsOptions = wsOptions;
    this._connectInitial();
  }

  protected _createSocket(url: URL, authHeaders: Record<string, string>): NodeWebSocket {
    const ws = new WS.WebSocket(url, {
      ...this._wsOptions,
      headers: {
        ...authHeaders,
        ...this._wsOptions?.headers,
      },
    });
    return new NodeWebSocket(ws);
  }
}
