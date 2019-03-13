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
import AppsV1beta1Deployment from './AppsV1beta1Deployment';
import V1ListMeta from './V1ListMeta';





/**
* The AppsV1beta1DeploymentList model module.
* @module client/client.models/AppsV1beta1DeploymentList
* @version 0.1
*/
export default class AppsV1beta1DeploymentList {
    /**
    * Constructs a new <code>AppsV1beta1DeploymentList</code>.
    * DeploymentList is a list of Deployments.
    * @alias module:client/client.models/AppsV1beta1DeploymentList
    * @class
    * @param items {Array.<module:client/client.models/AppsV1beta1Deployment>} Items is the list of Deployments.
    */

    constructor(items) {
        

        
        

        this['items'] = items;

        
    }

    /**
    * Constructs a <code>AppsV1beta1DeploymentList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/AppsV1beta1DeploymentList} obj Optional instance to populate.
    * @return {module:client/client.models/AppsV1beta1DeploymentList} The populated <code>AppsV1beta1DeploymentList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppsV1beta1DeploymentList();

            
            
            

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [AppsV1beta1Deployment]);
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = V1ListMeta.constructFromObject(data['metadata']);
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
    * Items is the list of Deployments.
    * @member {Array.<module:client/client.models/AppsV1beta1Deployment>} items
    */
    items = undefined;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
    * @member {String} kind
    */
    kind = undefined;
    /**
    * Standard list metadata.
    * @member {module:client/client.models/V1ListMeta} metadata
    */
    metadata = undefined;








}

