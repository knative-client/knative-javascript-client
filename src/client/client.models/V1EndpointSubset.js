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
import V1EndpointAddress from './V1EndpointAddress';
import V1EndpointPort from './V1EndpointPort';





/**
* The V1EndpointSubset model module.
* @module client/client.models/V1EndpointSubset
* @version 0.1
*/
export default class V1EndpointSubset {
    /**
    * Constructs a new <code>V1EndpointSubset</code>.
    * EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:   {     Addresses: [{\&quot;ip\&quot;: \&quot;10.10.1.1\&quot;}, {\&quot;ip\&quot;: \&quot;10.10.2.2\&quot;}],     Ports:     [{\&quot;name\&quot;: \&quot;a\&quot;, \&quot;port\&quot;: 8675}, {\&quot;name\&quot;: \&quot;b\&quot;, \&quot;port\&quot;: 309}]   } The resulting set of endpoints can be viewed as:     a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],     b: [ 10.10.1.1:309, 10.10.2.2:309 ]
    * @alias module:client/client.models/V1EndpointSubset
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1EndpointSubset</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1EndpointSubset} obj Optional instance to populate.
    * @return {module:client/client.models/V1EndpointSubset} The populated <code>V1EndpointSubset</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1EndpointSubset();

            
            
            

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], [V1EndpointAddress]);
            }
            if (data.hasOwnProperty('notReadyAddresses')) {
                obj['notReadyAddresses'] = ApiClient.convertToType(data['notReadyAddresses'], [V1EndpointAddress]);
            }
            if (data.hasOwnProperty('ports')) {
                obj['ports'] = ApiClient.convertToType(data['ports'], [V1EndpointPort]);
            }
        }
        return obj;
    }

    /**
    * IP addresses which offer the related ports that are marked as ready. These endpoints should be considered safe for load balancers and clients to utilize.
    * @member {Array.<module:client/client.models/V1EndpointAddress>} addresses
    */
    addresses = undefined;
    /**
    * IP addresses which offer the related ports but are not currently marked as ready because they have not yet finished starting, have recently failed a readiness check, or have recently failed a liveness check.
    * @member {Array.<module:client/client.models/V1EndpointAddress>} notReadyAddresses
    */
    notReadyAddresses = undefined;
    /**
    * Port numbers available on the related IP addresses.
    * @member {Array.<module:client/client.models/V1EndpointPort>} ports
    */
    ports = undefined;








}


