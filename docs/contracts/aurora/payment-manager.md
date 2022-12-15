---
sidebar_position: 4
---

# Payment Manager

Endemic supports a multi-token payment system and this contract manages which methods are supported by Endemic and provides fees for each of them accordingly.

The endemic team is using this contract to whitelist new ERC-20 tokens for payments, blacklist, or modify fees for supported ones.

Ether payments are supported by default.

New contracts are deployed using the [beacon proxy pattern](https://docs.openzeppelin.com/contracts/3.x/api/proxy#beacon).

## Methods

### getPaymentMethodFees

```
function getPaymentMethodFees(address paymentMethodAddress)
        external
        view
        returns (uint256 takerFee, uint256 makerFee)
```

Returns fees for provided ERC-20 token address. Ether fees are tracked by default zero address (0x0000000000000000000000000000000000000000)

**Parameters**

| Name                 | Type    | Description              |
| -------------------- | ------- | ------------------------ |
| paymentMethodAddress | address | ERC-20 contract adddress |

**Returns**

| Name     | Type    | Description                                       |
| -------- | ------- | ------------------------------------------------- |
| takerFee | uint256 | Percentage of sale that Endemic takes from buyer  |
| makerFee | uint256 | Percentage of sale that Endemic takes from seller |

### isPaymentMethodSupported

```
function isPaymentMethodSupported(address paymentMethodAddress)
        external
        view
        returns (bool)
```

Returns if provided ERC20 is supported for payments in Endemic Marketplace.

**Parameters**

| Name                 | Type    | Description              |
| -------------------- | ------- | ------------------------ |
| paymentMethodAddress | address | ERC-20 contract adddress |

**Returns**

| Type | Description                                      |
| ---- | ------------------------------------------------ |
| bool | Boolean that indicates is ERC-20 token supported |

### updateSupportedPaymentMethod

```
function updateSupportedPaymentMethod(
        address paymentMethodAddress,
        bool isEnabled
    ) external onlyOwner
```

Provides ability to dynamicaly whitelist/blacklist specific ERC20 token.

**Parameters**

| Name                 | Type    | Description                                                    |
| -------------------- | ------- | -------------------------------------------------------------- |
| paymentMethodAddress | address | ERC-20 contract adddress                                       |
| isEnabled            | bool    | Boolean that indicates if provided payment method is supported |

### updatePaymentMethodFees

```
function updatePaymentMethodFees(
        address paymentMethodAddress,
        uint256 makerFee,
        uint256 takerFee
    ) external onlyOwner
```

It is used to dynamicaly update fees for the provided payment method.

**Parameters**

| Name                 | Type    | Description                                       |
| -------------------- | ------- | ------------------------------------------------- |
| paymentMethodAddress | address | ERC-20 contract adddress                          |
| takerFee             | uint256 | Percentage of sale that Endemic takes from buyer  |
| makerFee             | uint256 | Percentage of sale that Endemic takes from seller |
