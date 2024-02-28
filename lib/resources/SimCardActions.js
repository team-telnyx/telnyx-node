'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'sim_card_actions',
  includeBasic: ['list','retrieve'],

  ListSimCardActions: telnyxMethod({
    method: 'GET',
    path: '/sim/card/actions',
  }),
  ListBulkSimCardActions: telnyxMethod({
    method: 'GET',
    path: '/bulk/sim/card/actions',
  }),
  GetBulkSimCardAction: telnyxMethod({
    method: 'GET',
    path: '/bulk/sim/card/actions/{id}',
  }),
  GetSimCardAction: telnyxMethod({
    method: 'GET',
    path: '/sim/card/actions/{id}',
  }),

});
