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
import V1beta1JSONSchemaProps from './V1beta1JSONSchemaProps';





/**
* The V1beta1CustomResourceValidation model module.
* @module client/client.models/V1beta1CustomResourceValidation
* @version 0.1
*/
export default class V1beta1CustomResourceValidation {
    /**
    * Constructs a new <code>V1beta1CustomResourceValidation</code>.
    * CustomResourceValidation is a list of validation methods for CustomResources.
    * @alias module:client/client.models/V1beta1CustomResourceValidation
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1beta1CustomResourceValidation</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta1CustomResourceValidation} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta1CustomResourceValidation} The populated <code>V1beta1CustomResourceValidation</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1CustomResourceValidation();

            
            
            

            if (data.hasOwnProperty('openAPIV3Schema')) {
                obj['openAPIV3Schema'] = V1beta1JSONSchemaProps.constructFromObject(data['openAPIV3Schema']);
            }
        }
        return obj;
    }

    /**
    * OpenAPIV3Schema is the OpenAPI v3 schema to be validated against.
    * @member {module:client/client.models/V1beta1JSONSchemaProps} openAPIV3Schema
    */
    openAPIV3Schema = undefined;








}


