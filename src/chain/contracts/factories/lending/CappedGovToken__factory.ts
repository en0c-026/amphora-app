/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { PromiseOrValue } from '../../common';
import type { CappedGovToken, CappedGovTokenInterface } from '../../lending/CappedGovToken';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: '_cap',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_underlying',
    outputs: [
      {
        internalType: 'contract IERC20Metadata',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_vaultController',
    outputs: [
      {
        internalType: 'contract IVaultController',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_votingVaultController',
    outputs: [
      {
        internalType: 'contract VotingVaultController',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
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
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint96',
        name: 'vaultId',
        type: 'uint96',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCap',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
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
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol_',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'underlying_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'vaultController_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'votingVaultController_',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'cap_',
        type: 'uint256',
      },
    ],
    name: 'setCap',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
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
        name: 'recipient',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b506117b9806100206000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c8063715018a6116100b8578063a9059cbb1161007c578063a9059cbb14610294578063b1290dad146102a7578063b66c72ac146102ba578063db0ed6a0146102cd578063dd62ed3e146102e0578063f2fde38b1461031957600080fd5b8063715018a61461024d5780638da5cb5b1461025557806395d89b41146102665780639e5736651461026e578063a457c2d71461028157600080fd5b8063313ce5671161010a578063313ce567146101ba578063364a2b1a146101c957806339509351146101f457806347786d3714610207578063554d578d1461021c57806370a082311461022457600080fd5b8063060cf4e81461014757806306fdde0314610163578063095ea7b31461017857806318160ddd1461019b57806323b872dd146101a3575b600080fd5b610150609a5481565b6040519081526020015b60405180910390f35b61016b61032c565b60405161015a9190611343565b61018b6101863660046113ad565b6103be565b604051901515815260200161015a565b606754610150565b61018b6101b13660046113d9565b60009392505050565b6040516012815260200161015a565b6099546101dc906001600160a01b031681565b6040516001600160a01b03909116815260200161015a565b61018b6102023660046113ad565b6103d4565b61021a61021536600461141a565b610410565b005b609a54610150565b610150610232366004611433565b6001600160a01b031660009081526065602052604090205490565b61021a610448565b6033546001600160a01b03166101dc565b61016b61047e565b6097546101dc906001600160a01b031681565b61018b61028f3660046113ad565b61048d565b61018b6102a23660046113ad565b610526565b6098546101dc906001600160a01b031681565b61021a6102c836600461146c565b61074f565b61021a6102db36600461153f565b610b02565b6101506102ee3660046115dd565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205490565b61021a610327366004611433565b610bc2565b60606068805461033b9061160b565b80601f01602080910402602001604051908101604052809291908181526020018280546103679061160b565b80156103b45780601f10610389576101008083540402835291602001916103b4565b820191906000526020600020905b81548152906001019060200180831161039757829003601f168201915b5050505050905090565b60006103cb338484610c5d565b50600192915050565b3360008181526066602090815260408083206001600160a01b038716845290915281205490916103cb91859061040b90869061165c565b610c5d565b6033546001600160a01b031633146104435760405162461bcd60e51b815260040161043a90611674565b60405180910390fd5b609a55565b6033546001600160a01b031633146104725760405162461bcd60e51b815260040161043a90611674565b61047c6000610d82565b565b60606069805461033b9061160b565b3360009081526066602090815260408083206001600160a01b03861684529091528120548281101561050f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161043a565b61051c3385858403610c5d565b5060019392505050565b60995460009081906001600160a01b0316637726a73c336040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260240160206040518083038186803b15801561057c57600080fd5b505afa158015610590573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105b491906116a9565b90506000816001600160601b0316116105fd5760405162461bcd60e51b815260206004820152600b60248201526a6f6e6c79207661756c747360a81b604482015260640161043a565b60995460405163a1a33b9d60e01b81526001600160601b03831660048201526000916001600160a01b03169063a1a33b9d9060240160206040518083038186803b15801561064a57600080fd5b505afa15801561065e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068291906116c6565b90506001600160a01b0381166106cc5760405162461bcd60e51b815260206004820152600f60248201526e1b9bc81d9bdd1a5b99c81d985d5b1d608a1b604482015260640161043a565b6106d63385610dd4565b609954604051637810f1eb60e01b8152600481018690526001600160a01b038381166024830152878116604483015290911690637810f1eb90606401600060405180830381600087803b15801561072c57600080fd5b505af1158015610740573d6000803e3d6000fd5b50600198975050505050505050565b600082116107925760405162461bcd60e51b815260206004820152601060248201526f043616e6e6f74206465706f73697420360841b604482015260640161043a565b60995460405163a1a33b9d60e01b81526001600160601b03831660048201526000916001600160a01b03169063a1a33b9d9060240160206040518083038186803b1580156107df57600080fd5b505afa1580156107f3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081791906116c6565b90506001600160a01b0381166108665760405162461bcd60e51b81526020600482015260146024820152731a5b9d985b1a59081d9bdd1a5b99c81d985d5b1d60621b604482015260640161043a565b60985460405163d912c42760e01b81526001600160601b03841660048201526000916001600160a01b03169063d912c4279060240160206040518083038186803b1580156108b357600080fd5b505afa1580156108c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108eb91906116c6565b90506001600160a01b0381166109335760405162461bcd60e51b815260206004820152600d60248201526c1a5b9d985b1a59081d985d5b1d609a1b604482015260640161043a565b61093c84610f1f565b6097546000906001600160a01b031663dd62ed3e336040516001600160e01b031960e084901b1681526001600160a01b03909116600482015230602482015260440160206040518083038186803b15801561099657600080fd5b505afa1580156109aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ce91906116e3565b905084811015610a195760405162461bcd60e51b8152602060048201526016602482015275496e73756666696369656e7420416c6c6f77616e636560501b604482015260640161043a565b610a238286610f72565b6097546001600160a01b03166323b872dd336040516001600160e01b031960e084901b1681526001600160a01b039182166004820152908616602482015260448101889052606401602060405180830381600087803b158015610a8557600080fd5b505af1158015610a99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abd91906116fc565b610afb5760405162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b604482015260640161043a565b5050505050565b600054610100900460ff1680610b1b575060005460ff16155b610b375760405162461bcd60e51b815260040161043a9061171e565b600054610100900460ff16158015610b59576000805461ffff19166101011790555b610b61611051565b610b6b86866110cc565b609780546001600160a01b038087166001600160a01b0319928316179092556098805486841690831617905560998054928516929091169190911790558015610bba576000805461ff00191690555b505050505050565b6033546001600160a01b03163314610bec5760405162461bcd60e51b815260040161043a90611674565b6001600160a01b038116610c515760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161043a565b610c5a81610d82565b50565b6001600160a01b038316610cbf5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161043a565b6001600160a01b038216610d205760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161043a565b6001600160a01b0383811660008181526066602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216610e345760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161043a565b6001600160a01b03821660009081526065602052604090205481811015610ea85760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161043a565b6001600160a01b0383166000908152606560205260408120838303905560678054849290610ed790849061176c565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610d75565b505050565b609a5481610f2c60675490565b610f36919061165c565b1115610c5a5760405162461bcd60e51b815260206004820152600b60248201526a18d85c081c995858da195960aa1b604482015260640161043a565b6001600160a01b038216610fc85760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161043a565b8060676000828254610fda919061165c565b90915550506001600160a01b0382166000908152606560205260408120805483929061100790849061165c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600054610100900460ff168061106a575060005460ff16155b6110865760405162461bcd60e51b815260040161043a9061171e565b600054610100900460ff161580156110a8576000805461ffff19166101011790555b6110b061114b565b6110b86111b5565b8015610c5a576000805461ff001916905550565b600054610100900460ff16806110e5575060005460ff16155b6111015760405162461bcd60e51b815260040161043a9061171e565b600054610100900460ff16158015611123576000805461ffff19166101011790555b61112b61114b565b6111358383611215565b8015610f1a576000805461ff0019169055505050565b600054610100900460ff1680611164575060005460ff16155b6111805760405162461bcd60e51b815260040161043a9061171e565b600054610100900460ff161580156110b8576000805461ffff19166101011790558015610c5a576000805461ff001916905550565b600054610100900460ff16806111ce575060005460ff16155b6111ea5760405162461bcd60e51b815260040161043a9061171e565b600054610100900460ff1615801561120c576000805461ffff19166101011790555b6110b833610d82565b600054610100900460ff168061122e575060005460ff16155b61124a5760405162461bcd60e51b815260040161043a9061171e565b600054610100900460ff1615801561126c576000805461ffff19166101011790555b825161127f9060689060208601906112aa565b5081516112939060699060208501906112aa565b508015610f1a576000805461ff0019169055505050565b8280546112b69061160b565b90600052602060002090601f0160209004810192826112d8576000855561131e565b82601f106112f157805160ff191683800117855561131e565b8280016001018555821561131e579182015b8281111561131e578251825591602001919060010190611303565b5061132a92915061132e565b5090565b5b8082111561132a576000815560010161132f565b600060208083528351808285015260005b8181101561137057858101830151858201604001528201611354565b81811115611382576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b0381168114610c5a57600080fd5b600080604083850312156113c057600080fd5b82356113cb81611398565b946020939093013593505050565b6000806000606084860312156113ee57600080fd5b83356113f981611398565b9250602084013561140981611398565b929592945050506040919091013590565b60006020828403121561142c57600080fd5b5035919050565b60006020828403121561144557600080fd5b813561145081611398565b9392505050565b6001600160601b0381168114610c5a57600080fd5b6000806040838503121561147f57600080fd5b82359150602083013561149181611457565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126114c357600080fd5b813567ffffffffffffffff808211156114de576114de61149c565b604051601f8301601f19908116603f011681019082821181831017156115065761150661149c565b8160405283815286602085880101111561151f57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600060a0868803121561155757600080fd5b853567ffffffffffffffff8082111561156f57600080fd5b61157b89838a016114b2565b9650602088013591508082111561159157600080fd5b5061159e888289016114b2565b94505060408601356115af81611398565b925060608601356115bf81611398565b915060808601356115cf81611398565b809150509295509295909350565b600080604083850312156115f057600080fd5b82356115fb81611398565b9150602083013561149181611398565b600181811c9082168061161f57607f821691505b6020821081141561164057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561166f5761166f611646565b500190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000602082840312156116bb57600080fd5b815161145081611457565b6000602082840312156116d857600080fd5b815161145081611398565b6000602082840312156116f557600080fd5b5051919050565b60006020828403121561170e57600080fd5b8151801515811461145057600080fd5b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b60008282101561177e5761177e611646565b50039056fea2646970667358221220592fe9f7cf2a34427877e26b831caa4ee2f305816683fee67994ce2406f51f7064736f6c63430008090033';

type CappedGovTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: CappedGovTokenConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class CappedGovToken__factory extends ContractFactory {
  constructor(...args: CappedGovTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<CappedGovToken> {
    return super.deploy(overrides || {}) as Promise<CappedGovToken>;
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CappedGovToken {
    return super.attach(address) as CappedGovToken;
  }
  override connect(signer: Signer): CappedGovToken__factory {
    return super.connect(signer) as CappedGovToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CappedGovTokenInterface {
    return new utils.Interface(_abi) as CappedGovTokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): CappedGovToken {
    return new Contract(address, _abi, signerOrProvider) as CappedGovToken;
  }
}