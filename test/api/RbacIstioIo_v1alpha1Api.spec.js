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
    instance = new KubernetesJsClient.RbacIstioIo_v1alpha1Api();
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

  describe('RbacIstioIo_v1alpha1Api', function() {
    describe('createNamespacedRbacConfig', function() {
      it('should call createNamespacedRbacConfig successfully', function(done) {
        //uncomment below and update the code to test createNamespacedRbacConfig
        //instance.createNamespacedRbacConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createNamespacedServiceRole', function() {
      it('should call createNamespacedServiceRole successfully', function(done) {
        //uncomment below and update the code to test createNamespacedServiceRole
        //instance.createNamespacedServiceRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createNamespacedServiceRoleBinding', function() {
      it('should call createNamespacedServiceRoleBinding successfully', function(done) {
        //uncomment below and update the code to test createNamespacedServiceRoleBinding
        //instance.createNamespacedServiceRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionNamespacedRbacConfig', function() {
      it('should call deleteCollectionNamespacedRbacConfig successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionNamespacedRbacConfig
        //instance.deleteCollectionNamespacedRbacConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionNamespacedServiceRole', function() {
      it('should call deleteCollectionNamespacedServiceRole successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionNamespacedServiceRole
        //instance.deleteCollectionNamespacedServiceRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionNamespacedServiceRoleBinding', function() {
      it('should call deleteCollectionNamespacedServiceRoleBinding successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionNamespacedServiceRoleBinding
        //instance.deleteCollectionNamespacedServiceRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNamespacedRbacConfig', function() {
      it('should call deleteNamespacedRbacConfig successfully', function(done) {
        //uncomment below and update the code to test deleteNamespacedRbacConfig
        //instance.deleteNamespacedRbacConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNamespacedServiceRole', function() {
      it('should call deleteNamespacedServiceRole successfully', function(done) {
        //uncomment below and update the code to test deleteNamespacedServiceRole
        //instance.deleteNamespacedServiceRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNamespacedServiceRoleBinding', function() {
      it('should call deleteNamespacedServiceRoleBinding successfully', function(done) {
        //uncomment below and update the code to test deleteNamespacedServiceRoleBinding
        //instance.deleteNamespacedServiceRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNamespacedRbacConfig', function() {
      it('should call listNamespacedRbacConfig successfully', function(done) {
        //uncomment below and update the code to test listNamespacedRbacConfig
        //instance.listNamespacedRbacConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNamespacedServiceRole', function() {
      it('should call listNamespacedServiceRole successfully', function(done) {
        //uncomment below and update the code to test listNamespacedServiceRole
        //instance.listNamespacedServiceRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNamespacedServiceRoleBinding', function() {
      it('should call listNamespacedServiceRoleBinding successfully', function(done) {
        //uncomment below and update the code to test listNamespacedServiceRoleBinding
        //instance.listNamespacedServiceRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listRbacConfigForAllNamespaces', function() {
      it('should call listRbacConfigForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listRbacConfigForAllNamespaces
        //instance.listRbacConfigForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listServiceRoleBindingForAllNamespaces', function() {
      it('should call listServiceRoleBindingForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listServiceRoleBindingForAllNamespaces
        //instance.listServiceRoleBindingForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listServiceRoleForAllNamespaces', function() {
      it('should call listServiceRoleForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listServiceRoleForAllNamespaces
        //instance.listServiceRoleForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedRbacConfig', function() {
      it('should call patchNamespacedRbacConfig successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedRbacConfig
        //instance.patchNamespacedRbacConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedServiceRole', function() {
      it('should call patchNamespacedServiceRole successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedServiceRole
        //instance.patchNamespacedServiceRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedServiceRoleBinding', function() {
      it('should call patchNamespacedServiceRoleBinding successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedServiceRoleBinding
        //instance.patchNamespacedServiceRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedRbacConfig', function() {
      it('should call readNamespacedRbacConfig successfully', function(done) {
        //uncomment below and update the code to test readNamespacedRbacConfig
        //instance.readNamespacedRbacConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedServiceRole', function() {
      it('should call readNamespacedServiceRole successfully', function(done) {
        //uncomment below and update the code to test readNamespacedServiceRole
        //instance.readNamespacedServiceRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedServiceRoleBinding', function() {
      it('should call readNamespacedServiceRoleBinding successfully', function(done) {
        //uncomment below and update the code to test readNamespacedServiceRoleBinding
        //instance.readNamespacedServiceRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedRbacConfig', function() {
      it('should call replaceNamespacedRbacConfig successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedRbacConfig
        //instance.replaceNamespacedRbacConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedServiceRole', function() {
      it('should call replaceNamespacedServiceRole successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedServiceRole
        //instance.replaceNamespacedServiceRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedServiceRoleBinding', function() {
      it('should call replaceNamespacedServiceRoleBinding successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedServiceRoleBinding
        //instance.replaceNamespacedServiceRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
