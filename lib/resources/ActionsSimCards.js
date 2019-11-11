'use strict';


var TelnyxResource = require('../TelnyxResource');
var telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: '',

  register: telnyxMethod({
    method: 'POST',
    path: '/register/sim_cards',
  }),

});
