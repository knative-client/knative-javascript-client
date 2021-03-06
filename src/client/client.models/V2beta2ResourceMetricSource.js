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
import V2beta2MetricTarget from './V2beta2MetricTarget';





/**
* The V2beta2ResourceMetricSource model module.
* @module client/client.models/V2beta2ResourceMetricSource
* @version 0.1
*/
export default class V2beta2ResourceMetricSource {
    /**
    * Constructs a new <code>V2beta2ResourceMetricSource</code>.
    * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the \&quot;pods\&quot; source.  Only one \&quot;target\&quot; type should be set.
    * @alias module:client/client.models/V2beta2ResourceMetricSource
    * @class
    * @param name {String} name is the name of the resource in question.
    * @param target {module:client/client.models/V2beta2MetricTarget} target specifies the target value for the given metric
    */

    constructor(name, target) {
        

        
        

        this['name'] = name;this['target'] = target;

        
    }

    /**
    * Constructs a <code>V2beta2ResourceMetricSource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V2beta2ResourceMetricSource} obj Optional instance to populate.
    * @return {module:client/client.models/V2beta2ResourceMetricSource} The populated <code>V2beta2ResourceMetricSource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V2beta2ResourceMetricSource();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = V2beta2MetricTarget.constructFromObject(data['target']);
            }
        }
        return obj;
    }

    /**
    * name is the name of the resource in question.
    * @member {String} name
    */
    name = undefined;
    /**
    * target specifies the target value for the given metric
    * @member {module:client/client.models/V2beta2MetricTarget} target
    */
    target = undefined;








}


