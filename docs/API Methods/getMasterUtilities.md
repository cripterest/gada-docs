---
sidebar_position: 6
---

The `getMasterUtilities` method returns all the master utilities created via the Gada API.

```json
  {
  "jsonrpc": "2.0",
  "method": "getMasterUtilities",
  "id": 1
}
```

The `JSON` response below is returned from a `POST` request to the `getMasterUtilities` method with the request object above.

```json
{
  "jsonrpc": "2.0",
  "result": [
    {
      "_id": "7cee897c-ca27-492f-8fdd-869b9b242df9",
      "name": "My summer image collection",
      "description": "This are all the images I took during summer.",
      "imageURL": "https://api.gadalabs.com/solanaMetadataImg?id=access-bronze",
      "generator": {
        "type": "copy"
      }
    }
  ],
  "id": 1
}
```
