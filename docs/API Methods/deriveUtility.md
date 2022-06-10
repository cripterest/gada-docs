---
sidebar_position: 8
---

The `deriveUtility` method derives a utility from an exiting `masterUtility`. When deriving a utility from the  the `masterUtility` you're required to pass the `masterUtilityId`, the `userId` is optional an will link.

```json
{
  "jsonrpc": "2.0",
  "method": "deriveUtility",
  "params": {
    "masterUtilityId": "7cee897c-ca27-492f-8fdd-869b9b242df9",
    "userId": "etu.e@gmail.com"
  },
  "id": 1
}
```


| Params                       | Required                              | Description
|------------------------------|---------------------------------------|---------------------------------------|
| utilityId `string`           | Yes                                    | The id of the utility assign a new user.
| userId `string`              | Yes                                   | The id of the new user to maintain ownership of the utility.

A typical `JSON` object returned after deriving a utility should look similar to the one below:


```json
{
  "jsonrpc": "2.0",
  "result": {
    "_id": "cb03da11-296f-41cc-bf57-bae8e98f2ad7",
    "name": "My summer image collection",
    "description": "This are all the images I took during summer.",
    "imageURL": "https://api.gadalabs.com/solanaMetadataImg?id=access-bronze",
    "masterUtilityId": "7cee897c-ca27-492f-8fdd-869b9b242df9",
    "userId": "etu.e@gmail.com"
  },
  "id": 1
}
```
