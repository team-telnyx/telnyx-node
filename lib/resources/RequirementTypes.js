'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'requirement_types',
  includeBasic: ['list','retrieve'],

  RetrieveRequirementType: telnyxMethod({
    method: 'GET',
    path: '/requirement_types/{id}',
  }),
  ListRequirementTypes: telnyxMethod({
    method: 'GET',
    path: '/requirement_types',
  }),

});
