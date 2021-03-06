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
* The IoIstioConfigV1alpha2BypassListMetadata model module.
* @module client/client.models/IoIstioConfigV1alpha2BypassListMetadata
* @version 0.1
*/
export default class IoIstioConfigV1alpha2BypassListMetadata {
    /**
    * Constructs a new <code>IoIstioConfigV1alpha2BypassListMetadata</code>.
    * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
    * @alias module:client/client.models/IoIstioConfigV1alpha2BypassListMetadata
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>IoIstioConfigV1alpha2BypassListMetadata</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/IoIstioConfigV1alpha2BypassListMetadata} obj Optional instance to populate.
    * @return {module:client/client.models/IoIstioConfigV1alpha2BypassListMetadata} The populated <code>IoIstioConfigV1alpha2BypassListMetadata</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoIstioConfigV1alpha2BypassListMetadata();

            
            
            

            if (data.hasOwnProperty('continue')) {
                obj['continue'] = ApiClient.convertToType(data['continue'], 'String');
            }
            if (data.hasOwnProperty('resourceVersion')) {
                obj['resourceVersion'] = ApiClient.convertToType(data['resourceVersion'], 'String');
            }
            if (data.hasOwnProperty('selfLink')) {
                obj['selfLink'] = ApiClient.convertToType(data['selfLink'], 'String');
            }
        }
        return obj;
    }

    /**
    * continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.
    * @member {String} continue
    */
    continue = undefined;
    /**
    * String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
    * @member {String} resourceVersion
    */
    resourceVersion = undefined;
    /**
    * selfLink is a URL representing this object. Populated by the system. Read-only.
    * @member {String} selfLink
    */
    selfLink = undefined;








}


