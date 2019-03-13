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
* The V1ServicePort model module.
* @module client/client.models/V1ServicePort
* @version 0.1
*/
export default class V1ServicePort {
    /**
    * Constructs a new <code>V1ServicePort</code>.
    * ServicePort contains information on service&#39;s port.
    * @alias module:client/client.models/V1ServicePort
    * @class
    * @param port {Number} The port that will be exposed by this service.
    */

    constructor(port) {
        

        
        

        this['port'] = port;

        
    }

    /**
    * Constructs a <code>V1ServicePort</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:client/client.models/V1ServicePort} obj Optional instance to populate.
    * @return {module:client/client.models/V1ServicePort} The populated <code>V1ServicePort</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ServicePort();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('nodePort')) {
                obj['nodePort'] = ApiClient.convertToType(data['nodePort'], 'Number');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('protocol')) {
                obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
            }
            if (data.hasOwnProperty('targetPort')) {
                obj['targetPort'] = ApiClient.convertToType(data['targetPort'], Object);
            }
        }
        return obj;
    }

    /**
    * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. This maps to the 'Name' field in EndpointPort objects. Optional if only one ServicePort is defined on this service.
    * @member {String} name
    */
    name = undefined;
    /**
    * The port on each node on which this service is exposed when type=NodePort or LoadBalancer. Usually assigned by the system. If specified, it will be allocated to the service if unused or else creation of the service will fail. Default is to auto-allocate a port if the ServiceType of this Service requires one. More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
    * @member {Number} nodePort
    */
    nodePort = undefined;
    /**
    * The port that will be exposed by this service.
    * @member {Number} port
    */
    port = undefined;
    /**
    * The IP protocol for this port. Supports \"TCP\", \"UDP\", and \"SCTP\". Default is TCP.
    * @member {String} protocol
    */
    protocol = undefined;
    /**
    * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
    * @member {Object} targetPort
    */
    targetPort = undefined;








}

