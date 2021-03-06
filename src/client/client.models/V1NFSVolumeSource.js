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


import ApiClient from '../ApiClient';





/**
* The V1NFSVolumeSource model module.
* @module client/client.models/V1NFSVolumeSource
* @version 0.1
*/
export default class V1NFSVolumeSource {
    /**
    * Constructs a new <code>V1NFSVolumeSource</code>.
    * Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
    * @alias module:client/client.models/V1NFSVolumeSource
    * @class
    * @param path {String} Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
    * @param server {String} Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
    */

    constructor(path, server) {
        

        
        

        this['path'] = path;this['server'] = server;

        
    }

    /**
    * Constructs a <code>V1NFSVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1NFSVolumeSource} obj Optional instance to populate.
    * @return {module:client/client.models/V1NFSVolumeSource} The populated <code>V1NFSVolumeSource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1NFSVolumeSource();

            
            
            

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('readOnly')) {
                obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('server')) {
                obj['server'] = ApiClient.convertToType(data['server'], 'String');
            }
        }
        return obj;
    }

    /**
    * Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
    * @member {String} path
    */
    path = undefined;
    /**
    * ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
    * @member {Boolean} readOnly
    */
    readOnly = undefined;
    /**
    * Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
    * @member {String} server
    */
    server = undefined;








}


