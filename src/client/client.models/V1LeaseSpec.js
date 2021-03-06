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
* The V1LeaseSpec model module.
* @module client/client.models/V1LeaseSpec
* @version 0.1
*/
export default class V1LeaseSpec {
    /**
    * Constructs a new <code>V1LeaseSpec</code>.
    * LeaseSpec is a specification of a Lease.
    * @alias module:client/client.models/V1LeaseSpec
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1LeaseSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1LeaseSpec} obj Optional instance to populate.
    * @return {module:client/client.models/V1LeaseSpec} The populated <code>V1LeaseSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1LeaseSpec();

            
            
            

            if (data.hasOwnProperty('acquireTime')) {
                obj['acquireTime'] = ApiClient.convertToType(data['acquireTime'], 'Date');
            }
            if (data.hasOwnProperty('holderIdentity')) {
                obj['holderIdentity'] = ApiClient.convertToType(data['holderIdentity'], 'String');
            }
            if (data.hasOwnProperty('leaseDurationSeconds')) {
                obj['leaseDurationSeconds'] = ApiClient.convertToType(data['leaseDurationSeconds'], 'Number');
            }
            if (data.hasOwnProperty('leaseTransitions')) {
                obj['leaseTransitions'] = ApiClient.convertToType(data['leaseTransitions'], 'Number');
            }
            if (data.hasOwnProperty('renewTime')) {
                obj['renewTime'] = ApiClient.convertToType(data['renewTime'], 'Date');
            }
        }
        return obj;
    }

    /**
    * acquireTime is a time when the current lease was acquired.
    * @member {Date} acquireTime
    */
    acquireTime = undefined;
    /**
    * holderIdentity contains the identity of the holder of a current lease.
    * @member {String} holderIdentity
    */
    holderIdentity = undefined;
    /**
    * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime.
    * @member {Number} leaseDurationSeconds
    */
    leaseDurationSeconds = undefined;
    /**
    * leaseTransitions is the number of transitions of a lease between holders.
    * @member {Number} leaseTransitions
    */
    leaseTransitions = undefined;
    /**
    * renewTime is a time when the current holder of a lease has last updated the lease.
    * @member {Date} renewTime
    */
    renewTime = undefined;








}


