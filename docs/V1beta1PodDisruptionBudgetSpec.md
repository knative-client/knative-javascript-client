# KubernetesJsClient.V1beta1PodDisruptionBudgetSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxUnavailable** | **Object** | An eviction is allowed if at most \&quot;maxUnavailable\&quot; pods selected by \&quot;selector\&quot; are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with \&quot;minAvailable\&quot;. | [optional] 
**minAvailable** | **Object** | An eviction is allowed if at least \&quot;minAvailable\&quot; pods selected by \&quot;selector\&quot; will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying \&quot;100%\&quot;. | [optional] 
**selector** | [**V1LabelSelector**](V1LabelSelector.md) | Label query over pods whose evictions are managed by the disruption budget. | [optional] 


