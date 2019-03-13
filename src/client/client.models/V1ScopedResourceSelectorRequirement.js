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
* The V1ScopedResourceSelectorRequirement model module.
* @module client/client.models/V1ScopedResourceSelectorRequirement
* @version 0.1
*/
export default class V1ScopedResourceSelectorRequirement {
    /**
    * Constructs a new <code>V1ScopedResourceSelectorRequirement</code>.
    * A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values.
    * @alias module:client/client.models/V1ScopedResourceSelectorRequirement
    * @class
    * @param operator {String} Represents a scope's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist.
    * @param scopeName {String} The name of the scope that the selector applies to.
    */

    constructor(operator, scopeName) {
        

        
        

        this['operator'] = operator;this['scopeName'] = scopeName;

        
    }

    /**
    * Constructs a <code>V1ScopedResourceSelectorRequirement</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1ScopedResourceSelectorRequirement} obj Optional instance to populate.
    * @return {module:client/client.models/V1ScopedResourceSelectorRequirement} The populated <code>V1ScopedResourceSelectorRequirement</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ScopedResourceSelectorRequirement();

            
            
            

            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
            }
            if (data.hasOwnProperty('scopeName')) {
                obj['scopeName'] = ApiClient.convertToType(data['scopeName'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], ['String']);
            }
        }
        return obj;
    }

    /**
    * Represents a scope's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist.
    * @member {String} operator
    */
    operator = undefined;
    /**
    * The name of the scope that the selector applies to.
    * @member {String} scopeName
    */
    scopeName = undefined;
    /**
    * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
    * @member {Array.<String>} values
    */
    values = undefined;








}


