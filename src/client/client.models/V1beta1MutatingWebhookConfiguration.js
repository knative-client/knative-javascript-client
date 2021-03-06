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
import V1ObjectMeta from './V1ObjectMeta';
import V1beta1Webhook from './V1beta1Webhook';





/**
* The V1beta1MutatingWebhookConfiguration model module.
* @module client/client.models/V1beta1MutatingWebhookConfiguration
* @version 0.1
*/
export default class V1beta1MutatingWebhookConfiguration {
    /**
    * Constructs a new <code>V1beta1MutatingWebhookConfiguration</code>.
    * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
    * @alias module:client/client.models/V1beta1MutatingWebhookConfiguration
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1beta1MutatingWebhookConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta1MutatingWebhookConfiguration} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta1MutatingWebhookConfiguration} The populated <code>V1beta1MutatingWebhookConfiguration</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1MutatingWebhookConfiguration();

            
            
            

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = V1ObjectMeta.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('webhooks')) {
                obj['webhooks'] = ApiClient.convertToType(data['webhooks'], [V1beta1Webhook]);
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
    * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata.
    * @member {module:client/client.models/V1ObjectMeta} metadata
    */
    metadata = undefined;
    /**
    * Webhooks is a list of webhooks and the affected resources and operations.
    * @member {Array.<module:client/client.models/V1beta1Webhook>} webhooks
    */
    webhooks = undefined;








}


