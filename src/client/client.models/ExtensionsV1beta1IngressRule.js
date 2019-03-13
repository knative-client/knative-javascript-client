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
import ExtensionsV1beta1HTTPIngressRuleValue from './ExtensionsV1beta1HTTPIngressRuleValue';





/**
* The ExtensionsV1beta1IngressRule model module.
* @module client/client.models/ExtensionsV1beta1IngressRule
* @version 0.1
*/
export default class ExtensionsV1beta1IngressRule {
    /**
    * Constructs a new <code>ExtensionsV1beta1IngressRule</code>.
    * IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.
    * @alias module:client/client.models/ExtensionsV1beta1IngressRule
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ExtensionsV1beta1IngressRule</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/ExtensionsV1beta1IngressRule} obj Optional instance to populate.
    * @return {module:client/client.models/ExtensionsV1beta1IngressRule} The populated <code>ExtensionsV1beta1IngressRule</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtensionsV1beta1IngressRule();

            
            
            

            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('http')) {
                obj['http'] = ExtensionsV1beta1HTTPIngressRuleValue.constructFromObject(data['http']);
            }
        }
        return obj;
    }

    /**
    * Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the \"host\" part of the URI as defined in the RFC: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to the    IP in the Spec of the parent Ingress. 2. The `:` delimiter is not respected because ports are not allowed.    Currently the port of an Ingress is implicitly :80 for http and    :443 for https. Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.
    * @member {String} host
    */
    host = undefined;
    /**
    * @member {module:client/client.models/ExtensionsV1beta1HTTPIngressRuleValue} http
    */
    http = undefined;








}


