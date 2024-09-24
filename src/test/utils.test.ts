'use strict';

import './utils';

import * as utils from '../utils';

describe('utils', function () {
  describe('makeURLInterpolator', function () {
    test('Interpolates values into a prepared template', function () {
      const template = utils.makeURLInterpolator('/some/url/{foo}/{baz}?ok=1');

      expect(template({foo: 1, baz: 2})).toBe('/some/url/1/2?ok=1');

      expect(template({foo: '', baz: ''})).toBe('/some/url//?ok=1');

      expect(
        // Test encoding:
        template({foo: 'FOO', baz: '__::baz::__'}),
      ).toBe('/some/url/FOO/__%3A%3Abaz%3A%3A__?ok=1');
    });
  });

  describe('stringifyRequestData', function () {
    test('Handles basic types', function () {
      expect(
        utils.stringifyRequestData({
          a: 1,
          b: 'foo',
        }),
      ).toBe('a=1&b=foo');
    });

    test('Handles deeply nested object', function () {
      expect(
        utils.stringifyRequestData({
          a: {
            b: {
              c: {
                d: 2,
              },
            },
          },
        }),
      ).toBe('a[b][c][d]=2');
    });

    test('Handles arrays of objects', function () {
      expect(
        utils.stringifyRequestData({
          a: [{b: 'c'}, {b: 'd'}],
        }),
      ).toBe('a[0][b]=c&a[1][b]=d');
    });

    test('Handles indexed arrays', function () {
      expect(
        utils.stringifyRequestData({
          a: {
            0: {b: 'c'},
            1: {b: 'd'},
          },
        }),
      ).toBe('a[0][b]=c&a[1][b]=d');
    });

    test('Creates a string from an object, handling shallow nested objects', function () {
      expect(
        utils.stringifyRequestData({
          test: 1,
          foo: 'baz',
          somethingElse: '::""%&',
          nested: {
            1: 2,
            'a n o t h e r': null,
          },
        }),
      ).toBe(
        [
          'test=1',
          'foo=baz',
          'somethingElse=%3A%3A%22%22%25%26',
          'nested[1]=2',
          'nested[a%20n%20o%20t%20h%20e%20r]=',
        ].join('&'),
      );
    });
  });

  describe('protoExtend', function () {
    test('Provides an extension mechanism', function () {
      function A() {}
      A.extend = utils.protoExtend;
      const B = A.extend({
        constructor: function () {
          this.called = true;
        },
      });
      expect(new B()).toBeInstanceOf(A);
      expect(new B()).toBeInstanceOf(B);
      // @ts-expect-error - TS doesn't know about `called`
      expect(new B().called).toBe(true);
      // @ts-expect-error - TS doesn't know about `called`
      expect(B.extend === utils.protoExtend).toBe(true);
    });
  });

  describe('getDataFromArgs', function () {
    test('handles an empty list', function () {
      expect(utils.getDataFromArgs([])).toStrictEqual({});
    });
    test('handles a list with no object', function () {
      const args = [1, 3];
      expect(utils.getDataFromArgs(args)).toStrictEqual({});
      expect(args.length).toBe(2);
    });
    test('ignores a hash with only options', function () {
      jest.spyOn(console, 'warn');

      const args = [{api_key: 'foo'}];

      expect(utils.getDataFromArgs(args)).toStrictEqual({});
      expect(console.warn).not.toHaveBeenCalled();
    });
    test('warns if the hash contains both data and options', function () {
      jest.spyOn(process, 'emitWarning');
      const args = [{foo: 'bar', api_key: 'foo'}];

      utils.getDataFromArgs(args);

      // assert the expected warning
      expect(process.emitWarning).toHaveBeenCalledWith(
        'Options found in arguments (api_key). Did you mean to pass an options object?',
        'Telnyx',
      );
    });
    test('finds the data', function () {
      const args = [{foo: 'bar'}, {api_key: 'foo'}];
      expect(utils.getDataFromArgs(args)).toStrictEqual({foo: 'bar'});
      expect(args.length).toBe(1);
    });
  });

  describe('getOptsFromArgs', function () {
    test('handles an empty list', function () {
      expect(utils.getOptionsFromArgs([])).toStrictEqual({
        auth: null,
        headers: {},
      });
    });
    test('handles an list with no object', function () {
      const args = [1, 3];
      expect(utils.getOptionsFromArgs(args)).toStrictEqual({
        auth: null,
        headers: {},
      });
      expect(args.length).toBe(2);
    });
    test('ignores a non-options object', function () {
      const args = [{foo: 'bar'}];
      expect(utils.getOptionsFromArgs(args)).toStrictEqual({
        auth: null,
        headers: {},
      });
      expect(args.length).toBe(1);
    });
    test('parses an api key', function () {
      const args = [
        'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo',
      ];
      expect(utils.getOptionsFromArgs(args)).toStrictEqual({
        auth: 'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo',
        headers: {},
      });
      expect(args.length).toBe(0);
    });
    test('warns if the hash contains something that does not belong', function () {
      jest.spyOn(process, 'emitWarning');

      const args = [
        {foo: 'bar'},
        {
          api_key: 'super-secret-key',
          fishsticks: true,
          custard: true,
        },
      ];

      utils.getOptionsFromArgs(args);

      // assert the expected warning
      expect(process.emitWarning).toHaveBeenCalledWith(
        'Invalid options found (fishsticks, custard); ignoring.',
        'Telnyx',
      );
    });
  });

  describe('removeEmpty', function () {
    test('removes empty properties and leaves non-empty ones', function () {
      expect(
        utils.removeEmpty({
          cat: 3,
          dog: false,
          rabbit: undefined,
          pointer: null,
        }),
      ).toMatchObject({
        cat: 3,
        dog: false,
      });
    });

    test('throws an error if not given two things to compare', function () {
      expect(function () {
        utils.removeEmpty('potato' as unknown as Record<string, unknown>);
      }).toThrow();
    });
  });
});
