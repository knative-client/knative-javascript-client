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
import V1APIResourceList from '../client.models/V1APIResourceList';
import V1beta1LocalSubjectAccessReview from '../client.models/V1beta1LocalSubjectAccessReview';
import V1beta1SelfSubjectAccessReview from '../client.models/V1beta1SelfSubjectAccessReview';
import V1beta1SelfSubjectRulesReview from '../client.models/V1beta1SelfSubjectRulesReview';
import V1beta1SubjectAccessReview from '../client.models/V1beta1SubjectAccessReview';

/**
* Authorization_v1beta1 service.
* @module client/client.apis/Authorization_v1beta1Api
* @version 0.1
*/
export default class Authorization_v1beta1Api {

    /**
    * Constructs a new Authorization_v1beta1Api. 
    * @alias module:client/client.apis/Authorization_v1beta1Api
    * @class
    * @param {module:client/ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createNamespacedLocalSubjectAccessReview operation.
     * @callback module:client/client.apis/Authorization_v1beta1Api~createNamespacedLocalSubjectAccessReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:client/client.models/V1beta1LocalSubjectAccessReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a LocalSubjectAccessReview
     * @param {String} namespace object name and auth scope, such as for teams and projects
     * @param {module:client/client.models/V1beta1LocalSubjectAccessReview} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param {String} opts.fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:client/client.apis/Authorization_v1beta1Api~createNamespacedLocalSubjectAccessReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/client.models/V1beta1LocalSubjectAccessReview}
     */
    createNamespacedLocalSubjectAccessReview(namespace, body, opts, callback) {
      opts = opts || {};
      let postBody = body;

      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling createNamespacedLocalSubjectAccessReview");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createNamespacedLocalSubjectAccessReview");
      }


      let pathParams = {
        'namespace': namespace
      };
      let queryParams = {
        'dryRun': opts['dryRun'],
        'fieldManager': opts['fieldManager'],
        'pretty': opts['pretty']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['*/*'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = V1beta1LocalSubjectAccessReview;

      return this.apiClient.callApi(
        '/apis/authorization.k8s.io/v1beta1/namespaces/{namespace}/localsubjectaccessreviews', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createSelfSubjectAccessReview operation.
     * @callback module:client/client.apis/Authorization_v1beta1Api~createSelfSubjectAccessReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:client/client.models/V1beta1SelfSubjectAccessReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a SelfSubjectAccessReview
     * @param {module:client/client.models/V1beta1SelfSubjectAccessReview} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param {String} opts.fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:client/client.apis/Authorization_v1beta1Api~createSelfSubjectAccessReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/client.models/V1beta1SelfSubjectAccessReview}
     */
    createSelfSubjectAccessReview(body, opts, callback) {
      opts = opts || {};
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSelfSubjectAccessReview");
      }


      let pathParams = {
      };
      let queryParams = {
        'dryRun': opts['dryRun'],
        'fieldManager': opts['fieldManager'],
        'pretty': opts['pretty']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['*/*'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = V1beta1SelfSubjectAccessReview;

      return this.apiClient.callApi(
        '/apis/authorization.k8s.io/v1beta1/selfsubjectaccessreviews', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createSelfSubjectRulesReview operation.
     * @callback module:client/client.apis/Authorization_v1beta1Api~createSelfSubjectRulesReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:client/client.models/V1beta1SelfSubjectRulesReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a SelfSubjectRulesReview
     * @param {module:client/client.models/V1beta1SelfSubjectRulesReview} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param {String} opts.fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:client/client.apis/Authorization_v1beta1Api~createSelfSubjectRulesReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/client.models/V1beta1SelfSubjectRulesReview}
     */
    createSelfSubjectRulesReview(body, opts, callback) {
      opts = opts || {};
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSelfSubjectRulesReview");
      }


      let pathParams = {
      };
      let queryParams = {
        'dryRun': opts['dryRun'],
        'fieldManager': opts['fieldManager'],
        'pretty': opts['pretty']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['*/*'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = V1beta1SelfSubjectRulesReview;

      return this.apiClient.callApi(
        '/apis/authorization.k8s.io/v1beta1/selfsubjectrulesreviews', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createSubjectAccessReview operation.
     * @callback module:client/client.apis/Authorization_v1beta1Api~createSubjectAccessReviewCallback
     * @param {String} error Error message, if any.
     * @param {module:client/client.models/V1beta1SubjectAccessReview} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a SubjectAccessReview
     * @param {module:client/client.models/V1beta1SubjectAccessReview} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param {String} opts.fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:client/client.apis/Authorization_v1beta1Api~createSubjectAccessReviewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/client.models/V1beta1SubjectAccessReview}
     */
    createSubjectAccessReview(body, opts, callback) {
      opts = opts || {};
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSubjectAccessReview");
      }


      let pathParams = {
      };
      let queryParams = {
        'dryRun': opts['dryRun'],
        'fieldManager': opts['fieldManager'],
        'pretty': opts['pretty']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['*/*'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = V1beta1SubjectAccessReview;

      return this.apiClient.callApi(
        '/apis/authorization.k8s.io/v1beta1/subjectaccessreviews', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAPIResources operation.
     * @callback module:client/client.apis/Authorization_v1beta1Api~getAPIResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:client/client.models/V1APIResourceList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get available resources
     * @param {module:client/client.apis/Authorization_v1beta1Api~getAPIResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/client.models/V1APIResourceList}
     */
    getAPIResources(callback) {
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
      let returnType = V1APIResourceList;

      return this.apiClient.callApi(
        '/apis/authorization.k8s.io/v1beta1/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
