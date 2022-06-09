---
sidebar_position: 5
---

The `getMasterUtility` method retrieves a master utility based on its unique identifier `masterUtilityId`.
To retrieve a utility with the `getMasterUtility` method simply construct a request object similar to the one below:

```json
  {
  "jsonrpc": "2.0",
  "method": "getMasterUtility",
  "params": {
    "masterUtilityId": "7cee897c-ca27-492f-8fdd-869b9b242df9"
  },
  "id": 1
}
```

| Params                       | Required                              | Description
|------------------------------|---------------------------------------|---------------------------------------|
| masterUtilityId `string`     | Yes                                   | The unique identifier of the master utility you intend to fetch.

The `JSON` response below is returned when we perform a request with the `getMasterUtlity` method:

```json
 {
  "jsonrpc": "2.0",
  "result": {
    "_id": "7cee897c-ca27-492f-8fdd-869b9b242df9",
    "name": "My summer image collection",
    "description": "This are all the images I took during summer.",
    "imageURL": "https://api.gadalabs.com/solanaMetadataImg?id=access-bronze",
    "generator": {
      "type": "copy"
    }
  },
  "id": 1
}
```
