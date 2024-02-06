---
dg-publish: true
---

```aosr-deck-config
{
	"rule": {
		"conditions": {
			"all": [{
				"fact": "file",
				"path": "$.tags",
				"operator": "regexMatch",
				"value": "eei4366"
			}]
		},
		"event": {
			"type": "match"
		}
	}
}
```

