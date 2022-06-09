---
sidebar_position: 2
---


The `getUtility` method retrieves a utility based on its unique identifier `utilityId`. It also accepts an optional argument `userId` within its request-body `params` which ideally identifies the user that owns the utility.

To retrieve a utility with the `getUtility` method simply construct a request object similar to the one below:

```json
  {
  "jsonrpc": "2.0",
  "method": "getUtility",
  "params": {
    "userId": "etu.e@gmail.com",
    "utilityId": "a2fd3085-79cf-4c15-a161-0f5d15b3baf9"
  },
  "id": 1
}
```

| Params                       | Required                              | Description
|------------------------------|---------------------------------------|---------------------------------------|
| utilityId `string`                    | Yes                                   | The unique identifier of the utility you intend to fetch.
| userId `string`                       | No                                    | The `userId` indentifies the user that owns the utility.

The `JSON` response below is returned when we perform a request with the `getUtlity` method:

```json
  {
  "jsonrpc": "2.0",
  "result": {
    "_id": "a2fd3085-79cf-4c15-a161-0f5d15b3baf9",
    "name": "My First Utility",
    "description": "This is my first utility.",
    "imageURL": "https://api.gadalabs.com/solanaMetadataImg?id=041a1606-8573-4508-ad22-c303658bb43d",
    "userId": "etu.e@gmail.com"
  },
  "id": 1
}
```
