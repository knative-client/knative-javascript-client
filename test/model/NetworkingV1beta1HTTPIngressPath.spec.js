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
    instance = new KubernetesJsClient.NetworkingV1beta1HTTPIngressPath();
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

  describe('NetworkingV1beta1HTTPIngressPath', function() {
    it('should create an instance of NetworkingV1beta1HTTPIngressPath', function() {
      // uncomment below and update the code to test NetworkingV1beta1HTTPIngressPath
      //var instane = new KubernetesJsClient.NetworkingV1beta1HTTPIngressPath();
      //expect(instance).to.be.a(KubernetesJsClient.NetworkingV1beta1HTTPIngressPath);
    });

    it('should have the property backend (base name: "backend")', function() {
      // uncomment below and update the code to test the property backend
      //var instane = new KubernetesJsClient.NetworkingV1beta1HTTPIngressPath();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instane = new KubernetesJsClient.NetworkingV1beta1HTTPIngressPath();
      //expect(instance).to.be();
    });

  });

}));
