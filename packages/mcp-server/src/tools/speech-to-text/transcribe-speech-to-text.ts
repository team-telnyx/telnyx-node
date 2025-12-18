// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'telnyx-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Telnyx from 'telnyx';

export const metadata: Metadata = {
  resource: 'speech_to_text',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/speech-to-text/transcription',
  operationId: 'TranscriptionOverWs',
};

export const tool: Tool = {
  name: 'transcribe_speech_to_text',
  description: 'Transcribe audio streams to text over WebSocket.',
  inputSchema: {
    type: 'object',
    properties: {
      input_format: {
        type: 'string',
        description: 'The format of input audio stream.',
        enum: ['mp3', 'wav'],
      },
      transcription_engine: {
        type: 'string',
        description: 'The transcription engine to use for processing the audio stream.',
        enum: ['Azure', 'Deepgram', 'Google', 'Telnyx'],
      },
      interim_results: {
        type: 'boolean',
        description: 'Whether to receive interim transcription results.',
      },
      language: {
        type: 'string',
        description: 'The language spoken in the audio stream.',
      },
      model: {
        type: 'string',
        description: 'The specific model to use within the selected transcription engine.',
        enum: [
          'fast',
          'deepgram/nova-2',
          'deepgram/nova-3',
          'latest_long',
          'latest_short',
          'command_and_search',
          'phone_call',
          'video',
          'default',
          'medical_conversation',
          'medical_dictation',
          'openai/whisper-tiny',
          'openai/whisper-large-v3-turbo',
        ],
      },
    },
    required: ['input_format', 'transcription_engine'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Telnyx, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.speechToText.transcribe(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
