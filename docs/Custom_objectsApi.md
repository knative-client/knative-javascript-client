# KubernetesJsClient.Custom_objectsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createClusterCustomObject**](Custom_objectsApi.md#createClusterCustomObject) | **POST** /apis/{group}/{version}/{plural} | 
[**createNamespacedCustomObject**](Custom_objectsApi.md#createNamespacedCustomObject) | **POST** /apis/{group}/{version}/namespaces/{namespace}/{plural} | 
[**deleteClusterCustomObject**](Custom_objectsApi.md#deleteClusterCustomObject) | **DELETE** /apis/{group}/{version}/{plural}/{name} | 
[**deleteNamespacedCustomObject**](Custom_objectsApi.md#deleteNamespacedCustomObject) | **DELETE** /apis/{group}/{version}/namespaces/{namespace}/{plural}/{name} | 
[**getClusterCustomObject**](Custom_objectsApi.md#getClusterCustomObject) | **GET** /apis/{group}/{version}/{plural}/{name} | 
[**getClusterCustomObjectScale**](Custom_objectsApi.md#getClusterCustomObjectScale) | **GET** /apis/{group}/{version}/{plural}/{name}/scale | 
[**getClusterCustomObjectStatus**](Custom_objectsApi.md#getClusterCustomObjectStatus) | **GET** /apis/{group}/{version}/{plural}/{name}/status | 
[**getNamespacedCustomObject**](Custom_objectsApi.md#getNamespacedCustomObject) | **GET** /apis/{group}/{version}/namespaces/{namespace}/{plural}/{name} | 
[**getNamespacedCustomObjectScale**](Custom_objectsApi.md#getNamespacedCustomObjectScale) | **GET** /apis/{group}/{version}/namespaces/{namespace}/{plural}/{name}/scale | 
[**getNamespacedCustomObjectStatus**](Custom_objectsApi.md#getNamespacedCustomObjectStatus) | **GET** /apis/{group}/{version}/namespaces/{namespace}/{plural}/{name}/status | 
[**listClusterCustomObject**](Custom_objectsApi.md#listClusterCustomObject) | **GET** /apis/{group}/{version}/{plural} | 
[**listNamespacedCustomObject**](Custom_objectsApi.md#listNamespacedCustomObject) | **GET** /apis/{group}/{version}/namespaces/{namespace}/{plural} | 
[**patchClusterCustomObject**](Custom_objectsApi.md#patchClusterCustomObject) | **PATCH** /apis/{group}/{version}/{plural}/{name} | 
[**patchClusterCustomObjectScale**](Custom_objectsApi.md#patchClusterCustomObjectScale) | **PATCH** /apis/{group}/{version}/{plural}/{name}/scale | 
[**patchClusterCustomObjectStatus**](Custom_objectsApi.md#patchClusterCustomObjectStatus) | **PATCH** /apis/{group}/{version}/{plural}/{name}/status | 
[**patchNamespacedCustomObject**](Custom_objectsApi.md#patchNamespacedCustomObject) | **PATCH** /apis/{group}/{version}/namespaces/{namespace}/{plural}/{name} | 
[**patchNamespacedCustomObjectScale**](Custom_objectsApi.md#patchNamespacedCustomObjectScale) | **PATCH** /apis/{group}/{version}/namespaces/{namespace}/{plural}/{name}/scale | 
[**patchNamespacedCustomObjectStatus**](Custom_objectsApi.md#patchNamespacedCustomObjectStatus) | **PATCH** /apis/{group}/{version}/namespaces/{namespace}/{plural}/{name}/status | 
[**replaceClusterCustomObject**](Custom_objectsApi.md#replaceClusterCustomObject) | **PUT** /apis/{group}/{version}/{plural}/{name} | 
[**replaceClusterCustomObjectScale**](Custom_objectsApi.md#replaceClusterCustomObjectScale) | **PUT** /apis/{group}/{version}/{plural}/{name}/scale | 
[**replaceClusterCustomObjectStatus**](Custom_objectsApi.md#replaceClusterCustomObjectStatus) | **PUT** /apis/{group}/{version}/{plural}/{name}/status | 
[**replaceNamespacedCustomObject**](Custom_objectsApi.md#replaceNamespacedCustomObject) | **PUT** /apis/{group}/{version}/namespaces/{namespace}/{plural}/{name} | 
[**replaceNamespacedCustomObjectScale**](Custom_objectsApi.md#replaceNamespacedCustomObjectScale) | **PUT** /apis/{group}/{version}/namespaces/{namespace}/{plural}/{name}/scale | 
[**replaceNamespacedCustomObjectStatus**](Custom_objectsApi.md#replaceNamespacedCustomObjectStatus) | **PUT** /apis/{group}/{version}/namespaces/{namespace}/{plural}/{name}/status | 


<a name="createClusterCustomObject"></a>
# **createClusterCustomObject**
> Object createClusterCustomObject(group, version, plural, body, opts)



Creates a cluster scoped Custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | The custom resource's group name

let version = "version_example"; // String | The custom resource's version

let plural = "plural_example"; // String | The custom resource's plural name. For TPRs this would be lowercase plural kind.

let body = null; // Object | The JSON schema of the Resource to create.

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createClusterCustomObject(group, version, plural, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| The custom resource&#39;s group name | 
 **version** | **String**| The custom resource&#39;s version | 
 **plural** | **String**| The custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **body** | **Object**| The JSON schema of the Resource to create. | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createNamespacedCustomObject"></a>
# **createNamespacedCustomObject**
> Object createNamespacedCustomObject(group, version, namespace, plural, body, opts)



Creates a namespace scoped Custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | The custom resource's group name

let version = "version_example"; // String | The custom resource's version

let namespace = "namespace_example"; // String | The custom resource's namespace

let plural = "plural_example"; // String | The custom resource's plural name. For TPRs this would be lowercase plural kind.

let body = null; // Object | The JSON schema of the Resource to create.

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createNamespacedCustomObject(group, version, namespace, plural, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| The custom resource&#39;s group name | 
 **version** | **String**| The custom resource&#39;s version | 
 **namespace** | **String**| The custom resource&#39;s namespace | 
 **plural** | **String**| The custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **body** | **Object**| The JSON schema of the Resource to create. | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteClusterCustomObject"></a>
# **deleteClusterCustomObject**
> Object deleteClusterCustomObject(group, version, plural, name, body, opts)



Deletes the specified cluster scoped custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let plural = "plural_example"; // String | the custom object's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name

let body = new KubernetesJsClient.V1DeleteOptions(); // V1DeleteOptions | 

let opts = { 
  'gracePeriodSeconds': 56, // Number | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
  'orphanDependents': true, // Boolean | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
  'propagationPolicy': "propagationPolicy_example" // String | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy.
};

apiInstance.deleteClusterCustomObject(group, version, plural, name, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **plural** | **String**| the custom object&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 
 **body** | [**V1DeleteOptions**](V1DeleteOptions.md)|  | 
 **gracePeriodSeconds** | **Number**| The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | [optional] 
 **orphanDependents** | **Boolean**| Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. | [optional] 
 **propagationPolicy** | **String**| Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. | [optional] 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

<a name="deleteNamespacedCustomObject"></a>
# **deleteNamespacedCustomObject**
> Object deleteNamespacedCustomObject(group, version, namespace, plural, name, body, opts)



Deletes the specified namespace scoped custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let namespace = "namespace_example"; // String | The custom resource's namespace

let plural = "plural_example"; // String | the custom resource's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name

let body = new KubernetesJsClient.V1DeleteOptions(); // V1DeleteOptions | 

let opts = { 
  'gracePeriodSeconds': 56, // Number | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
  'orphanDependents': true, // Boolean | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
  'propagationPolicy': "propagationPolicy_example" // String | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy.
};

apiInstance.deleteNamespacedCustomObject(group, version, namespace, plural, name, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **namespace** | **String**| The custom resource&#39;s namespace | 
 **plural** | **String**| the custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 
 **body** | [**V1DeleteOptions**](V1DeleteOptions.md)|  | 
 **gracePeriodSeconds** | **Number**| The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | [optional] 
 **orphanDependents** | **Boolean**| Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. | [optional] 
 **propagationPolicy** | **String**| Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. | [optional] 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

<a name="getClusterCustomObject"></a>
# **getClusterCustomObject**
> Object getClusterCustomObject(group, version, plural, name, )



Returns a cluster scoped custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let plural = "plural_example"; // String | the custom object's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name


apiInstance.getClusterCustomObject(group, version, plural, name, , (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **plural** | **String**| the custom object&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

<a name="getClusterCustomObjectScale"></a>
# **getClusterCustomObjectScale**
> Object getClusterCustomObjectScale(group, version, plural, name, )



read scale of the specified custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let plural = "plural_example"; // String | the custom resource's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name


apiInstance.getClusterCustomObjectScale(group, version, plural, name, , (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **plural** | **String**| the custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="getClusterCustomObjectStatus"></a>
# **getClusterCustomObjectStatus**
> Object getClusterCustomObjectStatus(group, version, plural, name, )



read status of the specified cluster scoped custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let plural = "plural_example"; // String | the custom resource's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name


apiInstance.getClusterCustomObjectStatus(group, version, plural, name, , (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **plural** | **String**| the custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="getNamespacedCustomObject"></a>
# **getNamespacedCustomObject**
> Object getNamespacedCustomObject(group, version, namespace, plural, name, )



Returns a namespace scoped custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let namespace = "namespace_example"; // String | The custom resource's namespace

let plural = "plural_example"; // String | the custom resource's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name


apiInstance.getNamespacedCustomObject(group, version, namespace, plural, name, , (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **namespace** | **String**| The custom resource&#39;s namespace | 
 **plural** | **String**| the custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

<a name="getNamespacedCustomObjectScale"></a>
# **getNamespacedCustomObjectScale**
> Object getNamespacedCustomObjectScale(group, version, namespace, plural, name, )



read scale of the specified namespace scoped custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let namespace = "namespace_example"; // String | The custom resource's namespace

let plural = "plural_example"; // String | the custom resource's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name


apiInstance.getNamespacedCustomObjectScale(group, version, namespace, plural, name, , (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **namespace** | **String**| The custom resource&#39;s namespace | 
 **plural** | **String**| the custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="getNamespacedCustomObjectStatus"></a>
# **getNamespacedCustomObjectStatus**
> Object getNamespacedCustomObjectStatus(group, version, namespace, plural, name, )



read status of the specified namespace scoped custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let namespace = "namespace_example"; // String | The custom resource's namespace

let plural = "plural_example"; // String | the custom resource's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name


apiInstance.getNamespacedCustomObjectStatus(group, version, namespace, plural, name, , (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **namespace** | **String**| The custom resource&#39;s namespace | 
 **plural** | **String**| the custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="listClusterCustomObject"></a>
# **listClusterCustomObject**
> Object listClusterCustomObject(group, version, plural, , opts)



list or watch cluster scoped custom objects

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | The custom resource's group name

let version = "version_example"; // String | The custom resource's version

let plural = "plural_example"; // String | The custom resource's plural name. For TPRs this would be lowercase plural kind.

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications.
};

apiInstance.listClusterCustomObject(group, version, plural, , opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| The custom resource&#39;s group name | 
 **version** | **String**| The custom resource&#39;s version | 
 **plural** | **String**| The custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **fieldSelector** | **String**| A selector to restrict the list of returned objects by their fields. Defaults to everything. | [optional] 
 **labelSelector** | **String**| A selector to restrict the list of returned objects by their labels. Defaults to everything. | [optional] 
 **resourceVersion** | **String**| When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. | [optional] 
 **timeoutSeconds** | **Number**| Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | [optional] 
 **watch** | **Boolean**| Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. | [optional] 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/json;stream=watch

<a name="listNamespacedCustomObject"></a>
# **listNamespacedCustomObject**
> Object listNamespacedCustomObject(group, version, namespace, plural, , opts)



list or watch namespace scoped custom objects

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | The custom resource's group name

let version = "version_example"; // String | The custom resource's version

let namespace = "namespace_example"; // String | The custom resource's namespace

let plural = "plural_example"; // String | The custom resource's plural name. For TPRs this would be lowercase plural kind.

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications.
};

apiInstance.listNamespacedCustomObject(group, version, namespace, plural, , opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| The custom resource&#39;s group name | 
 **version** | **String**| The custom resource&#39;s version | 
 **namespace** | **String**| The custom resource&#39;s namespace | 
 **plural** | **String**| The custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **fieldSelector** | **String**| A selector to restrict the list of returned objects by their fields. Defaults to everything. | [optional] 
 **labelSelector** | **String**| A selector to restrict the list of returned objects by their labels. Defaults to everything. | [optional] 
 **resourceVersion** | **String**| When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. | [optional] 
 **timeoutSeconds** | **Number**| Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | [optional] 
 **watch** | **Boolean**| Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. | [optional] 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/json;stream=watch

<a name="patchClusterCustomObject"></a>
# **patchClusterCustomObject**
> Object patchClusterCustomObject(group, version, plural, name, body)



patch the specified cluster scoped custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let plural = "plural_example"; // String | the custom object's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name

let body = null; // Object | The JSON schema of the Resource to patch.


apiInstance.patchClusterCustomObject(group, version, plural, name, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **plural** | **String**| the custom object&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 
 **body** | **Object**| The JSON schema of the Resource to patch. | 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json

<a name="patchClusterCustomObjectScale"></a>
# **patchClusterCustomObjectScale**
> Object patchClusterCustomObjectScale(group, version, plural, name, body)



partially update scale of the specified cluster scoped custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let plural = "plural_example"; // String | the custom resource's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name

let body = null; // Object | 


apiInstance.patchClusterCustomObjectScale(group, version, plural, name, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **plural** | **String**| the custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="patchClusterCustomObjectStatus"></a>
# **patchClusterCustomObjectStatus**
> Object patchClusterCustomObjectStatus(group, version, plural, name, body)



partially update status of the specified cluster scoped custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let plural = "plural_example"; // String | the custom resource's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name

let body = null; // Object | 


apiInstance.patchClusterCustomObjectStatus(group, version, plural, name, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **plural** | **String**| the custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="patchNamespacedCustomObject"></a>
# **patchNamespacedCustomObject**
> Object patchNamespacedCustomObject(group, version, namespace, plural, name, body)



patch the specified namespace scoped custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let namespace = "namespace_example"; // String | The custom resource's namespace

let plural = "plural_example"; // String | the custom resource's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name

let body = null; // Object | The JSON schema of the Resource to patch.


apiInstance.patchNamespacedCustomObject(group, version, namespace, plural, name, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **namespace** | **String**| The custom resource&#39;s namespace | 
 **plural** | **String**| the custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 
 **body** | **Object**| The JSON schema of the Resource to patch. | 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json

<a name="patchNamespacedCustomObjectScale"></a>
# **patchNamespacedCustomObjectScale**
> Object patchNamespacedCustomObjectScale(group, version, namespace, plural, name, body)



partially update scale of the specified namespace scoped custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let namespace = "namespace_example"; // String | The custom resource's namespace

let plural = "plural_example"; // String | the custom resource's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name

let body = null; // Object | 


apiInstance.patchNamespacedCustomObjectScale(group, version, namespace, plural, name, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **namespace** | **String**| The custom resource&#39;s namespace | 
 **plural** | **String**| the custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="patchNamespacedCustomObjectStatus"></a>
# **patchNamespacedCustomObjectStatus**
> Object patchNamespacedCustomObjectStatus(group, version, namespace, plural, name, body)



partially update status of the specified namespace scoped custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let namespace = "namespace_example"; // String | The custom resource's namespace

let plural = "plural_example"; // String | the custom resource's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name

let body = null; // Object | 


apiInstance.patchNamespacedCustomObjectStatus(group, version, namespace, plural, name, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **namespace** | **String**| The custom resource&#39;s namespace | 
 **plural** | **String**| the custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replaceClusterCustomObject"></a>
# **replaceClusterCustomObject**
> Object replaceClusterCustomObject(group, version, plural, name, body)



replace the specified cluster scoped custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let plural = "plural_example"; // String | the custom object's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name

let body = null; // Object | The JSON schema of the Resource to replace.


apiInstance.replaceClusterCustomObject(group, version, plural, name, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **plural** | **String**| the custom object&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 
 **body** | **Object**| The JSON schema of the Resource to replace. | 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

<a name="replaceClusterCustomObjectScale"></a>
# **replaceClusterCustomObjectScale**
> Object replaceClusterCustomObjectScale(group, version, plural, name, body)



replace scale of the specified cluster scoped custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let plural = "plural_example"; // String | the custom resource's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name

let body = null; // Object | 


apiInstance.replaceClusterCustomObjectScale(group, version, plural, name, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **plural** | **String**| the custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replaceClusterCustomObjectStatus"></a>
# **replaceClusterCustomObjectStatus**
> Object replaceClusterCustomObjectStatus(group, version, plural, name, body)



replace status of the cluster scoped specified custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let plural = "plural_example"; // String | the custom resource's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name

let body = null; // Object | 


apiInstance.replaceClusterCustomObjectStatus(group, version, plural, name, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **plural** | **String**| the custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replaceNamespacedCustomObject"></a>
# **replaceNamespacedCustomObject**
> Object replaceNamespacedCustomObject(group, version, namespace, plural, name, body)



replace the specified namespace scoped custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let namespace = "namespace_example"; // String | The custom resource's namespace

let plural = "plural_example"; // String | the custom resource's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name

let body = null; // Object | The JSON schema of the Resource to replace.


apiInstance.replaceNamespacedCustomObject(group, version, namespace, plural, name, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **namespace** | **String**| The custom resource&#39;s namespace | 
 **plural** | **String**| the custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 
 **body** | **Object**| The JSON schema of the Resource to replace. | 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json

<a name="replaceNamespacedCustomObjectScale"></a>
# **replaceNamespacedCustomObjectScale**
> Object replaceNamespacedCustomObjectScale(group, version, namespace, plural, name, body)



replace scale of the specified namespace scoped custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let namespace = "namespace_example"; // String | The custom resource's namespace

let plural = "plural_example"; // String | the custom resource's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name

let body = null; // Object | 


apiInstance.replaceNamespacedCustomObjectScale(group, version, namespace, plural, name, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **namespace** | **String**| The custom resource&#39;s namespace | 
 **plural** | **String**| the custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replaceNamespacedCustomObjectStatus"></a>
# **replaceNamespacedCustomObjectStatus**
> Object replaceNamespacedCustomObjectStatus(group, version, namespace, plural, name, body)



replace status of the specified namespace scoped custom object

### Example
```javascript
import KubernetesJsClient from 'kubernetes-js-client';
let defaultClient = KubernetesJsClient.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

let apiInstance = new KubernetesJsClient.Custom_objectsApi();

let group = "group_example"; // String | the custom resource's group

let version = "version_example"; // String | the custom resource's version

let namespace = "namespace_example"; // String | The custom resource's namespace

let plural = "plural_example"; // String | the custom resource's plural name. For TPRs this would be lowercase plural kind.

let name = "name_example"; // String | the custom object's name

let body = null; // Object | 


apiInstance.replaceNamespacedCustomObjectStatus(group, version, namespace, plural, name, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **String**| the custom resource&#39;s group | 
 **version** | **String**| the custom resource&#39;s version | 
 **namespace** | **String**| The custom resource&#39;s namespace | 
 **plural** | **String**| the custom resource&#39;s plural name. For TPRs this would be lowercase plural kind. | 
 **name** | **String**| the custom object&#39;s name | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

[BearerToken](../README.md#BearerToken)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

