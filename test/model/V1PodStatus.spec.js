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
    instance = new KubernetesJsClient.V1PodStatus();
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

  describe('V1PodStatus', function() {
    it('should create an instance of V1PodStatus', function() {
      // uncomment below and update the code to test V1PodStatus
      //var instane = new KubernetesJsClient.V1PodStatus();
      //expect(instance).to.be.a(KubernetesJsClient.V1PodStatus);
    });

    it('should have the property conditions (base name: "conditions")', function() {
      // uncomment below and update the code to test the property conditions
      //var instane = new KubernetesJsClient.V1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property containerStatuses (base name: "containerStatuses")', function() {
      // uncomment below and update the code to test the property containerStatuses
      //var instane = new KubernetesJsClient.V1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property hostIP (base name: "hostIP")', function() {
      // uncomment below and update the code to test the property hostIP
      //var instane = new KubernetesJsClient.V1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property initContainerStatuses (base name: "initContainerStatuses")', function() {
      // uncomment below and update the code to test the property initContainerStatuses
      //var instane = new KubernetesJsClient.V1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new KubernetesJsClient.V1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property nominatedNodeName (base name: "nominatedNodeName")', function() {
      // uncomment below and update the code to test the property nominatedNodeName
      //var instane = new KubernetesJsClient.V1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property phase (base name: "phase")', function() {
      // uncomment below and update the code to test the property phase
      //var instane = new KubernetesJsClient.V1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property podIP (base name: "podIP")', function() {
      // uncomment below and update the code to test the property podIP
      //var instane = new KubernetesJsClient.V1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property qosClass (base name: "qosClass")', function() {
      // uncomment below and update the code to test the property qosClass
      //var instane = new KubernetesJsClient.V1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instane = new KubernetesJsClient.V1PodStatus();
      //expect(instance).to.be();
    });

    it('should have the property startTime (base name: "startTime")', function() {
      // uncomment below and update the code to test the property startTime
      //var instane = new KubernetesJsClient.V1PodStatus();
      //expect(instance).to.be();
    });

  });

}));
