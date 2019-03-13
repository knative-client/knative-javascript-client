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
    instance = new KubernetesJsClient.V1ReplicaSetStatus();
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

  describe('V1ReplicaSetStatus', function() {
    it('should create an instance of V1ReplicaSetStatus', function() {
      // uncomment below and update the code to test V1ReplicaSetStatus
      //var instane = new KubernetesJsClient.V1ReplicaSetStatus();
      //expect(instance).to.be.a(KubernetesJsClient.V1ReplicaSetStatus);
    });

    it('should have the property availableReplicas (base name: "availableReplicas")', function() {
      // uncomment below and update the code to test the property availableReplicas
      //var instane = new KubernetesJsClient.V1ReplicaSetStatus();
      //expect(instance).to.be();
    });

    it('should have the property conditions (base name: "conditions")', function() {
      // uncomment below and update the code to test the property conditions
      //var instane = new KubernetesJsClient.V1ReplicaSetStatus();
      //expect(instance).to.be();
    });

    it('should have the property fullyLabeledReplicas (base name: "fullyLabeledReplicas")', function() {
      // uncomment below and update the code to test the property fullyLabeledReplicas
      //var instane = new KubernetesJsClient.V1ReplicaSetStatus();
      //expect(instance).to.be();
    });

    it('should have the property observedGeneration (base name: "observedGeneration")', function() {
      // uncomment below and update the code to test the property observedGeneration
      //var instane = new KubernetesJsClient.V1ReplicaSetStatus();
      //expect(instance).to.be();
    });

    it('should have the property readyReplicas (base name: "readyReplicas")', function() {
      // uncomment below and update the code to test the property readyReplicas
      //var instane = new KubernetesJsClient.V1ReplicaSetStatus();
      //expect(instance).to.be();
    });

    it('should have the property replicas (base name: "replicas")', function() {
      // uncomment below and update the code to test the property replicas
      //var instane = new KubernetesJsClient.V1ReplicaSetStatus();
      //expect(instance).to.be();
    });

  });

}));
