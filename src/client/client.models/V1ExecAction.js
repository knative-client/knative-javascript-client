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
* The V1ExecAction model module.
* @module client/client.models/V1ExecAction
* @version 0.1
*/
export default class V1ExecAction {
    /**
    * Constructs a new <code>V1ExecAction</code>.
    * ExecAction describes a \&quot;run in container\&quot; action.
    * @alias module:client/client.models/V1ExecAction
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1ExecAction</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1ExecAction} obj Optional instance to populate.
    * @return {module:client/client.models/V1ExecAction} The populated <code>V1ExecAction</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ExecAction();

            
            
            

            if (data.hasOwnProperty('command')) {
                obj['command'] = ApiClient.convertToType(data['command'], ['String']);
            }
        }
        return obj;
    }

    /**
    * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
    * @member {Array.<String>} command
    */
    command = undefined;








}

