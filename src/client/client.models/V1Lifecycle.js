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
import V1Handler from './V1Handler';





/**
* The V1Lifecycle model module.
* @module client/client.models/V1Lifecycle
* @version 0.1
*/
export default class V1Lifecycle {
    /**
    * Constructs a new <code>V1Lifecycle</code>.
    * Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
    * @alias module:client/client.models/V1Lifecycle
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1Lifecycle</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1Lifecycle} obj Optional instance to populate.
    * @return {module:client/client.models/V1Lifecycle} The populated <code>V1Lifecycle</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Lifecycle();

            
            
            

            if (data.hasOwnProperty('postStart')) {
                obj['postStart'] = V1Handler.constructFromObject(data['postStart']);
            }
            if (data.hasOwnProperty('preStop')) {
                obj['preStop'] = V1Handler.constructFromObject(data['preStop']);
            }
        }
        return obj;
    }

    /**
    * PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
    * @member {module:client/client.models/V1Handler} postStart
    */
    postStart = undefined;
    /**
    * PreStop is called immediately before a container is terminated due to an API request or management event such as liveness probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The reason for termination is passed to the handler. The Pod's termination grace period countdown begins before the PreStop hooked is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod's termination grace period. Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
    * @member {module:client/client.models/V1Handler} preStop
    */
    preStop = undefined;








}


