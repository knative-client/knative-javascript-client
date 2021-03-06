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
* The V1UserInfo model module.
* @module client/client.models/V1UserInfo
* @version 0.1
*/
export default class V1UserInfo {
    /**
    * Constructs a new <code>V1UserInfo</code>.
    * UserInfo holds the information about the user needed to implement the user.Info interface.
    * @alias module:client/client.models/V1UserInfo
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1UserInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1UserInfo} obj Optional instance to populate.
    * @return {module:client/client.models/V1UserInfo} The populated <code>V1UserInfo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1UserInfo();

            
            
            

            if (data.hasOwnProperty('extra')) {
                obj['extra'] = ApiClient.convertToType(data['extra'], {'String': ['String']});
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], ['String']);
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }

    /**
    * Any additional information provided by the authenticator.
    * @member {Object.<String, Array.<String>>} extra
    */
    extra = undefined;
    /**
    * The names of groups this user is a part of.
    * @member {Array.<String>} groups
    */
    groups = undefined;
    /**
    * A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
    * @member {String} uid
    */
    uid = undefined;
    /**
    * The name that uniquely identifies this user among all active users.
    * @member {String} username
    */
    username = undefined;








}


