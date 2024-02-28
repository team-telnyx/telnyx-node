'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'requirements',
  includeBasic: ['list','retrieve'],

  ListRequirements: telnyxMethod({
    method: 'GET',
    path: '/requirements',
  }),
  RetrieveDocumentRequirements: telnyxMethod({
    method: 'GET',
    path: '/requirements/{id}',
  }),

});
