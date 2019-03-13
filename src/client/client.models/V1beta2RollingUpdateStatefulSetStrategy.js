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
* The V1beta2RollingUpdateStatefulSetStrategy model module.
* @module client/client.models/V1beta2RollingUpdateStatefulSetStrategy
* @version 0.1
*/
export default class V1beta2RollingUpdateStatefulSetStrategy {
    /**
    * Constructs a new <code>V1beta2RollingUpdateStatefulSetStrategy</code>.
    * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
    * @alias module:client/client.models/V1beta2RollingUpdateStatefulSetStrategy
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1beta2RollingUpdateStatefulSetStrategy</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta2RollingUpdateStatefulSetStrategy} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta2RollingUpdateStatefulSetStrategy} The populated <code>V1beta2RollingUpdateStatefulSetStrategy</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta2RollingUpdateStatefulSetStrategy();

            
            
            

            if (data.hasOwnProperty('partition')) {
                obj['partition'] = ApiClient.convertToType(data['partition'], 'Number');
            }
        }
        return obj;
    }

    /**
    * Partition indicates the ordinal at which the StatefulSet should be partitioned. Default value is 0.
    * @member {Number} partition
    */
    partition = undefined;








}

