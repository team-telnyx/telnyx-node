'use strict';

require('../testUtils');

var Error = require('../lib/Error');
var expect = require('chai').expect;

describe('Error', function() {
  it('Populates with type and message params', function() {
    var e = new Error('FooError', 'Foo happened');
    expect(e).to.have.property('type', 'FooError');
    expect(e).to.have.property('message', 'Foo happened');
    expect(e).to.have.property('stack');
  });

  describe('TelnyxError', function() {
    it('Pulls in headers', function() {
      var headers = {'Request-Id': '123'};
      var e = Error.TelnyxError.generate({errors: [{title: 'A terrible mistake has been made'}], headers: headers, statusCode: 400});
      expect(e).to.have.property('headers', headers);
    });

    it('Pulls in request IDs', function() {
      var e = Error.TelnyxError.generate({errors: [{title: 'Oops'}], requestId: 'foo', statusCode: 400});
      expect(e).to.have.property('requestId', 'foo');
    });

    it('Pulls in HTTP status code', function() {
      var e = Error.TelnyxError.generate({errors: [{type: 'Oh noes'}], statusCode: 400});
      expect(e).to.have.property('statusCode', 400);
    });

    it('Builds errors based on status code', function() {
      expect(Error.TelnyxError.generate({errors: [{title: 'Oops'}], statusCode: 400})).to.be.instanceOf(
        Error.TelnyxInvalidRequestError
      );
      expect(Error.TelnyxError.generate({errors: [{title: 'Oops'}], statusCode: 401})).to.be.instanceOf(
        Error.TelnyxAuthenticationError
      );
      expect(Error.TelnyxError.generate({errors: [{title: 'Oops'}], statusCode: 403})).to.be.instanceOf(
        Error.TelnyxPermissionError
      );
      // expect(Error.TelnyxError.generate({errors: [{title: 'Oops'}], statusCode: 404})).to.be.instanceOf(
      //   Error.ResourceNotFoundError
      // );
    });
  });
});
