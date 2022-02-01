---
sidebar_position: 6
---

# Contract Registry
Contract registry keep track of interesting contracts for the exchange. It allows other contract to verify if certain contracts can call its methods.

## Methods

### isSaleContract

```
function isSaleContract(address contractAddress) external view returns (bool)
```
Method returns whether requested address is approved sale contract.

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| contractAddress | address | address of the potential sale contract       |

**Returns**

| Type          |Description  |
| ----------- | ----------- |
| bool | true if contract is approved as sale contract         |


### addSaleContract

```
function addSaleContract(address saleContract) external onlyOwner
```
Method approved contract as sale contract. Callable by the registry owner.

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| saleContract | address | address of the sale contract to approve       |


### removeSaleContract

```
function removeSaleContract(address saleContract) external onlyOwner
```
Method removes contract as sale contract. Callable by the registry owner.

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| saleContract | address | address of the sale contract to remove     |
