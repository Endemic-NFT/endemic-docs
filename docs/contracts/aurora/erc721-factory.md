---
sidebar_position: 3
---

# ERC-721 Contract Factory

This contract is used to create new collections for artists. New contracts are owned by the artists.

Endemic team can also create collections for artists and mint their art for them. Artist still owns everything, but trusts Endemic with helping them onboard in the NFT space. Artwork can't be minted by our team in collections that are created by the artist though our `Create` page.

New contracts are deployed using the [beacon proxy pattern](https://docs.openzeppelin.com/contracts/3.x/api/proxy#beacon).

## Methods

### createToken

```
function createToken(DeployParams calldata params) external onlyRole(MINTER_ROLE)
```

Deploys new ERC-721 contract, callable by accounts with minter roles.

**DeployParams parameters**

| Name      | Type    | Description                 |
| --------- | ------- | --------------------------- |
| name      | string  | name of the collection      |
| symbol    | string  | symbol of the collection    |
| category  | string  | category Art or Collectible |
| royalties | uint256 | royalties for collection    |

### createTokenForOwner

```
function createTokenForOwner(OwnedDeployParams calldata params) external onlyRole(DEFAULT_ADMIN_ROLE)
```

Deploys new ERC-721 contract for an account, callable by admins of the factory contract

**DeployParams parameters**

| Name      | Type    | Description                 |
| --------- | ------- | --------------------------- |
| owner     | string  | owner of the collection     |
| name      | string  | name of the collection      |
| symbol    | string  | symbol of the collection    |
| category  | string  | category Art or Collectible |
| royalties | uint256 | royalties for collection    |
