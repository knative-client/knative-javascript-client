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
* The V1ContainerStateTerminated model module.
* @module client/client.models/V1ContainerStateTerminated
* @version 0.1
*/
export default class V1ContainerStateTerminated {
    /**
    * Constructs a new <code>V1ContainerStateTerminated</code>.
    * ContainerStateTerminated is a terminated state of a container.
    * @alias module:client/client.models/V1ContainerStateTerminated
    * @class
    * @param exitCode {Number} Exit status from the last termination of the container
    */

    constructor(exitCode) {
        

        
        

        this['exitCode'] = exitCode;

        
    }

    /**
    * Constructs a <code>V1ContainerStateTerminated</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1ContainerStateTerminated} obj Optional instance to populate.
    * @return {module:client/client.models/V1ContainerStateTerminated} The populated <code>V1ContainerStateTerminated</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ContainerStateTerminated();

            
            
            

            if (data.hasOwnProperty('containerID')) {
                obj['containerID'] = ApiClient.convertToType(data['containerID'], 'String');
            }
            if (data.hasOwnProperty('exitCode')) {
                obj['exitCode'] = ApiClient.convertToType(data['exitCode'], 'Number');
            }
            if (data.hasOwnProperty('finishedAt')) {
                obj['finishedAt'] = ApiClient.convertToType(data['finishedAt'], 'Date');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('signal')) {
                obj['signal'] = ApiClient.convertToType(data['signal'], 'Number');
            }
            if (data.hasOwnProperty('startedAt')) {
                obj['startedAt'] = ApiClient.convertToType(data['startedAt'], 'Date');
            }
        }
        return obj;
    }

    /**
    * Container's ID in the format 'docker://<container_id>'
    * @member {String} containerID
    */
    containerID = undefined;
    /**
    * Exit status from the last termination of the container
    * @member {Number} exitCode
    */
    exitCode = undefined;
    /**
    * Time at which the container last terminated
    * @member {Date} finishedAt
    */
    finishedAt = undefined;
    /**
    * Message regarding the last termination of the container
    * @member {String} message
    */
    message = undefined;
    /**
    * (brief) reason from the last termination of the container
    * @member {String} reason
    */
    reason = undefined;
    /**
    * Signal from the last termination of the container
    * @member {Number} signal
    */
    signal = undefined;
    /**
    * Time at which previous execution of the container started
    * @member {Date} startedAt
    */
    startedAt = undefined;








}


