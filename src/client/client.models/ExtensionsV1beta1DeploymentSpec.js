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
import ExtensionsV1beta1DeploymentStrategy from './ExtensionsV1beta1DeploymentStrategy';
import ExtensionsV1beta1RollbackConfig from './ExtensionsV1beta1RollbackConfig';
import V1LabelSelector from './V1LabelSelector';
import V1PodTemplateSpec from './V1PodTemplateSpec';





/**
* The ExtensionsV1beta1DeploymentSpec model module.
* @module client/client.models/ExtensionsV1beta1DeploymentSpec
* @version 0.1
*/
export default class ExtensionsV1beta1DeploymentSpec {
    /**
    * Constructs a new <code>ExtensionsV1beta1DeploymentSpec</code>.
    * DeploymentSpec is the specification of the desired behavior of the Deployment.
    * @alias module:client/client.models/ExtensionsV1beta1DeploymentSpec
    * @class
    * @param template {module:client/client.models/V1PodTemplateSpec} Template describes the pods that will be created.
    */

    constructor(template) {
        

        
        

        this['template'] = template;

        
    }

    /**
    * Constructs a <code>ExtensionsV1beta1DeploymentSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/ExtensionsV1beta1DeploymentSpec} obj Optional instance to populate.
    * @return {module:client/client.models/ExtensionsV1beta1DeploymentSpec} The populated <code>ExtensionsV1beta1DeploymentSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtensionsV1beta1DeploymentSpec();

            
            
            

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
            if (data.hasOwnProperty('rollbackTo')) {
                obj['rollbackTo'] = ExtensionsV1beta1RollbackConfig.constructFromObject(data['rollbackTo']);
            }
            if (data.hasOwnProperty('selector')) {
                obj['selector'] = V1LabelSelector.constructFromObject(data['selector']);
            }
            if (data.hasOwnProperty('strategy')) {
                obj['strategy'] = ExtensionsV1beta1DeploymentStrategy.constructFromObject(data['strategy']);
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
    * Indicates that the deployment is paused and will not be processed by the deployment controller.
    * @member {Boolean} paused
    */
    paused = undefined;
    /**
    * The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. This is set to the max value of int32 (i.e. 2147483647) by default, which means \"no deadline\".
    * @member {Number} progressDeadlineSeconds
    */
    progressDeadlineSeconds = undefined;
    /**
    * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
    * @member {Number} replicas
    */
    replicas = undefined;
    /**
    * The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. This is set to the max value of int32 (i.e. 2147483647) by default, which means \"retaining all old RelicaSets\".
    * @member {Number} revisionHistoryLimit
    */
    revisionHistoryLimit = undefined;
    /**
    * DEPRECATED. The config this deployment is rolling back to. Will be cleared after rollback is done.
    * @member {module:client/client.models/ExtensionsV1beta1RollbackConfig} rollbackTo
    */
    rollbackTo = undefined;
    /**
    * Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment.
    * @member {module:client/client.models/V1LabelSelector} selector
    */
    selector = undefined;
    /**
    * The deployment strategy to use to replace existing pods with new ones.
    * @member {module:client/client.models/ExtensionsV1beta1DeploymentStrategy} strategy
    */
    strategy = undefined;
    /**
    * Template describes the pods that will be created.
    * @member {module:client/client.models/V1PodTemplateSpec} template
    */
    template = undefined;








}


