'use strict';

var utils = require('./utils');

module.exports = _Error;

/**
 * Generic Error klass to wrap any errors returned by telnyx-node
 */
function _Error(raw) {
  this.populate.apply(this, arguments);
  this.stack = (new Error(this.message)).stack;
}

function buildMessage(raw) {
  return `${statusString(raw)}${idString(raw)}${message(raw.errors)}${otherErrorsMessage(raw.errors)}`;
}

function otherErrorsMessage(errors) {
  var count = errorCount(errors);
  if (count > 2) {
    return ` plus ${count} other errors.`;
  } else if (count == 2) {
    return ' plus 1 other error.';
  }

  return '';
}

function errorCount(errors) {
  if (Array.isArray(errors)) {
    return errors.len;
  } else {
    return 1;
  }
}

function message(errors) {
  if (Array.isArray(errors)) {
    return errors[0] && (` ${errors[0].title || errors[0].detail}`);
  } else {
    return ` ${errors}`;
  }
}

function statusString(raw) {
  if (raw.statusCode) {
    return `(Status ${raw.statusCode})`;
  } else {
    return '';
  }
}

function idString(raw) {
  if (raw.requestId) {
    return ` (Request ${raw.requestId})`;
  } else {
    return '';
  }
}

// Extend Native Error
_Error.prototype = Object.create(Error.prototype);

_Error.prototype.type = 'GenericError';
_Error.prototype.populate = function(type, message) {
  this.type = type;
  this.message = message;
};

_Error.extend = utils.protoExtend;

/**
 * Create subclass of internal Error klass
 * (Specifically for errors returned from Telnyx's REST API)
 */
var TelnyxError = _Error.TelnyxError = _Error.extend({
  type: 'TelnyxError',
  populate: function(raw) {
    var message;
    if (raw.message) {
      message = raw.message;
    } else {
      message = buildMessage(raw);
    }
    // Move from prototype def (so it appears in stringified obj)
    this.type = this.type;
    this.stack = (new Error(message)).stack;
    this.message = message;
    this.raw = raw;
    this.headers = raw.headers;
    this.requestId = raw.requestId;
    this.statusCode = raw.statusCode;
    this.responseBody = raw.responseBody;
  },
});

/**
 * Helper factory which takes raw stripe errors and outputs wrapping instances
 */
TelnyxError.generate = function(rawTelnyxError) {
  switch (rawTelnyxError.statusCode) {
  case 400:
    return new _Error.TelnyxInvalidRequestError(rawTelnyxError);
  case 401:
    return new _Error.TelnyxAuthenticationError(rawTelnyxError);
  case 403:
    return new _Error.TelnyxPermissionError(rawTelnyxError);
  case 404:
    return new _Error.TelnyxResourceNotFoundError(rawTelnyxError);
  case 405:
    return new _Error.TelnyxMethodNotSupportedError(rawTelnyxError);
  case 408:
    return new _Error.TelnyxTimeoutError(rawTelnyxError);
  case 415:
    return new _Error.TelnyxUnsupportedMediaTypeError(rawTelnyxError);
  case 422:
    return new _Error.TelnyxInvalidParametersError(rawTelnyxError);
  case 429:
    return new _Error.TelnyxRateLimitError(rawTelnyxError);
  case 500:
    return new _Error.TelnyxAPIError(rawTelnyxError);
  case 503:
    return new _Error.TelnyxServiceUnavailableError(rawTelnyxError);
  }
  return new _Error('Generic', 'Unknown Error');
};

// Specific Telnyx Error types:
_Error.TelnyxInvalidRequestError = TelnyxError.extend({type: 'TelnyxInvalidRequestError'}); // 400
_Error.TelnyxAuthenticationError = TelnyxError.extend({type: 'TelnyxAuthenticationError'}); // 401
_Error.TelnyxPermissionError = TelnyxError.extend({type: 'TelnyxPermissionError'}); // 403
_Error.TelnyxResourceNotFoundError = TelnyxError.extend({type: 'TelnyxResourceNotFoundError'}); // 404
_Error.TelnyxMethodNotSupportedError = TelnyxError.extend({type: 'TelnyxMethodNotSupportedError'}); // 405
_Error.TelnyxTimeoutError = TelnyxError.extend({type: 'TelnyxTimeoutError'}); // 408
_Error.TelnyxUnsupportedMediaTypeError = TelnyxError.extend({type: 'TelnyxUnsupportedMediaTypeError'}); // 415
_Error.TelnyxInvalidParametersError = TelnyxError.extend({type: 'TelnyxInvalidParametersError'}); // 422
_Error.TelnyxRateLimitError = TelnyxError.extend({type: 'TelnyxRateLimitError'}); // 429
_Error.TelnyxAPIError = TelnyxError.extend({type: 'TelnyxAPIError'}); // 500
_Error.TelnyxServiceUnavailableError = TelnyxError.extend({type: 'TelnyxServiceUnavailableError'}); // 503

_Error.TelnyxConnectionError = TelnyxError.extend({type: 'TelnyxConnectionError'});
_Error.TelnyxSignatureVerificationError = TelnyxError.extend({type: 'TelnyxSignatureVerificationError'});
