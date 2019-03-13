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
import ExtensionsV1beta1PodSecurityPolicySpec from './ExtensionsV1beta1PodSecurityPolicySpec';
import V1ObjectMeta from './V1ObjectMeta';





/**
* The ExtensionsV1beta1PodSecurityPolicy model module.
* @module client/client.models/ExtensionsV1beta1PodSecurityPolicy
* @version 0.1
*/
export default class ExtensionsV1beta1PodSecurityPolicy {
    /**
    * Constructs a new <code>ExtensionsV1beta1PodSecurityPolicy</code>.
    * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container. Deprecated: use PodSecurityPolicy from policy API Group instead.
    * @alias module:client/client.models/ExtensionsV1beta1PodSecurityPolicy
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ExtensionsV1beta1PodSecurityPolicy</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/ExtensionsV1beta1PodSecurityPolicy} obj Optional instance to populate.
    * @return {module:client/client.models/ExtensionsV1beta1PodSecurityPolicy} The populated <code>ExtensionsV1beta1PodSecurityPolicy</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtensionsV1beta1PodSecurityPolicy();

            
            
            

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = V1ObjectMeta.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('spec')) {
                obj['spec'] = ExtensionsV1beta1PodSecurityPolicySpec.constructFromObject(data['spec']);
            }
        }
        return obj;
    }

    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
    * @member {String} apiVersion
    */
    apiVersion = undefined;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
    * @member {String} kind
    */
    kind = undefined;
    /**
    * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
    * @member {module:client/client.models/V1ObjectMeta} metadata
    */
    metadata = undefined;
    /**
    * spec defines the policy enforced.
    * @member {module:client/client.models/ExtensionsV1beta1PodSecurityPolicySpec} spec
    */
    spec = undefined;








}

