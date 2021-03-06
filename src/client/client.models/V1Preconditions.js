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
* The V1Preconditions model module.
* @module client/client.models/V1Preconditions
* @version 0.1
*/
export default class V1Preconditions {
    /**
    * Constructs a new <code>V1Preconditions</code>.
    * Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
    * @alias module:client/client.models/V1Preconditions
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1Preconditions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1Preconditions} obj Optional instance to populate.
    * @return {module:client/client.models/V1Preconditions} The populated <code>V1Preconditions</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Preconditions();

            
            
            

            if (data.hasOwnProperty('resourceVersion')) {
                obj['resourceVersion'] = ApiClient.convertToType(data['resourceVersion'], 'String');
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
        }
        return obj;
    }

    /**
    * Specifies the target ResourceVersion
    * @member {String} resourceVersion
    */
    resourceVersion = undefined;
    /**
    * Specifies the target UID.
    * @member {String} uid
    */
    uid = undefined;








}


