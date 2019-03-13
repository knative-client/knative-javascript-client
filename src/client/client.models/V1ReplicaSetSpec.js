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
import V1PodTemplateSpec from './V1PodTemplateSpec';





/**
* The V1ReplicaSetSpec model module.
* @module client/client.models/V1ReplicaSetSpec
* @version 0.1
*/
export default class V1ReplicaSetSpec {
    /**
    * Constructs a new <code>V1ReplicaSetSpec</code>.
    * ReplicaSetSpec is the specification of a ReplicaSet.
    * @alias module:client/client.models/V1ReplicaSetSpec
    * @class
    * @param selector {module:client/client.models/V1LabelSelector} Selector is a label query over pods that should match the replica count. Label keys and values that must match in order to be controlled by this replica set. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
    */

    constructor(selector) {
        

        
        

        this['selector'] = selector;

        
    }

    /**
    * Constructs a <code>V1ReplicaSetSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1ReplicaSetSpec} obj Optional instance to populate.
    * @return {module:client/client.models/V1ReplicaSetSpec} The populated <code>V1ReplicaSetSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ReplicaSetSpec();

            
            
            

            if (data.hasOwnProperty('minReadySeconds')) {
                obj['minReadySeconds'] = ApiClient.convertToType(data['minReadySeconds'], 'Number');
            }
            if (data.hasOwnProperty('replicas')) {
                obj['replicas'] = ApiClient.convertToType(data['replicas'], 'Number');
            }
            if (data.hasOwnProperty('selector')) {
                obj['selector'] = V1LabelSelector.constructFromObject(data['selector']);
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
    * Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
    * @member {Number} replicas
    */
    replicas = undefined;
    /**
    * Selector is a label query over pods that should match the replica count. Label keys and values that must match in order to be controlled by this replica set. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
    * @member {module:client/client.models/V1LabelSelector} selector
    */
    selector = undefined;
    /**
    * Template is the object that describes the pod that will be created if insufficient replicas are detected. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
    * @member {module:client/client.models/V1PodTemplateSpec} template
    */
    template = undefined;








}


