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
    instance = new KubernetesJsClient.Batch_v1beta1Api();
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

  describe('Batch_v1beta1Api', function() {
    describe('createNamespacedCronJob', function() {
      it('should call createNamespacedCronJob successfully', function(done) {
        //uncomment below and update the code to test createNamespacedCronJob
        //instance.createNamespacedCronJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionNamespacedCronJob', function() {
      it('should call deleteCollectionNamespacedCronJob successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionNamespacedCronJob
        //instance.deleteCollectionNamespacedCronJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNamespacedCronJob', function() {
      it('should call deleteNamespacedCronJob successfully', function(done) {
        //uncomment below and update the code to test deleteNamespacedCronJob
        //instance.deleteNamespacedCronJob(function(error) {
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
    describe('listCronJobForAllNamespaces', function() {
      it('should call listCronJobForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listCronJobForAllNamespaces
        //instance.listCronJobForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNamespacedCronJob', function() {
      it('should call listNamespacedCronJob successfully', function(done) {
        //uncomment below and update the code to test listNamespacedCronJob
        //instance.listNamespacedCronJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedCronJob', function() {
      it('should call patchNamespacedCronJob successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedCronJob
        //instance.patchNamespacedCronJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedCronJobStatus', function() {
      it('should call patchNamespacedCronJobStatus successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedCronJobStatus
        //instance.patchNamespacedCronJobStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedCronJob', function() {
      it('should call readNamespacedCronJob successfully', function(done) {
        //uncomment below and update the code to test readNamespacedCronJob
        //instance.readNamespacedCronJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedCronJobStatus', function() {
      it('should call readNamespacedCronJobStatus successfully', function(done) {
        //uncomment below and update the code to test readNamespacedCronJobStatus
        //instance.readNamespacedCronJobStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedCronJob', function() {
      it('should call replaceNamespacedCronJob successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedCronJob
        //instance.replaceNamespacedCronJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedCronJobStatus', function() {
      it('should call replaceNamespacedCronJobStatus successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedCronJobStatus
        //instance.replaceNamespacedCronJobStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
