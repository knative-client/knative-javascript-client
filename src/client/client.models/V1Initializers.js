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
import V1Initializer from './V1Initializer';
import V1Status from './V1Status';





/**
* The V1Initializers model module.
* @module client/client.models/V1Initializers
* @version 0.1
*/
export default class V1Initializers {
    /**
    * Constructs a new <code>V1Initializers</code>.
    * Initializers tracks the progress of initialization.
    * @alias module:client/client.models/V1Initializers
    * @class
    * @param pending {Array.<module:client/client.models/V1Initializer>} Pending is a list of initializers that must execute in order before this object is visible. When the last pending initializer is removed, and no failing result is set, the initializers struct will be set to nil and the object is considered as initialized and visible to all clients.
    */

    constructor(pending) {
        

        
        

        this['pending'] = pending;

        
    }

    /**
    * Constructs a <code>V1Initializers</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1Initializers} obj Optional instance to populate.
    * @return {module:client/client.models/V1Initializers} The populated <code>V1Initializers</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Initializers();

            
            
            

            if (data.hasOwnProperty('pending')) {
                obj['pending'] = ApiClient.convertToType(data['pending'], [V1Initializer]);
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = V1Status.constructFromObject(data['result']);
            }
        }
        return obj;
    }

    /**
    * Pending is a list of initializers that must execute in order before this object is visible. When the last pending initializer is removed, and no failing result is set, the initializers struct will be set to nil and the object is considered as initialized and visible to all clients.
    * @member {Array.<module:client/client.models/V1Initializer>} pending
    */
    pending = undefined;
    /**
    * If result is set with the Failure field, the object will be persisted to storage and then deleted, ensuring that other clients can observe the deletion.
    * @member {module:client/client.models/V1Status} result
    */
    result = undefined;








}


