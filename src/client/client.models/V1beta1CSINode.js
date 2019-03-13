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
import V1beta1CSINodeSpec from './V1beta1CSINodeSpec';





/**
* The V1beta1CSINode model module.
* @module client/client.models/V1beta1CSINode
* @version 0.1
*/
export default class V1beta1CSINode {
    /**
    * Constructs a new <code>V1beta1CSINode</code>.
    * CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn&#39;t create this object. CSINode has an OwnerReference that points to the corresponding node object.
    * @alias module:client/client.models/V1beta1CSINode
    * @class
    * @param spec {module:client/client.models/V1beta1CSINodeSpec} spec is the specification of CSINode
    */

    constructor(spec) {
        

        
        

        this['spec'] = spec;

        
    }

    /**
    * Constructs a <code>V1beta1CSINode</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta1CSINode} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta1CSINode} The populated <code>V1beta1CSINode</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1CSINode();

            
            
            

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
                obj['spec'] = V1beta1CSINodeSpec.constructFromObject(data['spec']);
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
    * metadata.name must be the Kubernetes node name.
    * @member {module:client/client.models/V1ObjectMeta} metadata
    */
    metadata = undefined;
    /**
    * spec is the specification of CSINode
    * @member {module:client/client.models/V1beta1CSINodeSpec} spec
    */
    spec = undefined;








}

