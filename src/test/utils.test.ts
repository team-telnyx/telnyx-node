'use strict';

import './utils';

import * as utils from '../utils';

describe('utils', function () {
  describe('makeURLInterpolator', function () {
    it('Interpolates values into a prepared template', function () {
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
    it('Handles basic types', function () {
      expect(
        utils.stringifyRequestData({
          a: 1,
          b: 'foo',
        }),
      ).toBe('a=1&b=foo');
    });

    it('Handles deeply nested object', function () {
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

    it('Handles arrays of objects', function () {
      expect(
        utils.stringifyRequestData({
          a: [{b: 'c'}, {b: 'd'}],
        }),
      ).toBe('a[][b]=c&a[][b]=d');
    });

    it('Handles indexed arrays', function () {
      expect(
        utils.stringifyRequestData({
          a: {
            0: {b: 'c'},
            1: {b: 'd'},
          },
        }),
      ).toBe('a[0][b]=c&a[1][b]=d');
    });

    it('Creates a string from an object, handling shallow nested objects', function () {
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
    it('Provides an extension mechanism', function () {
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
    it('handles an empty list', function () {
      expect(utils.getDataFromArgs([])).toBe({});
    });
    it('handles a list with no object', function () {
      const args = [1, 3];
      expect(utils.getDataFromArgs(args)).toBe({});
      expect(args.length).toBe(2);
    });
    it('ignores a hash with only options', function (done) {
      const args = [{api_key: 'foo'}];

      handleWarnings(
        function () {
          expect(utils.getDataFromArgs(args)).toBe({});
          expect(args.length).toBe(1);

          done();
        },
        function (message) {
          throw new Error('Should not have warned, but did: ' + message);
        },
      );
    });
    it('warns if the hash contains both data and options', function (done) {
      const args = [{foo: 'bar', api_key: 'foo'}];

      handleWarnings(
        function () {
          utils.getDataFromArgs(args);
        },
        function (message) {
          expect(message).toBe(
            'Telnyx: Options found in arguments (api_key).' +
              ' Did you mean to pass an options object? See https://github.com/telnyx/telnyx-node/wiki/Passing-Options.',
          );

          done();
        },
      );
    });
    it('finds the data', function () {
      const args = [{foo: 'bar'}, {api_key: 'foo'}];
      expect(utils.getDataFromArgs(args)).toBe({foo: 'bar'});
      expect(args.length).toBe(1);
    });
  });

  describe('getOptsFromArgs', function () {
    it('handles an empty list', function () {
      expect(utils.getOptionsFromArgs([])).toBe({
        auth: null,
        headers: {},
      });
    });
    it('handles an list with no object', function () {
      const args = [1, 3];
      expect(utils.getOptionsFromArgs(args)).toBe({
        auth: null,
        headers: {},
      });
      expect(args.length).toBe(2);
    });
    it('ignores a non-options object', function () {
      const args = [{foo: 'bar'}];
      expect(utils.getOptionsFromArgs(args)).toBe({
        auth: null,
        headers: {},
      });
      expect(args.length).toBe(1);
    });
    it('parses an api key', function () {
      const args = [
        'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo',
      ];
      expect(utils.getOptionsFromArgs(args)).toBe({
        auth: 'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo',
        headers: {},
      });
      expect(args.length).toBe(0);
    });
    it('warns if the hash contains something that does not belong', function (done) {
      const args = [
        {foo: 'bar'},
        {
          api_key: 'super-secret-key',
          fishsticks: true,
          custard: true,
        },
      ];

      handleWarnings(
        function () {
          utils.getOptionsFromArgs(args);
        },
        function (message) {
          expect(message).toBe(
            'Telnyx: Invalid options found (fishsticks, custard); ignoring.',
          );

          done();
        },
      );
    });
  });

  describe('removeEmpty', function () {
    it('removes empty properties and leaves non-empty ones', function () {
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

    it('throws an error if not given two things to compare', function () {
      expect(function () {
        utils.removeEmpty('potato' as unknown as Record<string, unknown>);
      }).toThrow();
    });
  });
});

function handleWarnings(doWithShimmedConsoleWarn, onWarn) {
  if (typeof process.emitWarning !== 'function') {
    /* eslint-disable no-console */

    // Shim `console.warn`
    const _warn = console.warn;
    console.warn = onWarn;

    doWithShimmedConsoleWarn();

    // Un-shim `console.warn`,
    console.warn = _warn;

    /* eslint-enable no-console */
  } else {
    function onProcessWarn(warning) {
      /* eslint-disable-line no-inner-declarations */
      onWarn(warning.name + ': ' + warning.message);
    }

    process.on('warning', onProcessWarn);

    doWithShimmedConsoleWarn();

    process.nextTick(function () {
      process.removeListener('warning', onProcessWarn);
    });
  }
}
