---
sidebar_position: 2
---

# Endemic Exchange

Endemic Exchange contract enables trading on Endemic.

There are several types of trading that are supported in our system:

1. Auction
   - Dutch
   - Reserve
   - Fixed
   - Private
2. Offer

The Dutch auction is a mechanism in which the auctioneer begins with a high asking price in the case of selling and lowers it until some participant accepts the price, or it reaches a predetermined reserve price. NFT will stay listed at the reserve price until the seller cancels the listing.

Unlike the dutch auction where the price of the NFT is decreased as time passes, in a reserve auction, the price can go up as bidders bid and try to outbid each other. Also, while listing seller needs to specify the minimum price that is asked for the auctioned NFT. When listed, for the auction to start it needs to be bid at least one time, and after that bidders try to outbid each other until the auction is finished. The highest bidder at the end gets the right to claim auction NFT.

Fixed auction is a type of auction where the auctioneer sets a fixed price for the NFT. The price will remain the same until NFT is sold or the auctioneer decides to update the listing of the auctioned NFT.

A private auction is for those who want their auction to remain private and hidden from the rest of the marketplace. During the private listing, the auctioneer needs to provide the wallet address of the specific buyer to whom he wants to sell his NFT. After listing, it will only be visible to the seller and buyer.

Offer trade mechanism enables trading beside auction. Offer makers can create offers with any amount of funds. Nevertheless, if NFT is already auctioned, the offer will still be shown on the seller's profile and he will be able to accept the offer and conclude the sale. The offer maker if wanted can also cancel his offer and retrieve the funds he deposited for the offer.

## Auction methods

### createDutchAuction

```
function createDutchAuction(
        address nftContract,
        uint256 tokenId,
        uint256 startingPrice,
        uint256 endingPrice,
        uint256 duration,
        uint256 amount,
        address paymentErc20TokenAddress,
        bytes4 assetClass
    ) external nonReentrant
```

Method used to create an dutch auction in the marketplace.

**Parameters**

| Name                     | Type    | Description                                                                 |
| ------------------------ | ------- | --------------------------------------------------------------------------- |
| nftContract              | address | address of the collection                                                   |
| tokenId                  | uint256 | token id to auction                                                         |
| startingPrice            | uint256 | starting price of the auction, in wei                                       |
| endingPrice              | uint256 | ending price of the auction must be less or equal to starting price, in wei |
| duration                 | uint256 | duration of the auction, greater than 1 minute                              |
| amount                   | uint256 | amount of tokens to auction, 1 for ERC-721, multiple for ERC-1155           |
| paymentErc20TokenAddress | address | address of the ERC20 token that the auction is listed in                    |
| assetClass               | bytes4  | ERC721 or ERC1155 identifiers                                               |

_If auction is listed in ether, paymentErc20TokenAddress will be Ethereum's default zero address._

Asset classes

```
    bytes4 public constant ERC721_ASSET_CLASS = bytes4(keccak256("ERC721"));
    bytes4 public constant ERC1155_ASSET_CLASS = bytes4(keccak256("ERC1155"));
```

### createReserveAuction

```
function createReserveAuction(
        address nftContract,
        uint256 tokenId,
        uint256 reservePrice,
        address paymentErc20TokenAddress
    )
        external
        nonReentrant
        onlySupportedERC20Payments(paymentErc20TokenAddress)
```

The method used to create a reserve auction in the marketplace.

**Parameters**

| Name                     | Type    | Description                                              |
| ------------------------ | ------- | -------------------------------------------------------- |
| nftContract              | address | address of the collection                                |
| tokenId                  | uint256 | token id to auction                                      |
| reservePrice             | uint256 | minimum price sellers asks for the NFT                   |
| paymentErc20TokenAddress | address | address of the ERC20 token that the auction is listed in |

_If auction is listed in ether, paymentErc20TokenAddress will be Ethereum's default zero address._

### createFixedDutchAuction

```
function createFixedDutchAuction(
        address nftContract,
        uint256 tokenId,
        uint256 price,
        uint256 amount,
        address paymentErc20TokenAddress,
        bytes4 assetClass
    ) external nonReentrant
```

The method used to create an fixed auction in the marketplace.

**Parameters**

| Name                     | Type    | Description                                                       |
| ------------------------ | ------- | ----------------------------------------------------------------- |
| nftContract              | address | address of the collection                                         |
| tokenId                  | uint256 | token id to auction                                               |
| price                    | uint256 | fixed price of the auction, in wei                                |
| amount                   | uint256 | amount of tokens to auction, 1 for ERC-721, multiple for ERC-1155 |
| paymentErc20TokenAddress | address | address of the ERC20 token that the auction is listed in          |
| assetClass               | bytes4  | ERC721 or ERC1155 identifiers                                     |

_If auction is listed in ether, paymentErc20TokenAddress will be Ethereum's default zero address._

Asset classes

```
    bytes4 public constant ERC721_ASSET_CLASS = bytes4(keccak256("ERC721"));
    bytes4 public constant ERC1155_ASSET_CLASS = bytes4(keccak256("ERC1155"));
```

### bidForDutchAuction

```
function bidForDutchAuction(bytes32 id, uint256 tokenAmount)
        external
        payable
        nonReentrant
```

Method to complete the auction. It requires ether to be sent or sufficient allowance if auction is listed in ERC-20.

**Parameters**

| Name        | Type    | Description                                                  |
| ----------- | ------- | ------------------------------------------------------------ |
| id          | bytes32 | auction id                                                   |
| tokenAmount | uint256 | amount of token to buy, 1 for ERC-721, multiple for ERC-1155 |

### bidForReserveAuctionInErc20

```
function bidForReserveAuctionInErc20(bytes32 id, uint256 bidPriceWithFees)
        external
        nonReentrant
```

Method bids for the reserve auction in ERC-20. It requires sufficient in ERC-20 that auction is listed in.

**Parameters**

| Name             | Type    | Description               |
| ---------------- | ------- | ------------------------- |
| id               | bytes32 | auction id                |
| bidPriceWithFees | uint256 | bid amount including fees |

### buyFromPrivateSale

```
function buyFromPrivateSale(
        address paymentErc20TokenAddress,
        address nftContract,
        uint256 tokenId,
        uint256 price,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external payable nonReentrant
```

The method to complete private auction.

**Parameters**

| Name                     | Type    | Description                                              |
| ------------------------ | ------- | -------------------------------------------------------- |
| paymentErc20TokenAddress | address | address of the ERC20 token that the auction is listed in |
| nftContract              | address | address of the collection                                |
| tokenId                  | uint256 | token id of the NFT privately auctioned                  |
| price                    | uint256 | price of the auction                                     |
| deadline                 | uint256 | timestamp when private auction expires                   |
| v                        | uint8   | last byte of the digital signature                       |
| r                        | bytes32 | first 32 bytes of digital signature                      |
| s                        | bytes32 | second 32 bytes of digital signature                     |

_If auction is privately listed in ether, paymentErc20TokenAddress will be Ethereum's default zero address._

**_Digital signature_**

EIP-721 Signature is used in private auctions to ensure the seller's identity. R, S, V are cryptographic parts of the ECDSA digital signature that the seller created for the privately auction NFT.

### finalizeReserveAuction

```
function finalizeReserveAuction(bytes32 id) external nonReentrant
```

The method to complete the reserve auction. It can be called by either seller or highest bidder. Auction must finish before this method can be called.

**Parameters**

| Name | Type    | Description |
| ---- | ------- | ----------- |
| id   | bytes32 | auction id  |

### getHighestBidder

```
function getHighestBidder(bytes32 id) external view returns (address)
```

The method returns address of the highest bidder for provided auction id. Auction must be listed as reserve.

**Parameters**

| Name | Type    | Description |
| ---- | ------- | ----------- |
| id   | bytes32 | auction id  |

### getCurrentPrice

```
function getCurrentPrice(bytes32 id) external view returns (uint256)
```

The method calculates and returns current price of the auction.

**Parameters**

| Name | Type    | Description |
| ---- | ------- | ----------- |
| id   | bytes32 | auction id  |

**Returns**

The price of the auction in certain moment. In case of dutch auction where price is lowered as the time passes, price will be different between the method calls.

### cancelAuction

```
function cancelAuction(bytes32 id) external
```

Cancel auction with provided id. Only seller of auction is able to do the cancelation.

**Parameters**

| Name | Type    | Description |
| ---- | ------- | ----------- |
| id   | bytes32 | auction id  |

### getAuction

```
function getAuction(bytes32 id)
        external
        view
        returns (
            address seller,
            address paymentErc20TokenAddress,
            uint256 startingPrice,
            uint256 endingPrice,
            uint256 startedAt,
            uint256 endingAt,
            uint256 amount
        )
```

**Parameters**

| Name | Type    | Description |
| ---- | ------- | ----------- |
| id   | bytes32 | auction id  |

**Returns**

| Name                     | Type    | Description                                                    |
| ------------------------ | ------- | -------------------------------------------------------------- |
| seller                   | address | seller of the NFT                                              |
| paymentErc20TokenAddress | address | address of the ERC20 token that the auction is listed in       |
| startingPrice            | uint256 | starting price of the auction, in wei                          |
| endingPrice              | uint256 | ending price of the auction in wei                             |
| startedAt                | uint256 | timestamp when auction started                                 |
| endingAt                 | uint256 | timestamp when auction will end                                |
| amount                   | uint256 | amount of tokens on sale, 1 for ERC-721, multiple for ERC-1155 |

### createAuctionId

```
 function createAuctionId(address nftContract, uint256 tokenId, address seller) public pure returns (bytes32)
```

**Parameters**

| Name        | Type    | Description               |
| ----------- | ------- | ------------------------- |
| nftContract | address | address of the collection |
| tokenId     | uint256 | token id for auction      |
| seller      | address | seller of the auction     |

**Returns**

| Type    | Description |
| ------- | ----------- |
| bytes32 | auction id  |

## Offer methods

### placeNftOffer

```
function placeNftOffer(
        address nftContract,
        uint256 tokenId,
        uint256 duration
    ) external payable nonReentrant
```

The method places an offer in ether for an NFT.

**Parameters**

| Name        | Type    | Description                  |
| ----------- | ------- | ---------------------------- |
| nftContract | address | address of the collection    |
| tokenId     | uint256 | tokenId to offer             |
| duration    | address | timestamp when offer expires |

### placeNftOfferInErc20

```
function placeNftOfferInErc20(
        address nftContract,
        address paymentErc20TokenAddress,
        uint256 offerInErc20,
        uint256 tokenId,
        uint256 duration
    )
        external
        nonReentrant
        onlySupportedERC20Payments(paymentErc20TokenAddress)
```

The method places an offer in ERC-20 for a NFT.

**Parameters**

| Name                     | Type    | Description                                           |
| ------------------------ | ------- | ----------------------------------------------------- |
| nftContract              | address | address of the collection                             |
| paymentErc20TokenAddress | address | address of the ERC20 token that the offer is given in |
| offerInErc20             | uint256 | offer amount given in ERC20                           |
| tokenId                  | address | tokenId to offer                                      |
| duration                 | address | timestamp when offer expires                          |

**Modifiers**

```
 onlySupportedERC20Payments(paymentErc20TokenAddress)
```

The method accepts only offers in supported ERC20 payment methods.

### placeCollectionOffer

```
function placeCollectionOffer(address nftContract, uint256 duration)
        external
        payable
        nonReentrant
```

The method places an offer in ether for a collection.

**Parameters**

| Name        | Type    | Description                  |
| ----------- | ------- | ---------------------------- |
| nftContract | address | address of the collection    |
| duration    | address | timestamp when offer expires |

### placeCollectionOfferInErc20

```
function placeCollectionOfferInErc20(
        address nftContract,
        address paymentErc20TokenAddress,
        uint256 offerInErc20,
        uint256 duration
    )
        external
        nonReentrant
        onlySupportedERC20Payments(paymentErc20TokenAddress)
```

Th method places an offer in ERC-20 for a collection.

**Parameters**

| Name                     | Type    | Description                                           |
| ------------------------ | ------- | ----------------------------------------------------- |
| nftContract              | address | address of the collection                             |
| paymentErc20TokenAddress | address | address of the ERC20 token that the offer is given in |
| offerInErc20             | uint256 | offer amount given in ERC20                           |
| duration                 | address | timestamp when offer expires                          |

**Modifiers**

```
 onlySupportedERC20Payments(paymentErc20TokenAddress)
```

The method accepts only offers in supported ERC20 payment methods.

### cancelOffer

```
function cancelOffer(uint256 offerId) external nonReentrant
```

The method cancels offer.

**Parameters**

| Name    | Type    | Description               |
| ------- | ------- | ------------------------- |
| offerId | address | id of the offer to cancel |

### cancelOffers

```
function cancelOffers(uint256[] calldata offerIds) external nonReentrant
```

The method cancels array of offers.

**Parameters**

| Name     | Type      | Description                 |
| -------- | --------- | --------------------------- |
| offerIds | uint256[] | ids of the offers to cancel |

### adminCancelOffers

```
function adminCancelOffers(uint256[] calldata offerIds)
        external
        onlyOwner
        nonReentrant
```

The method cancels array of offers with administrator permission.

**Parameters**

| Name     | Type      | Description                 |
| -------- | --------- | --------------------------- |
| offerIds | uint256[] | ids of the offers to cancel |

### acceptNftOffer

```
function acceptNftOffer(uint256 offerId) external nonReentrant
```

The method accepts given NFT offer.

**Parameters**

| Name    | Type    | Description               |
| ------- | ------- | ------------------------- |
| offerId | uint256 | id of the offer to accept |

### acceptCollectionOffer

```
function acceptCollectionOffer(uint256 offerId, uint256 tokenId)
        external
        nonReentrant
```

The method accepts given collection offer.

**Parameters**

| Name    | Type    | Description                         |
| ------- | ------- | ----------------------------------- |
| offerId | uint256 | id of the offer to accept           |
| tokenId | uint256 | token id of the NFT to accept offer |

### getOffer

```
function getOffer(uint256 offerId) external view returns (Offer memory)
```

**Parameters**

| Name    | Type    | Description |
| ------- | ------- | ----------- |
| offerId | bytes32 | offer id    |

**Returns**

| Name                     | Type    | Description                                           |
| ------------------------ | ------- | ----------------------------------------------------- |
| id                       | uint256 | offer id                                              |
| nftContract              | address | address of the collection                             |
| paymentErc20TokenAddress | address | address of the ERC20 token that the offer is given in |
| bidder                   | address | address of the offer maker                            |
| tokenId                  | uint256 | token id of the NFT to offer                          |
| price                    | uint256 | amount bidded                                         |
| priceWithTakerFee        | uint256 | amount bidded including fees                          |
| expiresAt                | uint256 | timestamp when offer expires                          |
| isForCollection          | bool    | flag if offer is for collection or for an NFT         |

_If offer is given in ether, paymentErc20TokenAddress will be Ethereum's default zero address._
