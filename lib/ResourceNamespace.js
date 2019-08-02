'use strict';

// ResourceNamespace allows you to create nested resources, i.e. `telnyx.issuing.cards`.
// It also works recursively, so you could do i.e. `telnyx.billing.invoicing.pay`.

function ResourceNamespace(telnyx, resources) {
  for (var name in resources) {
    var camelCaseName = name[0].toLowerCase() + name.substring(1);

    var resource = new resources[name](telnyx);

    this[camelCaseName] = resource;
  }
}

module.exports = function(namespace, resources) {
  return function (telnyx) {
    return new ResourceNamespace(telnyx, resources);
  };
};

module.exports.ResourceNamespace = ResourceNamespace;
