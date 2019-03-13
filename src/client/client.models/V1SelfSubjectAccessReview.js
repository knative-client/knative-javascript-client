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
import V1ObjectMeta from './V1ObjectMeta';
import V1SelfSubjectAccessReviewSpec from './V1SelfSubjectAccessReviewSpec';
import V1SubjectAccessReviewStatus from './V1SubjectAccessReviewStatus';





/**
* The V1SelfSubjectAccessReview model module.
* @module client/client.models/V1SelfSubjectAccessReview
* @version 0.1
*/
export default class V1SelfSubjectAccessReview {
    /**
    * Constructs a new <code>V1SelfSubjectAccessReview</code>.
    * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means \&quot;in all namespaces\&quot;.  Self is a special case, because users should always be able to check whether they can perform an action
    * @alias module:client/client.models/V1SelfSubjectAccessReview
    * @class
    * @param spec {module:client/client.models/V1SelfSubjectAccessReviewSpec} Spec holds information about the request being evaluated.  user and groups must be empty
    */

    constructor(spec) {
        

        
        

        this['spec'] = spec;

        
    }

    /**
    * Constructs a <code>V1SelfSubjectAccessReview</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1SelfSubjectAccessReview} obj Optional instance to populate.
    * @return {module:client/client.models/V1SelfSubjectAccessReview} The populated <code>V1SelfSubjectAccessReview</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1SelfSubjectAccessReview();

            
            
            

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = V1ObjectMeta.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('spec')) {
                obj['spec'] = V1SelfSubjectAccessReviewSpec.constructFromObject(data['spec']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = V1SubjectAccessReviewStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }

    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
    * @member {String} apiVersion
    */
    apiVersion = undefined;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
    * @member {String} kind
    */
    kind = undefined;
    /**
    * @member {module:client/client.models/V1ObjectMeta} metadata
    */
    metadata = undefined;
    /**
    * Spec holds information about the request being evaluated.  user and groups must be empty
    * @member {module:client/client.models/V1SelfSubjectAccessReviewSpec} spec
    */
    spec = undefined;
    /**
    * Status is filled in by the server and indicates whether the request is allowed or not
    * @member {module:client/client.models/V1SubjectAccessReviewStatus} status
    */
    status = undefined;








}


