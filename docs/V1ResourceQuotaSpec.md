# KubernetesJsClient.V1ResourceQuotaSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hard** | **{String: String}** | hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/ | [optional] 
**scopeSelector** | [**V1ScopeSelector**](V1ScopeSelector.md) | scopeSelector is also a collection of filters like scopes that must match each object tracked by a quota but expressed using ScopeSelectorOperator in combination with possible values. For a resource to match, both scopes AND scopeSelector (if specified in spec), must be matched. | [optional] 
**scopes** | **[String]** | A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects. | [optional] 


