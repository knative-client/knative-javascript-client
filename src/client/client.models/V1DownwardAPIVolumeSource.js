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
import V1DownwardAPIVolumeFile from './V1DownwardAPIVolumeFile';





/**
* The V1DownwardAPIVolumeSource model module.
* @module client/client.models/V1DownwardAPIVolumeSource
* @version 0.1
*/
export default class V1DownwardAPIVolumeSource {
    /**
    * Constructs a new <code>V1DownwardAPIVolumeSource</code>.
    * DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
    * @alias module:client/client.models/V1DownwardAPIVolumeSource
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1DownwardAPIVolumeSource</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1DownwardAPIVolumeSource} obj Optional instance to populate.
    * @return {module:client/client.models/V1DownwardAPIVolumeSource} The populated <code>V1DownwardAPIVolumeSource</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1DownwardAPIVolumeSource();

            
            
            

            if (data.hasOwnProperty('defaultMode')) {
                obj['defaultMode'] = ApiClient.convertToType(data['defaultMode'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [V1DownwardAPIVolumeFile]);
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
    * Items is a list of downward API volume file
    * @member {Array.<module:client/client.models/V1DownwardAPIVolumeFile>} items
    */
    items = undefined;








}

