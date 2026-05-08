import type * as WS from 'ws';
import { NodeWebSocket } from '../internal/ws-adapter-node';
import { TextToSpeechWSBase, type TextToSpeechWSBaseOptions } from './text-to-speech-ws-base';
import { Telnyx } from '../client';

export type { TextToSpeechWSReconnectOptions } from './text-to-speech-ws-base';

export interface TextToSpeechWSClientOptions extends WS.ClientOptions, TextToSpeechWSBaseOptions {}

function loadWS(): typeof WS {
  try {
    // Keep `ws` as a true optional peer dependency: only require it when
    // callers construct the Text-to-Speech websocket client.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require('ws') as typeof WS;
  } catch {
    throw new Error(
      'TextToSpeechWS from "telnyx/resources/text-to-speech/ws" requires the optional "ws" package. Install it to use Text-to-Speech websocket streaming.',
    );
  }
}

export class TextToSpeechWS extends TextToSpeechWSBase<NodeWebSocket> {
  private _wsOptions: WS.ClientOptions | null | undefined;
  private _WS: typeof WS;

  constructor(
    client: Telnyx,
    parameters?: Record<string, unknown> | undefined,
    options?: TextToSpeechWSClientOptions | null | undefined,
  ) {
    const WS = loadWS();
    if (!WS?.WebSocket) {
      throw new Error(
        'TextToSpeechWS from "telnyx/resources/text-to-speech/ws" requires the optional "ws" package, but it could not be loaded.',
      );
    }

    const { reconnect, maxQueueSize, ...wsOptions } = options ?? {};
    super(client, parameters, { reconnect, maxQueueSize });
    this._WS = WS;
    this._wsOptions = wsOptions;
    this._connectInitial();
  }

  protected _createSocket(url: URL, authHeaders: Record<string, string>): NodeWebSocket {
    const ws = new this._WS.WebSocket(url, {
      ...this._wsOptions,
      headers: {
        ...authHeaders,
        ...this._wsOptions?.headers,
      },
    });
    return new NodeWebSocket(ws);
  }
}
