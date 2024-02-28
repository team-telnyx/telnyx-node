'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'dialogflow_integration',
  includeBasic: ['delete'],

  DeleteDialogflowConnection: telnyxMethod({
    method: 'DELETE',
    path: '/dialogflow_connections/{connection_id}',
  }),

});
