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
* The V2beta2MetricIdentifier model module.
* @module client/client.models/V2beta2MetricIdentifier
* @version 0.1
*/
export default class V2beta2MetricIdentifier {
    /**
    * Constructs a new <code>V2beta2MetricIdentifier</code>.
    * MetricIdentifier defines the name and optionally selector for a metric
    * @alias module:client/client.models/V2beta2MetricIdentifier
    * @class
    * @param name {String} name is the name of the given metric
    */

    constructor(name) {
        

        
        

        this['name'] = name;

        
    }

    /**
    * Constructs a <code>V2beta2MetricIdentifier</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V2beta2MetricIdentifier} obj Optional instance to populate.
    * @return {module:client/client.models/V2beta2MetricIdentifier} The populated <code>V2beta2MetricIdentifier</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V2beta2MetricIdentifier();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('selector')) {
                obj['selector'] = V1LabelSelector.constructFromObject(data['selector']);
            }
        }
        return obj;
    }

    /**
    * name is the name of the given metric
    * @member {String} name
    */
    name = undefined;
    /**
    * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
    * @member {module:client/client.models/V1LabelSelector} selector
    */
    selector = undefined;








}


