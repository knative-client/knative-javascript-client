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
    instance = new KubernetesJsClient.V1beta1CertificateSigningRequestSpec();
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

  describe('V1beta1CertificateSigningRequestSpec', function() {
    it('should create an instance of V1beta1CertificateSigningRequestSpec', function() {
      // uncomment below and update the code to test V1beta1CertificateSigningRequestSpec
      //var instane = new KubernetesJsClient.V1beta1CertificateSigningRequestSpec();
      //expect(instance).to.be.a(KubernetesJsClient.V1beta1CertificateSigningRequestSpec);
    });

    it('should have the property extra (base name: "extra")', function() {
      // uncomment below and update the code to test the property extra
      //var instane = new KubernetesJsClient.V1beta1CertificateSigningRequestSpec();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instane = new KubernetesJsClient.V1beta1CertificateSigningRequestSpec();
      //expect(instance).to.be();
    });

    it('should have the property request (base name: "request")', function() {
      // uncomment below and update the code to test the property request
      //var instane = new KubernetesJsClient.V1beta1CertificateSigningRequestSpec();
      //expect(instance).to.be();
    });

    it('should have the property uid (base name: "uid")', function() {
      // uncomment below and update the code to test the property uid
      //var instane = new KubernetesJsClient.V1beta1CertificateSigningRequestSpec();
      //expect(instance).to.be();
    });

    it('should have the property usages (base name: "usages")', function() {
      // uncomment below and update the code to test the property usages
      //var instane = new KubernetesJsClient.V1beta1CertificateSigningRequestSpec();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new KubernetesJsClient.V1beta1CertificateSigningRequestSpec();
      //expect(instance).to.be();
    });

  });

}));
