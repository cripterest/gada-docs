---
sidebar_position: 3
---


The `getUtilities` method returns all the utilities created via the Gada API. It returns all utilities that were either created by a user through the [createUtility](createUtility.md) method, or derived from a [masterUtility](createMasterUtility.md).

The `getUtilities` method accepts three optional arguments `userId`, `derived` and `masterUtilityId`.

```json
  {
  "jsonrpc": "2.0",
  "method": "getUtilities",
  "params": {
    "userId": "john.doa@gmail.com",
    "derived": true,
    "masterUtilityId": "b5edd5c9-f363-438f-ab69-4b73f81ea11a"
  },
  "id": 1
}
```

| Params                       | Required                              | Description
|------------------------------|---------------------------------------|---------------------------------------|
| userId `string`              | No                                    | Returns only utilities own by the `userId` specified.
| derived `Boolean`            | No                                    | Returns utilities that were derived from mater utilities if set to `true`.
| materUtilityId `string`      | No                                    | Returns all utilities with the `masterUtilityId` specified.

The `JSON` response below is returned from a `POST` request to the `getUtilities` method without any option passed to the request body `params`.

```json
{
  "jsonrpc": "2.0",
  "result": [
    {
      "_id": "1fb4ab34-1b2e-4840-8789-12e495003e81",
      "name": "Pulpo exclusivo",
      "description": "Este coleccionable es único!",
      "imageURL": "https://api.gadalabs.com/solanaMetadataImg?id=c13ea2f3-221f-4561-83a8-f4645736b53e",
      "userId": "juan@gmail.com"
    },
    {
      "_id": "a2fd3085-79cf-4c15-a161-0f5d15b3baf9",
      "name": "My First Utility",
      "description": "This is my first utility.",
      "imageURL": "https://api.gadalabs.com/solanaMetadataImg?id=041a1606-8573-4508-ad22-c303658bb43d",
      "userId": "etu.e@gmail.com"
    }
  ],
  "id": 1
}
```
