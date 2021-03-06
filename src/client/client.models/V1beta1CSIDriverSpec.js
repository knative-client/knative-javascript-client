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
* The V1beta1CSIDriverSpec model module.
* @module client/client.models/V1beta1CSIDriverSpec
* @version 0.1
*/
export default class V1beta1CSIDriverSpec {
    /**
    * Constructs a new <code>V1beta1CSIDriverSpec</code>.
    * CSIDriverSpec is the specification of a CSIDriver.
    * @alias module:client/client.models/V1beta1CSIDriverSpec
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1beta1CSIDriverSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1beta1CSIDriverSpec} obj Optional instance to populate.
    * @return {module:client/client.models/V1beta1CSIDriverSpec} The populated <code>V1beta1CSIDriverSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1beta1CSIDriverSpec();

            
            
            

            if (data.hasOwnProperty('attachRequired')) {
                obj['attachRequired'] = ApiClient.convertToType(data['attachRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('podInfoOnMount')) {
                obj['podInfoOnMount'] = ApiClient.convertToType(data['podInfoOnMount'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * attachRequired indicates this CSI volume driver requires an attach operation (because it implements the CSI ControllerPublishVolume() method), and that the Kubernetes attach detach controller should call the attach volume interface which checks the volumeattachment status and waits until the volume is attached before proceeding to mounting. The CSI external-attacher coordinates with CSI volume driver and updates the volumeattachment status when the attach operation is complete. If the CSIDriverRegistry feature gate is enabled and the value is specified to false, the attach operation will be skipped. Otherwise the attach operation will be called.
    * @member {Boolean} attachRequired
    */
    attachRequired = undefined;
    /**
    * If set to true, podInfoOnMount indicates this CSI volume driver requires additional pod information (like podName, podUID, etc.) during mount operations. If set to false, pod information will not be passed on mount. Default is false. The CSI driver specifies podInfoOnMount as part of driver deployment. If true, Kubelet will pass pod information as VolumeContext in the CSI NodePublishVolume() calls. The CSI driver is responsible for parsing and validating the information passed in as VolumeContext. The following VolumeConext will be passed if podInfoOnMount is set to true. This list might grow, but the prefix will be used. \"csi.storage.k8s.io/pod.name\": pod.Name \"csi.storage.k8s.io/pod.namespace\": pod.Namespace \"csi.storage.k8s.io/pod.uid\": string(pod.UID)
    * @member {Boolean} podInfoOnMount
    */
    podInfoOnMount = undefined;








}


