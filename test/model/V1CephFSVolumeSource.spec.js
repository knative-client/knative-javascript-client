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
    instance = new KubernetesJsClient.V1CephFSVolumeSource();
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

  describe('V1CephFSVolumeSource', function() {
    it('should create an instance of V1CephFSVolumeSource', function() {
      // uncomment below and update the code to test V1CephFSVolumeSource
      //var instane = new KubernetesJsClient.V1CephFSVolumeSource();
      //expect(instance).to.be.a(KubernetesJsClient.V1CephFSVolumeSource);
    });

    it('should have the property monitors (base name: "monitors")', function() {
      // uncomment below and update the code to test the property monitors
      //var instane = new KubernetesJsClient.V1CephFSVolumeSource();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instane = new KubernetesJsClient.V1CephFSVolumeSource();
      //expect(instance).to.be();
    });

    it('should have the property readOnly (base name: "readOnly")', function() {
      // uncomment below and update the code to test the property readOnly
      //var instane = new KubernetesJsClient.V1CephFSVolumeSource();
      //expect(instance).to.be();
    });

    it('should have the property secretFile (base name: "secretFile")', function() {
      // uncomment below and update the code to test the property secretFile
      //var instane = new KubernetesJsClient.V1CephFSVolumeSource();
      //expect(instance).to.be();
    });

    it('should have the property secretRef (base name: "secretRef")', function() {
      // uncomment below and update the code to test the property secretRef
      //var instane = new KubernetesJsClient.V1CephFSVolumeSource();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new KubernetesJsClient.V1CephFSVolumeSource();
      //expect(instance).to.be();
    });

  });

}));
