// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from 'telnyx-node';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.split(' ')[0]!;
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      case 'Bearer':
        return { apiKey: req.headers.authorization.slice('Bearer '.length) };
      default:
        throw new Error(`Unsupported authorization scheme`);
    }
  }

  const apiKey =
    Array.isArray(req.headers['x-telnyx-api-key']) ?
      req.headers['x-telnyx-api-key'][0]
    : req.headers['x-telnyx-api-key'];
  return { apiKey };
};
