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
import NetworkingV1beta1IngressSpec from './NetworkingV1beta1IngressSpec';
import NetworkingV1beta1IngressStatus from './NetworkingV1beta1IngressStatus';
import V1ObjectMeta from './V1ObjectMeta';





/**
* The NetworkingV1beta1Ingress model module.
* @module client/client.models/NetworkingV1beta1Ingress
* @version 0.1
*/
export default class NetworkingV1beta1Ingress {
    /**
    * Constructs a new <code>NetworkingV1beta1Ingress</code>.
    * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
    * @alias module:client/client.models/NetworkingV1beta1Ingress
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>NetworkingV1beta1Ingress</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/NetworkingV1beta1Ingress} obj Optional instance to populate.
    * @return {module:client/client.models/NetworkingV1beta1Ingress} The populated <code>NetworkingV1beta1Ingress</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkingV1beta1Ingress();

            
            
            

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
                obj['spec'] = NetworkingV1beta1IngressSpec.constructFromObject(data['spec']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = NetworkingV1beta1IngressStatus.constructFromObject(data['status']);
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
    * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
    * @member {module:client/client.models/V1ObjectMeta} metadata
    */
    metadata = undefined;
    /**
    * Spec is the desired state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
    * @member {module:client/client.models/NetworkingV1beta1IngressSpec} spec
    */
    spec = undefined;
    /**
    * Status is the current state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
    * @member {module:client/client.models/NetworkingV1beta1IngressStatus} status
    */
    status = undefined;








}


