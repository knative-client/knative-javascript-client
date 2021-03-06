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
import V1HorizontalPodAutoscalerSpec from './V1HorizontalPodAutoscalerSpec';
import V1HorizontalPodAutoscalerStatus from './V1HorizontalPodAutoscalerStatus';
import V1ObjectMeta from './V1ObjectMeta';





/**
* The V1HorizontalPodAutoscaler model module.
* @module client/client.models/V1HorizontalPodAutoscaler
* @version 0.1
*/
export default class V1HorizontalPodAutoscaler {
    /**
    * Constructs a new <code>V1HorizontalPodAutoscaler</code>.
    * configuration of a horizontal pod autoscaler.
    * @alias module:client/client.models/V1HorizontalPodAutoscaler
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1HorizontalPodAutoscaler</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1HorizontalPodAutoscaler} obj Optional instance to populate.
    * @return {module:client/client.models/V1HorizontalPodAutoscaler} The populated <code>V1HorizontalPodAutoscaler</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1HorizontalPodAutoscaler();

            
            
            

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
                obj['spec'] = V1HorizontalPodAutoscalerSpec.constructFromObject(data['spec']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = V1HorizontalPodAutoscalerStatus.constructFromObject(data['status']);
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
    * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
    * @member {module:client/client.models/V1ObjectMeta} metadata
    */
    metadata = undefined;
    /**
    * behaviour of autoscaler. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status.
    * @member {module:client/client.models/V1HorizontalPodAutoscalerSpec} spec
    */
    spec = undefined;
    /**
    * current information about the autoscaler.
    * @member {module:client/client.models/V1HorizontalPodAutoscalerStatus} status
    */
    status = undefined;








}


