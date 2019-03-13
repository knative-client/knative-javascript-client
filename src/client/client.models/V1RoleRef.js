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
* The V1RoleRef model module.
* @module client/client.models/V1RoleRef
* @version 0.1
*/
export default class V1RoleRef {
    /**
    * Constructs a new <code>V1RoleRef</code>.
    * RoleRef contains information that points to the role being used
    * @alias module:client/client.models/V1RoleRef
    * @class
    * @param apiGroup {String} APIGroup is the group for the resource being referenced
    * @param kind {String} Kind is the type of resource being referenced
    * @param name {String} Name is the name of resource being referenced
    */

    constructor(apiGroup, kind, name) {
        

        
        

        this['apiGroup'] = apiGroup;this['kind'] = kind;this['name'] = name;

        
    }

    /**
    * Constructs a <code>V1RoleRef</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1RoleRef} obj Optional instance to populate.
    * @return {module:client/client.models/V1RoleRef} The populated <code>V1RoleRef</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1RoleRef();

            
            
            

            if (data.hasOwnProperty('apiGroup')) {
                obj['apiGroup'] = ApiClient.convertToType(data['apiGroup'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * APIGroup is the group for the resource being referenced
    * @member {String} apiGroup
    */
    apiGroup = undefined;
    /**
    * Kind is the type of resource being referenced
    * @member {String} kind
    */
    kind = undefined;
    /**
    * Name is the name of resource being referenced
    * @member {String} name
    */
    name = undefined;








}


