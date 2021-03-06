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
import ApiregistrationV1beta1ServiceReference from './ApiregistrationV1beta1ServiceReference';





/**
* The V1beta1APIServiceSpec model module.
* @module client/client.models/V1beta1APIServiceSpec
* @version 0.1
*/
export default class V1beta1APIServiceSpec {
    /**
    * Constructs a new <code>V1beta1APIServiceSpec</code>.
    * APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
    * @alias module:client/client.models/V1beta1APIServiceSpec
    * @class
    * @param groupPriorityMinimum {Number} GroupPriorityMininum is the priority this group should have at least. Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMininum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object.  (v1.bar before v1.foo) We'd recommend something like: *.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s
    * @param service {module:client/client.models/ApiregistrationV1beta1ServiceReference} Service is a reference to the service for this API server.  It must communicate on port 443 If the Service is nil, that means the handling for the API groupversion is handled locally on this server. The call will simply delegate to the normal handler chain to be fulfilled.
    * @param versionPriority {Number} VersionPriority controls the ordering of this API version inside of its group.  Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). Since it's inside of a group, the number can be small, probably in the 10s. In case of equal version priorities, the version string will be used to compute the order inside a group. If the version string is \"kube-like\", it will sort above non \"kube-like\" version strings, which are ordered lexicographically. \"Kube-like\" versions start with a \"v\", then are followed by a number (the major version), then optionally the string \"alpha\" or \"beta\" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
    */

    constructor(groupPriorityMinimum, service, versionPriority) {
        

        
        

        this['groupPriorityMinimum'] = groupPriorityMinimum;this['service'] = service;this['versionPriority'] = versionPriority;

        
    }

    /**
    * Constructs a <code>V1beta1APIServiceSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta1APIServiceSpec} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta1APIServiceSpec} The populated <code>V1beta1APIServiceSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1APIServiceSpec();

            
            
            

            if (data.hasOwnProperty('caBundle')) {
                obj['caBundle'] = ApiClient.convertToType(data['caBundle'], 'Blob');
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], 'String');
            }
            if (data.hasOwnProperty('groupPriorityMinimum')) {
                obj['groupPriorityMinimum'] = ApiClient.convertToType(data['groupPriorityMinimum'], 'Number');
            }
            if (data.hasOwnProperty('insecureSkipTLSVerify')) {
                obj['insecureSkipTLSVerify'] = ApiClient.convertToType(data['insecureSkipTLSVerify'], 'Boolean');
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiregistrationV1beta1ServiceReference.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('versionPriority')) {
                obj['versionPriority'] = ApiClient.convertToType(data['versionPriority'], 'Number');
            }
        }
        return obj;
    }

    /**
    * CABundle is a PEM encoded CA bundle which will be used to validate an API server's serving certificate. If unspecified, system trust roots on the apiserver are used.
    * @member {Blob} caBundle
    */
    caBundle = undefined;
    /**
    * Group is the API group name this server hosts
    * @member {String} group
    */
    group = undefined;
    /**
    * GroupPriorityMininum is the priority this group should have at least. Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMininum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object.  (v1.bar before v1.foo) We'd recommend something like: *.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s
    * @member {Number} groupPriorityMinimum
    */
    groupPriorityMinimum = undefined;
    /**
    * InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server. This is strongly discouraged.  You should use the CABundle instead.
    * @member {Boolean} insecureSkipTLSVerify
    */
    insecureSkipTLSVerify = undefined;
    /**
    * Service is a reference to the service for this API server.  It must communicate on port 443 If the Service is nil, that means the handling for the API groupversion is handled locally on this server. The call will simply delegate to the normal handler chain to be fulfilled.
    * @member {module:client/client.models/ApiregistrationV1beta1ServiceReference} service
    */
    service = undefined;
    /**
    * Version is the API version this server hosts.  For example, \"v1\"
    * @member {String} version
    */
    version = undefined;
    /**
    * VersionPriority controls the ordering of this API version inside of its group.  Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). Since it's inside of a group, the number can be small, probably in the 10s. In case of equal version priorities, the version string will be used to compute the order inside a group. If the version string is \"kube-like\", it will sort above non \"kube-like\" version strings, which are ordered lexicographically. \"Kube-like\" versions start with a \"v\", then are followed by a number (the major version), then optionally the string \"alpha\" or \"beta\" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
    * @member {Number} versionPriority
    */
    versionPriority = undefined;








}


