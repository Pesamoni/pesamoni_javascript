/**
 * Pesaway Pesamoni API Documentation
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Pesamoni);
  }
}(this, function(expect, Pesamoni) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Pesamoni.InlineResponse200();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse200', function() {
    it('should create an instance of InlineResponse200', function() {
      // uncomment below and update the code to test InlineResponse200
      //var instance = new Pesamoni.InlineResponse200();
      //expect(instance).to.be.a(Pesamoni.InlineResponse200);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new Pesamoni.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new Pesamoni.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new Pesamoni.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property mobile (base name: "mobile")', function() {
      // uncomment below and update the code to test the property mobile
      //var instance = new Pesamoni.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property statuscode (base name: "statuscode")', function() {
      // uncomment below and update the code to test the property statuscode
      //var instance = new Pesamoni.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property transactionType (base name: "transaction_type")', function() {
      // uncomment below and update the code to test the property transactionType
      //var instance = new Pesamoni.InlineResponse200();
      //expect(instance).to.be();
    });

  });

}));
