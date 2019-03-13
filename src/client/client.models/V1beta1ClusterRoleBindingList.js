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
import V1ListMeta from './V1ListMeta';
import V1beta1ClusterRoleBinding from './V1beta1ClusterRoleBinding';





/**
* The V1beta1ClusterRoleBindingList model module.
* @module client/client.models/V1beta1ClusterRoleBindingList
* @version 0.1
*/
export default class V1beta1ClusterRoleBindingList {
    /**
    * Constructs a new <code>V1beta1ClusterRoleBindingList</code>.
    * ClusterRoleBindingList is a collection of ClusterRoleBindings
    * @alias module:client/client.models/V1beta1ClusterRoleBindingList
    * @class
    * @param items {Array.<module:client/client.models/V1beta1ClusterRoleBinding>} Items is a list of ClusterRoleBindings
    */

    constructor(items) {
        

        
        

        this['items'] = items;

        
    }

    /**
    * Constructs a <code>V1beta1ClusterRoleBindingList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta1ClusterRoleBindingList} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta1ClusterRoleBindingList} The populated <code>V1beta1ClusterRoleBindingList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1ClusterRoleBindingList();

            
            
            

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [V1beta1ClusterRoleBinding]);
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
    * Items is a list of ClusterRoleBindings
    * @member {Array.<module:client/client.models/V1beta1ClusterRoleBinding>} items
    */
    items = undefined;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
    * @member {String} kind
    */
    kind = undefined;
    /**
    * Standard object's metadata.
    * @member {module:client/client.models/V1ListMeta} metadata
    */
    metadata = undefined;








}


