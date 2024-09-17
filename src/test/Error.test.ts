import '../testUtils';
import {describe, expect, test} from '@jest/globals';

import * as TelnyxErrors from '../Error.js';

describe('Error', function () {
  test('Populates with type and message params', function () {
    const e = new TelnyxErrors.TelnyxError(
      {message: 'Foo happened'},
      'FooError',
    );
    expect(e).toHaveProperty('type', 'FooError');
    expect(e).toHaveProperty('message', 'Foo happened');
    expect(e).toHaveProperty('stack');
  });

  describe('TelnyxError', function () {
    test('Pulls in headers', function () {
      const headers = {'Request-Id': '123'};
      const e = TelnyxErrors.TelnyxError.generate({
        errors: [
          {
            title: 'A terrible mistake has been made',
            code: '123',
            detail: 'foo',
          },
        ],
        headers: headers,
        statusCode: 400,
      });
      expect(e).toHaveProperty('headers', headers);
    });

    test('Pulls in request IDs', function () {
      const e = TelnyxErrors.TelnyxError.generate({
        errors: [{title: 'Oops', code: '123', detail: 'foo'}],
        requestId: 'foo',
        statusCode: 400,
      });
      expect(e).toHaveProperty('requestId', 'foo');
    });

    test('Pulls in HTTP status code', function () {
      const e = TelnyxErrors.TelnyxError.generate({
        errors: [{title: 'Oops', code: '123', detail: 'foo'}],
        statusCode: 400,
      });
      expect(e).toHaveProperty('statusCode', 400);
    });

    test('Builds errors based on status code', function () {
      expect(
        TelnyxErrors.TelnyxError.generate({
          errors: [{title: 'Oops', code: '123', detail: 'foo'}],
          statusCode: 400,
        }),
      ).toBeInstanceOf(TelnyxErrors.TelnyxInvalidRequestError);
      expect(
        TelnyxErrors.TelnyxError.generate({
          errors: [{title: 'Oops', code: '123', detail: 'foo'}],
          statusCode: 401,
        }),
      ).toBeInstanceOf(TelnyxErrors.TelnyxAuthenticationError);
      expect(
        TelnyxErrors.TelnyxError.generate({
          errors: [{title: 'Oops', code: '123', detail: 'foo'}],
          statusCode: 403,
        }),
      ).toBeInstanceOf(TelnyxErrors.TelnyxPermissionError);
      // expect(TelnyxErrors.TelnyxError.generate({errors: [{title: 'Oops'}], statusCode: 404})).toBeInstanceOf(
      //   TelnyxErrors.ResourceNotFoundError
      // );
    });
  });
});
