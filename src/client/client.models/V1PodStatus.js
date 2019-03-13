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
import V1ContainerStatus from './V1ContainerStatus';
import V1PodCondition from './V1PodCondition';





/**
* The V1PodStatus model module.
* @module client/client.models/V1PodStatus
* @version 0.1
*/
export default class V1PodStatus {
    /**
    * Constructs a new <code>V1PodStatus</code>.
    * PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane.
    * @alias module:client/client.models/V1PodStatus
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1PodStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1PodStatus} obj Optional instance to populate.
    * @return {module:client/client.models/V1PodStatus} The populated <code>V1PodStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PodStatus();

            
            
            

            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [V1PodCondition]);
            }
            if (data.hasOwnProperty('containerStatuses')) {
                obj['containerStatuses'] = ApiClient.convertToType(data['containerStatuses'], [V1ContainerStatus]);
            }
            if (data.hasOwnProperty('hostIP')) {
                obj['hostIP'] = ApiClient.convertToType(data['hostIP'], 'String');
            }
            if (data.hasOwnProperty('initContainerStatuses')) {
                obj['initContainerStatuses'] = ApiClient.convertToType(data['initContainerStatuses'], [V1ContainerStatus]);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('nominatedNodeName')) {
                obj['nominatedNodeName'] = ApiClient.convertToType(data['nominatedNodeName'], 'String');
            }
            if (data.hasOwnProperty('phase')) {
                obj['phase'] = ApiClient.convertToType(data['phase'], 'String');
            }
            if (data.hasOwnProperty('podIP')) {
                obj['podIP'] = ApiClient.convertToType(data['podIP'], 'String');
            }
            if (data.hasOwnProperty('qosClass')) {
                obj['qosClass'] = ApiClient.convertToType(data['qosClass'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
            }
        }
        return obj;
    }

    /**
    * Current service state of pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
    * @member {Array.<module:client/client.models/V1PodCondition>} conditions
    */
    conditions = undefined;
    /**
    * The list has one entry per container in the manifest. Each entry is currently the output of `docker inspect`. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
    * @member {Array.<module:client/client.models/V1ContainerStatus>} containerStatuses
    */
    containerStatuses = undefined;
    /**
    * IP address of the host to which the pod is assigned. Empty if not yet scheduled.
    * @member {String} hostIP
    */
    hostIP = undefined;
    /**
    * The list has one entry per init container in the manifest. The most recent successful init container will have ready = true, the most recently started container will have startTime set. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
    * @member {Array.<module:client/client.models/V1ContainerStatus>} initContainerStatuses
    */
    initContainerStatuses = undefined;
    /**
    * A human readable message indicating details about why the pod is in this condition.
    * @member {String} message
    */
    message = undefined;
    /**
    * nominatedNodeName is set only when this pod preempts other pods on the node, but it cannot be scheduled right away as preemption victims receive their graceful termination periods. This field does not guarantee that the pod will be scheduled on this node. Scheduler may decide to place the pod elsewhere if other nodes become available sooner. Scheduler may also decide to give the resources on this node to a higher priority pod that is created after preemption. As a result, this field may be different than PodSpec.nodeName when the pod is scheduled.
    * @member {String} nominatedNodeName
    */
    nominatedNodeName = undefined;
    /**
    * The phase of a Pod is a simple, high-level summary of where the Pod is in its lifecycle. The conditions array, the reason and message fields, and the individual container status arrays contain more detail about the pod's status. There are five possible phase values:  Pending: The pod has been accepted by the Kubernetes system, but one or more of the container images has not been created. This includes time before being scheduled as well as time spent downloading images over the network, which could take a while. Running: The pod has been bound to a node, and all of the containers have been created. At least one container is still running, or is in the process of starting or restarting. Succeeded: All containers in the pod have terminated in success, and will not be restarted. Failed: All containers in the pod have terminated, and at least one container has terminated in failure. The container either exited with non-zero status or was terminated by the system. Unknown: For some reason the state of the pod could not be obtained, typically due to an error in communicating with the host of the pod.  More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-phase
    * @member {String} phase
    */
    phase = undefined;
    /**
    * IP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated.
    * @member {String} podIP
    */
    podIP = undefined;
    /**
    * The Quality of Service (QOS) classification assigned to the pod based on resource requirements See PodQOSClass type for available QOS classes More info: https://git.k8s.io/community/contributors/design-proposals/node/resource-qos.md
    * @member {String} qosClass
    */
    qosClass = undefined;
    /**
    * A brief CamelCase message indicating details about why the pod is in this state. e.g. 'Evicted'
    * @member {String} reason
    */
    reason = undefined;
    /**
    * RFC 3339 date and time at which the object was acknowledged by the Kubelet. This is before the Kubelet pulled the container image(s) for the pod.
    * @member {Date} startTime
    */
    startTime = undefined;








}

