import nock from 'nock';
import {utils as testUtils} from './utils';
import {forAwaitUntil} from './utils/forAwait.node10';
import {awaitUntil} from './utils/await.node7';

import TelnyxNode from '../telnyx.node';

const telnyx = testUtils.getSpyableTelnyx();

type TelnyxRecord = {
  id: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const realTelnyx: (typeof TelnyxNode)['prototype'] = new (TelnyxNode as any)(
  testUtils.getUserTelnyxKey(),
);

const LIMIT = 3;
const TOTAL_OBJECTS = 3;

describe('auto pagination', function () {
  let realMessagingProfileIds: string[];
  jest.setTimeout(20000);

  describe('callbacks', function () {
    test('lets you call `next()` to iterate and `next(false)` to break', function (done) {
      realMessagingProfileIds = ['1', '2', '3'];
      const messagingProfileIds: string[] = [];
      function onMessagingProfile(
        messagingProfile: TelnyxRecord,
        next: (iterate?: boolean) => void,
      ) {
        messagingProfileIds.push(messagingProfile.id);
        if (messagingProfileIds.length === LIMIT) {
          next(false);
        } else {
          try {
            expect(messagingProfileIds.length).toBeLessThan(LIMIT);
          } catch (err: unknown) {
            done(err);
          }
          next();
        }
      }

      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: 1}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '1'}],
          meta: {total_pages: 3, page_number: 1, page_size: 1},
        })
        .get(options.path)
        .query({page: {number: 2, size: 1}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '2'}],
          meta: {total_pages: 3, page_number: 2, page_size: 1},
        })
        .get(options.path)
        .query({page: {number: 3, size: 1}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '3'}],
          meta: {total_pages: 3, page_number: 3, page_size: 1},
        });

      // @ts-expect-error TODO: import .d.ts files under src/test folder
      realTelnyx.messagingProfiles
        .list({page: {size: 1}})
        .autoPagingEach(onMessagingProfile, (err: unknown) => {
          if (err) {
            done(err);
          } else {
            try {
              expect(messagingProfileIds).toStrictEqual(
                realMessagingProfileIds.slice(0, LIMIT),
              );
              done();
            } catch (err: unknown) {
              done(err);
            }
          }
        });
    });

    test('lets you ignore the second arg and `return false` to break', function (done) {
      realMessagingProfileIds = ['1', '2', '3'];
      const messagingProfileIds: string[] = [];
      function onMessagingProfile(messagingProfile: TelnyxRecord) {
        messagingProfileIds.push(messagingProfile.id);
        if (messagingProfileIds.length === LIMIT) {
          return false;
        } else {
          try {
            expect(messagingProfileIds.length).toBeLessThan(LIMIT);
          } catch (err: unknown) {
            done(err);
          }
        }
      }

      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: 1}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '1'}],
          meta: {total_pages: 3, page_number: 1, page_size: 1},
        })
        .get(options.path)
        .query({page: {number: 2, size: 1}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '2'}],
          meta: {total_pages: 3, page_number: 2, page_size: 1},
        })
        .get(options.path)
        .query({page: {number: 3, size: 1}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '3'}],
          meta: {total_pages: 3, page_number: 3, page_size: 1},
        });

      // @ts-expect-error TODO: import .d.ts files under src/test folder
      realTelnyx.messagingProfiles
        .list({page: {size: 1}})
        .autoPagingEach(onMessagingProfile, (err: unknown) => {
          if (err) {
            done(err);
          } else {
            try {
              expect(messagingProfileIds).toStrictEqual(
                realMessagingProfileIds.slice(0, LIMIT),
              );
              done();
            } catch (err: unknown) {
              done(err);
            }
          }
        });
    });

    test('lets you ignore the second arg and return a Promise which returns `false` to break', function (done) {
      realMessagingProfileIds = ['1', '2', '3'];
      const messagingProfileIds: string[] = [];
      function onMessagingProfile(messagingProfile: TelnyxRecord) {
        messagingProfileIds.push(messagingProfile.id);
        if (messagingProfileIds.length === LIMIT) {
          return Promise.resolve(false);
        } else {
          expect(messagingProfileIds.length).toBeLessThan(LIMIT);
          return Promise.resolve();
        }
      }
      function onDone(err: Error) {
        if (err) {
          done(err);
        } else {
          try {
            expect(messagingProfileIds).toStrictEqual(
              realMessagingProfileIds.slice(0, LIMIT),
            );
            done();
          } catch (err: unknown) {
            done(err);
          }
        }
      }
      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: 1}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '1'}],
          meta: {total_pages: 3, page_number: 1, page_size: 1},
        })
        .get(options.path)
        .query({page: {number: 2, size: 1}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '2'}],
          meta: {total_pages: 3, page_number: 2, page_size: 1},
        })
        .get(options.path)
        .query({page: {number: 3, size: 1}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '3'}],
          meta: {total_pages: 3, page_number: 3, page_size: 1},
        });

      // @ts-expect-error TODO: import .d.ts files under src/test folder
      realTelnyx.messagingProfiles
        .list({page: {size: 1}})
        .autoPagingEach(onMessagingProfile, onDone);
    });

    test('can use a promise instead of a callback for onDone', function (done) {
      realMessagingProfileIds = ['1', '2', '3'];
      const messagingProfileIds: string[] = [];
      function onMessagingProfile(messagingProfile: TelnyxRecord) {
        messagingProfileIds.push(messagingProfile.id);
      }
      function onDone() {
        try {
          expect(messagingProfileIds).toStrictEqual(realMessagingProfileIds);
          done();
        } catch (err: unknown) {
          done(err);
        }
      }
      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: 1}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '1'}],
          meta: {total_pages: 3, page_number: 1, page_size: 1},
        })
        .get(options.path)
        .query({page: {number: 2, size: 1}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '2'}],
          meta: {total_pages: 3, page_number: 2, page_size: 1},
        })
        .get(options.path)
        .query({page: {number: 3, size: 1}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '3'}],
          meta: {total_pages: 3, page_number: 3, page_size: 1},
        });

      // @ts-expect-error TODO: import .d.ts files under src/test folder
      realTelnyx.messagingProfiles
        .list({page: {size: 1}})
        .autoPagingEach(onMessagingProfile)
        .then(onDone)
        .catch((err: unknown) => {
          done(err);
        });
    });

    test('handles the end of a list properly when the last page is full', function (done) {
      realMessagingProfileIds = ['1', '2', '3', '4'];
      const messagingProfileIds: string[] = [];
      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: 2}})
        .reply(200, {
          data: [
            {record_type: 'messaging_profile', id: '1'},
            {record_type: 'messaging_profile', id: '2'},
          ],
          meta: {total_pages: 2, page_number: 1, page_size: 2},
        })
        .get(options.path)
        .query({page: {number: 2, size: 2}})
        .reply(200, {
          data: [
            {record_type: 'messaging_profile', id: '3'},
            {record_type: 'messaging_profile', id: '4'},
          ],
          meta: {total_pages: 2, page_number: 2, page_size: 2},
        });

      // @ts-expect-error TODO: import .d.ts files under src/test folder
      realTelnyx.messagingProfiles
        .list({page: {size: 2}})
        .autoPagingEach(function (messagingProfile: TelnyxRecord) {
          messagingProfileIds.push(messagingProfile.id);
        })
        .catch((err: unknown) => {
          done(err);
        })
        .then(function () {
          try {
            expect(messagingProfileIds).toStrictEqual(realMessagingProfileIds);
            done();
          } catch (err: unknown) {
            done(err);
          }
        });
    });

    test('handles the end of a list properly when the last page is not full', function (done) {
      realMessagingProfileIds = ['1', '2', '3'];
      const messagingProfileIds: string[] = [];
      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: 2}})
        .reply(200, {
          data: [
            {record_type: 'messaging_profile', id: '1'},
            {record_type: 'messaging_profile', id: '2'},
          ],
          meta: {total_pages: 2, page_number: 1, page_size: 2},
        })
        .get(options.path)
        .query({page: {number: 2, size: 2}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '3'}],
          meta: {total_pages: 2, page_number: 2, page_size: 2},
        });
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      realTelnyx.messagingProfiles
        .list({page: {size: 2}})
        .autoPagingEach(function (messagingProfile: TelnyxRecord) {
          messagingProfileIds.push(messagingProfile.id);
        })
        .catch((err: unknown) => {
          done(err);
        })
        .then(function () {
          try {
            expect(messagingProfileIds).toStrictEqual(realMessagingProfileIds);
            done();
          } catch (err: unknown) {
            done(err);
          }
        });
    });

    test('handles a list which is shorter than the page size properly', function (done) {
      realMessagingProfileIds = ['1', '2'];
      const messagingProfileIds: string[] = [];
      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: TOTAL_OBJECTS + 2}})
        .reply(200, {
          data: [
            {record_type: 'messaging_profile', id: '1'},
            {record_type: 'messaging_profile', id: '2'},
          ],
          meta: {
            total_pages: 1,
            page_number: 1,
            page_size: TOTAL_OBJECTS + 2,
          },
        });

      // @ts-expect-error TODO: import .d.ts files under src/test folder
      realTelnyx.messagingProfiles
        .list({page: {size: TOTAL_OBJECTS + 2}})
        .autoPagingEach(function (messagingProfile: TelnyxRecord) {
          messagingProfileIds.push(messagingProfile.id);
        })
        .catch((err: unknown) => {
          done(err);
        })
        .then(function () {
          try {
            expect(messagingProfileIds).toStrictEqual(realMessagingProfileIds);
            done();
          } catch (err: unknown) {
            done(err);
          }
        });
    });

    test('handles errors after the first page correctly (callback)', function (done) {
      let i = 0;
      function onmessagingProfile() {
        i += 1;
        if (i > 2) {
          throw Error('Simulated error');
        }
      }

      realMessagingProfileIds = ['1', '2', '3'];
      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: 2}})
        .reply(200, {
          data: [
            {record_type: 'messaging_profile', id: '1'},
            {record_type: 'messaging_profile', id: '2'},
          ],
          meta: {total_pages: 2, page_number: 1, page_size: 2},
        })
        .get(options.path)
        .query({page: {number: 2, size: 2}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '3'}],
          meta: {total_pages: 2, page_number: 2, page_size: 2},
        });

      // @ts-expect-error TODO: import .d.ts files under src/test folder
      realTelnyx.messagingProfiles
        .list({page: {size: 2}})
        .autoPagingEach(onmessagingProfile, function (err: Error) {
          if (err) {
            try {
              expect(err.message).toBe('Simulated error');
              done();
            } catch (err: unknown) {
              done(err);
            }
          } else {
            done(Error('Expected an error, did not get one.'));
          }
        });
    });

    test('handles errors after the first page correctly (promise)', function (done) {
      let i = 0;
      function onmessagingProfile() {
        i += 1;
        if (i > 2) {
          throw Error('Simulated error');
        }
      }
      realMessagingProfileIds = ['1', '2', '3'];
      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: 2}})
        .reply(200, {
          data: [
            {record_type: 'messaging_profile', id: '1'},
            {record_type: 'messaging_profile', id: '2'},
          ],
          meta: {total_pages: 2, page_number: 1, page_size: 2},
        })
        .get(options.path)
        .query({page: {number: 2, size: 2}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '3'}],
          meta: {total_pages: 2, page_number: 2, page_size: 2},
        });
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      realTelnyx.messagingProfiles
        .list({page: {size: 2}})
        .autoPagingEach(onmessagingProfile)
        .then(function () {
          done(Error('Expected an error, did not get one.'));
        })
        .catch(function (err: unknown) {
          try {
            expect((err as Error)?.message).toBe('Simulated error');
            done();
          } catch (err: unknown) {
            done(err);
          }
        });
    });
  });

  describe('async iterators', function () {
    test('works with `for await` when that feature exists (user break)', function (done) {
      realMessagingProfileIds = ['1', '2', '3'];
      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: 2}})
        .reply(200, {
          data: [
            {record_type: 'messaging_profile', id: '1'},
            {record_type: 'messaging_profile', id: '2'},
          ],
          meta: {total_pages: 2, page_number: 1, page_size: 2},
        })
        .get(options.path)
        .query({page: {number: 2, size: 2}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '3'}],
          meta: {total_pages: 2, page_number: 2, page_size: 2},
        });

      forAwaitUntil<TelnyxRecord>(
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.list({page: {size: 2}}),
        LIMIT,
      )
        .then(function (messagingProfiles: TelnyxRecord[]) {
          try {
            expect(
              messagingProfiles.map(function (messagingProfile: TelnyxRecord) {
                return messagingProfile.id;
              }),
            ).toStrictEqual(realMessagingProfileIds.slice(0, LIMIT));
            done();
          } catch (err: unknown) {
            done(err);
          }
        })
        .catch((err: unknown) => {
          done(err);
        });
    });

    test('works with `for await` when that feature exists (end of list)', function (done) {
      realMessagingProfileIds = ['1', '2', '3'];
      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: 2}})
        .reply(200, {
          data: [
            {record_type: 'messaging_profile', id: '1'},
            {record_type: 'messaging_profile', id: '2'},
          ],
          meta: {total_pages: 2, page_number: 1, page_size: 2},
        })
        .get(options.path)
        .query({page: {number: 2, size: 2}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '3'}],
          meta: {total_pages: 2, page_number: 2, page_size: 2},
        });

      forAwaitUntil<TelnyxRecord>(
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.list({page: {size: 2}}),
        TOTAL_OBJECTS + 1,
      )
        .then(function (messagingProfiles: TelnyxRecord[]) {
          try {
            expect(
              messagingProfiles.map(function (messagingProfile: TelnyxRecord) {
                return messagingProfile.id;
              }),
            ).toStrictEqual(realMessagingProfileIds);
            done();
          } catch (err: unknown) {
            done(err);
          }
        })
        .catch((err: unknown) => {
          done(err);
        });
    });

    test('works with `await` and a while loop when await exists', function (done) {
      realMessagingProfileIds = ['1', '2', '3'];
      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: 2}})
        .reply(200, {
          data: [
            {record_type: 'messaging_profile', id: '1'},
            {record_type: 'messaging_profile', id: '2'},
          ],
          meta: {total_pages: 2, page_number: 1, page_size: 2},
        })
        .get(options.path)
        .query({page: {number: 2, size: 2}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '3'}],
          meta: {total_pages: 2, page_number: 2, page_size: 2},
        });

      awaitUntil<TelnyxRecord>(
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.list({page: {size: 2}}),
        LIMIT,
      )
        .then(function (messagingProfiles: TelnyxRecord[]) {
          try {
            expect(
              messagingProfiles.map(function (messagingProfile: TelnyxRecord) {
                return messagingProfile.id;
              }),
            ).toStrictEqual(realMessagingProfileIds.slice(0, LIMIT));
            done();
          } catch (err: unknown) {
            done(err);
          }
        })
        .catch((err: unknown) => {
          done(err);
        });
    });

    test('returns an empty object from .return() so that `break;` works in for-await', function (done) {
      realMessagingProfileIds = ['1', '2', '3'];
      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: 2}})
        .reply(200, {
          data: [
            {record_type: 'messaging_profile', id: '1'},
            {record_type: 'messaging_profile', id: '2'},
          ],
          meta: {total_pages: 2, page_number: 1, page_size: 2},
        })
        .get(options.path)
        .query({page: {number: 2, size: 2}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '3'}],
          meta: {total_pages: 2, page_number: 2, page_size: 2},
        });
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      const iter = realTelnyx.messagingProfiles.list({page: {size: 2}});

      const messagingProfileIds: string[] = [];
      function handleIter(result: {value: TelnyxRecord}) {
        messagingProfileIds.push(result.value.id);
        expect(iter.return()).toStrictEqual({});
      }

      iter
        .next()
        .then(handleIter)
        .then(function () {
          try {
            expect(messagingProfileIds).toStrictEqual(
              realMessagingProfileIds.slice(0, 1),
            );
            done();
          } catch (err: unknown) {
            done(err);
          }
        })
        .catch((err: unknown) => {
          done(err);
        });
    });

    test('works when you call it sequentially', function (done) {
      realMessagingProfileIds = ['1', '2', '3'];
      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: 2}})
        .reply(200, {
          data: [
            {record_type: 'messaging_profile', id: '1'},
            {record_type: 'messaging_profile', id: '2'},
          ],
          meta: {total_pages: 2, page_number: 1, page_size: 2},
        })
        .get(options.path)
        .query({page: {number: 2, size: 2}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '3'}],
          meta: {total_pages: 2, page_number: 2, page_size: 2},
        });

      // @ts-expect-error TODO: import .d.ts files under src/test folder
      const iter = realTelnyx.messagingProfiles.list({page: {size: 2}});

      const messagingProfileIds: string[] = [];
      function handleIter(result: {value: TelnyxRecord}) {
        messagingProfileIds.push(result.value.id);
        if (messagingProfileIds.length < 3) {
          return iter.next().then(handleIter);
        }
      }
      iter
        .next()
        .then(handleIter)
        .then(function () {
          try {
            expect(messagingProfileIds).toStrictEqual(
              realMessagingProfileIds.slice(0, LIMIT),
            );
            done();
          } catch (err: unknown) {
            done(err);
          }
        })
        .catch((err: unknown) => {
          done(err);
        });
    });

    test('gives you the same result each time when you call it multiple times in parallel', function (done) {
      realMessagingProfileIds = ['1', '2', '3', '4'];
      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: 3}})
        .reply(200, {
          data: [
            {record_type: 'messaging_profile', id: '1'},
            {record_type: 'messaging_profile', id: '2'},
            {record_type: 'messaging_profile', id: '3'},
          ],
          meta: {total_pages: 3, page_number: 1, page_size: 3},
        })
        .get(options.path)
        .query({page: {number: 2, size: 3}})
        .reply(200, {
          data: [
            {record_type: 'messaging_profile', id: '4'},
            {record_type: 'messaging_profile', id: '5'},
            {record_type: 'messaging_profile', id: '6'},
          ],
          meta: {total_pages: 3, page_number: 2, page_size: 3},
        })
        .get(options.path)
        .query({page: {number: 3, size: 3}})
        .reply(200, {
          data: [
            {record_type: 'messaging_profile', id: '7'},
            {record_type: 'messaging_profile', id: '8'},
            {record_type: 'messaging_profile', id: '9'},
          ],
          meta: {total_pages: 3, page_number: 3, page_size: 3},
        });

      // @ts-expect-error TODO: import .d.ts files under src/test folder
      const iter = realTelnyx.messagingProfiles.list({page: {size: 3}});

      const messagingProfileIds: string[] = [];
      function handleIter(result: {value: TelnyxRecord}) {
        messagingProfileIds.push(result.value.id);
      }

      Promise.all([
        iter.next().then(handleIter),
        iter
          .next()
          .then(handleIter)
          .then(function () {
            return Promise.all([
              iter.next().then(handleIter),
              iter.next().then(handleIter),
            ]);
          })
          .then(function () {
            return Promise.all([
              iter.next().then(handleIter),
              iter.next().then(handleIter),
            ]);
          })
          .then(function () {
            return Promise.all([
              iter.next().then(handleIter),
              iter.next().then(handleIter),
            ]);
          }),
      ])
        .then(function () {
          try {
            expect(messagingProfileIds).toStrictEqual(
              realMessagingProfileIds.reduce(function (acc: string[], x) {
                acc.push(x);
                acc.push(x);
                return acc;
              }, []),
            );
            done();
          } catch (err: unknown) {
            done(err);
          }
        })
        .catch((err: unknown) => {
          done(err);
        });
    });
  });

  describe('autoPagingToArray', function () {
    test('can go to the end', function (done) {
      realMessagingProfileIds = ['1', '2', '3'];
      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: 2}})
        .reply(200, {
          data: [
            {record_type: 'messaging_profile', id: '1'},
            {record_type: 'messaging_profile', id: '2'},
          ],
          meta: {total_pages: 2, page_number: 1, page_size: 2},
        })
        .get(options.path)
        .query({page: {number: 2, size: 2}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '3'}],
          meta: {total_pages: 2, page_number: 2, page_size: 2},
        });

      // @ts-expect-error TODO: import .d.ts files under src/test folder
      realTelnyx.messagingProfiles
        .list({page: {size: 2}})
        .autoPagingToArray({limit: LIMIT})
        .then(function (messagingProfiles: TelnyxRecord[]) {
          return messagingProfiles.map(function (
            messagingProfile: TelnyxRecord,
          ) {
            return messagingProfile.id;
          });
        })
        .then((data: unknown) => {
          try {
            expect(data).toStrictEqual(realMessagingProfileIds);
            done();
          } catch (err: unknown) {
            done(err);
          }
        })
        .catch((err: unknown) => {
          done(err);
        });
    });

    test('returns a promise of an array', function (done) {
      realMessagingProfileIds = ['1', '2', '3'];
      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: 2}})
        .reply(200, {
          data: [
            {record_type: 'messaging_profile', id: '1'},
            {record_type: 'messaging_profile', id: '2'},
          ],
          meta: {total_pages: 2, page_number: 1, page_size: 2},
        })
        .get(options.path)
        .query({page: {number: 2, size: 2}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '3'}],
          meta: {total_pages: 2, page_number: 2, page_size: 2},
        });

      // @ts-expect-error TODO: import .d.ts files under src/test folder
      realTelnyx.messagingProfiles
        .list({page: {size: 2}})
        .autoPagingToArray({limit: LIMIT})
        .then(function (messagingProfiles: TelnyxRecord[]) {
          return messagingProfiles.map(function (
            messagingProfile: TelnyxRecord,
          ) {
            return messagingProfile.id;
          });
        })
        .then((data: unknown) => {
          try {
            expect(data).toStrictEqual(realMessagingProfileIds.slice(0, LIMIT));
            done();
          } catch (err: unknown) {
            done(err);
          }
        })
        .catch((err: unknown) => {
          done(err);
        });
    });

    test('accepts an onDone callback, passing an array', function (done) {
      function onDone(err: unknown, messagingProfiles: TelnyxRecord[]) {
        if (err) {
          done(err);
        } else {
          try {
            expect(
              messagingProfiles.map(function (messagingProfile: TelnyxRecord) {
                return messagingProfile.id;
              }),
            ).toStrictEqual(realMessagingProfileIds.slice(0, LIMIT));
            done();
          } catch (err: unknown) {
            done(err);
          }
        }
      }
      realMessagingProfileIds = ['1', '2', '3'];
      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: 2}})
        .reply(200, {
          data: [
            {record_type: 'messaging_profile', id: '1'},
            {record_type: 'messaging_profile', id: '2'},
          ],
          meta: {total_pages: 2, page_number: 1, page_size: 2},
        })
        .get(options.path)
        .query({page: {number: 2, size: 2}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '3'}],
          meta: {total_pages: 2, page_number: 2, page_size: 2},
        });

      // @ts-expect-error TODO: import .d.ts files under src/test folder
      realTelnyx.messagingProfiles
        .list({page: {size: 2}})
        .autoPagingToArray({limit: LIMIT}, onDone);
    });

    test('enforces a `limit` arg', function (done) {
      realMessagingProfileIds = ['1', '2', '3'];
      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: 2}})
        .reply(200, {
          data: [
            {record_type: 'messaging_profile', id: '1'},
            {record_type: 'messaging_profile', id: '2'},
          ],
          meta: {total_pages: 2, page_number: 1, page_size: 2},
        })
        .get(options.path)
        .query({page: {number: 2, size: 2}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '3'}],
          meta: {total_pages: 2, page_number: 2, page_size: 2},
        });

      try {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles
          .list({page: {size: 3}})
          .autoPagingToArray();
        done(Error('Should have thrown.'));
      } catch (err: unknown) {
        expect((err as Error)?.message).toBe(
          'You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.',
        );
        done();
      }
    });

    test('caps the `limit` arg to a reasonable ceiling', function (done) {
      try {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles
          .list({page: {size: 3}})
          .autoPagingToArray({limit: 1000000});
        done(Error('Should have thrown.'));
      } catch (err: unknown) {
        expect((err as Error)?.message).toBe(
          'You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.',
        );
        done();
      }
    });
  });

  describe('api compat edge cases', function () {
    // TODO: fix throwing TelnyxError.TelnyxConnectionError
    test.skip('lets you listen to the first request as its own promise, and separately each item, but only sends one request for the first page.', function (done) {
      realMessagingProfileIds = ['1', '2', '3'];
      const options = {
        host: telnyx.getConstant('DEFAULT_HOST'),
        path: '/v2/messaging_profiles',
      };
      nock('https://' + options.host + ':443')
        .get(options.path)
        .query({page: {size: 2}})
        .reply(200, {
          data: [
            {record_type: 'messaging_profile', id: '1'},
            {record_type: 'messaging_profile', id: '2'},
          ],
          meta: {total_pages: 2, page_number: 1, page_size: 2},
        })
        .get(options.path)
        .query({page: {number: 2, size: 2}})
        .reply(200, {
          data: [{record_type: 'messaging_profile', id: '3'}],
          meta: {total_pages: 2, page_number: 2, page_size: 2},
        });
      // Count requests: we want one for the first page (not two), and then one for the second page.
      let reqCount = 0;
      function onRequest() {
        reqCount += 1;
      }
      realTelnyx.on('request', onRequest);

      const messagingProfileIds: string[] = [];
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      const p = realTelnyx.messagingProfiles.list({page: {size: 2}});
      Promise.all([
        p,
        p.autoPagingEach(function (messagingProfile: TelnyxRecord) {
          messagingProfileIds.push(messagingProfile.id);
        }),
      ])
        .then(function (results) {
          realTelnyx.off('request', onRequest);
          expect(reqCount).toBe(2); // not 3.

          try {
            expect({
              firstReq: results[0].data.map(function (
                messagingProfile: TelnyxRecord,
              ) {
                return messagingProfile.id;
              }),
              paginated: messagingProfileIds,
            }).toStrictEqual({
              firstReq: realMessagingProfileIds.slice(0, 2),
              paginated: realMessagingProfileIds,
            });
            done();
          } catch (err: unknown) {
            done(err);
          }
        })
        .catch((err: unknown) => {
          done(err);
        });
    });
  });
});
