'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

describe('DetailRecords Resource', function () {
  // eslint-disable-next-line
  // TODO -- update spec (at the moment, current telnyx-mock response is empty list)
  function responseFn(response) {
    expect(response.error).to.be.undefined
  }

  describe('query', function () {
    it('Sends the correct request', function () {
      return telnyx.detailRecords.query({filter: {record_type: 'message_detail_record'}}).then(responseFn);
    });
  });
});
