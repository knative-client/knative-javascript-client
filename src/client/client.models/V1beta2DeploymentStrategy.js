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
import V1beta2RollingUpdateDeployment from './V1beta2RollingUpdateDeployment';





/**
* The V1beta2DeploymentStrategy model module.
* @module client/client.models/V1beta2DeploymentStrategy
* @version 0.1
*/
export default class V1beta2DeploymentStrategy {
    /**
    * Constructs a new <code>V1beta2DeploymentStrategy</code>.
    * DeploymentStrategy describes how to replace existing pods with new ones.
    * @alias module:client/client.models/V1beta2DeploymentStrategy
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1beta2DeploymentStrategy</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta2DeploymentStrategy} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta2DeploymentStrategy} The populated <code>V1beta2DeploymentStrategy</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta2DeploymentStrategy();

            
            
            

            if (data.hasOwnProperty('rollingUpdate')) {
                obj['rollingUpdate'] = V1beta2RollingUpdateDeployment.constructFromObject(data['rollingUpdate']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
    * @member {module:client/client.models/V1beta2RollingUpdateDeployment} rollingUpdate
    */
    rollingUpdate = undefined;
    /**
    * Type of deployment. Can be \"Recreate\" or \"RollingUpdate\". Default is RollingUpdate.
    * @member {String} type
    */
    type = undefined;








}


