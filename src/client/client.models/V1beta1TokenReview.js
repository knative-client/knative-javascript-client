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
import V1beta1TokenReviewSpec from './V1beta1TokenReviewSpec';
import V1beta1TokenReviewStatus from './V1beta1TokenReviewStatus';





/**
* The V1beta1TokenReview model module.
* @module client/client.models/V1beta1TokenReview
* @version 0.1
*/
export default class V1beta1TokenReview {
    /**
    * Constructs a new <code>V1beta1TokenReview</code>.
    * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
    * @alias module:client/client.models/V1beta1TokenReview
    * @class
    * @param spec {module:client/client.models/V1beta1TokenReviewSpec} Spec holds information about the request being evaluated
    */

    constructor(spec) {
        

        
        

        this['spec'] = spec;

        
    }

    /**
    * Constructs a <code>V1beta1TokenReview</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta1TokenReview} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta1TokenReview} The populated <code>V1beta1TokenReview</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1TokenReview();

            
            
            

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
                obj['spec'] = V1beta1TokenReviewSpec.constructFromObject(data['spec']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = V1beta1TokenReviewStatus.constructFromObject(data['status']);
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
    * Spec holds information about the request being evaluated
    * @member {module:client/client.models/V1beta1TokenReviewSpec} spec
    */
    spec = undefined;
    /**
    * Status is filled in by the server and indicates whether the request can be authenticated.
    * @member {module:client/client.models/V1beta1TokenReviewStatus} status
    */
    status = undefined;








}


