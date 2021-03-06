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
* The V1HorizontalPodAutoscalerStatus model module.
* @module client/client.models/V1HorizontalPodAutoscalerStatus
* @version 0.1
*/
export default class V1HorizontalPodAutoscalerStatus {
    /**
    * Constructs a new <code>V1HorizontalPodAutoscalerStatus</code>.
    * current status of a horizontal pod autoscaler
    * @alias module:client/client.models/V1HorizontalPodAutoscalerStatus
    * @class
    * @param currentReplicas {Number} current number of replicas of pods managed by this autoscaler.
    * @param desiredReplicas {Number} desired number of replicas of pods managed by this autoscaler.
    */

    constructor(currentReplicas, desiredReplicas) {
        

        
        

        this['currentReplicas'] = currentReplicas;this['desiredReplicas'] = desiredReplicas;

        
    }

    /**
    * Constructs a <code>V1HorizontalPodAutoscalerStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1HorizontalPodAutoscalerStatus} obj Optional instance to populate.
    * @return {module:client/client.models/V1HorizontalPodAutoscalerStatus} The populated <code>V1HorizontalPodAutoscalerStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1HorizontalPodAutoscalerStatus();

            
            
            

            if (data.hasOwnProperty('currentCPUUtilizationPercentage')) {
                obj['currentCPUUtilizationPercentage'] = ApiClient.convertToType(data['currentCPUUtilizationPercentage'], 'Number');
            }
            if (data.hasOwnProperty('currentReplicas')) {
                obj['currentReplicas'] = ApiClient.convertToType(data['currentReplicas'], 'Number');
            }
            if (data.hasOwnProperty('desiredReplicas')) {
                obj['desiredReplicas'] = ApiClient.convertToType(data['desiredReplicas'], 'Number');
            }
            if (data.hasOwnProperty('lastScaleTime')) {
                obj['lastScaleTime'] = ApiClient.convertToType(data['lastScaleTime'], 'Date');
            }
            if (data.hasOwnProperty('observedGeneration')) {
                obj['observedGeneration'] = ApiClient.convertToType(data['observedGeneration'], 'Number');
            }
        }
        return obj;
    }

    /**
    * current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU.
    * @member {Number} currentCPUUtilizationPercentage
    */
    currentCPUUtilizationPercentage = undefined;
    /**
    * current number of replicas of pods managed by this autoscaler.
    * @member {Number} currentReplicas
    */
    currentReplicas = undefined;
    /**
    * desired number of replicas of pods managed by this autoscaler.
    * @member {Number} desiredReplicas
    */
    desiredReplicas = undefined;
    /**
    * last time the HorizontalPodAutoscaler scaled the number of pods; used by the autoscaler to control how often the number of pods is changed.
    * @member {Date} lastScaleTime
    */
    lastScaleTime = undefined;
    /**
    * most recent generation observed by this autoscaler.
    * @member {Number} observedGeneration
    */
    observedGeneration = undefined;








}


