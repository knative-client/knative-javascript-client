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
import V2beta2CrossVersionObjectReference from './V2beta2CrossVersionObjectReference';
import V2beta2MetricSpec from './V2beta2MetricSpec';





/**
* The V2beta2HorizontalPodAutoscalerSpec model module.
* @module client/client.models/V2beta2HorizontalPodAutoscalerSpec
* @version 0.1
*/
export default class V2beta2HorizontalPodAutoscalerSpec {
    /**
    * Constructs a new <code>V2beta2HorizontalPodAutoscalerSpec</code>.
    * HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
    * @alias module:client/client.models/V2beta2HorizontalPodAutoscalerSpec
    * @class
    * @param maxReplicas {Number} maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas.
    * @param scaleTargetRef {module:client/client.models/V2beta2CrossVersionObjectReference} scaleTargetRef points to the target resource to scale, and is used to the pods for which metrics should be collected, as well as to actually change the replica count.
    */

    constructor(maxReplicas, scaleTargetRef) {
        

        
        

        this['maxReplicas'] = maxReplicas;this['scaleTargetRef'] = scaleTargetRef;

        
    }

    /**
    * Constructs a <code>V2beta2HorizontalPodAutoscalerSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V2beta2HorizontalPodAutoscalerSpec} obj Optional instance to populate.
    * @return {module:client/client.models/V2beta2HorizontalPodAutoscalerSpec} The populated <code>V2beta2HorizontalPodAutoscalerSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V2beta2HorizontalPodAutoscalerSpec();

            
            
            

            if (data.hasOwnProperty('maxReplicas')) {
                obj['maxReplicas'] = ApiClient.convertToType(data['maxReplicas'], 'Number');
            }
            if (data.hasOwnProperty('metrics')) {
                obj['metrics'] = ApiClient.convertToType(data['metrics'], [V2beta2MetricSpec]);
            }
            if (data.hasOwnProperty('minReplicas')) {
                obj['minReplicas'] = ApiClient.convertToType(data['minReplicas'], 'Number');
            }
            if (data.hasOwnProperty('scaleTargetRef')) {
                obj['scaleTargetRef'] = V2beta2CrossVersionObjectReference.constructFromObject(data['scaleTargetRef']);
            }
        }
        return obj;
    }

    /**
    * maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas.
    * @member {Number} maxReplicas
    */
    maxReplicas = undefined;
    /**
    * metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. If not set, the default metric will be set to 80% average CPU utilization.
    * @member {Array.<module:client/client.models/V2beta2MetricSpec>} metrics
    */
    metrics = undefined;
    /**
    * minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down. It defaults to 1 pod.
    * @member {Number} minReplicas
    */
    minReplicas = undefined;
    /**
    * scaleTargetRef points to the target resource to scale, and is used to the pods for which metrics should be collected, as well as to actually change the replica count.
    * @member {module:client/client.models/V2beta2CrossVersionObjectReference} scaleTargetRef
    */
    scaleTargetRef = undefined;








}


