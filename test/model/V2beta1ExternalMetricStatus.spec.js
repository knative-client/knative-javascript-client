/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.15.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
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
    factory(root.expect, root.KubernetesJsClient);
  }
}(this, function(expect, KubernetesJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KubernetesJsClient.V2beta1ExternalMetricStatus();
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

  describe('V2beta1ExternalMetricStatus', function() {
    it('should create an instance of V2beta1ExternalMetricStatus', function() {
      // uncomment below and update the code to test V2beta1ExternalMetricStatus
      //var instane = new KubernetesJsClient.V2beta1ExternalMetricStatus();
      //expect(instance).to.be.a(KubernetesJsClient.V2beta1ExternalMetricStatus);
    });

    it('should have the property currentAverageValue (base name: "currentAverageValue")', function() {
      // uncomment below and update the code to test the property currentAverageValue
      //var instane = new KubernetesJsClient.V2beta1ExternalMetricStatus();
      //expect(instance).to.be();
    });

    it('should have the property currentValue (base name: "currentValue")', function() {
      // uncomment below and update the code to test the property currentValue
      //var instane = new KubernetesJsClient.V2beta1ExternalMetricStatus();
      //expect(instance).to.be();
    });

    it('should have the property metricName (base name: "metricName")', function() {
      // uncomment below and update the code to test the property metricName
      //var instane = new KubernetesJsClient.V2beta1ExternalMetricStatus();
      //expect(instance).to.be();
    });

    it('should have the property metricSelector (base name: "metricSelector")', function() {
      // uncomment below and update the code to test the property metricSelector
      //var instane = new KubernetesJsClient.V2beta1ExternalMetricStatus();
      //expect(instance).to.be();
    });

  });

}));
