// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx-node';

export const metadata: Metadata = {
  resource: 'text_to_speech',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/text-to-speech/speech',
  operationId: 'generateTextToSpeech',
};

export const tool: Tool = {
  name: 'generate_speech_text_to_speech',
  description: 'Converts the provided text to speech using the specified voice and returns audio data',
  inputSchema: {
    type: 'object',
    properties: {
      text: {
        type: 'string',
        description: 'The text to convert to speech',
      },
      voice: {
        type: 'string',
        description:
          'The voice ID in the format Provider.ModelId.VoiceId.\n\nExamples:\n- AWS.Polly.Joanna-Neural\n- Azure.en-US-AvaMultilingualNeural\n- ElevenLabs.eleven_multilingual_v2.Rachel\n- Telnyx.KokoroTTS.af\n\nUse the `GET /text-to-speech/voices` endpoint to get a complete list of available voices.',
      },
    },
    required: ['text', 'voice'],
  },
  annotations: {},
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asBinaryContentResult(await client.textToSpeech.generateSpeech(body));
};

export default { metadata, tool, handler };
