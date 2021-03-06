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
import V1KeyToPath from './V1KeyToPath';





/**
* The V1SecretVolumeSource model module.
* @module client/client.models/V1SecretVolumeSource
* @version 0.1
*/
export default class V1SecretVolumeSource {
    /**
    * Constructs a new <code>V1SecretVolumeSource</code>.
    * Adapts a Secret into a volume.  The contents of the target Secret&#39;s Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
    * @alias module:client/client.models/V1SecretVolumeSource
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1SecretVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1SecretVolumeSource} obj Optional instance to populate.
    * @return {module:client/client.models/V1SecretVolumeSource} The populated <code>V1SecretVolumeSource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1SecretVolumeSource();

            
            
            

            if (data.hasOwnProperty('defaultMode')) {
                obj['defaultMode'] = ApiClient.convertToType(data['defaultMode'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [V1KeyToPath]);
            }
            if (data.hasOwnProperty('optional')) {
                obj['optional'] = ApiClient.convertToType(data['optional'], 'Boolean');
            }
            if (data.hasOwnProperty('secretName')) {
                obj['secretName'] = ApiClient.convertToType(data['secretName'], 'String');
            }
        }
        return obj;
    }

    /**
    * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
    * @member {Number} defaultMode
    */
    defaultMode = undefined;
    /**
    * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
    * @member {Array.<module:client/client.models/V1KeyToPath>} items
    */
    items = undefined;
    /**
    * Specify whether the Secret or it's keys must be defined
    * @member {Boolean} optional
    */
    optional = undefined;
    /**
    * Name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
    * @member {String} secretName
    */
    secretName = undefined;








}


