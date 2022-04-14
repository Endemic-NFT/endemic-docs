---
sidebar_position: 4
---

# Fee Provider
Fee provider tracks primary sales and calculates fees accordingly.

## Methods

### getMakerFee

```
function getMakerFee(address seller, address nftContract, uint256 tokenId) public view returns (uint256)
```
Method returns fee % for maker orders

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| seller | address | address of the seller account          |
| nftContract   | address        |    address of the nft collection   |
| tokenId   | uint256        |    token id for which we want to get maker fee  |


**Returns**

| Type          |Description  |
| ----------- | ----------- |
| uint256        |    fee %, divide it by 100 to get actual (ex 1000 = 10%)   |

### getTakerFee

```
function getTakerFee(address buyer) public view returns (uint256)
```
Method returns fee % for taker orders

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| buyer | address | address of the seller account          |


**Returns**

| Type          |Description  |
| ----------- | ----------- |
| uint256        |    fee %, divide it by 100 to get actual (ex 1000 = 10%)   |

### updateFee

```
function updateFee(uint256 secondarySaleMakerFee, uint256 takerFee, uint256 initialSaleFee, uint256 masterNftCut) external onlyOwner
```
Updates base fees, called by the fee provider contract owner.

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| secondarySaleMakerFee | uint256 | maker fee % for secondary sales  (ex 1000 = 10%)       |
| takerFee | uint256 | taker fee % (ex 1000 = 10%)      |
| initialSaleFee | uint256 | primary sale fee % (ex 1000 = 10%)       |
| masterNftCut | uint256 | fee percentage left for master key holders    |


### updateFee

```
function setInitialSaleFeePerAccount(address account, uint256 fee) external onlyOwner
```
Updates primary sale fee for account, called by the fee provider contract owner.

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| account | address | account to change fee for |
| fee | uint256 | primary sale fee % for an account (ex 1000 = 10%)      |


### setCollectionWithoutInitialSaleFee

```
function setCollectionWithoutInitialSaleFee(address nftContract, bool isWithoutInitialFee) external onlyOwner
```
Toggles primary sale fee for a collection, called by the fee provider contract owner.

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| nftContract | address | account of collection to toggle primary sale fee |
| isWithoutInitialFee | bool | true if collection should not have primary sale fee     |


### onInitialSale

```
function onInitialSale(address nftContract, uint256 tokenId) external
```
Triggers on primary sale for token, callable by sale contracts approved by the contract registry.

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| nftContract   | address        |    address of the nft collection   |
| tokenId   | uint256        |    token id for which the primary sale happened |
