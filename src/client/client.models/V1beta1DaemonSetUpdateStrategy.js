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
import V1beta1RollingUpdateDaemonSet from './V1beta1RollingUpdateDaemonSet';





/**
* The V1beta1DaemonSetUpdateStrategy model module.
* @module client/client.models/V1beta1DaemonSetUpdateStrategy
* @version 0.1
*/
export default class V1beta1DaemonSetUpdateStrategy {
    /**
    * Constructs a new <code>V1beta1DaemonSetUpdateStrategy</code>.
    * @alias module:client/client.models/V1beta1DaemonSetUpdateStrategy
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1beta1DaemonSetUpdateStrategy</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta1DaemonSetUpdateStrategy} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta1DaemonSetUpdateStrategy} The populated <code>V1beta1DaemonSetUpdateStrategy</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1DaemonSetUpdateStrategy();

            
            
            

            if (data.hasOwnProperty('rollingUpdate')) {
                obj['rollingUpdate'] = V1beta1RollingUpdateDaemonSet.constructFromObject(data['rollingUpdate']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * Rolling update config params. Present only if type = \"RollingUpdate\".
    * @member {module:client/client.models/V1beta1RollingUpdateDaemonSet} rollingUpdate
    */
    rollingUpdate = undefined;
    /**
    * Type of daemon set update. Can be \"RollingUpdate\" or \"OnDelete\". Default is OnDelete.
    * @member {String} type
    */
    type = undefined;








}


