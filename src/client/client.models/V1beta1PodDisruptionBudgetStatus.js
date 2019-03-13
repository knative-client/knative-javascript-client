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
* The V1beta1PodDisruptionBudgetStatus model module.
* @module client/client.models/V1beta1PodDisruptionBudgetStatus
* @version 0.1
*/
export default class V1beta1PodDisruptionBudgetStatus {
    /**
    * Constructs a new <code>V1beta1PodDisruptionBudgetStatus</code>.
    * PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.
    * @alias module:client/client.models/V1beta1PodDisruptionBudgetStatus
    * @class
    * @param currentHealthy {Number} current number of healthy pods
    * @param desiredHealthy {Number} minimum desired number of healthy pods
    * @param disruptionsAllowed {Number} Number of pod disruptions that are currently allowed.
    * @param expectedPods {Number} total number of pods counted by this disruption budget
    */

    constructor(currentHealthy, desiredHealthy, disruptionsAllowed, expectedPods) {
        

        
        

        this['currentHealthy'] = currentHealthy;this['desiredHealthy'] = desiredHealthy;this['disruptionsAllowed'] = disruptionsAllowed;this['expectedPods'] = expectedPods;

        
    }

    /**
    * Constructs a <code>V1beta1PodDisruptionBudgetStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta1PodDisruptionBudgetStatus} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta1PodDisruptionBudgetStatus} The populated <code>V1beta1PodDisruptionBudgetStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1PodDisruptionBudgetStatus();

            
            
            

            if (data.hasOwnProperty('currentHealthy')) {
                obj['currentHealthy'] = ApiClient.convertToType(data['currentHealthy'], 'Number');
            }
            if (data.hasOwnProperty('desiredHealthy')) {
                obj['desiredHealthy'] = ApiClient.convertToType(data['desiredHealthy'], 'Number');
            }
            if (data.hasOwnProperty('disruptedPods')) {
                obj['disruptedPods'] = ApiClient.convertToType(data['disruptedPods'], {'String': 'Date'});
            }
            if (data.hasOwnProperty('disruptionsAllowed')) {
                obj['disruptionsAllowed'] = ApiClient.convertToType(data['disruptionsAllowed'], 'Number');
            }
            if (data.hasOwnProperty('expectedPods')) {
                obj['expectedPods'] = ApiClient.convertToType(data['expectedPods'], 'Number');
            }
            if (data.hasOwnProperty('observedGeneration')) {
                obj['observedGeneration'] = ApiClient.convertToType(data['observedGeneration'], 'Number');
            }
        }
        return obj;
    }

    /**
    * current number of healthy pods
    * @member {Number} currentHealthy
    */
    currentHealthy = undefined;
    /**
    * minimum desired number of healthy pods
    * @member {Number} desiredHealthy
    */
    desiredHealthy = undefined;
    /**
    * DisruptedPods contains information about pods whose eviction was processed by the API server eviction subresource handler but has not yet been observed by the PodDisruptionBudget controller. A pod will be in this map from the time when the API server processed the eviction request to the time when the pod is seen by PDB controller as having been marked for deletion (or after a timeout). The key in the map is the name of the pod and the value is the time when the API server processed the eviction request. If the deletion didn't occur and a pod is still there it will be removed from the list automatically by PodDisruptionBudget controller after some time. If everything goes smooth this map should be empty for the most of the time. Large number of entries in the map may indicate problems with pod deletions.
    * @member {Object.<String, Date>} disruptedPods
    */
    disruptedPods = undefined;
    /**
    * Number of pod disruptions that are currently allowed.
    * @member {Number} disruptionsAllowed
    */
    disruptionsAllowed = undefined;
    /**
    * total number of pods counted by this disruption budget
    * @member {Number} expectedPods
    */
    expectedPods = undefined;
    /**
    * Most recent generation observed when updating this PDB status. PodDisruptionsAllowed and other status informatio is valid only if observedGeneration equals to PDB's object generation.
    * @member {Number} observedGeneration
    */
    observedGeneration = undefined;








}


