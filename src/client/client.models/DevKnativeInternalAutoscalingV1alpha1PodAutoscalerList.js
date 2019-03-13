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
import IoIstioConfigV1alpha2BypassListMetadata from './IoIstioConfigV1alpha2BypassListMetadata';





/**
* The DevKnativeInternalAutoscalingV1alpha1PodAutoscalerList model module.
* @module client/client.models/DevKnativeInternalAutoscalingV1alpha1PodAutoscalerList
* @version 0.1
*/
export default class DevKnativeInternalAutoscalingV1alpha1PodAutoscalerList {
    /**
    * Constructs a new <code>DevKnativeInternalAutoscalingV1alpha1PodAutoscalerList</code>.
    * PodAutoscalerList is a list of PodAutoscaler
    * @alias module:client/client.models/DevKnativeInternalAutoscalingV1alpha1PodAutoscalerList
    * @class
    * @param items {Array.<Object>} List of podautoscalers. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md
    */

    constructor(items) {
        

        
        

        this['items'] = items;

        
    }

    /**
    * Constructs a <code>DevKnativeInternalAutoscalingV1alpha1PodAutoscalerList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/DevKnativeInternalAutoscalingV1alpha1PodAutoscalerList} obj Optional instance to populate.
    * @return {module:client/client.models/DevKnativeInternalAutoscalingV1alpha1PodAutoscalerList} The populated <code>DevKnativeInternalAutoscalingV1alpha1PodAutoscalerList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DevKnativeInternalAutoscalingV1alpha1PodAutoscalerList();

            
            
            

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Object]);
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = IoIstioConfigV1alpha2BypassListMetadata.constructFromObject(data['metadata']);
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
    * List of podautoscalers. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md
    * @member {Array.<Object>} items
    */
    items = undefined;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
    * @member {String} kind
    */
    kind = undefined;
    /**
    * @member {module:client/client.models/IoIstioConfigV1alpha2BypassListMetadata} metadata
    */
    metadata = undefined;








}


