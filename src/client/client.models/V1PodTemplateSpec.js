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
import V1PodSpec from './V1PodSpec';





/**
* The V1PodTemplateSpec model module.
* @module client/client.models/V1PodTemplateSpec
* @version 0.1
*/
export default class V1PodTemplateSpec {
    /**
    * Constructs a new <code>V1PodTemplateSpec</code>.
    * PodTemplateSpec describes the data a pod should have when created from a template
    * @alias module:client/client.models/V1PodTemplateSpec
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1PodTemplateSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1PodTemplateSpec} obj Optional instance to populate.
    * @return {module:client/client.models/V1PodTemplateSpec} The populated <code>V1PodTemplateSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PodTemplateSpec();

            
            
            

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = V1ObjectMeta.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('spec')) {
                obj['spec'] = V1PodSpec.constructFromObject(data['spec']);
            }
        }
        return obj;
    }

    /**
    * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
    * @member {module:client/client.models/V1ObjectMeta} metadata
    */
    metadata = undefined;
    /**
    * Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
    * @member {module:client/client.models/V1PodSpec} spec
    */
    spec = undefined;








}


