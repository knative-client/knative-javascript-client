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
* The V1AttachedVolume model module.
* @module client/client.models/V1AttachedVolume
* @version 0.1
*/
export default class V1AttachedVolume {
    /**
    * Constructs a new <code>V1AttachedVolume</code>.
    * AttachedVolume describes a volume attached to a node
    * @alias module:client/client.models/V1AttachedVolume
    * @class
    * @param devicePath {String} DevicePath represents the device path where the volume should be available
    * @param name {String} Name of the attached volume
    */

    constructor(devicePath, name) {
        

        
        

        this['devicePath'] = devicePath;this['name'] = name;

        
    }

    /**
    * Constructs a <code>V1AttachedVolume</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1AttachedVolume} obj Optional instance to populate.
    * @return {module:client/client.models/V1AttachedVolume} The populated <code>V1AttachedVolume</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AttachedVolume();

            
            
            

            if (data.hasOwnProperty('devicePath')) {
                obj['devicePath'] = ApiClient.convertToType(data['devicePath'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * DevicePath represents the device path where the volume should be available
    * @member {String} devicePath
    */
    devicePath = undefined;
    /**
    * Name of the attached volume
    * @member {String} name
    */
    name = undefined;








}


