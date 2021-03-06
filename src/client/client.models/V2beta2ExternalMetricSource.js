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
import V2beta2MetricIdentifier from './V2beta2MetricIdentifier';
import V2beta2MetricTarget from './V2beta2MetricTarget';





/**
* The V2beta2ExternalMetricSource model module.
* @module client/client.models/V2beta2ExternalMetricSource
* @version 0.1
*/
export default class V2beta2ExternalMetricSource {
    /**
    * Constructs a new <code>V2beta2ExternalMetricSource</code>.
    * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
    * @alias module:client/client.models/V2beta2ExternalMetricSource
    * @class
    * @param metric {module:client/client.models/V2beta2MetricIdentifier} metric identifies the target metric by name and selector
    * @param target {module:client/client.models/V2beta2MetricTarget} target specifies the target value for the given metric
    */

    constructor(metric, target) {
        

        
        

        this['metric'] = metric;this['target'] = target;

        
    }

    /**
    * Constructs a <code>V2beta2ExternalMetricSource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V2beta2ExternalMetricSource} obj Optional instance to populate.
    * @return {module:client/client.models/V2beta2ExternalMetricSource} The populated <code>V2beta2ExternalMetricSource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V2beta2ExternalMetricSource();

            
            
            

            if (data.hasOwnProperty('metric')) {
                obj['metric'] = V2beta2MetricIdentifier.constructFromObject(data['metric']);
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = V2beta2MetricTarget.constructFromObject(data['target']);
            }
        }
        return obj;
    }

    /**
    * metric identifies the target metric by name and selector
    * @member {module:client/client.models/V2beta2MetricIdentifier} metric
    */
    metric = undefined;
    /**
    * target specifies the target value for the given metric
    * @member {module:client/client.models/V2beta2MetricTarget} target
    */
    target = undefined;








}


