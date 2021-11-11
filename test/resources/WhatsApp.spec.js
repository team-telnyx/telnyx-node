'use strict';


var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

describe('WhatsApp', function() {
  describe.skip('contacts', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('input');
      expect(response.data).to.have.property('status');
      expect(response.data).to.include({record_type: 'whatsapp_contact'});
    }

    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    describe('check', function() {
      it('Sends the correct request', function () {
        return telnyx.whatsApp.contacts.check({
          whatsapp_user_id: '15125551212',
          blocking: 'wait',
          contacts: ['15125551000','+1 512 555 1001','5125551002','+1 (512) 555-1004','1-512-555-1005']
        }).then(listResponseFn);
      });
    });
  });

  describe('media', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.include({record_type: 'whatsapp_media_id'});
    }

    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    describe('upload', function() {
      it('Sends the correct request', function() {
        return telnyx.whatsApp.media.upload({
          whatsapp_user_id: '15125551212',
          media_content_type: 'image/jpeg',
          upload_file: '/path/to/mediafile/my-image.jpg'
        }).then(listResponseFn);
      });
    });

    describe('download', function() {
      function responseFn(response) {
        console.log(response);
        expect(response.statusCode).to.equal(200);
      }

      it('Sends the correct request', function() {
        return telnyx.whatsApp.media.download('whatsapp-user-id-123', 'media-id-456')
          .then(responseFn);
      });
    });

    describe('del', function() {
      function responseFn(response) {
        expect(response.statusCode).to.equal(204);
      }

      it('Sends the correct request', function() {
        return telnyx.whatsApp.media.del('123').then(responseFn);
      });
    });
  });

  describe.skip('messages', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.include({record_type: 'whatsapp_message_id'});
    }

    describe('send', function() {
      it('Sends the correct request', function() {
        return telnyx.whatsApp.messages.send({
          to: '15125551000',
          whatsapp_user_id: '15125551234',
          text: {body: 'This is a WhatsApp message!'}
        }).then(responseFn);
      });
    });

    describe('markAsRead', function() {
      it('Sends the correct request', function() {
        return telnyx.whatsApp.messages.markAsRead('123-message-id', {
          status: 'read',
          whatsapp_user_id: '15125551234'
        }).then(responseFn);
      });
    });
  });

  describe.skip('users', function() {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.include({record_type: 'whatsapp_message_id'});
    }

    describe('retrieve', function() {
      it('Sends the correct response', function() {
        return telnyx.whatsApp.users.retrieve('123')
          .then(responseFn);
      });
    });

    describe('update', function() {
      it('Sends the correct response', function() {
        return telnyx.whatsApp.users.update('123', {
          webhook_url: 'https://mywebhook.com/example/endpoint'
        }).then(responseFn);
      });
    });
  });
});
