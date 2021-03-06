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
* The ExtensionsV1beta1IngressBackend model module.
* @module client/client.models/ExtensionsV1beta1IngressBackend
* @version 0.1
*/
export default class ExtensionsV1beta1IngressBackend {
    /**
    * Constructs a new <code>ExtensionsV1beta1IngressBackend</code>.
    * IngressBackend describes all endpoints for a given service and port.
    * @alias module:client/client.models/ExtensionsV1beta1IngressBackend
    * @class
    * @param serviceName {String} Specifies the name of the referenced service.
    * @param servicePort {Object} Specifies the port of the referenced service.
    */

    constructor(serviceName, servicePort) {
        

        
        

        this['serviceName'] = serviceName;this['servicePort'] = servicePort;

        
    }

    /**
    * Constructs a <code>ExtensionsV1beta1IngressBackend</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/ExtensionsV1beta1IngressBackend} obj Optional instance to populate.
    * @return {module:client/client.models/ExtensionsV1beta1IngressBackend} The populated <code>ExtensionsV1beta1IngressBackend</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtensionsV1beta1IngressBackend();

            
            
            

            if (data.hasOwnProperty('serviceName')) {
                obj['serviceName'] = ApiClient.convertToType(data['serviceName'], 'String');
            }
            if (data.hasOwnProperty('servicePort')) {
                obj['servicePort'] = ApiClient.convertToType(data['servicePort'], Object);
            }
        }
        return obj;
    }

    /**
    * Specifies the name of the referenced service.
    * @member {String} serviceName
    */
    serviceName = undefined;
    /**
    * Specifies the port of the referenced service.
    * @member {Object} servicePort
    */
    servicePort = undefined;








}


