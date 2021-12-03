'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

describe('DetailRecords Resource', function () {
  function responseFn(response) {
    expect(response.data[0]).to.have.property('record_type');
    expect(response.data[0]).to.have.property('uuid');
  }

  describe.skip('query', function () {
    it('Sends the correct request', function () {
      return telnyx.detailRecords.query({filter: {record_type: 'messaging'}}).then(responseFn);
    });
  });
});
