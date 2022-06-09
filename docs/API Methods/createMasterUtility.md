---
sidebar_position: 4
---
A master utility is like a pre-designed template that other utilities can be derived from them. Think about a master utility as a collection of `NFT`s held by a user on the blockchain. The `createMasterUtility` allows users to create master utilities where other utilities can derive from them.

To create a master utility, you'll need to construct a `POST` request with a request-body (`params`) similar to the one below:

```json
  {
  "jsonrpc": "2.0",
  "method": "createMasterUtility",
  "params": {
    "name": "My summer image collection",
    "description": "This are all the images I took during summer.",
    "imageUrl": "https://picsum.photos/id/237/200/300",
    "generator": "copy"
  },
  "id": 1
}
```

| Params                       | Required                              | Description
|------------------------------|---------------------------------------|---------------------------------------|
| name `string`                | Yes                                   | The name for the master-utility.
| description `string`         | Yes                                   | A short description of the master-utility.
| generator `string`           | No                                    | Determines how utilities are derived from the master utility, and available options (`copy`, `increment`).
| image  `string`              | No                                    | A fallback image for a master-utility.
| imageURL  `string`           | No                                    | A link to an image for the master-utility.

The `JSON` object below is a response returned after creating a new master-utility with the request-object above:

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
