'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'sim_card_group_actions',
  includeBasic: ['list','retrieve'],

  GetSimCardGroupAction: telnyxMethod({
    method: 'GET',
    path: '/sim_card_group/actions/{id}',
  }),
  GetSimCardGroupActions: telnyxMethod({
    method: 'GET',
    path: '/sim_card_group/actions',
  }),

});
