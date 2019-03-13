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
import V1SELinuxOptions from './V1SELinuxOptions';





/**
* The PolicyV1beta1SELinuxStrategyOptions model module.
* @module client/client.models/PolicyV1beta1SELinuxStrategyOptions
* @version 0.1
*/
export default class PolicyV1beta1SELinuxStrategyOptions {
    /**
    * Constructs a new <code>PolicyV1beta1SELinuxStrategyOptions</code>.
    * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy.
    * @alias module:client/client.models/PolicyV1beta1SELinuxStrategyOptions
    * @class
    * @param rule {String} rule is the strategy that will dictate the allowable labels that may be set.
    */

    constructor(rule) {
        

        
        

        this['rule'] = rule;

        
    }

    /**
    * Constructs a <code>PolicyV1beta1SELinuxStrategyOptions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/PolicyV1beta1SELinuxStrategyOptions} obj Optional instance to populate.
    * @return {module:client/client.models/PolicyV1beta1SELinuxStrategyOptions} The populated <code>PolicyV1beta1SELinuxStrategyOptions</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PolicyV1beta1SELinuxStrategyOptions();

            
            
            

            if (data.hasOwnProperty('rule')) {
                obj['rule'] = ApiClient.convertToType(data['rule'], 'String');
            }
            if (data.hasOwnProperty('seLinuxOptions')) {
                obj['seLinuxOptions'] = V1SELinuxOptions.constructFromObject(data['seLinuxOptions']);
            }
        }
        return obj;
    }

    /**
    * rule is the strategy that will dictate the allowable labels that may be set.
    * @member {String} rule
    */
    rule = undefined;
    /**
    * seLinuxOptions required to run as; required for MustRunAs More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
    * @member {module:client/client.models/V1SELinuxOptions} seLinuxOptions
    */
    seLinuxOptions = undefined;








}


