'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

describe.skip('NotificationEventConditions Resource', function () {
  function responseFn(response) {
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('associated_record_type');
    expect(response.data).to.have.property('allow_multiple_channels');
    expect(response.data).to.have.property('supported_channels');
    expect(response.data).to.have.property('asynchronous');
    expect(response.data).to.have.property('parameters');
    expect(response.data).to.include({record_type: 'notification_event_condition'});
  }

  describe('list', function () {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function () {
      return telnyx.notificationEventConditions.list().then(listResponseFn);
    });
  });
});
