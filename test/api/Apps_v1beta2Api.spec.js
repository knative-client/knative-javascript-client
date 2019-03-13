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
    instance = new KubernetesJsClient.Apps_v1beta2Api();
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

  describe('Apps_v1beta2Api', function() {
    describe('createNamespacedControllerRevision', function() {
      it('should call createNamespacedControllerRevision successfully', function(done) {
        //uncomment below and update the code to test createNamespacedControllerRevision
        //instance.createNamespacedControllerRevision(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createNamespacedDaemonSet', function() {
      it('should call createNamespacedDaemonSet successfully', function(done) {
        //uncomment below and update the code to test createNamespacedDaemonSet
        //instance.createNamespacedDaemonSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createNamespacedDeployment', function() {
      it('should call createNamespacedDeployment successfully', function(done) {
        //uncomment below and update the code to test createNamespacedDeployment
        //instance.createNamespacedDeployment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createNamespacedReplicaSet', function() {
      it('should call createNamespacedReplicaSet successfully', function(done) {
        //uncomment below and update the code to test createNamespacedReplicaSet
        //instance.createNamespacedReplicaSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createNamespacedStatefulSet', function() {
      it('should call createNamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test createNamespacedStatefulSet
        //instance.createNamespacedStatefulSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionNamespacedControllerRevision', function() {
      it('should call deleteCollectionNamespacedControllerRevision successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionNamespacedControllerRevision
        //instance.deleteCollectionNamespacedControllerRevision(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionNamespacedDaemonSet', function() {
      it('should call deleteCollectionNamespacedDaemonSet successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionNamespacedDaemonSet
        //instance.deleteCollectionNamespacedDaemonSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionNamespacedDeployment', function() {
      it('should call deleteCollectionNamespacedDeployment successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionNamespacedDeployment
        //instance.deleteCollectionNamespacedDeployment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionNamespacedReplicaSet', function() {
      it('should call deleteCollectionNamespacedReplicaSet successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionNamespacedReplicaSet
        //instance.deleteCollectionNamespacedReplicaSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCollectionNamespacedStatefulSet', function() {
      it('should call deleteCollectionNamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionNamespacedStatefulSet
        //instance.deleteCollectionNamespacedStatefulSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNamespacedControllerRevision', function() {
      it('should call deleteNamespacedControllerRevision successfully', function(done) {
        //uncomment below and update the code to test deleteNamespacedControllerRevision
        //instance.deleteNamespacedControllerRevision(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNamespacedDaemonSet', function() {
      it('should call deleteNamespacedDaemonSet successfully', function(done) {
        //uncomment below and update the code to test deleteNamespacedDaemonSet
        //instance.deleteNamespacedDaemonSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNamespacedDeployment', function() {
      it('should call deleteNamespacedDeployment successfully', function(done) {
        //uncomment below and update the code to test deleteNamespacedDeployment
        //instance.deleteNamespacedDeployment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNamespacedReplicaSet', function() {
      it('should call deleteNamespacedReplicaSet successfully', function(done) {
        //uncomment below and update the code to test deleteNamespacedReplicaSet
        //instance.deleteNamespacedReplicaSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNamespacedStatefulSet', function() {
      it('should call deleteNamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test deleteNamespacedStatefulSet
        //instance.deleteNamespacedStatefulSet(function(error) {
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
    describe('listControllerRevisionForAllNamespaces', function() {
      it('should call listControllerRevisionForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listControllerRevisionForAllNamespaces
        //instance.listControllerRevisionForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listDaemonSetForAllNamespaces', function() {
      it('should call listDaemonSetForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listDaemonSetForAllNamespaces
        //instance.listDaemonSetForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listDeploymentForAllNamespaces', function() {
      it('should call listDeploymentForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listDeploymentForAllNamespaces
        //instance.listDeploymentForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNamespacedControllerRevision', function() {
      it('should call listNamespacedControllerRevision successfully', function(done) {
        //uncomment below and update the code to test listNamespacedControllerRevision
        //instance.listNamespacedControllerRevision(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNamespacedDaemonSet', function() {
      it('should call listNamespacedDaemonSet successfully', function(done) {
        //uncomment below and update the code to test listNamespacedDaemonSet
        //instance.listNamespacedDaemonSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNamespacedDeployment', function() {
      it('should call listNamespacedDeployment successfully', function(done) {
        //uncomment below and update the code to test listNamespacedDeployment
        //instance.listNamespacedDeployment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNamespacedReplicaSet', function() {
      it('should call listNamespacedReplicaSet successfully', function(done) {
        //uncomment below and update the code to test listNamespacedReplicaSet
        //instance.listNamespacedReplicaSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNamespacedStatefulSet', function() {
      it('should call listNamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test listNamespacedStatefulSet
        //instance.listNamespacedStatefulSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listReplicaSetForAllNamespaces', function() {
      it('should call listReplicaSetForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listReplicaSetForAllNamespaces
        //instance.listReplicaSetForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listStatefulSetForAllNamespaces', function() {
      it('should call listStatefulSetForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listStatefulSetForAllNamespaces
        //instance.listStatefulSetForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedControllerRevision', function() {
      it('should call patchNamespacedControllerRevision successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedControllerRevision
        //instance.patchNamespacedControllerRevision(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedDaemonSet', function() {
      it('should call patchNamespacedDaemonSet successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedDaemonSet
        //instance.patchNamespacedDaemonSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedDaemonSetStatus', function() {
      it('should call patchNamespacedDaemonSetStatus successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedDaemonSetStatus
        //instance.patchNamespacedDaemonSetStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedDeployment', function() {
      it('should call patchNamespacedDeployment successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedDeployment
        //instance.patchNamespacedDeployment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedDeploymentScale', function() {
      it('should call patchNamespacedDeploymentScale successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedDeploymentScale
        //instance.patchNamespacedDeploymentScale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedDeploymentStatus', function() {
      it('should call patchNamespacedDeploymentStatus successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedDeploymentStatus
        //instance.patchNamespacedDeploymentStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedReplicaSet', function() {
      it('should call patchNamespacedReplicaSet successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedReplicaSet
        //instance.patchNamespacedReplicaSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedReplicaSetScale', function() {
      it('should call patchNamespacedReplicaSetScale successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedReplicaSetScale
        //instance.patchNamespacedReplicaSetScale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedReplicaSetStatus', function() {
      it('should call patchNamespacedReplicaSetStatus successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedReplicaSetStatus
        //instance.patchNamespacedReplicaSetStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedStatefulSet', function() {
      it('should call patchNamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedStatefulSet
        //instance.patchNamespacedStatefulSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedStatefulSetScale', function() {
      it('should call patchNamespacedStatefulSetScale successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedStatefulSetScale
        //instance.patchNamespacedStatefulSetScale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNamespacedStatefulSetStatus', function() {
      it('should call patchNamespacedStatefulSetStatus successfully', function(done) {
        //uncomment below and update the code to test patchNamespacedStatefulSetStatus
        //instance.patchNamespacedStatefulSetStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedControllerRevision', function() {
      it('should call readNamespacedControllerRevision successfully', function(done) {
        //uncomment below and update the code to test readNamespacedControllerRevision
        //instance.readNamespacedControllerRevision(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedDaemonSet', function() {
      it('should call readNamespacedDaemonSet successfully', function(done) {
        //uncomment below and update the code to test readNamespacedDaemonSet
        //instance.readNamespacedDaemonSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedDaemonSetStatus', function() {
      it('should call readNamespacedDaemonSetStatus successfully', function(done) {
        //uncomment below and update the code to test readNamespacedDaemonSetStatus
        //instance.readNamespacedDaemonSetStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedDeployment', function() {
      it('should call readNamespacedDeployment successfully', function(done) {
        //uncomment below and update the code to test readNamespacedDeployment
        //instance.readNamespacedDeployment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedDeploymentScale', function() {
      it('should call readNamespacedDeploymentScale successfully', function(done) {
        //uncomment below and update the code to test readNamespacedDeploymentScale
        //instance.readNamespacedDeploymentScale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedDeploymentStatus', function() {
      it('should call readNamespacedDeploymentStatus successfully', function(done) {
        //uncomment below and update the code to test readNamespacedDeploymentStatus
        //instance.readNamespacedDeploymentStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedReplicaSet', function() {
      it('should call readNamespacedReplicaSet successfully', function(done) {
        //uncomment below and update the code to test readNamespacedReplicaSet
        //instance.readNamespacedReplicaSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedReplicaSetScale', function() {
      it('should call readNamespacedReplicaSetScale successfully', function(done) {
        //uncomment below and update the code to test readNamespacedReplicaSetScale
        //instance.readNamespacedReplicaSetScale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedReplicaSetStatus', function() {
      it('should call readNamespacedReplicaSetStatus successfully', function(done) {
        //uncomment below and update the code to test readNamespacedReplicaSetStatus
        //instance.readNamespacedReplicaSetStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedStatefulSet', function() {
      it('should call readNamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test readNamespacedStatefulSet
        //instance.readNamespacedStatefulSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedStatefulSetScale', function() {
      it('should call readNamespacedStatefulSetScale successfully', function(done) {
        //uncomment below and update the code to test readNamespacedStatefulSetScale
        //instance.readNamespacedStatefulSetScale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNamespacedStatefulSetStatus', function() {
      it('should call readNamespacedStatefulSetStatus successfully', function(done) {
        //uncomment below and update the code to test readNamespacedStatefulSetStatus
        //instance.readNamespacedStatefulSetStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedControllerRevision', function() {
      it('should call replaceNamespacedControllerRevision successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedControllerRevision
        //instance.replaceNamespacedControllerRevision(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedDaemonSet', function() {
      it('should call replaceNamespacedDaemonSet successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedDaemonSet
        //instance.replaceNamespacedDaemonSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedDaemonSetStatus', function() {
      it('should call replaceNamespacedDaemonSetStatus successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedDaemonSetStatus
        //instance.replaceNamespacedDaemonSetStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedDeployment', function() {
      it('should call replaceNamespacedDeployment successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedDeployment
        //instance.replaceNamespacedDeployment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedDeploymentScale', function() {
      it('should call replaceNamespacedDeploymentScale successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedDeploymentScale
        //instance.replaceNamespacedDeploymentScale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedDeploymentStatus', function() {
      it('should call replaceNamespacedDeploymentStatus successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedDeploymentStatus
        //instance.replaceNamespacedDeploymentStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedReplicaSet', function() {
      it('should call replaceNamespacedReplicaSet successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedReplicaSet
        //instance.replaceNamespacedReplicaSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedReplicaSetScale', function() {
      it('should call replaceNamespacedReplicaSetScale successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedReplicaSetScale
        //instance.replaceNamespacedReplicaSetScale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedReplicaSetStatus', function() {
      it('should call replaceNamespacedReplicaSetStatus successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedReplicaSetStatus
        //instance.replaceNamespacedReplicaSetStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedStatefulSet', function() {
      it('should call replaceNamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedStatefulSet
        //instance.replaceNamespacedStatefulSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedStatefulSetScale', function() {
      it('should call replaceNamespacedStatefulSetScale successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedStatefulSetScale
        //instance.replaceNamespacedStatefulSetScale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNamespacedStatefulSetStatus', function() {
      it('should call replaceNamespacedStatefulSetStatus successfully', function(done) {
        //uncomment below and update the code to test replaceNamespacedStatefulSetStatus
        //instance.replaceNamespacedStatefulSetStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
