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
* The V1beta1ResourceAttributes model module.
* @module client/client.models/V1beta1ResourceAttributes
* @version 0.1
*/
export default class V1beta1ResourceAttributes {
    /**
    * Constructs a new <code>V1beta1ResourceAttributes</code>.
    * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
    * @alias module:client/client.models/V1beta1ResourceAttributes
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1beta1ResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta1ResourceAttributes} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta1ResourceAttributes} The populated <code>V1beta1ResourceAttributes</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1ResourceAttributes();

            
            
            

            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
            if (data.hasOwnProperty('resource')) {
                obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
            }
            if (data.hasOwnProperty('subresource')) {
                obj['subresource'] = ApiClient.convertToType(data['subresource'], 'String');
            }
            if (data.hasOwnProperty('verb')) {
                obj['verb'] = ApiClient.convertToType(data['verb'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }

    /**
    * Group is the API Group of the Resource.  \"*\" means all.
    * @member {String} group
    */
    group = undefined;
    /**
    * Name is the name of the resource being requested for a \"get\" or deleted for a \"delete\". \"\" (empty) means all.
    * @member {String} name
    */
    name = undefined;
    /**
    * Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces \"\" (empty) is defaulted for LocalSubjectAccessReviews \"\" (empty) is empty for cluster-scoped resources \"\" (empty) means \"all\" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview
    * @member {String} namespace
    */
    namespace = undefined;
    /**
    * Resource is one of the existing resource types.  \"*\" means all.
    * @member {String} resource
    */
    resource = undefined;
    /**
    * Subresource is one of the existing resource types.  \"\" means none.
    * @member {String} subresource
    */
    subresource = undefined;
    /**
    * Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  \"*\" means all.
    * @member {String} verb
    */
    verb = undefined;
    /**
    * Version is the API Version of the Resource.  \"*\" means all.
    * @member {String} version
    */
    version = undefined;








}


