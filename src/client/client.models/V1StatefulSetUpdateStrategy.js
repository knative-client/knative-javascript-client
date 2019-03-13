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
import V1RollingUpdateStatefulSetStrategy from './V1RollingUpdateStatefulSetStrategy';





/**
* The V1StatefulSetUpdateStrategy model module.
* @module client/client.models/V1StatefulSetUpdateStrategy
* @version 0.1
*/
export default class V1StatefulSetUpdateStrategy {
    /**
    * Constructs a new <code>V1StatefulSetUpdateStrategy</code>.
    * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
    * @alias module:client/client.models/V1StatefulSetUpdateStrategy
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1StatefulSetUpdateStrategy</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1StatefulSetUpdateStrategy} obj Optional instance to populate.
    * @return {module:client/client.models/V1StatefulSetUpdateStrategy} The populated <code>V1StatefulSetUpdateStrategy</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1StatefulSetUpdateStrategy();

            
            
            

            if (data.hasOwnProperty('rollingUpdate')) {
                obj['rollingUpdate'] = V1RollingUpdateStatefulSetStrategy.constructFromObject(data['rollingUpdate']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.
    * @member {module:client/client.models/V1RollingUpdateStatefulSetStrategy} rollingUpdate
    */
    rollingUpdate = undefined;
    /**
    * Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.
    * @member {String} type
    */
    type = undefined;








}


