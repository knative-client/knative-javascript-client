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
* The V1beta1ResourceRule model module.
* @module client/client.models/V1beta1ResourceRule
* @version 0.1
*/
export default class V1beta1ResourceRule {
    /**
    * Constructs a new <code>V1beta1ResourceRule</code>.
    * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn&#39;t significant, may contain duplicates, and possibly be incomplete.
    * @alias module:client/client.models/V1beta1ResourceRule
    * @class
    * @param verbs {Array.<String>} Verb is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  \"*\" means all.
    */

    constructor(verbs) {
        

        
        

        this['verbs'] = verbs;

        
    }

    /**
    * Constructs a <code>V1beta1ResourceRule</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta1ResourceRule} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta1ResourceRule} The populated <code>V1beta1ResourceRule</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1ResourceRule();

            
            
            

            if (data.hasOwnProperty('apiGroups')) {
                obj['apiGroups'] = ApiClient.convertToType(data['apiGroups'], ['String']);
            }
            if (data.hasOwnProperty('resourceNames')) {
                obj['resourceNames'] = ApiClient.convertToType(data['resourceNames'], ['String']);
            }
            if (data.hasOwnProperty('resources')) {
                obj['resources'] = ApiClient.convertToType(data['resources'], ['String']);
            }
            if (data.hasOwnProperty('verbs')) {
                obj['verbs'] = ApiClient.convertToType(data['verbs'], ['String']);
            }
        }
        return obj;
    }

    /**
    * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  \"*\" means all.
    * @member {Array.<String>} apiGroups
    */
    apiGroups = undefined;
    /**
    * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  \"*\" means all.
    * @member {Array.<String>} resourceNames
    */
    resourceNames = undefined;
    /**
    * Resources is a list of resources this rule applies to.  \"*\" means all in the specified apiGroups.  \"*_/foo\" represents the subresource 'foo' for all resources in the specified apiGroups.
    * @member {Array.<String>} resources
    */
    resources = undefined;
    /**
    * Verb is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  \"*\" means all.
    * @member {Array.<String>} verbs
    */
    verbs = undefined;








}


