/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { IVault, IVaultInterface } from '../IVault';

const _abi = [
  {
    inputs: [],
    name: 'Vault_AmountZero',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Vault_DepositAndStakeOnConvexFailed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Vault_NotMinter',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Vault_NotVaultController',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Vault_OverWithdrawal',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Vault_RepayTooMuch',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Vault_TokenNotCurveLP',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Vault_TokenNotRegistered',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Vault_WithdrawAndUnstakeOnConvexFailed',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'ClaimedReward',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'Recover',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'Withdraw',
    type: 'event',
  },
  {
    inputs: [],
    name: 'CONTROLLER',
    outputs: [
      {
        internalType: 'contract IVaultController',
        name: '_vaultController',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'baseLiability',
    outputs: [
      {
        internalType: 'uint256',
        name: '_liability',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_tokenAddresses',
        type: 'address[]',
      },
    ],
    name: 'claimRewards',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenAddress',
        type: 'address',
      },
    ],
    name: 'claimableRewards',
    outputs: [
      {
        components: [
          {
            internalType: 'contract IERC20',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        internalType: 'struct IVault.Reward[]',
        name: '_rewards',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'controllerTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IBaseRewardPool',
        name: '_rewardPool',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'controllerWithdrawAndUnwrap',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'depositERC20',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'id',
    outputs: [
      {
        internalType: 'uint96',
        name: '_id',
        type: 'uint96',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minter',
    outputs: [
      {
        internalType: 'address',
        name: '_minter',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_increase',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: '_baseAmount',
        type: 'uint256',
      },
    ],
    name: 'modifyLiability',
    outputs: [
      {
        internalType: 'uint256',
        name: '_liability',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenAddress',
        type: 'address',
      },
    ],
    name: 'recoverDust',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
    ],
    name: 'tokenBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '_balance',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawERC20',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export class IVault__factory {
  static readonly abi = _abi;
  static createInterface(): IVaultInterface {
    return new utils.Interface(_abi) as IVaultInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IVault {
    return new Contract(address, _abi, signerOrProvider) as IVault;
  }
}
