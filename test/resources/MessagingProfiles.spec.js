'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';

var METHODS = [
  'phone_numbers',
  'sender_ids',
  'short_codes',
];

describe('MessagingProfiles Resource', function() {
  describe('retrieve', function() {
    function responseFn(response) {
      expect(response.data).to.include({id: '123', resource_group_id: '123'});
    }

    it('Sends the correct request', function() {
      return telnyx.messagingProfiles.retrieve('123').then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.messagingProfiles.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function() {
    function responseFn(response) {
      expect(response.data).to.include({name: 'Summer Campaign', record_type: 'messaging_profile'});
    }

    function responseFnNoBody(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('name');
      expect(response.data).to.have.property('record_type');
    }

    it('Sends the correct request', function() {
      return telnyx.messagingProfiles.create({name: 'Summer Campaign'})
        .then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.messagingProfiles.create({name: 'Summer Campaign'}, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth and no body]', function() {
      return telnyx.messagingProfiles.create(TEST_AUTH_KEY)
        .then(responseFnNoBody);
    });

    it('Sends the correct request [with specified auth in options]', function() {
      return telnyx.messagingProfiles.create({name: 'Summer Campaign'}, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth in options and no body]', function() {
      return telnyx.messagingProfiles.create({api_key: TEST_AUTH_KEY})
        .then(responseFnNoBody);
    });
  });

  describe('update', function() {
    it('Sends the correct request', function() {
      return telnyx.messagingProfiles.update('123', {name: 'Foo "baz"'})
        .then(function(response) {
          expect(response.data).to.include({id: '123', name: 'Foo "baz"'});
        })
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      return telnyx.messagingProfiles.del('123')
        .then(function(response) {
          expect(response.data).to.include({id: '123'});
        })
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('name');
      expect(response.data[0]).to.have.property('resource_group_id');
      expect(response.data[0]).to.include({record_type: 'messaging_profile'});
    }

    it('Sends the correct request', function() {
      return telnyx.messagingProfiles.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.messagingProfiles.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('PhoneNumbers methods', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('phone_number');
      expect(response.data[0]).to.have.property('messaging_profile_id');
      expect(response.data[0]).to.include({record_type: 'messaging_phone_number'});
    }

    describe('listPhoneNumbers', function() {
      it('Sends the correct request', function() {
        return telnyx.messagingProfiles.listPhoneNumbers('123')
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.messagingProfiles.listPhoneNumbers('123', TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    describe('phoneNumbers', function() {
      it('Sends the correct request', function() {
        telnyx.messagingProfiles.phoneNumbers('123')
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        telnyx.messagingProfiles.phoneNumbers('123', TEST_AUTH_KEY)
          .then(responseFn);
      });
    });
  });

  describe('ShortCodes methods', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('short_code');
      expect(response.data[0]).to.have.property('messaging_profile_id');
      expect(response.data[0]).to.include({record_type: 'messaging_short_code'});
    }

    describe('listShortCodes', function() {
      it('Sends the correct request', function() {
        telnyx.messagingProfiles.listShortCodes('123')
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        telnyx.messagingProfiles.listShortCodes('123', TEST_AUTH_KEY)
          .then(responseFn);
      });
    });
    describe('shortCodes', function() {
      it('Sends the correct request', function() {
        telnyx.messagingProfiles.shortCodes('123')
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        telnyx.messagingProfiles.shortCodes('123', TEST_AUTH_KEY)
          .then(responseFn);
      });
    });
  });

  describe('SenderIds methods', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('sender_id');
      expect(response.data[0]).to.have.property('messaging_profile_id');
      expect(response.data[0]).to.include({record_type: 'messaging_sender_id'});
    }

    describe('listSenderIds', function() {
      it('Sends the correct request', function() {
        telnyx.messagingProfiles.listSenderIds('123')
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        telnyx.messagingProfiles.listSenderIds('123', TEST_AUTH_KEY)
          .then(responseFn);
      });
    });
    describe('senderIds', function() {
      it('Sends the correct request', function() {
        telnyx.messagingProfiles.senderIds('123')
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        telnyx.messagingProfiles.senderIds('123', TEST_AUTH_KEY)
          .then(responseFn);
      });
    });
  });

  describe('Nested', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('record_type');
      expect(response.data[0]).to.have.property('messaging_profile_id');
    }

    METHODS.forEach(function(action) {
      describe(action, function() {
        it('Sends the correct request', function() {
          return telnyx.messagingProfiles.create({name: 'Summer Campaign'})
            .then(function(response) {
              const mp = response.data;
              return mp[action]()
                .then(responseFn);
            })
        });
        it('Sends the correct request [with specified auth]', function() {
          return telnyx.messagingProfiles.create({name: 'Summer Campaign'})
            .then(function(response) {
              const mp = response.data;
              return mp[action](TEST_AUTH_KEY)
                .then(responseFn);
            })
        });
      });
    });
  })
});
