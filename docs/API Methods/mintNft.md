---
sidebar_position: 7
---

The `mintNft` method converts an existing `utility` on the Gada API to an actual `NFT` deployable to the blockchain. When you mint a utility, you're simply preparing the utility for deployment to the blockchain. The process can take a few seconds depending on the communication between the `Solana` blockchain and the Gada API itself.

:::note
This is a blockchain method that performs minting on blockchain.
:::

To mint a utility, you need to supply the `utilityId` to the request-body (`params`). An ideal request with `mintNft` looks similar to the request-body below:

```json
  {
  "jsonrpc": "2.0",
  "method": "mintNFT",
  "params": {
    "utilityId": "a2fd3085-79cf-4c15-a161-0f5d15b3baf9"
  },
  "id": 1
}
```

| Params                       | Required                              | Description
|------------------------------|---------------------------------------|---------------------------------------|
| utilityId `string`           | Yes                                    | The id of the utility to mint as NFT.

A typical `JSON` object returned after minting a utility as `NFT` should look similar to the one below:

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
      "metadataAddress": "3Aob5EvfjWZmAAqJh9Y5gZgidVYgqwYMM7Uk2krsML7D"
    },
    "userId": "etu.e@gmail.com"
  },
  "id": 1
}
```
