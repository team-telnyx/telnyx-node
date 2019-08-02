'use strict';

/* eslint-disable callback-return */

var testUtils = require('../testUtils');
var telnyx = require('../testUtils').getSpyableTelnyx();
var expect = require('chai').expect;
var nock = require('nock');
var realTelnyx = require('../lib/telnyx')(testUtils.getUserTelnyxKey());

var LIMIT = 3;
var TOTAL_OBJECTS = 3;

describe('auto pagination', function() {
  this.timeout(20000);

  var realMessagingProfileIds;

  describe('callbacks', function() {
    it('lets you call `next()` to iterate and `next(false)` to break', function() {
      return expect(new Promise(function(resolve, reject) {
        realMessagingProfileIds = [1,2,3];
        var messagingProfileIds = [];
        function onMessagingProfile(messagingProfile, next) {
          messagingProfileIds.push(messagingProfile.id);
          if (messagingProfileIds.length === LIMIT) {
            next(false);
          } else {
            expect(messagingProfileIds.length).to.be.lessThan(LIMIT);
            next();
          }
        }
        function onDone(err) {
          if (err) {
            reject(err);
          } else {
            resolve(messagingProfileIds);
          }
        }
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
        };
        nock('https://' + options.host + ':443')
          .get(options.path)
          .query({page: {size: 1}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 1}], meta: {total_pages: 3, page_number: 1, page_size: 1}})
          .get(options.path)
          .query({page: {number: 2, size: 1}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 2}], meta: {total_pages: 3, page_number: 2, page_size: 1}})
          .get(options.path)
          .query({page: {number: 3, size: 1}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 3}], meta: {total_pages: 3, page_number: 3, page_size: 1}});

        realTelnyx.messagingProfiles.list({page: {size: 1}})
          .autoPagingEach(onMessagingProfile, onDone);
      })).to.eventually.deep.equal(realMessagingProfileIds.slice(0, LIMIT));
    });

    it('lets you ignore the second arg and `return false` to break', function() {
      return expect(new Promise(function(resolve, reject) {
        realMessagingProfileIds = [1,2,3];
        var messagingProfileIds = [];
        function onMessagingProfile(messagingProfile) {
          messagingProfileIds.push(messagingProfile.id);
          if (messagingProfileIds.length === LIMIT) {
            return false;
          } else {
            expect(messagingProfileIds.length).to.be.lessThan(LIMIT);
          }
        }
        function onDone(err) {
          if (err) {
            reject(err);
          } else {
            resolve(messagingProfileIds);
          }
        }
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
        };
        nock('https://' + options.host + ':443')
          .get(options.path)
          .query({page: {size: 1}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 1}], meta: {total_pages: 3, page_number: 1, page_size: 1}})
          .get(options.path)
          .query({page: {number: 2, size: 1}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 2}], meta: {total_pages: 3, page_number: 2, page_size: 1}})
          .get(options.path)
          .query({page: {number: 3, size: 1}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 3}], meta: {total_pages: 3, page_number: 3, page_size: 1}});

        realTelnyx.messagingProfiles.list({page: {size: 1}})
          .autoPagingEach(onMessagingProfile, onDone);
      })).to.eventually.deep.equal(realMessagingProfileIds.slice(0, LIMIT));
    });

    it('lets you ignore the second arg and return a Promise which returns `false` to break', function() {
      return expect(new Promise(function(resolve, reject) {
        realMessagingProfileIds = [1,2,3];
        var messagingProfileIds = [];
        function onMessagingProfile(messagingProfile) {
          messagingProfileIds.push(messagingProfile.id);
          if (messagingProfileIds.length === LIMIT) {
            return Promise.resolve(false);
          } else {
            expect(messagingProfileIds.length).to.be.lessThan(LIMIT);
            return Promise.resolve();
          }
        }
        function onDone(err) {
          if (err) {
            reject(err);
          } else {
            resolve(messagingProfileIds);
          }
        }
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
        };
        nock('https://' + options.host + ':443')
          .get(options.path)
          .query({page: {size: 1}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 1}], meta: {total_pages: 3, page_number: 1, page_size: 1}})
          .get(options.path)
          .query({page: {number: 2, size: 1}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 2}], meta: {total_pages: 3, page_number: 2, page_size: 1}})
          .get(options.path)
          .query({page: {number: 3, size: 1}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 3}], meta: {total_pages: 3, page_number: 3, page_size: 1}});

        realTelnyx.messagingProfiles.list({page: {size: 1}})
          .autoPagingEach(onMessagingProfile, onDone);
      })).to.eventually.deep.equal(realMessagingProfileIds.slice(0, LIMIT));
    });

    it('can use a promise instead of a callback for onDone', function() {
      return expect(new Promise(function(resolve, reject) {
        realMessagingProfileIds = [1,2,3];
        var messagingProfileIds = [];
        function onMessagingProfile(messagingProfile) {
          messagingProfileIds.push(messagingProfile.id);
        }
        function onDone() {
          resolve(messagingProfileIds);
        }
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
        };
        nock('https://' + options.host + ':443')
          .get(options.path)
          .query({page: {size: 1}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 1}], meta: {total_pages: 3, page_number: 1, page_size: 1}})
          .get(options.path)
          .query({page: {number: 2, size: 1}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 2}], meta: {total_pages: 3, page_number: 2, page_size: 1}})
          .get(options.path)
          .query({page: {number: 3, size: 1}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 3}], meta: {total_pages: 3, page_number: 3, page_size: 1}});

        realTelnyx.messagingProfiles.list({page: {size: 1}})
          .autoPagingEach(onMessagingProfile)
          .then(onDone)
          .catch(reject);
      })).to.eventually.deep.equal(realMessagingProfileIds);
    });

    it('handles the end of a list properly when the last page is full', function() {
      return expect(new Promise(function(resolve, reject) {
        realMessagingProfileIds = [1,2,3,4];
        var messagingProfileIds = [];
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
        };
        nock('https://' + options.host + ':443')
          .get(options.path)
          .query({page: {size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 1}, {record_type: 'messaging_profile', id: 2}], meta: {total_pages: 2, page_number: 1, page_size: 2}})
          .get(options.path)
          .query({page: {number: 2, size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 3}, {record_type: 'messaging_profile', id: 4}], meta: {total_pages: 2, page_number: 2, page_size: 2}})

        return realTelnyx.messagingProfiles.list({page: {size: 2}})
          .autoPagingEach(function(messagingProfile) { messagingProfileIds.push(messagingProfile.id); })
          .catch(reject)
          .then(function() {
            resolve(messagingProfileIds);
          });
      })).to.eventually.deep.equal(realMessagingProfileIds);
    });

    it('handles the end of a list properly when the last page is not full', function() {
      return expect(new Promise(function(resolve, reject) {
        realMessagingProfileIds = [1,2,3];
        var messagingProfileIds = [];
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
        };
        nock('https://' + options.host + ':443')
          .get(options.path)
          .query({page: {size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 1}, {record_type: 'messaging_profile', id: 2}], meta: {total_pages: 2, page_number: 1, page_size: 2}})
          .get(options.path)
          .query({page: {number: 2, size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 3}], meta: {total_pages: 2, page_number: 2, page_size: 2}})
        return realTelnyx.messagingProfiles.list({page: {size: 2}})
          .autoPagingEach(function(messagingProfile) { messagingProfileIds.push(messagingProfile.id); })
          .catch(reject)
          .then(function() {
            resolve(messagingProfileIds);
          });
      })).to.eventually.deep.equal(realMessagingProfileIds);
    });

    it('handles a list which is shorter than the page size properly', function() {
      return expect(new Promise(function(resolve, reject) {
        realMessagingProfileIds = [1,2];
        var messagingProfileIds = [];
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
        };
        nock('https://' + options.host + ':443')
          .get(options.path)
          .query({page: {size: TOTAL_OBJECTS + 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 1}, {record_type: 'messaging_profile', id: 2}], meta: {total_pages: 1, page_number: 1, page_size: TOTAL_OBJECTS + 2}})

        return realTelnyx.messagingProfiles.list({page: {size: TOTAL_OBJECTS + 2}})
          .autoPagingEach(function(messagingProfile) { messagingProfileIds.push(messagingProfile.id); })
          .catch(reject)
          .then(function() {
            resolve(messagingProfileIds);
          });
      })).to.eventually.deep.equal(realMessagingProfileIds);
    });

    it('handles errors after the first page correctly (callback)', function() {
      return expect(new Promise(function(resolve, reject) {
        var i = 0;
        function onmessagingProfile() {
          i += 1;
          if (i > 2) {
            throw Error('Simulated error');
          }
        }

        realMessagingProfileIds = [1,2,3];
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
        };
        nock('https://' + options.host + ':443')
          .get(options.path)
          .query({page: {size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 1}, {record_type: 'messaging_profile', id: 2}], meta: {total_pages: 2, page_number: 1, page_size: 2}})
          .get(options.path)
          .query({page: {number: 2, size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 3}], meta: {total_pages: 2, page_number: 2, page_size: 2}})

        return realTelnyx.messagingProfiles.list({page: {size: 2}})
          .autoPagingEach(onmessagingProfile, function(err) {
            if (err) {
              resolve(err.message);
            } else {
              reject(Error('Expected an error, did not get one.'));
            }
          });
      })).to.eventually.deep.equal('Simulated error');
    });

    it('handles errors after the first page correctly (promise)', function() {
      return expect(new Promise(function(resolve, reject) {
        var i = 0;
        function onmessagingProfile() {
          i += 1;
          if (i > 2) {
            throw Error('Simulated error');
          }
        }
        realMessagingProfileIds = [1,2,3];
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
        };
        nock('https://' + options.host + ':443')
          .get(options.path)
          .query({page: {size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 1}, {record_type: 'messaging_profile', id: 2}], meta: {total_pages: 2, page_number: 1, page_size: 2}})
          .get(options.path)
          .query({page: {number: 2, size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 3}], meta: {total_pages: 2, page_number: 2, page_size: 2}})
        return realTelnyx.messagingProfiles.list({page: {size: 2}})
          .autoPagingEach(onmessagingProfile)
          .then(function() {
            reject(Error('Expected an error, did not get one.'));
          })
          .catch(function(err) {
            resolve(err.message);
          });
      })).to.eventually.deep.equal('Simulated error');
    });
  });

  describe('async iterators', function() {

    if (testUtils.envSupportsForAwait()) {
      // `for await` throws a syntax error everywhere but node 10,
      // so we must conditionally require it.
      var forAwaitUntil = require('../testUtils/forAwait.node10').forAwaitUntil;

      it('works with `for await` when that feature exists (user break)', function() {
        return expect(new Promise(function(resolve, reject) {
          realMessagingProfileIds = [1,2,3];
          var options = {
            host: telnyx.getConstant('DEFAULT_HOST'),
            path: '/v2/messaging_profiles',
          };
          nock('https://' + options.host + ':443')
            .get(options.path)
            .query({page: {size: 2}})
            .reply(200, {data: [{record_type: 'messaging_profile', id: 1}, {record_type: 'messaging_profile', id: 2}], meta: {total_pages: 2, page_number: 1, page_size: 2}})
            .get(options.path)
            .query({page: {number: 2, size: 2}})
            .reply(200, {data: [{record_type: 'messaging_profile', id: 3}], meta: {total_pages: 2, page_number: 2, page_size: 2}})

          forAwaitUntil(realTelnyx.messagingProfiles.list({page: {size: 2}}), LIMIT)
            .then(function(messagingProfiles) {
              resolve(messagingProfiles.map(function(messagingProfile) { return messagingProfile.id; }));
            })
            .catch(reject)
        })).to.eventually.deep.equal(realMessagingProfileIds.slice(0, LIMIT));
      });

      it('works with `for await` when that feature exists (end of list)', function() {
        return expect(new Promise(function(resolve, reject) {
          realMessagingProfileIds = [1,2,3];
          var options = {
            host: telnyx.getConstant('DEFAULT_HOST'),
            path: '/v2/messaging_profiles',
          };
          nock('https://' + options.host + ':443')
            .get(options.path)
            .query({page: {size: 2}})
            .reply(200, {data: [{record_type: 'messaging_profile', id: 1}, {record_type: 'messaging_profile', id: 2}], meta: {total_pages: 2, page_number: 1, page_size: 2}})
            .get(options.path)
            .query({page: {number: 2, size: 2}})
            .reply(200, {data: [{record_type: 'messaging_profile', id: 3}], meta: {total_pages: 2, page_number: 2, page_size: 2}})

          forAwaitUntil(realTelnyx.messagingProfiles.list({page: {size: 2}}), TOTAL_OBJECTS + 1)
            .then(function(messagingProfiles) {
              resolve(messagingProfiles.map(function(messagingProfile) { return messagingProfile.id; }));
            })
            .catch(reject);
        })).to.eventually.deep.equal(realMessagingProfileIds);
      });
    }

    if (testUtils.envSupportsAwait()) {
      // Similarly, `await` throws a syntax error below Node 7.6.
      var awaitUntil = require('../testUtils/await.node7').awaitUntil;

      it('works with `await` and a while loop when await exists', function() {
        return expect(new Promise(function(resolve, reject) {
          realMessagingProfileIds = [1,2,3];
          var options = {
            host: telnyx.getConstant('DEFAULT_HOST'),
            path: '/v2/messaging_profiles',
          };
          nock('https://' + options.host + ':443')
            .get(options.path)
            .query({page: {size: 2}})
            .reply(200, {data: [{record_type: 'messaging_profile', id: 1}, {record_type: 'messaging_profile', id: 2}], meta: {total_pages: 2, page_number: 1, page_size: 2}})
            .get(options.path)
            .query({page: {number: 2, size: 2}})
            .reply(200, {data: [{record_type: 'messaging_profile', id: 3}], meta: {total_pages: 2, page_number: 2, page_size: 2}})

          awaitUntil(realTelnyx.messagingProfiles.list({page: {size: 2}}), LIMIT)
            .then(function(messagingProfiles) {
              resolve(messagingProfiles.map(function(messagingProfile) { return messagingProfile.id; }));
            })
            .catch(reject);
        })).to.eventually.deep.equal(realMessagingProfileIds.slice(0, LIMIT));
      });
    }

    it('returns an empty object from .return() so that `break;` works in for-await', function() {
      return expect(new Promise(function(resolve, reject) {
        realMessagingProfileIds = [1,2,3];
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
        };
        nock('https://' + options.host + ':443')
          .get(options.path)
          .query({page: {size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 1}, {record_type: 'messaging_profile', id: 2}], meta: {total_pages: 2, page_number: 1, page_size: 2}})
          .get(options.path)
          .query({page: {number: 2, size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 3}], meta: {total_pages: 2, page_number: 2, page_size: 2}})
        var iter = realTelnyx.messagingProfiles.list({page: {size: 2}});

        var messagingProfileIds = [];
        function handleIter(result) {
          messagingProfileIds.push(result.value.id);
          expect(iter.return()).to.deep.equal({});
        }

        iter.next().then(handleIter).then(function() {
          resolve(messagingProfileIds);
        }).catch(reject);
      })).to.eventually.deep.equal(realMessagingProfileIds.slice(0, 1));
    });

    it('works when you call it sequentially', function() {
      return expect(new Promise(function(resolve, reject) {
        realMessagingProfileIds = [1,2,3];
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
        };
        nock('https://' + options.host + ':443')
          .get(options.path)
          .query({page: {size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 1}, {record_type: 'messaging_profile', id: 2}], meta: {total_pages: 2, page_number: 1, page_size: 2}})
          .get(options.path)
          .query({page: {number: 2, size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 3}], meta: {total_pages: 2, page_number: 2, page_size: 2}})

        var iter = realTelnyx.messagingProfiles.list({page: {size: 2}});

        var messagingProfileIds = [];
        function handleIter(result) {
          messagingProfileIds.push(result.value.id);
          if (messagingProfileIds.length < 3) {
            return iter.next().then(handleIter);
          }
        }
        iter.next().then(handleIter).then(function() {
          resolve(messagingProfileIds);
        }).catch(reject);
      })).to.eventually.deep.equal(realMessagingProfileIds.slice(0, LIMIT));
    });

    it('gives you the same result each time when you call it multiple times in parallel', function() {
      return expect(new Promise(function(resolve, reject) {
        realMessagingProfileIds = [1,2,3,4];
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
        };
        nock('https://' + options.host + ':443')
          .get(options.path)
          .query({page: {size: 3}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 1}, {record_type: 'messaging_profile', id: 2}, {record_type: 'messaging_profile', id: 3}], meta: {total_pages: 3, page_number: 1, page_size: 3}})
          .get(options.path)
          .query({page: {number: 2, size: 3}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 4}, {record_type: 'messaging_profile', id: 5}, {record_type: 'messaging_profile', id: 6}], meta: {total_pages: 3, page_number: 2, page_size: 3}})
          .get(options.path)
          .query({page: {number: 3, size: 3}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 7}, {record_type: 'messaging_profile', id: 8}, {record_type: 'messaging_profile', id: 9}], meta: {total_pages: 3, page_number: 3, page_size: 3}})

        var iter = realTelnyx.messagingProfiles.list({page: {size: 3}});

        var messagingProfileIds = []
        function handleIter(result) {
          messagingProfileIds.push(result.value.id);
        }

        Promise.all([
          iter.next().then(handleIter),
          iter.next().then(handleIter).then(function() {
            return Promise.all([
              iter.next().then(handleIter),
              iter.next().then(handleIter),
            ])
          }).then(function() {
            return Promise.all([
              iter.next().then(handleIter),
              iter.next().then(handleIter),
            ])
          }).then(function() {
            return Promise.all([
              iter.next().then(handleIter),
              iter.next().then(handleIter),
            ])
          })
        ]).then(function() {
          resolve(messagingProfileIds);
        }).catch(reject);
      })).to.eventually.deep.equal(realMessagingProfileIds.reduce(function(acc, x) {
        acc.push(x);
        acc.push(x);
        return acc;
      }, []));
    });
  });

  describe('autoPagingToArray', function() {
    it('can go to the end', function() {
      return expect(new Promise(function(resolve, reject) {
        realMessagingProfileIds = [1,2,3];
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
        };
        nock('https://' + options.host + ':443')
          .get(options.path)
          .query({page: {size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 1}, {record_type: 'messaging_profile', id: 2}], meta: {total_pages: 2, page_number: 1, page_size: 2}})
          .get(options.path)
          .query({page: {number: 2, size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 3}], meta: {total_pages: 2, page_number: 2, page_size: 2}})

        realTelnyx.messagingProfiles.list({page: {size: 2}})
          .autoPagingToArray({limit: LIMIT})
          .then(function(messagingProfiles) {
            return messagingProfiles.map(function(messagingProfile) { return messagingProfile.id; });
          })
          .then(resolve)
          .catch(reject);
      })).to.eventually.deep.equal(realMessagingProfileIds);
    });

    it('returns a promise of an array', function() {
      return expect(new Promise(function(resolve, reject) {
        realMessagingProfileIds = [1,2,3];
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
        };
        nock('https://' + options.host + ':443')
          .get(options.path)
          .query({page: {size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 1}, {record_type: 'messaging_profile', id: 2}], meta: {total_pages: 2, page_number: 1, page_size: 2}})
          .get(options.path)
          .query({page: {number: 2, size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 3}], meta: {total_pages: 2, page_number: 2, page_size: 2}})

        realTelnyx.messagingProfiles.list({page: {size: 2}})
          .autoPagingToArray({limit: LIMIT})
          .then(function(messagingProfiles) {
            return messagingProfiles.map(function(messagingProfile) { return messagingProfile.id; });
          })
          .then(resolve)
          .catch(reject);
      })).to.eventually.deep.equal(realMessagingProfileIds.slice(0, LIMIT));
    });

    it('accepts an onDone callback, passing an array', function() {
      return expect(new Promise(function(resolve, reject) {
        function onDone(err, messagingProfiles) {
          if (err) {
            reject(err);
          } else {
            resolve(messagingProfiles.map(function(messagingProfile) { return messagingProfile.id; }));
          }
        }
        realMessagingProfileIds = [1,2,3];
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
        };
        nock('https://' + options.host + ':443')
          .get(options.path)
          .query({page: {size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 1}, {record_type: 'messaging_profile', id: 2}], meta: {total_pages: 2, page_number: 1, page_size: 2}})
          .get(options.path)
          .query({page: {number: 2, size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 3}], meta: {total_pages: 2, page_number: 2, page_size: 2}})

        realTelnyx.messagingProfiles.list({page: {size: 2}})
          .autoPagingToArray({limit: LIMIT}, onDone);
      })).to.eventually.deep.equal(realMessagingProfileIds.slice(0, LIMIT));
    });

    it('enforces a `limit` arg', function() {
      return expect(new Promise(function(resolve, reject) {
        realMessagingProfileIds = [1,2,3];
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
        };
        nock('https://' + options.host + ':443')
          .get(options.path)
          .query({page: {size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 1}, {record_type: 'messaging_profile', id: 2}], meta: {total_pages: 2, page_number: 1, page_size: 2}})
          .get(options.path)
          .query({page: {number: 2, size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 3}], meta: {total_pages: 2, page_number: 2, page_size: 2}})

        try {
          realTelnyx.messagingProfiles.list({page: {size: 3}})
            .autoPagingToArray();
          reject(Error('Should have thrown.'));
        } catch (err) {
          resolve(err.message);
        }
      })).to.eventually.equal('You must pass a `limit` option to autoPagingToArray, eg; `autoPagingToArray({limit: 1000});`.');
    });

    it('caps the `limit` arg to a reasonable ceiling', function() {
      return expect(new Promise(function(resolve, reject) {
        try {
          realTelnyx.messagingProfiles.list({page: {size: 3}})
            .autoPagingToArray({limit: 1000000});
          reject(Error('Should have thrown.'));
        } catch (err) {
          resolve(err.message);
        }
      })).to.eventually.equal('You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.');
    });
  });

  describe('api compat edge cases', function() {
    it('lets you listen to the first request as its own promise, and separately each item, but only sends one request for the first page.', function() {
      return expect(new Promise(function(resolve, reject) {
        realMessagingProfileIds = [1,2,3];
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
        };
        nock('https://' + options.host + ':443')
          .get(options.path)
          .query({page: {size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 1}, {record_type: 'messaging_profile', id: 2}], meta: {total_pages: 2, page_number: 1, page_size: 2}})
          .get(options.path)
          .query({page: {number: 2, size: 2}})
          .reply(200, {data: [{record_type: 'messaging_profile', id: 3}], meta: {total_pages: 2, page_number: 2, page_size: 2}})
        // Count requests: we want one for the first page (not two), and then one for the second page.
        var reqCount = 0;
        function onRequest() {
          reqCount += 1;
        }
        realTelnyx.on('request', onRequest);

        var messagingProfileIds = [];
        var p = realTelnyx.messagingProfiles.list({page: {size: 2}})
        Promise.all([
          p,
          p.autoPagingEach(function(messagingProfile) { messagingProfileIds.push(messagingProfile.id); }),
        ]).then(function(results) {
          realTelnyx.off('request', onRequest);
          expect(reqCount).to.equal(2); // not 3.

          resolve({
            firstReq: results[0].data.map(function(messagingProfile) { return messagingProfile.id; }),
            paginated: messagingProfileIds,
          });
        }).catch(reject);
      })).to.eventually.deep.equal({
        firstReq: realMessagingProfileIds.slice(0, 2),
        paginated: realMessagingProfileIds,
      });
    });
  });
});
