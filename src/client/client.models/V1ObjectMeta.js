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
import V1Initializers from './V1Initializers';
import V1ManagedFieldsEntry from './V1ManagedFieldsEntry';
import V1OwnerReference from './V1OwnerReference';





/**
* The V1ObjectMeta model module.
* @module client/client.models/V1ObjectMeta
* @version 0.1
*/
export default class V1ObjectMeta {
    /**
    * Constructs a new <code>V1ObjectMeta</code>.
    * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
    * @alias module:client/client.models/V1ObjectMeta
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>V1ObjectMeta</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1ObjectMeta} obj Optional instance to populate.
    * @return {module:client/client.models/V1ObjectMeta} The populated <code>V1ObjectMeta</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ObjectMeta();

            
            
            

            if (data.hasOwnProperty('annotations')) {
                obj['annotations'] = ApiClient.convertToType(data['annotations'], {'String': 'String'});
            }
            if (data.hasOwnProperty('clusterName')) {
                obj['clusterName'] = ApiClient.convertToType(data['clusterName'], 'String');
            }
            if (data.hasOwnProperty('creationTimestamp')) {
                obj['creationTimestamp'] = ApiClient.convertToType(data['creationTimestamp'], 'Date');
            }
            if (data.hasOwnProperty('deletionGracePeriodSeconds')) {
                obj['deletionGracePeriodSeconds'] = ApiClient.convertToType(data['deletionGracePeriodSeconds'], 'Number');
            }
            if (data.hasOwnProperty('deletionTimestamp')) {
                obj['deletionTimestamp'] = ApiClient.convertToType(data['deletionTimestamp'], 'Date');
            }
            if (data.hasOwnProperty('finalizers')) {
                obj['finalizers'] = ApiClient.convertToType(data['finalizers'], ['String']);
            }
            if (data.hasOwnProperty('generateName')) {
                obj['generateName'] = ApiClient.convertToType(data['generateName'], 'String');
            }
            if (data.hasOwnProperty('generation')) {
                obj['generation'] = ApiClient.convertToType(data['generation'], 'Number');
            }
            if (data.hasOwnProperty('initializers')) {
                obj['initializers'] = V1Initializers.constructFromObject(data['initializers']);
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], {'String': 'String'});
            }
            if (data.hasOwnProperty('managedFields')) {
                obj['managedFields'] = ApiClient.convertToType(data['managedFields'], [V1ManagedFieldsEntry]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
            if (data.hasOwnProperty('ownerReferences')) {
                obj['ownerReferences'] = ApiClient.convertToType(data['ownerReferences'], [V1OwnerReference]);
            }
            if (data.hasOwnProperty('resourceVersion')) {
                obj['resourceVersion'] = ApiClient.convertToType(data['resourceVersion'], 'String');
            }
            if (data.hasOwnProperty('selfLink')) {
                obj['selfLink'] = ApiClient.convertToType(data['selfLink'], 'String');
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
        }
        return obj;
    }

    /**
    * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
    * @member {Object.<String, String>} annotations
    */
    annotations = undefined;
    /**
    * The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request.
    * @member {String} clusterName
    */
    clusterName = undefined;
    /**
    * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.  Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
    * @member {Date} creationTimestamp
    */
    creationTimestamp = undefined;
    /**
    * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
    * @member {Number} deletionGracePeriodSeconds
    */
    deletionGracePeriodSeconds = undefined;
    /**
    * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.  Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
    * @member {Date} deletionTimestamp
    */
    deletionTimestamp = undefined;
    /**
    * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed.
    * @member {Array.<String>} finalizers
    */
    finalizers = undefined;
    /**
    * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.  If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).  Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#idempotency
    * @member {String} generateName
    */
    generateName = undefined;
    /**
    * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
    * @member {Number} generation
    */
    generation = undefined;
    /**
    * An initializer is a controller which enforces some system invariant at object creation time. This field is a list of initializers that have not yet acted on this object. If nil or empty, this object has been completely initialized. Otherwise, the object is considered uninitialized and is hidden (in list/watch and get calls) from clients that haven't explicitly asked to observe uninitialized objects.  When an object is created, the system will populate this list with the current set of initializers. Only privileged users may set or modify this list. Once it is empty, it may not be modified further by any user.  DEPRECATED - initializers are an alpha field and will be removed in v1.15.
    * @member {module:client/client.models/V1Initializers} initializers
    */
    initializers = undefined;
    /**
    * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
    * @member {Object.<String, String>} labels
    */
    labels = undefined;
    /**
    * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like \"ci-cd\". The set of fields is always in the version that the workflow used when modifying the object.  This field is alpha and can be changed or removed without notice.
    * @member {Array.<module:client/client.models/V1ManagedFieldsEntry>} managedFields
    */
    managedFields = undefined;
    /**
    * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
    * @member {String} name
    */
    name = undefined;
    /**
    * Namespace defines the space within each name must be unique. An empty namespace is equivalent to the \"default\" namespace, but \"default\" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.  Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces
    * @member {String} namespace
    */
    namespace = undefined;
    /**
    * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
    * @member {Array.<module:client/client.models/V1OwnerReference>} ownerReferences
    */
    ownerReferences = undefined;
    /**
    * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.  Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
    * @member {String} resourceVersion
    */
    resourceVersion = undefined;
    /**
    * SelfLink is a URL representing this object. Populated by the system. Read-only.
    * @member {String} selfLink
    */
    selfLink = undefined;
    /**
    * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.  Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
    * @member {String} uid
    */
    uid = undefined;








}

