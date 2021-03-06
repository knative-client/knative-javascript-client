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
    instance = new KubernetesJsClient.Admissionregistration_v1beta1Api();
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

  describe('Admissionregistration_v1beta1Api', function() {
    describe('createMutatingWebhookConfiguration', function() {
      it('should call createMutatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test createMutatingWebhookConfiguration
        //instance.createMutatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createValidatingWebhookConfiguration', function() {
      it('should call createValidatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test createValidatingWebhookConfiguration
        //instance.createValidatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionMutatingWebhookConfiguration', function() {
      it('should call deleteCollectionMutatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionMutatingWebhookConfiguration
        //instance.deleteCollectionMutatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionValidatingWebhookConfiguration', function() {
      it('should call deleteCollectionValidatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionValidatingWebhookConfiguration
        //instance.deleteCollectionValidatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMutatingWebhookConfiguration', function() {
      it('should call deleteMutatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test deleteMutatingWebhookConfiguration
        //instance.deleteMutatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteValidatingWebhookConfiguration', function() {
      it('should call deleteValidatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test deleteValidatingWebhookConfiguration
        //instance.deleteValidatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAPIResources', function() {
      it('should call getAPIResources successfully', function(done) {
        //uncomment below and update the code to test getAPIResources
        //instance.getAPIResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listMutatingWebhookConfiguration', function() {
      it('should call listMutatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test listMutatingWebhookConfiguration
        //instance.listMutatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listValidatingWebhookConfiguration', function() {
      it('should call listValidatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test listValidatingWebhookConfiguration
        //instance.listValidatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchMutatingWebhookConfiguration', function() {
      it('should call patchMutatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test patchMutatingWebhookConfiguration
        //instance.patchMutatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchValidatingWebhookConfiguration', function() {
      it('should call patchValidatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test patchValidatingWebhookConfiguration
        //instance.patchValidatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readMutatingWebhookConfiguration', function() {
      it('should call readMutatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test readMutatingWebhookConfiguration
        //instance.readMutatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readValidatingWebhookConfiguration', function() {
      it('should call readValidatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test readValidatingWebhookConfiguration
        //instance.readValidatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceMutatingWebhookConfiguration', function() {
      it('should call replaceMutatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test replaceMutatingWebhookConfiguration
        //instance.replaceMutatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceValidatingWebhookConfiguration', function() {
      it('should call replaceValidatingWebhookConfiguration successfully', function(done) {
        //uncomment below and update the code to test replaceValidatingWebhookConfiguration
        //instance.replaceValidatingWebhookConfiguration(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
