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
import V1LeaseSpec from './V1LeaseSpec';
import V1ObjectMeta from './V1ObjectMeta';





/**
* The V1Lease model module.
* @module client/client.models/V1Lease
* @version 0.1
*/
export default class V1Lease {
    /**
    * Constructs a new <code>V1Lease</code>.
    * Lease defines a lease concept.
    * @alias module:client/client.models/V1Lease
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1Lease</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1Lease} obj Optional instance to populate.
    * @return {module:client/client.models/V1Lease} The populated <code>V1Lease</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Lease();

            
            
            

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
                obj['spec'] = V1LeaseSpec.constructFromObject(data['spec']);
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
    * More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
    * @member {module:client/client.models/V1ObjectMeta} metadata
    */
    metadata = undefined;
    /**
    * Specification of the Lease. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
    * @member {module:client/client.models/V1LeaseSpec} spec
    */
    spec = undefined;








}


