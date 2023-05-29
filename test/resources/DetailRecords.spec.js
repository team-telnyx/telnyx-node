'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

describe('DetailRecords Resource', function () {
  function responseFn(response) {
    expect(response.data).to.have.property('data');
    for (let index = 0; index < response.data.length; index++) {
      const row = response.data[index];
      expect(row).to.have.property('record_type');
      expect(row).to.have.property('uuid');
    }
  }

  describe.skip('query', function () {
    it('Sends the correct request', function () {
      return telnyx.detailRecords
        .query({filter: {record_type: 'messaging'}})
        .then(responseFn);
    });
  });
});
