---
sidebar_position: 7
---

The `assignUtility` method allows users with existing utility to asign them to other users. A typical illustration of what `assignUtility` does is similar to a user who holds an `NFT` on the blockchain and decides to trade it for criptocurrency.

To assign a utility to a user you'll need to pass the `utilityId` and `userId` of the new user to own the utility. Below is an example of a request to the `assignUtility` method.


```json
{
  "jsonrpc": "2.0",
  "method": "assignUtility",
  "params": {
    "utilityId": "83ea81c3-43e9-44ed-8e56-f35f1055358e",
    "userId": "etu.e@gmail.com"
  },
  "id": 1
}
```


| Params                       | Required                              | Description
|------------------------------|---------------------------------------|---------------------------------------|
| utilityId `string`           | Yes                                    | The id of the utility assign a new user.
| userId `string`              | Yes                                   | The id of the new user to maintain ownership of the utility.

```json
{
  "jsonrpc": "2.0",
  "result": {
    "_id": "83ea81c3-43e9-44ed-8e56-f35f1055358e",
    "name": "Another Utility",
    "description": "This is another utility.",
    "imageURL": "https://api.gadalabs.com/solanaMetadataImg?id=c2edfa41-da6d-446e-aef7-4c6e29252188",
    "userId": "etu.e@gmail.com"
  },
  "id": 1
}
```
