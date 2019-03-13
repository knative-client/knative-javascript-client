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
    instance = new KubernetesJsClient.V1PersistentVolumeSpec();
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

  describe('V1PersistentVolumeSpec', function() {
    it('should create an instance of V1PersistentVolumeSpec', function() {
      // uncomment below and update the code to test V1PersistentVolumeSpec
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be.a(KubernetesJsClient.V1PersistentVolumeSpec);
    });

    it('should have the property accessModes (base name: "accessModes")', function() {
      // uncomment below and update the code to test the property accessModes
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property awsElasticBlockStore (base name: "awsElasticBlockStore")', function() {
      // uncomment below and update the code to test the property awsElasticBlockStore
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property azureDisk (base name: "azureDisk")', function() {
      // uncomment below and update the code to test the property azureDisk
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property azureFile (base name: "azureFile")', function() {
      // uncomment below and update the code to test the property azureFile
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property capacity (base name: "capacity")', function() {
      // uncomment below and update the code to test the property capacity
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property cephfs (base name: "cephfs")', function() {
      // uncomment below and update the code to test the property cephfs
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property cinder (base name: "cinder")', function() {
      // uncomment below and update the code to test the property cinder
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property claimRef (base name: "claimRef")', function() {
      // uncomment below and update the code to test the property claimRef
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property csi (base name: "csi")', function() {
      // uncomment below and update the code to test the property csi
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property fc (base name: "fc")', function() {
      // uncomment below and update the code to test the property fc
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property flexVolume (base name: "flexVolume")', function() {
      // uncomment below and update the code to test the property flexVolume
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property flocker (base name: "flocker")', function() {
      // uncomment below and update the code to test the property flocker
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property gcePersistentDisk (base name: "gcePersistentDisk")', function() {
      // uncomment below and update the code to test the property gcePersistentDisk
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property glusterfs (base name: "glusterfs")', function() {
      // uncomment below and update the code to test the property glusterfs
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property hostPath (base name: "hostPath")', function() {
      // uncomment below and update the code to test the property hostPath
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property iscsi (base name: "iscsi")', function() {
      // uncomment below and update the code to test the property iscsi
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property local (base name: "local")', function() {
      // uncomment below and update the code to test the property local
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property mountOptions (base name: "mountOptions")', function() {
      // uncomment below and update the code to test the property mountOptions
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property nfs (base name: "nfs")', function() {
      // uncomment below and update the code to test the property nfs
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property nodeAffinity (base name: "nodeAffinity")', function() {
      // uncomment below and update the code to test the property nodeAffinity
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property persistentVolumeReclaimPolicy (base name: "persistentVolumeReclaimPolicy")', function() {
      // uncomment below and update the code to test the property persistentVolumeReclaimPolicy
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property photonPersistentDisk (base name: "photonPersistentDisk")', function() {
      // uncomment below and update the code to test the property photonPersistentDisk
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property portworxVolume (base name: "portworxVolume")', function() {
      // uncomment below and update the code to test the property portworxVolume
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property quobyte (base name: "quobyte")', function() {
      // uncomment below and update the code to test the property quobyte
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property rbd (base name: "rbd")', function() {
      // uncomment below and update the code to test the property rbd
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property scaleIO (base name: "scaleIO")', function() {
      // uncomment below and update the code to test the property scaleIO
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property storageClassName (base name: "storageClassName")', function() {
      // uncomment below and update the code to test the property storageClassName
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property storageos (base name: "storageos")', function() {
      // uncomment below and update the code to test the property storageos
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property volumeMode (base name: "volumeMode")', function() {
      // uncomment below and update the code to test the property volumeMode
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

    it('should have the property vsphereVolume (base name: "vsphereVolume")', function() {
      // uncomment below and update the code to test the property vsphereVolume
      //var instane = new KubernetesJsClient.V1PersistentVolumeSpec();
      //expect(instance).to.be();
    });

  });

}));
