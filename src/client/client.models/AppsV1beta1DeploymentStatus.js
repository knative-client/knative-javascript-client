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
import AppsV1beta1DeploymentCondition from './AppsV1beta1DeploymentCondition';





/**
* The AppsV1beta1DeploymentStatus model module.
* @module client/client.models/AppsV1beta1DeploymentStatus
* @version 0.1
*/
export default class AppsV1beta1DeploymentStatus {
    /**
    * Constructs a new <code>AppsV1beta1DeploymentStatus</code>.
    * DeploymentStatus is the most recently observed status of the Deployment.
    * @alias module:client/client.models/AppsV1beta1DeploymentStatus
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>AppsV1beta1DeploymentStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/AppsV1beta1DeploymentStatus} obj Optional instance to populate.
    * @return {module:client/client.models/AppsV1beta1DeploymentStatus} The populated <code>AppsV1beta1DeploymentStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppsV1beta1DeploymentStatus();

            
            
            

            if (data.hasOwnProperty('availableReplicas')) {
                obj['availableReplicas'] = ApiClient.convertToType(data['availableReplicas'], 'Number');
            }
            if (data.hasOwnProperty('collisionCount')) {
                obj['collisionCount'] = ApiClient.convertToType(data['collisionCount'], 'Number');
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [AppsV1beta1DeploymentCondition]);
            }
            if (data.hasOwnProperty('observedGeneration')) {
                obj['observedGeneration'] = ApiClient.convertToType(data['observedGeneration'], 'Number');
            }
            if (data.hasOwnProperty('readyReplicas')) {
                obj['readyReplicas'] = ApiClient.convertToType(data['readyReplicas'], 'Number');
            }
            if (data.hasOwnProperty('replicas')) {
                obj['replicas'] = ApiClient.convertToType(data['replicas'], 'Number');
            }
            if (data.hasOwnProperty('unavailableReplicas')) {
                obj['unavailableReplicas'] = ApiClient.convertToType(data['unavailableReplicas'], 'Number');
            }
            if (data.hasOwnProperty('updatedReplicas')) {
                obj['updatedReplicas'] = ApiClient.convertToType(data['updatedReplicas'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.
    * @member {Number} availableReplicas
    */
    availableReplicas = undefined;
    /**
    * Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
    * @member {Number} collisionCount
    */
    collisionCount = undefined;
    /**
    * Represents the latest available observations of a deployment's current state.
    * @member {Array.<module:client/client.models/AppsV1beta1DeploymentCondition>} conditions
    */
    conditions = undefined;
    /**
    * The generation observed by the deployment controller.
    * @member {Number} observedGeneration
    */
    observedGeneration = undefined;
    /**
    * Total number of ready pods targeted by this deployment.
    * @member {Number} readyReplicas
    */
    readyReplicas = undefined;
    /**
    * Total number of non-terminated pods targeted by this deployment (their labels match the selector).
    * @member {Number} replicas
    */
    replicas = undefined;
    /**
    * Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
    * @member {Number} unavailableReplicas
    */
    unavailableReplicas = undefined;
    /**
    * Total number of non-terminated pods targeted by this deployment that have the desired template spec.
    * @member {Number} updatedReplicas
    */
    updatedReplicas = undefined;








}


