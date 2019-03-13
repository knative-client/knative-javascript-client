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
import V1NodeSelector from './V1NodeSelector';





/**
* The V1VolumeNodeAffinity model module.
* @module client/client.models/V1VolumeNodeAffinity
* @version 0.1
*/
export default class V1VolumeNodeAffinity {
    /**
    * Constructs a new <code>V1VolumeNodeAffinity</code>.
    * VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
    * @alias module:client/client.models/V1VolumeNodeAffinity
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1VolumeNodeAffinity</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1VolumeNodeAffinity} obj Optional instance to populate.
    * @return {module:client/client.models/V1VolumeNodeAffinity} The populated <code>V1VolumeNodeAffinity</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1VolumeNodeAffinity();

            
            
            

            if (data.hasOwnProperty('required')) {
                obj['required'] = V1NodeSelector.constructFromObject(data['required']);
            }
        }
        return obj;
    }

    /**
    * Required specifies hard node constraints that must be met.
    * @member {module:client/client.models/V1NodeSelector} required
    */
    required = undefined;








}


