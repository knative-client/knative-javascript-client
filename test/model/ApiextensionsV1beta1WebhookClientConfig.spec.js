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
    instance = new KubernetesJsClient.ApiextensionsV1beta1WebhookClientConfig();
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

  describe('ApiextensionsV1beta1WebhookClientConfig', function() {
    it('should create an instance of ApiextensionsV1beta1WebhookClientConfig', function() {
      // uncomment below and update the code to test ApiextensionsV1beta1WebhookClientConfig
      //var instane = new KubernetesJsClient.ApiextensionsV1beta1WebhookClientConfig();
      //expect(instance).to.be.a(KubernetesJsClient.ApiextensionsV1beta1WebhookClientConfig);
    });

    it('should have the property caBundle (base name: "caBundle")', function() {
      // uncomment below and update the code to test the property caBundle
      //var instane = new KubernetesJsClient.ApiextensionsV1beta1WebhookClientConfig();
      //expect(instance).to.be();
    });

    it('should have the property service (base name: "service")', function() {
      // uncomment below and update the code to test the property service
      //var instane = new KubernetesJsClient.ApiextensionsV1beta1WebhookClientConfig();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new KubernetesJsClient.ApiextensionsV1beta1WebhookClientConfig();
      //expect(instance).to.be();
    });

  });

}));