---
sidebar_position: 5
---

# Royalties Provider
A royalty fee provider for the Endemic marketplace. Contract keeps royalties for collections and specific tokens. Collection owners can set royalies up to 50%.


## Methods

### getRoyalties

```
function getRoyalties(address nftContract, uint256 tokenId) external view returns (address, fee)
```
Method returns recipient of the royalties fee and fee %

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| nftContract | address | address of the collection              |
| tokenId   | uint256        |    token id for which we want to check royalties   |

**Returns**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| account | address | address of the fee recipient account           |
| fee   | uint256        |    fee %, divide it by 100 to get actual (ex 1000 = 10%)   |

### setRoyaltiesForCollection

```
function setRoyaltiesForCollection(address nftContract, address feeRecipient, uint256 fee) external
```
Method sets royalties for specific collection. Called by collection owner or royalties provider admin

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| nftContract | address | address of the collection              |
| feeRecipient | address | address of the fee recipient account           |
| fee   | uint256        |    fee %, divide it by 100 to get actual (ex 1000 = 10%), **max is 5000**   |

**Returns**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| account | address | address of the fee recipient account           |
| fee   | uint256        |    fee %, divide it by 100 to get actual (ex 1000 = 10%)   |

### setRoyaltiesForToken

```
function setRoyaltiesForToken(address nftContract, uint256 tokenId, address feeRecipient, uint256 fee) external
```
Method sets royalties for specific token. Called by collection owner or royalties provider admin

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| nftContract | address | address of the collection              |
| tokenId   | uint256        |    token id for which we want to set royalties   |
| feeRecipient | address | address of the fee recipient account           |
| fee   | uint256        |    fee %, divide it by 100 to get actual (ex 1000 = 10%), **max is 5000**   |

**Returns**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| account | address | address of the fee recipient account           |
| fee   | uint256        |    fee %, divide it by 100 to get actual (ex 1000 = 10%)   |

### calculateRoyaltiesAndGetRecipient

```
 function calculateRoyaltiesAndGetRecipient(
        address nftContract,
        uint256 tokenId,
        uint256 amount
    ) external view returns (address, uint256)
```
**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| nftContract | address | address of the collection              |
| tokenId   | uint256        |    token id for which we want to set royalties   |
| amount | uint256 | price of the token        |

**Returns**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| account | address | address of the fee recipient account           |
| fee   | uint256        |    calculated fee amount  |
