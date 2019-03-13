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
* The V1SelfSubjectRulesReviewSpec model module.
* @module client/client.models/V1SelfSubjectRulesReviewSpec
* @version 0.1
*/
export default class V1SelfSubjectRulesReviewSpec {
    /**
    * Constructs a new <code>V1SelfSubjectRulesReviewSpec</code>.
    * @alias module:client/client.models/V1SelfSubjectRulesReviewSpec
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1SelfSubjectRulesReviewSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1SelfSubjectRulesReviewSpec} obj Optional instance to populate.
    * @return {module:client/client.models/V1SelfSubjectRulesReviewSpec} The populated <code>V1SelfSubjectRulesReviewSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1SelfSubjectRulesReviewSpec();

            
            
            

            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
        }
        return obj;
    }

    /**
    * Namespace to evaluate rules for. Required.
    * @member {String} namespace
    */
    namespace = undefined;








}


