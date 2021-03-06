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
* The V1LoadBalancerIngress model module.
* @module client/client.models/V1LoadBalancerIngress
* @version 0.1
*/
export default class V1LoadBalancerIngress {
    /**
    * Constructs a new <code>V1LoadBalancerIngress</code>.
    * LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point.
    * @alias module:client/client.models/V1LoadBalancerIngress
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1LoadBalancerIngress</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1LoadBalancerIngress} obj Optional instance to populate.
    * @return {module:client/client.models/V1LoadBalancerIngress} The populated <code>V1LoadBalancerIngress</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1LoadBalancerIngress();

            
            
            

            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
            }
        }
        return obj;
    }

    /**
    * Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers)
    * @member {String} hostname
    */
    hostname = undefined;
    /**
    * IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers)
    * @member {String} ip
    */
    ip = undefined;








}


