---
sidebar_position: 2
---

# Endemic Exchange
Endemic Exchange contract enables trading on Endemic with on-chain dutch auction, offers and private sales mechanisms. 

Dutch auction is a mechanism in which the auctioneer begins with a high asking price in the case of selling, and lowers it until some participant accepts the price, or it reaches a predetermined reserve price. NFT will stay listed at the reserve price until seller cancels the listing. Contract also support fixed price listing by settings the starting and ending auction price to the same value.

Offers enable users to offer ETH amount for the NFT regardless of its sale status. 

Private sales are based on EIP-1271 signatures that are stored on Endemic backend. 

## Methods

### createAuction

```
function createAuction(
        address nftContract,
        uint256 tokenId,
        uint256 startingPrice,
        uint256 endingPrice,
        uint256 duration,
        uint256 amount,
        bytes4 assetClass
    ) external
```
Method used to create an auction in the marketplace.

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| nftContract | address | address of the collection              |
| tokenId   | uint256        |    token id to auction  |
| startingPrice   | uint256        |    starting price of the auction, in wei |
| endingPrice   | uint256        |     ending price of the auction must be less or equal to starting price, in wei |
| duration   | uint256        |    duration of the auction, greater than 1 minute |
| amount   | uint256        |    amount of tokens to auction, 1 for ERC-721, multiple for ERC-1155 |
| assetClass   | bytes4        |    ERC721 or ERC1155 identifiers |

Asset classes
```
    bytes4 public constant ERC721_ASSET_CLASS = bytes4(keccak256("ERC721"));
    bytes4 public constant ERC1155_ASSET_CLASS = bytes4(keccak256("ERC1155"));
```

### bid

```
function bid(bytes32 id, uint256 tokenAmount) external payable
```

Method to complete the auction. It requires ether to be sent.

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| id | bytes32 | auction id            |
| tokenAmount   | uint256        |    amount of token to buy, 1 for ERC-721, multiple for ERC-1155 |

### cancelAuction

```
function cancelAuction(bytes32 id) external
```

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| id | bytes32 | auction id            |

### adminCancelAuctions

```
function adminCancelAuctions(bytes32[] calldata ids) external onlyOwner
```

Method to cancel an multiple auctions, callable by the marketplace owner.

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| ids | bytes32[] | auction ids to cancel        |

### getAuction

```
 function getAuction(bytes32 id)
        external
        view
        returns (
            address seller,
            uint256 startingPrice,
            uint256 endingPrice,
            uint256 duration,
            uint256 startedAt,
            uint256 amount
        )
```

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| id | bytes32 | auction id            |

**Returns**

| Name        | Type          |Description  |
| ----------- |----------- | ----------- |
| seller   | address        |    seller of the NFT |
| startingPrice   | uint256        |    starting price of the auction, in wei |
| endingPrice   | uint256        |     ending price of the auction in wei |
| duration   | uint256        |    duration of the auction |
| startedAt   | uint256        |    timestamp when auction started |
| amount   | uint256        |    amount of tokens on sale, 1 for ERC-721, multiple for ERC-1155 |


### getCurrentPrice

```
function getCurrentPrice(bytes32 id) external view returns (uint256)
```
Method calculates and returns current price of the auction

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| id | bytes32 | auction id            |

**Returns**

| Type          |Description  |
| ----------- | ----------- |
| uint256 | current price of the auction        |

### createAuctionId

```
 function createAuctionId(address nftContract, uint256 tokenId, address seller) public pure returns (bytes32)
```

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| nftContract | address | address of the collection          |
| tokenId | uint256 | token id for auction          |
| seller | address | seller of the auction          |

**Returns**

| Type          |Description  |
| ----------- | ----------- |
| bytes32 | auction id       |


### placeOffer
```
function placeOffer(
        address nftContract,
        uint256 tokenId,
        uint256 duration
    ) external payable
```

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| nftContract | address | address of the collection          |
| tokenId | uint256 | token id for auction          |
| duration | uint256 | duration of the offer, offer will expire in current timestamp + duration         |

### function cancelOffer(uint256 offerId) external
```
function cancelOffer(uint256 offerId) external
```

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| offerId | uin256 | id of an offer to cancel        |

### function acceptOffer(uint256 offerId) external
```
function acceptOffer(uint256 offerId) external
```

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| offerId | uin256 | id of an offer to accept        |


### function adminCancelOffers(uint256[] calldata offerIds) external onlyOwner
```
 function adminCancelOffers(uint256[] calldata offerIds)
        external
        onlyOwner
```
Cancels offers, callable by the contract owner.

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| offerIds | uint256[] | offer ids to cancel       |

### function buyFromPrivateSale(address nftContract, uint256 tokenId, uint256 price, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external payable nonReentrant

```
 function buyFromPrivateSale(
        address nftContract,
        uint256 tokenId,
        uint256 price,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external payable nonReentrant
```
**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| nftContract | address | address of the collection          |
| tokenId | uint256 | token id for auction          |
| price | uint256 | price of the token      |
| deadline | uint256 | deadline of the sale         |
| v | uint8 | part of the signature      |
| r | bytes32 | part of the signature      |
| s | bytes32 | part of the signature      |


