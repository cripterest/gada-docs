---
sidebar_position: 1
---

# createUtility


The `createUtility` method creates a new utility via the Gada API and accepts the params `object` as a request-body. The params `object` consist of the `name`, `details`, `imageURL` and `_userId`. Only the `imageUrl` can be nullable while the `_userId` specifies a unique link between the utility and a user on the Gada API.

The snippet below is a clear illustration of what a new utility request object looks like:

```json
  {
  "jsonrpc": "2.0",
  "method": "createUtility",
  "params": {
    "name": "My First Utility",
    "description": "This is my first utility.",
    "imageURL": "https://picsum.photos/id/237/200/300",
    "userId": "etu.e@gmail.com"
  },
  "id": 1
}
```

| Params                       | Required                              | Description
|------------------------------|---------------------------------------|---------------------------------------|
| id                           | Yes                                   | The unique indentifier for the (`id`) utility.
| method                       | yes                                   | The method that gets executed when the request is sent. Returns (JSON)
|                              |                                       |
| params                       | No                                    | Accepts an `object` containing unique indetifiers for the request.
| name                         |                                       |
| description                  |                                       |
| userId                       |                                       |
| image                        | No                                    |
| imageURL                     | No                                    |

The `JSON` object below is a response returned after creating a new request:

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
