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
import V1LabelSelector from './V1LabelSelector';





/**
* The V2beta1ExternalMetricStatus model module.
* @module client/client.models/V2beta1ExternalMetricStatus
* @version 0.1
*/
export default class V2beta1ExternalMetricStatus {
    /**
    * Constructs a new <code>V2beta1ExternalMetricStatus</code>.
    * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
    * @alias module:client/client.models/V2beta1ExternalMetricStatus
    * @class
    * @param currentValue {String} currentValue is the current value of the metric (as a quantity)
    * @param metricName {String} metricName is the name of a metric used for autoscaling in metric system.
    */

    constructor(currentValue, metricName) {
        

        
        

        this['currentValue'] = currentValue;this['metricName'] = metricName;

        
    }

    /**
    * Constructs a <code>V2beta1ExternalMetricStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V2beta1ExternalMetricStatus} obj Optional instance to populate.
    * @return {module:client/client.models/V2beta1ExternalMetricStatus} The populated <code>V2beta1ExternalMetricStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V2beta1ExternalMetricStatus();

            
            
            

            if (data.hasOwnProperty('currentAverageValue')) {
                obj['currentAverageValue'] = ApiClient.convertToType(data['currentAverageValue'], 'String');
            }
            if (data.hasOwnProperty('currentValue')) {
                obj['currentValue'] = ApiClient.convertToType(data['currentValue'], 'String');
            }
            if (data.hasOwnProperty('metricName')) {
                obj['metricName'] = ApiClient.convertToType(data['metricName'], 'String');
            }
            if (data.hasOwnProperty('metricSelector')) {
                obj['metricSelector'] = V1LabelSelector.constructFromObject(data['metricSelector']);
            }
        }
        return obj;
    }

    /**
    * currentAverageValue is the current value of metric averaged over autoscaled pods.
    * @member {String} currentAverageValue
    */
    currentAverageValue = undefined;
    /**
    * currentValue is the current value of the metric (as a quantity)
    * @member {String} currentValue
    */
    currentValue = undefined;
    /**
    * metricName is the name of a metric used for autoscaling in metric system.
    * @member {String} metricName
    */
    metricName = undefined;
    /**
    * metricSelector is used to identify a specific time series within a given metric.
    * @member {module:client/client.models/V1LabelSelector} metricSelector
    */
    metricSelector = undefined;








}


