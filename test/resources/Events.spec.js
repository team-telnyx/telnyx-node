'use strict';

var telnyx = require('../../testUtils').getSpyableTelnyx();
var expect = require('chai').expect;

describe('Events Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      telnyx.events.retrieve('eventIdBaz');
      expect(telnyx.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v2/events/eventIdBaz',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', function() {
    it('Sends the correct request', function() {
      telnyx.events.list({page: {size: 25}});
      expect(telnyx.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v2/events',
        headers: {},
        data: {page: {size: 25}},
      });
    });
  });
});
