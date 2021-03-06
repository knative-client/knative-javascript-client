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
    instance = new KubernetesJsClient.V1Container();
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

  describe('V1Container', function() {
    it('should create an instance of V1Container', function() {
      // uncomment below and update the code to test V1Container
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be.a(KubernetesJsClient.V1Container);
    });

    it('should have the property args (base name: "args")', function() {
      // uncomment below and update the code to test the property args
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property command (base name: "command")', function() {
      // uncomment below and update the code to test the property command
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property env (base name: "env")', function() {
      // uncomment below and update the code to test the property env
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property envFrom (base name: "envFrom")', function() {
      // uncomment below and update the code to test the property envFrom
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property imagePullPolicy (base name: "imagePullPolicy")', function() {
      // uncomment below and update the code to test the property imagePullPolicy
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property lifecycle (base name: "lifecycle")', function() {
      // uncomment below and update the code to test the property lifecycle
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property livenessProbe (base name: "livenessProbe")', function() {
      // uncomment below and update the code to test the property livenessProbe
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property ports (base name: "ports")', function() {
      // uncomment below and update the code to test the property ports
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property readinessProbe (base name: "readinessProbe")', function() {
      // uncomment below and update the code to test the property readinessProbe
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property resources (base name: "resources")', function() {
      // uncomment below and update the code to test the property resources
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property securityContext (base name: "securityContext")', function() {
      // uncomment below and update the code to test the property securityContext
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property stdin (base name: "stdin")', function() {
      // uncomment below and update the code to test the property stdin
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property stdinOnce (base name: "stdinOnce")', function() {
      // uncomment below and update the code to test the property stdinOnce
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property terminationMessagePath (base name: "terminationMessagePath")', function() {
      // uncomment below and update the code to test the property terminationMessagePath
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property terminationMessagePolicy (base name: "terminationMessagePolicy")', function() {
      // uncomment below and update the code to test the property terminationMessagePolicy
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property tty (base name: "tty")', function() {
      // uncomment below and update the code to test the property tty
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property volumeDevices (base name: "volumeDevices")', function() {
      // uncomment below and update the code to test the property volumeDevices
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property volumeMounts (base name: "volumeMounts")', function() {
      // uncomment below and update the code to test the property volumeMounts
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

    it('should have the property workingDir (base name: "workingDir")', function() {
      // uncomment below and update the code to test the property workingDir
      //var instane = new KubernetesJsClient.V1Container();
      //expect(instance).to.be();
    });

  });

}));
