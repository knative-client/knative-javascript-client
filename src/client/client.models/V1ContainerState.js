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
import V1ContainerStateRunning from './V1ContainerStateRunning';
import V1ContainerStateTerminated from './V1ContainerStateTerminated';
import V1ContainerStateWaiting from './V1ContainerStateWaiting';





/**
* The V1ContainerState model module.
* @module client/client.models/V1ContainerState
* @version 0.1
*/
export default class V1ContainerState {
    /**
    * Constructs a new <code>V1ContainerState</code>.
    * ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
    * @alias module:client/client.models/V1ContainerState
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1ContainerState</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1ContainerState} obj Optional instance to populate.
    * @return {module:client/client.models/V1ContainerState} The populated <code>V1ContainerState</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ContainerState();

            
            
            

            if (data.hasOwnProperty('running')) {
                obj['running'] = V1ContainerStateRunning.constructFromObject(data['running']);
            }
            if (data.hasOwnProperty('terminated')) {
                obj['terminated'] = V1ContainerStateTerminated.constructFromObject(data['terminated']);
            }
            if (data.hasOwnProperty('waiting')) {
                obj['waiting'] = V1ContainerStateWaiting.constructFromObject(data['waiting']);
            }
        }
        return obj;
    }

    /**
    * Details about a running container
    * @member {module:client/client.models/V1ContainerStateRunning} running
    */
    running = undefined;
    /**
    * Details about a terminated container
    * @member {module:client/client.models/V1ContainerStateTerminated} terminated
    */
    terminated = undefined;
    /**
    * Details about a waiting container
    * @member {module:client/client.models/V1ContainerStateWaiting} waiting
    */
    waiting = undefined;








}


