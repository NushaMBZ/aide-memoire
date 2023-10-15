```aosr-deck-config
{
	"rule": {
		"conditions": {
			"all": [{
				"fact": "file",
				"path": "$.tags",
				"operator": "regexMatch",
				"value": "eei4362"
			}]
		},
		"event": {
			"type": "match"
		}
	}
}
```