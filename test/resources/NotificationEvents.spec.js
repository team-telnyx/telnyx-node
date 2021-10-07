'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

describe.skip('NotificationEvents Resource', function () {
  function responseFn(response) {
    expect(response.data).to.have.property('enabled');
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('name');
    expect(response.data).to.have.property('notification_category');
  }

  describe('list', function () {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function () {
      return telnyx.notificationEvents.list().then(listResponseFn);
    });
  });
});
