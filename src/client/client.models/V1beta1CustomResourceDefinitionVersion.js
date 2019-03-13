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
import V1beta1CustomResourceColumnDefinition from './V1beta1CustomResourceColumnDefinition';
import V1beta1CustomResourceSubresources from './V1beta1CustomResourceSubresources';
import V1beta1CustomResourceValidation from './V1beta1CustomResourceValidation';





/**
* The V1beta1CustomResourceDefinitionVersion model module.
* @module client/client.models/V1beta1CustomResourceDefinitionVersion
* @version 0.1
*/
export default class V1beta1CustomResourceDefinitionVersion {
    /**
    * Constructs a new <code>V1beta1CustomResourceDefinitionVersion</code>.
    * CustomResourceDefinitionVersion describes a version for CRD.
    * @alias module:client/client.models/V1beta1CustomResourceDefinitionVersion
    * @class
    * @param name {String} Name is the version name, e.g. “v1”, “v2beta1”, etc.
    * @param served {Boolean} Served is a flag enabling/disabling this version from being served via REST APIs
    * @param storage {Boolean} Storage flags the version as storage version. There must be exactly one flagged as storage version.
    */

    constructor(name, served, storage) {
        

        
        

        this['name'] = name;this['served'] = served;this['storage'] = storage;

        
    }

    /**
    * Constructs a <code>V1beta1CustomResourceDefinitionVersion</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta1CustomResourceDefinitionVersion} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta1CustomResourceDefinitionVersion} The populated <code>V1beta1CustomResourceDefinitionVersion</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1CustomResourceDefinitionVersion();

            
            
            

            if (data.hasOwnProperty('additionalPrinterColumns')) {
                obj['additionalPrinterColumns'] = ApiClient.convertToType(data['additionalPrinterColumns'], [V1beta1CustomResourceColumnDefinition]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = V1beta1CustomResourceValidation.constructFromObject(data['schema']);
            }
            if (data.hasOwnProperty('served')) {
                obj['served'] = ApiClient.convertToType(data['served'], 'Boolean');
            }
            if (data.hasOwnProperty('storage')) {
                obj['storage'] = ApiClient.convertToType(data['storage'], 'Boolean');
            }
            if (data.hasOwnProperty('subresources')) {
                obj['subresources'] = V1beta1CustomResourceSubresources.constructFromObject(data['subresources']);
            }
        }
        return obj;
    }

    /**
    * AdditionalPrinterColumns are additional columns shown e.g. in kubectl next to the name. Defaults to a created-at column. Top-level and per-version columns are mutually exclusive. Per-version columns must not all be set to identical values (top-level columns should be used instead) This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature. NOTE: CRDs created prior to 1.13 populated the top-level additionalPrinterColumns field by default. To apply an update that changes to per-version additionalPrinterColumns, the top-level additionalPrinterColumns field must be explicitly set to null
    * @member {Array.<module:client/client.models/V1beta1CustomResourceColumnDefinition>} additionalPrinterColumns
    */
    additionalPrinterColumns = undefined;
    /**
    * Name is the version name, e.g. “v1”, “v2beta1”, etc.
    * @member {String} name
    */
    name = undefined;
    /**
    * Schema describes the schema for CustomResource used in validation, pruning, and defaulting. Top-level and per-version schemas are mutually exclusive. Per-version schemas must not all be set to identical values (top-level validation schema should be used instead) This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature.
    * @member {module:client/client.models/V1beta1CustomResourceValidation} schema
    */
    schema = undefined;
    /**
    * Served is a flag enabling/disabling this version from being served via REST APIs
    * @member {Boolean} served
    */
    served = undefined;
    /**
    * Storage flags the version as storage version. There must be exactly one flagged as storage version.
    * @member {Boolean} storage
    */
    storage = undefined;
    /**
    * Subresources describes the subresources for CustomResource Top-level and per-version subresources are mutually exclusive. Per-version subresources must not all be set to identical values (top-level subresources should be used instead) This field is alpha-level and is only honored by servers that enable the CustomResourceWebhookConversion feature.
    * @member {module:client/client.models/V1beta1CustomResourceSubresources} subresources
    */
    subresources = undefined;








}


