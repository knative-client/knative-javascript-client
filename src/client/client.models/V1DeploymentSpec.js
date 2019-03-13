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
import V1DeploymentStrategy from './V1DeploymentStrategy';
import V1LabelSelector from './V1LabelSelector';
import V1PodTemplateSpec from './V1PodTemplateSpec';





/**
* The V1DeploymentSpec model module.
* @module client/client.models/V1DeploymentSpec
* @version 0.1
*/
export default class V1DeploymentSpec {
    /**
    * Constructs a new <code>V1DeploymentSpec</code>.
    * DeploymentSpec is the specification of the desired behavior of the Deployment.
    * @alias module:client/client.models/V1DeploymentSpec
    * @class
    * @param selector {module:client/client.models/V1LabelSelector} Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. It must match the pod template's labels.
    * @param template {module:client/client.models/V1PodTemplateSpec} Template describes the pods that will be created.
    */

    constructor(selector, template) {
        

        
        

        this['selector'] = selector;this['template'] = template;

        
    }

    /**
    * Constructs a <code>V1DeploymentSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1DeploymentSpec} obj Optional instance to populate.
    * @return {module:client/client.models/V1DeploymentSpec} The populated <code>V1DeploymentSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1DeploymentSpec();

            
            
            

            if (data.hasOwnProperty('minReadySeconds')) {
                obj['minReadySeconds'] = ApiClient.convertToType(data['minReadySeconds'], 'Number');
            }
            if (data.hasOwnProperty('paused')) {
                obj['paused'] = ApiClient.convertToType(data['paused'], 'Boolean');
            }
            if (data.hasOwnProperty('progressDeadlineSeconds')) {
                obj['progressDeadlineSeconds'] = ApiClient.convertToType(data['progressDeadlineSeconds'], 'Number');
            }
            if (data.hasOwnProperty('replicas')) {
                obj['replicas'] = ApiClient.convertToType(data['replicas'], 'Number');
            }
            if (data.hasOwnProperty('revisionHistoryLimit')) {
                obj['revisionHistoryLimit'] = ApiClient.convertToType(data['revisionHistoryLimit'], 'Number');
            }
            if (data.hasOwnProperty('selector')) {
                obj['selector'] = V1LabelSelector.constructFromObject(data['selector']);
            }
            if (data.hasOwnProperty('strategy')) {
                obj['strategy'] = V1DeploymentStrategy.constructFromObject(data['strategy']);
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = V1PodTemplateSpec.constructFromObject(data['template']);
            }
        }
        return obj;
    }

    /**
    * Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
    * @member {Number} minReadySeconds
    */
    minReadySeconds = undefined;
    /**
    * Indicates that the deployment is paused.
    * @member {Boolean} paused
    */
    paused = undefined;
    /**
    * The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
    * @member {Number} progressDeadlineSeconds
    */
    progressDeadlineSeconds = undefined;
    /**
    * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
    * @member {Number} replicas
    */
    replicas = undefined;
    /**
    * The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
    * @member {Number} revisionHistoryLimit
    */
    revisionHistoryLimit = undefined;
    /**
    * Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. It must match the pod template's labels.
    * @member {module:client/client.models/V1LabelSelector} selector
    */
    selector = undefined;
    /**
    * The deployment strategy to use to replace existing pods with new ones.
    * @member {module:client/client.models/V1DeploymentStrategy} strategy
    */
    strategy = undefined;
    /**
    * Template describes the pods that will be created.
    * @member {module:client/client.models/V1PodTemplateSpec} template
    */
    template = undefined;








}


