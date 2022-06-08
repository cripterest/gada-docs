
The `getUtilities` method returns all the utilities created via the Gada API uniquely linked to a user. A utility can either be created independently or derived from a [masterUtility](http:/localhost:3000/createMasterUtility). When you perform a `POST` request on the `getUtilities` method, you have some parameters you can leverage to control the response you get.

The `getUtilities` request has 3 valuable parts the `id`, `params` and `method` and looks like the code snippet below:

```json
  {
  "jsonrpc": "2.0",
  "method": "getUtilities",
  "params": {
    "_userId": "john.doa@gmail.com",
    "_derived": true,
    "_masterUtilityId": "b5edd5c9-f363-438f-ab69-4b73f81ea11a"
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
| userId                       |                                       |
| _derived                     |                                       |
| _materUtilityId              |                                       |

A typical response object return from the `getUtilities` method looks similar to the snippet below:

```json
 {
  "jsonrpc": "2.0",
  "result": [

  ],
  "id": 1
}
```
