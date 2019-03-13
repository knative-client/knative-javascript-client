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
import V1beta1CertificateSigningRequestCondition from './V1beta1CertificateSigningRequestCondition';





/**
* The V1beta1CertificateSigningRequestStatus model module.
* @module client/client.models/V1beta1CertificateSigningRequestStatus
* @version 0.1
*/
export default class V1beta1CertificateSigningRequestStatus {
    /**
    * Constructs a new <code>V1beta1CertificateSigningRequestStatus</code>.
    * @alias module:client/client.models/V1beta1CertificateSigningRequestStatus
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1beta1CertificateSigningRequestStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta1CertificateSigningRequestStatus} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta1CertificateSigningRequestStatus} The populated <code>V1beta1CertificateSigningRequestStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1CertificateSigningRequestStatus();

            
            
            

            if (data.hasOwnProperty('certificate')) {
                obj['certificate'] = ApiClient.convertToType(data['certificate'], 'Blob');
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [V1beta1CertificateSigningRequestCondition]);
            }
        }
        return obj;
    }

    /**
    * If request was approved, the controller will place the issued certificate here.
    * @member {Blob} certificate
    */
    certificate = undefined;
    /**
    * Conditions applied to the request, such as approval or denial.
    * @member {Array.<module:client/client.models/V1beta1CertificateSigningRequestCondition>} conditions
    */
    conditions = undefined;








}


