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
* The V1PhotonPersistentDiskVolumeSource model module.
* @module client/client.models/V1PhotonPersistentDiskVolumeSource
* @version 0.1
*/
export default class V1PhotonPersistentDiskVolumeSource {
    /**
    * Constructs a new <code>V1PhotonPersistentDiskVolumeSource</code>.
    * Represents a Photon Controller persistent disk resource.
    * @alias module:client/client.models/V1PhotonPersistentDiskVolumeSource
    * @class
    * @param pdID {String} ID that identifies Photon Controller persistent disk
    */

    constructor(pdID) {
        

        
        

        this['pdID'] = pdID;

        
    }

    /**
    * Constructs a <code>V1PhotonPersistentDiskVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1PhotonPersistentDiskVolumeSource} obj Optional instance to populate.
    * @return {module:client/client.models/V1PhotonPersistentDiskVolumeSource} The populated <code>V1PhotonPersistentDiskVolumeSource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PhotonPersistentDiskVolumeSource();

            
            
            

            if (data.hasOwnProperty('fsType')) {
                obj['fsType'] = ApiClient.convertToType(data['fsType'], 'String');
            }
            if (data.hasOwnProperty('pdID')) {
                obj['pdID'] = ApiClient.convertToType(data['pdID'], 'String');
            }
        }
        return obj;
    }

    /**
    * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
    * @member {String} fsType
    */
    fsType = undefined;
    /**
    * ID that identifies Photon Controller persistent disk
    * @member {String} pdID
    */
    pdID = undefined;








}


