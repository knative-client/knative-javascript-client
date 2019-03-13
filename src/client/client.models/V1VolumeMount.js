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
* The V1VolumeMount model module.
* @module client/client.models/V1VolumeMount
* @version 0.1
*/
export default class V1VolumeMount {
    /**
    * Constructs a new <code>V1VolumeMount</code>.
    * VolumeMount describes a mounting of a Volume within a container.
    * @alias module:client/client.models/V1VolumeMount
    * @class
    * @param mountPath {String} Path within the container at which the volume should be mounted.  Must not contain ':'.
    * @param name {String} This must match the Name of a Volume.
    */

    constructor(mountPath, name) {
        

        
        

        this['mountPath'] = mountPath;this['name'] = name;

        
    }

    /**
    * Constructs a <code>V1VolumeMount</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1VolumeMount} obj Optional instance to populate.
    * @return {module:client/client.models/V1VolumeMount} The populated <code>V1VolumeMount</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1VolumeMount();

            
            
            

            if (data.hasOwnProperty('mountPath')) {
                obj['mountPath'] = ApiClient.convertToType(data['mountPath'], 'String');
            }
            if (data.hasOwnProperty('mountPropagation')) {
                obj['mountPropagation'] = ApiClient.convertToType(data['mountPropagation'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('readOnly')) {
                obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('subPath')) {
                obj['subPath'] = ApiClient.convertToType(data['subPath'], 'String');
            }
            if (data.hasOwnProperty('subPathExpr')) {
                obj['subPathExpr'] = ApiClient.convertToType(data['subPathExpr'], 'String');
            }
        }
        return obj;
    }

    /**
    * Path within the container at which the volume should be mounted.  Must not contain ':'.
    * @member {String} mountPath
    */
    mountPath = undefined;
    /**
    * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
    * @member {String} mountPropagation
    */
    mountPropagation = undefined;
    /**
    * This must match the Name of a Volume.
    * @member {String} name
    */
    name = undefined;
    /**
    * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
    * @member {Boolean} readOnly
    */
    readOnly = undefined;
    /**
    * Path within the volume from which the container's volume should be mounted. Defaults to \"\" (volume's root).
    * @member {String} subPath
    */
    subPath = undefined;
    /**
    * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to \"\" (volume's root). SubPathExpr and SubPath are mutually exclusive. This field is alpha in 1.14.
    * @member {String} subPathExpr
    */
    subPathExpr = undefined;








}


