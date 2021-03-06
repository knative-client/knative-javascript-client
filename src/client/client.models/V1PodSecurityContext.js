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
import V1SELinuxOptions from './V1SELinuxOptions';
import V1Sysctl from './V1Sysctl';





/**
* The V1PodSecurityContext model module.
* @module client/client.models/V1PodSecurityContext
* @version 0.1
*/
export default class V1PodSecurityContext {
    /**
    * Constructs a new <code>V1PodSecurityContext</code>.
    * PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
    * @alias module:client/client.models/V1PodSecurityContext
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1PodSecurityContext</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1PodSecurityContext} obj Optional instance to populate.
    * @return {module:client/client.models/V1PodSecurityContext} The populated <code>V1PodSecurityContext</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PodSecurityContext();

            
            
            

            if (data.hasOwnProperty('fsGroup')) {
                obj['fsGroup'] = ApiClient.convertToType(data['fsGroup'], 'Number');
            }
            if (data.hasOwnProperty('runAsGroup')) {
                obj['runAsGroup'] = ApiClient.convertToType(data['runAsGroup'], 'Number');
            }
            if (data.hasOwnProperty('runAsNonRoot')) {
                obj['runAsNonRoot'] = ApiClient.convertToType(data['runAsNonRoot'], 'Boolean');
            }
            if (data.hasOwnProperty('runAsUser')) {
                obj['runAsUser'] = ApiClient.convertToType(data['runAsUser'], 'Number');
            }
            if (data.hasOwnProperty('seLinuxOptions')) {
                obj['seLinuxOptions'] = V1SELinuxOptions.constructFromObject(data['seLinuxOptions']);
            }
            if (data.hasOwnProperty('supplementalGroups')) {
                obj['supplementalGroups'] = ApiClient.convertToType(data['supplementalGroups'], ['Number']);
            }
            if (data.hasOwnProperty('sysctls')) {
                obj['sysctls'] = ApiClient.convertToType(data['sysctls'], [V1Sysctl]);
            }
        }
        return obj;
    }

    /**
    * A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:  1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw----  If unset, the Kubelet will not modify the ownership and permissions of any volume.
    * @member {Number} fsGroup
    */
    fsGroup = undefined;
    /**
    * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
    * @member {Number} runAsGroup
    */
    runAsGroup = undefined;
    /**
    * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
    * @member {Boolean} runAsNonRoot
    */
    runAsNonRoot = undefined;
    /**
    * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
    * @member {Number} runAsUser
    */
    runAsUser = undefined;
    /**
    * The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container.
    * @member {module:client/client.models/V1SELinuxOptions} seLinuxOptions
    */
    seLinuxOptions = undefined;
    /**
    * A list of groups applied to the first process run in each container, in addition to the container's primary GID.  If unspecified, no groups will be added to any container.
    * @member {Array.<Number>} supplementalGroups
    */
    supplementalGroups = undefined;
    /**
    * Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch.
    * @member {Array.<module:client/client.models/V1Sysctl>} sysctls
    */
    sysctls = undefined;








}


