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
import V1NodeSelectorRequirement from './V1NodeSelectorRequirement';





/**
* The V1NodeSelectorTerm model module.
* @module client/client.models/V1NodeSelectorTerm
* @version 0.1
*/
export default class V1NodeSelectorTerm {
    /**
    * Constructs a new <code>V1NodeSelectorTerm</code>.
    * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
    * @alias module:client/client.models/V1NodeSelectorTerm
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1NodeSelectorTerm</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1NodeSelectorTerm} obj Optional instance to populate.
    * @return {module:client/client.models/V1NodeSelectorTerm} The populated <code>V1NodeSelectorTerm</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1NodeSelectorTerm();

            
            
            

            if (data.hasOwnProperty('matchExpressions')) {
                obj['matchExpressions'] = ApiClient.convertToType(data['matchExpressions'], [V1NodeSelectorRequirement]);
            }
            if (data.hasOwnProperty('matchFields')) {
                obj['matchFields'] = ApiClient.convertToType(data['matchFields'], [V1NodeSelectorRequirement]);
            }
        }
        return obj;
    }

    /**
    * A list of node selector requirements by node's labels.
    * @member {Array.<module:client/client.models/V1NodeSelectorRequirement>} matchExpressions
    */
    matchExpressions = undefined;
    /**
    * A list of node selector requirements by node's fields.
    * @member {Array.<module:client/client.models/V1NodeSelectorRequirement>} matchFields
    */
    matchFields = undefined;








}


