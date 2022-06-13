---
sidebar_position: 10
---

The `exportNFT` converts a utility to an `NFT` and deploys it to the blockchain. The process can take a few seconds depending on the communication between the `Solana` blockchain and Gada API.

:::note
This is a blockchain method that performs minting on blockchain.
:::

To export a utility as NFT, you need to supply the `utilityId` to the request-body (`params`). An example request with `exportNFT` method looks similar to the request object below:

```json
  {
  "jsonrpc": "2.0",
  "method": "exportNFT",
  "params": {
    "utilityId": "a2fd3085-79cf-4c15-a161-0f5d15b3baf9",
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
| utilityId `string`           | Yes                                    | The id of the utility to export as NFT.


A typical `JSON` object returned after exporting a utility as `NFT` should look similar to the one below:

```json
  {
  "jsonrpc": "2.0",
  "result": {
    "_id": "a2fd3085-79cf-4c15-a161-0f5d15b3baf9",
    "name": "My First Utility",
    "description": "This is my first utility.",
    "imageURL": "https://api.gadalabs.com/solanaMetadataImg?id=041a1606-8573-4508-ad22-c303658bb43d",
    "nft": {
      "type": "solana",
      "mintDate": "2022-06-09T14:39:18.102Z",
      "mintTransaction": "4Q1qdWAqmMKTyKShzuVYcYDfPa3uBdZAKE7ce69TcTRVLrNYFCxTGnPHKrHrGRgPEgvp3tygs6x8mmBcF91yhpjm",
      "mintAddress": "CSRbLenRW7kFrm6PnDGSNrWsvAvuCDAtxjZVjtKzc1AB",
      "mintAuthority": "79xiZGzo7EeVG7HCh9WKhxHv1a4Di7tzojfNsQ4xAEdj",
      "metadataAddress": "3Aob5EvfjWZmAAqJh9Y5gZgidVYgqwYMM7Uk2krsML7D",
      "exportDate": "2022-06-09T15:27:14.637Z",
      "exportTransaction": "5YhbkZLsHgsLWxuydww45uyBMsxeMg4egNA25kH972MHDaWfi4bVhkzp83EDpeDz6pGfBabTcb2UJwZCjji4GSXJ",
      "exportWalletPublicKey": "4WyL3DjDSb7kMWv8b2Z4rPwfh7Vr9pEF2vpVNMTFvjj7",
      "exportWalletPrivateKey": "4aJEV7z23s8hKRiX8DXjJv5SHdg9zizhXm1LsyzyLAA9xN1zu6TdEJZmftps2fA4dKhDxL5GoEXXicQysKciqygu"
    },
    "userId": "etu.e@gmail.com"
  },
  "id": 1
}
```

The `nft` info is different from the rest of the data returned, it is the on-chain information returned from the Solona `blockchain` for the NFT.

- `mintDate`: The date the NFT got minted.
- `mintAddress`: The mint address of the NFT
- `mintTransaction`: A Unique identifier for the mint transaction.
- `mintAddress`: The origin of the NFT.
- `metadataAddress`: The origin for the meta info for the NFT
- `exportWalletPublicKey` The public wallet of address of the current owner of the NFT.
- `exportWalletPrivateKey` The private wallet of address of the current owner of the NFT.
