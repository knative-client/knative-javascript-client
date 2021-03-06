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
* The V1beta1CustomResourceSubresourceScale model module.
* @module client/client.models/V1beta1CustomResourceSubresourceScale
* @version 0.1
*/
export default class V1beta1CustomResourceSubresourceScale {
    /**
    * Constructs a new <code>V1beta1CustomResourceSubresourceScale</code>.
    * CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources.
    * @alias module:client/client.models/V1beta1CustomResourceSubresourceScale
    * @class
    * @param specReplicasPath {String} SpecReplicasPath defines the JSON path inside of a CustomResource that corresponds to Scale.Spec.Replicas. Only JSON paths without the array notation are allowed. Must be a JSON Path under .spec. If there is no value under the given path in the CustomResource, the /scale subresource will return an error on GET.
    * @param statusReplicasPath {String} StatusReplicasPath defines the JSON path inside of a CustomResource that corresponds to Scale.Status.Replicas. Only JSON paths without the array notation are allowed. Must be a JSON Path under .status. If there is no value under the given path in the CustomResource, the status replica value in the /scale subresource will default to 0.
    */

    constructor(specReplicasPath, statusReplicasPath) {
        

        
        

        this['specReplicasPath'] = specReplicasPath;this['statusReplicasPath'] = statusReplicasPath;

        
    }

    /**
    * Constructs a <code>V1beta1CustomResourceSubresourceScale</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta1CustomResourceSubresourceScale} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta1CustomResourceSubresourceScale} The populated <code>V1beta1CustomResourceSubresourceScale</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1CustomResourceSubresourceScale();

            
            
            

            if (data.hasOwnProperty('labelSelectorPath')) {
                obj['labelSelectorPath'] = ApiClient.convertToType(data['labelSelectorPath'], 'String');
            }
            if (data.hasOwnProperty('specReplicasPath')) {
                obj['specReplicasPath'] = ApiClient.convertToType(data['specReplicasPath'], 'String');
            }
            if (data.hasOwnProperty('statusReplicasPath')) {
                obj['statusReplicasPath'] = ApiClient.convertToType(data['statusReplicasPath'], 'String');
            }
        }
        return obj;
    }

    /**
    * LabelSelectorPath defines the JSON path inside of a CustomResource that corresponds to Scale.Status.Selector. Only JSON paths without the array notation are allowed. Must be a JSON Path under .status. Must be set to work with HPA. If there is no value under the given path in the CustomResource, the status label selector value in the /scale subresource will default to the empty string.
    * @member {String} labelSelectorPath
    */
    labelSelectorPath = undefined;
    /**
    * SpecReplicasPath defines the JSON path inside of a CustomResource that corresponds to Scale.Spec.Replicas. Only JSON paths without the array notation are allowed. Must be a JSON Path under .spec. If there is no value under the given path in the CustomResource, the /scale subresource will return an error on GET.
    * @member {String} specReplicasPath
    */
    specReplicasPath = undefined;
    /**
    * StatusReplicasPath defines the JSON path inside of a CustomResource that corresponds to Scale.Status.Replicas. Only JSON paths without the array notation are allowed. Must be a JSON Path under .status. If there is no value under the given path in the CustomResource, the status replica value in the /scale subresource will default to 0.
    * @member {String} statusReplicasPath
    */
    statusReplicasPath = undefined;








}


