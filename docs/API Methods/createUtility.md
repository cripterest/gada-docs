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
    "userId": "etu.e@gmail.com",
    "auth": {
      "apiKeyId": "your_api_Key_Id",
      "apiKeySecret": "your_api_Key_Secret"
    },
  },
  "id": 1
}
```

| Params                       | Required                              | Description
|------------------------------|---------------------------------------|---------------------------------------|
| name `string`                | Yes                                   | Specifies the name for the utility.
| description `string`         | Yes                                   | A short description of the utility.
| userId `string`              | No                                    | Used to determine ownership of the utility if specified.
| image  `string`              | No                                    | A fallback image for a utility. without an `imageUrl`.
| imageURL  `string`           | No                                    | A link to a image for the utility.

The `JSON` object below is a response returned after creating a new utility with the request-object above:

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
