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


import ApiClient from "../ApiClient";
import V1APIGroup from '../client.models/V1APIGroup';

/**
* Certificates service.
* @module client/client.apis/CertificatesApi
* @version 0.1
*/
export default class CertificatesApi {

    /**
    * Constructs a new CertificatesApi. 
    * @alias module:client/client.apis/CertificatesApi
    * @class
    * @param {module:client/ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAPIGroup operation.
     * @callback module:client/client.apis/CertificatesApi~getAPIGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:client/client.models/V1APIGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get information of a group
     * @param {module:client/client.apis/CertificatesApi~getAPIGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/client.models/V1APIGroup}
     */
    getAPIGroup(callback) {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = V1APIGroup;

      return this.apiClient.callApi(
        '/apis/certificates.k8s.io/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
