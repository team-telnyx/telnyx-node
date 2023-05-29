'use strict';

var TelnyxResource = require('../TelnyxResource');
var telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'portouts',
  includeBasic: ['list', 'retrieve'],

  updateStatus: telnyxMethod({
    method: 'PATCH',
    path: '/{id}/{status}',
    urlParams: ['id', 'status'],
  }),

  listComments: telnyxMethod({
    method: 'GET',
    path: '/{id}/comments',
    urlParams: ['id'],
    methodType: 'list',
  }),

  createComment: telnyxMethod({
    method: 'POST',
    path: '/{id}/comments',
    urlParams: ['id'],
    methodType: 'create',
  }),
  retrieveRequest: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],
    methodType: 'retrieve',
  }),
  retrieveComment: telnyxMethod({
    method: 'GET',
    path: '/{id}/comments',
    urlParams: ['id'],
    methodType: 'retrieve',
  }),
  listDocuments: telnyxMethod({
    method: 'GET',
    path: '/{id}/supporting_documents',
    urlParams: ['id'],
    methodType: 'list',
  }),
  createDocuments: telnyxMethod({
    method: 'POST',
    path: '/{id}/supporting_documents',
    urlParams: ['id'],
    methodType: 'create',
  }),
});
