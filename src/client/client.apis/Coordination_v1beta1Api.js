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
import V1DeleteOptions from '../client.models/V1DeleteOptions';
import V1Status from '../client.models/V1Status';
import V1beta1Lease from '../client.models/V1beta1Lease';
import V1beta1LeaseList from '../client.models/V1beta1LeaseList';

/**
* Coordination_v1beta1 service.
* @module client/client.apis/Coordination_v1beta1Api
* @version 0.1
*/
export default class Coordination_v1beta1Api {

    /**
    * Constructs a new Coordination_v1beta1Api. 
    * @alias module:client/client.apis/Coordination_v1beta1Api
    * @class
    * @param {module:client/ApiClient} apiClient Optional API client implementation to use,
    * default to {@link module:client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createNamespacedLease operation.
     * @callback module:client/client.apis/Coordination_v1beta1Api~createNamespacedLeaseCallback
     * @param {String} error Error message, if any.
     * @param {module:client/client.models/V1beta1Lease} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a Lease
     * @param {String} namespace object name and auth scope, such as for teams and projects
     * @param {module:client/client.models/V1beta1Lease} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {String} opts.dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param {String} opts.fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param {module:client/client.apis/Coordination_v1beta1Api~createNamespacedLeaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/client.models/V1beta1Lease}
     */
    createNamespacedLease(namespace, body, opts, callback) {
      opts = opts || {};
      let postBody = body;

      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling createNamespacedLease");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createNamespacedLease");
      }


      let pathParams = {
        'namespace': namespace
      };
      let queryParams = {
        'pretty': opts['pretty'],
        'dryRun': opts['dryRun'],
        'fieldManager': opts['fieldManager']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['*/*'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = V1beta1Lease;

      return this.apiClient.callApi(
        '/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leases', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCollectionNamespacedLease operation.
     * @callback module:client/client.apis/Coordination_v1beta1Api~deleteCollectionNamespacedLeaseCallback
     * @param {String} error Error message, if any.
     * @param {module:client/client.models/V1Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete collection of Lease
     * @param {String} namespace object name and auth scope, such as for teams and projects
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {String} opts._continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param {String} opts.fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param {String} opts.labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param {Number} opts.limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param {String} opts.resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
     * @param {Number} opts.timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param {Boolean} opts.watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @param {module:client/client.apis/Coordination_v1beta1Api~deleteCollectionNamespacedLeaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/client.models/V1Status}
     */
    deleteCollectionNamespacedLease(namespace, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling deleteCollectionNamespacedLease");
      }


      let pathParams = {
        'namespace': namespace
      };
      let queryParams = {
        'pretty': opts['pretty'],
        'continue': opts['_continue'],
        'fieldSelector': opts['fieldSelector'],
        'labelSelector': opts['labelSelector'],
        'limit': opts['limit'],
        'resourceVersion': opts['resourceVersion'],
        'timeoutSeconds': opts['timeoutSeconds'],
        'watch': opts['watch']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['*/*'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = V1Status;

      return this.apiClient.callApi(
        '/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leases', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteNamespacedLease operation.
     * @callback module:client/client.apis/Coordination_v1beta1Api~deleteNamespacedLeaseCallback
     * @param {String} error Error message, if any.
     * @param {module:client/client.models/V1Status} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete a Lease
     * @param {String} name name of the Lease
     * @param {String} namespace object name and auth scope, such as for teams and projects
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {module:client/client.models/V1DeleteOptions} opts.body 
     * @param {String} opts.dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param {Number} opts.gracePeriodSeconds The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
     * @param {Boolean} opts.orphanDependents Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both.
     * @param {String} opts.propagationPolicy Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: &#39;Orphan&#39; - orphan the dependents; &#39;Background&#39; - allow the garbage collector to delete the dependents in the background; &#39;Foreground&#39; - a cascading policy that deletes all dependents in the foreground.
     * @param {module:client/client.apis/Coordination_v1beta1Api~deleteNamespacedLeaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/client.models/V1Status}
     */
    deleteNamespacedLease(name, namespace, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling deleteNamespacedLease");
      }

      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling deleteNamespacedLease");
      }


      let pathParams = {
        'name': name,
        'namespace': namespace
      };
      let queryParams = {
        'pretty': opts['pretty'],
        'dryRun': opts['dryRun'],
        'gracePeriodSeconds': opts['gracePeriodSeconds'],
        'orphanDependents': opts['orphanDependents'],
        'propagationPolicy': opts['propagationPolicy']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['*/*'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = V1Status;

      return this.apiClient.callApi(
        '/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leases/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAPIResources operation.
     * @callback module:client/client.apis/Coordination_v1beta1Api~getAPIResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:client/client.models/V1APIResourceList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get available resources
     * @param {module:client/client.apis/Coordination_v1beta1Api~getAPIResourcesCallback} callback The callback function, accepting three arguments: error, data, response
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
        '/apis/coordination.k8s.io/v1beta1/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listLeaseForAllNamespaces operation.
     * @callback module:client/client.apis/Coordination_v1beta1Api~listLeaseForAllNamespacesCallback
     * @param {String} error Error message, if any.
     * @param {module:client/client.models/V1beta1LeaseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * list or watch objects of kind Lease
     * @param {Object} opts Optional parameters
     * @param {String} opts._continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param {String} opts.fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param {String} opts.labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param {Number} opts.limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {String} opts.resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
     * @param {Number} opts.timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param {Boolean} opts.watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @param {module:client/client.apis/Coordination_v1beta1Api~listLeaseForAllNamespacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/client.models/V1beta1LeaseList}
     */
    listLeaseForAllNamespaces(opts, callback) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'continue': opts['_continue'],
        'fieldSelector': opts['fieldSelector'],
        'labelSelector': opts['labelSelector'],
        'limit': opts['limit'],
        'pretty': opts['pretty'],
        'resourceVersion': opts['resourceVersion'],
        'timeoutSeconds': opts['timeoutSeconds'],
        'watch': opts['watch']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['*/*'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf', 'application/json;stream=watch', 'application/vnd.kubernetes.protobuf;stream=watch'];
      let returnType = V1beta1LeaseList;

      return this.apiClient.callApi(
        '/apis/coordination.k8s.io/v1beta1/leases', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listNamespacedLease operation.
     * @callback module:client/client.apis/Coordination_v1beta1Api~listNamespacedLeaseCallback
     * @param {String} error Error message, if any.
     * @param {module:client/client.models/V1beta1LeaseList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * list or watch objects of kind Lease
     * @param {String} namespace object name and auth scope, such as for teams and projects
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {String} opts._continue The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
     * @param {String} opts.fieldSelector A selector to restrict the list of returned objects by their fields. Defaults to everything.
     * @param {String} opts.labelSelector A selector to restrict the list of returned objects by their labels. Defaults to everything.
     * @param {Number} opts.limit limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
     * @param {String} opts.resourceVersion When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
     * @param {Number} opts.timeoutSeconds Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
     * @param {Boolean} opts.watch Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
     * @param {module:client/client.apis/Coordination_v1beta1Api~listNamespacedLeaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/client.models/V1beta1LeaseList}
     */
    listNamespacedLease(namespace, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling listNamespacedLease");
      }


      let pathParams = {
        'namespace': namespace
      };
      let queryParams = {
        'pretty': opts['pretty'],
        'continue': opts['_continue'],
        'fieldSelector': opts['fieldSelector'],
        'labelSelector': opts['labelSelector'],
        'limit': opts['limit'],
        'resourceVersion': opts['resourceVersion'],
        'timeoutSeconds': opts['timeoutSeconds'],
        'watch': opts['watch']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['*/*'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf', 'application/json;stream=watch', 'application/vnd.kubernetes.protobuf;stream=watch'];
      let returnType = V1beta1LeaseList;

      return this.apiClient.callApi(
        '/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leases', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchNamespacedLease operation.
     * @callback module:client/client.apis/Coordination_v1beta1Api~patchNamespacedLeaseCallback
     * @param {String} error Error message, if any.
     * @param {module:client/client.models/V1beta1Lease} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * partially update the specified Lease
     * @param {String} name name of the Lease
     * @param {String} namespace object name and auth scope, such as for teams and projects
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {String} opts.dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param {String} opts.fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
     * @param {Boolean} opts.force Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
     * @param {module:client/client.apis/Coordination_v1beta1Api~patchNamespacedLeaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/client.models/V1beta1Lease}
     */
    patchNamespacedLease(name, namespace, body, opts, callback) {
      opts = opts || {};
      let postBody = body;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling patchNamespacedLease");
      }

      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling patchNamespacedLease");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchNamespacedLease");
      }


      let pathParams = {
        'name': name,
        'namespace': namespace
      };
      let queryParams = {
        'pretty': opts['pretty'],
        'dryRun': opts['dryRun'],
        'fieldManager': opts['fieldManager'],
        'force': opts['force']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['application/json-patch+json', 'application/merge-patch+json', 'application/strategic-merge-patch+json'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = V1beta1Lease;

      return this.apiClient.callApi(
        '/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leases/{name}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the readNamespacedLease operation.
     * @callback module:client/client.apis/Coordination_v1beta1Api~readNamespacedLeaseCallback
     * @param {String} error Error message, if any.
     * @param {module:client/client.models/V1beta1Lease} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * read the specified Lease
     * @param {String} name name of the Lease
     * @param {String} namespace object name and auth scope, such as for teams and projects
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {Boolean} opts.exact Should the export be exact.  Exact export maintains cluster-specific fields like &#39;Namespace&#39;. Deprecated. Planned for removal in 1.18.
     * @param {Boolean} opts._export Should this value be exported.  Export strips fields that a user can not specify. Deprecated. Planned for removal in 1.18.
     * @param {module:client/client.apis/Coordination_v1beta1Api~readNamespacedLeaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/client.models/V1beta1Lease}
     */
    readNamespacedLease(name, namespace, opts, callback) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling readNamespacedLease");
      }

      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling readNamespacedLease");
      }


      let pathParams = {
        'name': name,
        'namespace': namespace
      };
      let queryParams = {
        'pretty': opts['pretty'],
        'exact': opts['exact'],
        'export': opts['_export']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['*/*'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = V1beta1Lease;

      return this.apiClient.callApi(
        '/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leases/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the replaceNamespacedLease operation.
     * @callback module:client/client.apis/Coordination_v1beta1Api~replaceNamespacedLeaseCallback
     * @param {String} error Error message, if any.
     * @param {module:client/client.models/V1beta1Lease} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * replace the specified Lease
     * @param {String} name name of the Lease
     * @param {String} namespace object name and auth scope, such as for teams and projects
     * @param {module:client/client.models/V1beta1Lease} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pretty If &#39;true&#39;, then the output is pretty printed.
     * @param {String} opts.dryRun When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
     * @param {String} opts.fieldManager fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
     * @param {module:client/client.apis/Coordination_v1beta1Api~replaceNamespacedLeaseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:client/client.models/V1beta1Lease}
     */
    replaceNamespacedLease(name, namespace, body, opts, callback) {
      opts = opts || {};
      let postBody = body;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling replaceNamespacedLease");
      }

      // verify the required parameter 'namespace' is set
      if (namespace === undefined || namespace === null) {
        throw new Error("Missing the required parameter 'namespace' when calling replaceNamespacedLease");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceNamespacedLease");
      }


      let pathParams = {
        'name': name,
        'namespace': namespace
      };
      let queryParams = {
        'pretty': opts['pretty'],
        'dryRun': opts['dryRun'],
        'fieldManager': opts['fieldManager']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerToken'];
      let contentTypes = ['*/*'];
      let accepts = ['application/json', 'application/yaml', 'application/vnd.kubernetes.protobuf'];
      let returnType = V1beta1Lease;

      return this.apiClient.callApi(
        '/apis/coordination.k8s.io/v1beta1/namespaces/{namespace}/leases/{name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }


}
