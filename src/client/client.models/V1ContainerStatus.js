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
import V1ContainerState from './V1ContainerState';





/**
* The V1ContainerStatus model module.
* @module client/client.models/V1ContainerStatus
* @version 0.1
*/
export default class V1ContainerStatus {
    /**
    * Constructs a new <code>V1ContainerStatus</code>.
    * ContainerStatus contains details for the current status of this container.
    * @alias module:client/client.models/V1ContainerStatus
    * @class
    * @param image {String} The image the container is running. More info: https://kubernetes.io/docs/concepts/containers/images
    * @param imageID {String} ImageID of the container's image.
    * @param name {String} This must be a DNS_LABEL. Each container in a pod must have a unique name. Cannot be updated.
    * @param ready {Boolean} Specifies whether the container has passed its readiness probe.
    * @param restartCount {Number} The number of times the container has been restarted, currently based on the number of dead containers that have not yet been removed. Note that this is calculated from dead containers. But those containers are subject to garbage collection. This value will get capped at 5 by GC.
    */

    constructor(image, imageID, name, ready, restartCount) {
        

        
        

        this['image'] = image;this['imageID'] = imageID;this['name'] = name;this['ready'] = ready;this['restartCount'] = restartCount;

        
    }

    /**
    * Constructs a <code>V1ContainerStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1ContainerStatus} obj Optional instance to populate.
    * @return {module:client/client.models/V1ContainerStatus} The populated <code>V1ContainerStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ContainerStatus();

            
            
            

            if (data.hasOwnProperty('containerID')) {
                obj['containerID'] = ApiClient.convertToType(data['containerID'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('imageID')) {
                obj['imageID'] = ApiClient.convertToType(data['imageID'], 'String');
            }
            if (data.hasOwnProperty('lastState')) {
                obj['lastState'] = V1ContainerState.constructFromObject(data['lastState']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('ready')) {
                obj['ready'] = ApiClient.convertToType(data['ready'], 'Boolean');
            }
            if (data.hasOwnProperty('restartCount')) {
                obj['restartCount'] = ApiClient.convertToType(data['restartCount'], 'Number');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = V1ContainerState.constructFromObject(data['state']);
            }
        }
        return obj;
    }

    /**
    * Container's ID in the format 'docker://<container_id>'.
    * @member {String} containerID
    */
    containerID = undefined;
    /**
    * The image the container is running. More info: https://kubernetes.io/docs/concepts/containers/images
    * @member {String} image
    */
    image = undefined;
    /**
    * ImageID of the container's image.
    * @member {String} imageID
    */
    imageID = undefined;
    /**
    * Details about the container's last termination condition.
    * @member {module:client/client.models/V1ContainerState} lastState
    */
    lastState = undefined;
    /**
    * This must be a DNS_LABEL. Each container in a pod must have a unique name. Cannot be updated.
    * @member {String} name
    */
    name = undefined;
    /**
    * Specifies whether the container has passed its readiness probe.
    * @member {Boolean} ready
    */
    ready = undefined;
    /**
    * The number of times the container has been restarted, currently based on the number of dead containers that have not yet been removed. Note that this is calculated from dead containers. But those containers are subject to garbage collection. This value will get capped at 5 by GC.
    * @member {Number} restartCount
    */
    restartCount = undefined;
    /**
    * Details about the container's current condition.
    * @member {module:client/client.models/V1ContainerState} state
    */
    state = undefined;








}


