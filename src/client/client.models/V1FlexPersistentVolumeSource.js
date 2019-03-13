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
import V1SecretReference from './V1SecretReference';





/**
* The V1FlexPersistentVolumeSource model module.
* @module client/client.models/V1FlexPersistentVolumeSource
* @version 0.1
*/
export default class V1FlexPersistentVolumeSource {
    /**
    * Constructs a new <code>V1FlexPersistentVolumeSource</code>.
    * FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.
    * @alias module:client/client.models/V1FlexPersistentVolumeSource
    * @class
    * @param driver {String} Driver is the name of the driver to use for this volume.
    */

    constructor(driver) {
        

        
        

        this['driver'] = driver;

        
    }

    /**
    * Constructs a <code>V1FlexPersistentVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1FlexPersistentVolumeSource} obj Optional instance to populate.
    * @return {module:client/client.models/V1FlexPersistentVolumeSource} The populated <code>V1FlexPersistentVolumeSource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1FlexPersistentVolumeSource();

            
            
            

            if (data.hasOwnProperty('driver')) {
                obj['driver'] = ApiClient.convertToType(data['driver'], 'String');
            }
            if (data.hasOwnProperty('fsType')) {
                obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], {'String': 'String'});
            }
            if (data.hasOwnProperty('readOnly')) {
                obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('secretRef')) {
                obj['secretRef'] = V1SecretReference.constructFromObject(data['secretRef']);
            }
        }
        return obj;
    }

    /**
    * Driver is the name of the driver to use for this volume.
    * @member {String} driver
    */
    driver = undefined;
    /**
    * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". The default filesystem depends on FlexVolume script.
    * @member {String} fsType
    */
    fsType = undefined;
    /**
    * Optional: Extra command options if any.
    * @member {Object.<String, String>} options
    */
    options = undefined;
    /**
    * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
    * @member {Boolean} readOnly
    */
    readOnly = undefined;
    /**
    * Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
    * @member {module:client/client.models/V1SecretReference} secretRef
    */
    secretRef = undefined;








}

