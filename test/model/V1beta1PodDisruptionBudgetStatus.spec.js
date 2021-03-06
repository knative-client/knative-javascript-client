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
    instance = new KubernetesJsClient.V1beta1PodDisruptionBudgetStatus();
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

  describe('V1beta1PodDisruptionBudgetStatus', function() {
    it('should create an instance of V1beta1PodDisruptionBudgetStatus', function() {
      // uncomment below and update the code to test V1beta1PodDisruptionBudgetStatus
      //var instane = new KubernetesJsClient.V1beta1PodDisruptionBudgetStatus();
      //expect(instance).to.be.a(KubernetesJsClient.V1beta1PodDisruptionBudgetStatus);
    });

    it('should have the property currentHealthy (base name: "currentHealthy")', function() {
      // uncomment below and update the code to test the property currentHealthy
      //var instane = new KubernetesJsClient.V1beta1PodDisruptionBudgetStatus();
      //expect(instance).to.be();
    });

    it('should have the property desiredHealthy (base name: "desiredHealthy")', function() {
      // uncomment below and update the code to test the property desiredHealthy
      //var instane = new KubernetesJsClient.V1beta1PodDisruptionBudgetStatus();
      //expect(instance).to.be();
    });

    it('should have the property disruptedPods (base name: "disruptedPods")', function() {
      // uncomment below and update the code to test the property disruptedPods
      //var instane = new KubernetesJsClient.V1beta1PodDisruptionBudgetStatus();
      //expect(instance).to.be();
    });

    it('should have the property disruptionsAllowed (base name: "disruptionsAllowed")', function() {
      // uncomment below and update the code to test the property disruptionsAllowed
      //var instane = new KubernetesJsClient.V1beta1PodDisruptionBudgetStatus();
      //expect(instance).to.be();
    });

    it('should have the property expectedPods (base name: "expectedPods")', function() {
      // uncomment below and update the code to test the property expectedPods
      //var instane = new KubernetesJsClient.V1beta1PodDisruptionBudgetStatus();
      //expect(instance).to.be();
    });

    it('should have the property observedGeneration (base name: "observedGeneration")', function() {
      // uncomment below and update the code to test the property observedGeneration
      //var instane = new KubernetesJsClient.V1beta1PodDisruptionBudgetStatus();
      //expect(instance).to.be();
    });

  });

}));
