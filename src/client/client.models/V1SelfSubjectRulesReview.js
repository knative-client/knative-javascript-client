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
import V1SelfSubjectRulesReviewSpec from './V1SelfSubjectRulesReviewSpec';
import V1SubjectRulesReviewStatus from './V1SubjectRulesReviewStatus';





/**
* The V1SelfSubjectRulesReview model module.
* @module client/client.models/V1SelfSubjectRulesReview
* @version 0.1
*/
export default class V1SelfSubjectRulesReview {
    /**
    * Constructs a new <code>V1SelfSubjectRulesReview</code>.
    * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server&#39;s authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
    * @alias module:client/client.models/V1SelfSubjectRulesReview
    * @class
    * @param spec {module:client/client.models/V1SelfSubjectRulesReviewSpec} Spec holds information about the request being evaluated.
    */

    constructor(spec) {
        

        
        

        this['spec'] = spec;

        
    }

    /**
    * Constructs a <code>V1SelfSubjectRulesReview</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1SelfSubjectRulesReview} obj Optional instance to populate.
    * @return {module:client/client.models/V1SelfSubjectRulesReview} The populated <code>V1SelfSubjectRulesReview</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1SelfSubjectRulesReview();

            
            
            

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
                obj['spec'] = V1SelfSubjectRulesReviewSpec.constructFromObject(data['spec']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = V1SubjectRulesReviewStatus.constructFromObject(data['status']);
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
    * Spec holds information about the request being evaluated.
    * @member {module:client/client.models/V1SelfSubjectRulesReviewSpec} spec
    */
    spec = undefined;
    /**
    * Status is filled in by the server and indicates the set of actions a user can perform.
    * @member {module:client/client.models/V1SubjectRulesReviewStatus} status
    */
    status = undefined;








}


