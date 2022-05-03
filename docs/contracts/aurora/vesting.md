---
sidebar_position: 6
---

# Endemic Vesting
Vesting contract used by strategic investors, advisors and team members. Owner is able to create token allocations and setup different vesting
schedules based on END tokenomics.

## Methods

### allocateTokens

```
function allocateTokens(AllocationRequest[] calldata allocRequests)
        external
        onlyOwner
```
Creates END vesting schedule for an address. Transfers allocated END amount from owner to the contract.

**AllocationRequest param**

   AllocationType allocType;
        address claimer;
        uint32 initialAllocation;
        uint32 totalAllocated;
        uint256 endCliff;
        uint256 endVesting;

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| allocType | AllocationType | One of the types (SEED_SALE, PRIVATE_SALE, STRATEGIC_SALE, PUBLIC_SALE, TEAM, ADVISORS)         |
| claimer   | address        | address of the user who will receive the tokens   |
| initialAllocation   | uint32        | amount available for claim any time  |
| totalAllocated   | uint32        |    total amount alocated for the user   |
| endCliff   | uint256        |  timestamp when cliff ends |
| endVesting   | uint256        |  timestamp when vesting ends   |

### claim

```
function claim(AllocationType allocType) external
```
Claims available tokens for allocation type to the calling address.

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| AllocationType | allocType | One of the types (SEED_SALE, PRIVATE_SALE, STRATEGIC_SALE, PUBLIC_SALE, TEAM, ADVISORS) |

### claimFor

```
 function claimFor(address claimer, AllocationType allocType)
        external
        onlyOwner
```
Claims available tokens for allocation type to the claimer address. Callable by the owner.

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| claimer   | address        | address of the user who will receive the tokens   |
| AllocationType | allocType | One of the types (SEED_SALE, PRIVATE_SALE, STRATEGIC_SALE, PUBLIC_SALE, TEAM, ADVISORS) |

### getAllocationsForClaimer

```
function getAllocationsForClaimer(address claimer)
        external
        view
        returns (AllocationData[] memory, uint256[] memory)
```
Reads allocations for claimer address

**Parameters**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| claimer   | address        | address of the user who will receive the tokens   |

**Returns**

| Type          |Description  |
| ----------- | ----------- |
| AllocationData[]        |    info about allocations  |
| uint256[]        |    amount available for claim by each allocation |

**AllocationData params**

| Name        | Type          |Description  |
| ----------- | ----------- | ----------- |
| initialAllocation   | uint32        | amount available for claim any time  |
| totalAllocated   | uint32        |    total amount alocated for the user   |
| totalClaimed   | uint32        |    total amount claimed by the user  |
| endCliff   | uint256        |  timestamp when cliff ends |
| endVesting   | uint256        |  timestamp when vesting ends   |




