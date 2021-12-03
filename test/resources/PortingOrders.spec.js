'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('PortingOrders Resource', function() {
  function responseFn(response) {
    expect(response.data).to.have.property('activation_settings');
    expect(response.data).to.have.property('end_user');
    expect(response.data).to.have.property('phone_number_configuration');
    expect(response.data).to.include({record_type: 'porting_order'});
  }

  function listResponseFn(response) {
    return responseFn({data: response.data[0]});
  }

  const newPortingOrderParams = {
    phone_numbers: ['+15555555555', '+16666666667']
  };

  describe('list', function() {
    it('Sends the correct request', function() {
      return telnyx.portingOrders.list()
        .then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.portingOrders.list()
        .then(listResponseFn);
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      return telnyx.portingOrders.create(newPortingOrderParams).then(listResponseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.portingOrders.create(newPortingOrderParams, TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.portingOrders.retrieve(TEST_UUID).then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.portingOrders.retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('listExceptionTypes', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('code');
      expect(response.data[0]).to.have.property('description');
    }

    it('Sends the correct request', function() {
      return telnyx.portingOrders.listExceptionTypes().then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.portingOrders.listExceptionTypes(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('listActivationJobs', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('status');
      expect(response.data[0]).to.have.include({record_type: 'porting_activation_job'});
    }

    it('Sends the correct request', function() {
      return telnyx.portingOrders.listActivationJobs(TEST_UUID).then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.portingOrders.listActivationJobs(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe.skip('cancelOrder', function() {
    it('Sends the correct request', function() {
      return telnyx.portingOrders.cancelOrder(TEST_UUID).then(responseFn);
    })
  });

  describe('listAllowedFocWindows', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('started_at');
      expect(response.data[0]).to.have.property('ended_at');
      expect(response.data[0]).to.have.include({record_type: 'porting_order'});
    }

    it('Sends the correct request', function() {
      return telnyx.portingOrders.listAllowedFocWindows(TEST_UUID).then(responseFn);
    });
  });

  describe('retrieveLoaTemplate', function() {
    function responseFn(response) {
      expect(response.data).to.not.be.null
    }

    it('Sends the correct request', function() {
      return telnyx.portingOrders.retrieveLoaTemplate(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.portingOrders.retrieveLoaTemplate(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe.skip('confirmOrder', function() {
    it('Sends the correct request', function() {
      return telnyx.portingOrders.confirmOrder(TEST_UUID).then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.portingOrders.confirmOrder(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('update', function() {
    const INVOICE_ID = '35146afd-df93-4963-b1e9-1a085e2ae875';

    it('Sends the correct request', function() {
      return telnyx.portingOrders.create(newPortingOrderParams)
        .then(function(response) {
          const po = response.data;
          return po.update({documents: {invoice: INVOICE_ID}})
            .then(responseFn);
        })
    });
    it('Sends the correct request [with specified auth]', function() {
      return telnyx.portingOrders.retrieve(TEST_UUID)
        .then(function(response) {
          const po = response.data;
          return po.update({documents: {invoice: INVOICE_ID}}, TEST_AUTH_KEY)
            .then(responseFn);
        })
    });
  });

  describe.skip('del', function() {
    it('Sends the correct request', function() {
      return telnyx.portingOrders.create(newPortingOrderParams)
        .then(function(response) {
          const po = response.data;
          return po.del()
            .then(responseFn);
        })
    });
    it('Sends the correct request [with specified auth]', function() {
      return telnyx.portingOrders.retrieve('id')
        .then(function(response) {
          const po = response.data;
          return po.del(TEST_AUTH_KEY)
            .then(responseFn);
        })
    });
  });
});
