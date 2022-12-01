/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ProxyMock, ProxyMockInterface } from "../ProxyMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "registry",
        type: "address",
      },
      {
        internalType: "address",
        name: "feeRuleRegistry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeAmount",
        type: "uint256",
      },
    ],
    name: "ChargeFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "tag",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "gas",
        type: "int256",
      },
    ],
    name: "DeltaGas",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "tag",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    name: "GetGas",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "handler",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
    ],
    name: "LogBegin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "handler",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    name: "LogEnd",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PolygonBridged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "value",
        type: "bytes",
      },
    ],
    name: "RecordHandlerResult",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "MSG_SENDER_KEY",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERCENTAGE_BASE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POSTPROCESS_SIG",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tos",
        type: "address[]",
      },
      {
        internalType: "bytes32[]",
        name: "configs",
        type: "bytes32[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "uint256[]",
        name: "ruleIndexes",
        type: "uint256[]",
      },
    ],
    name: "batchExec",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "cache",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "execMock",
    outputs: [
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tos",
        type: "address[]",
      },
      {
        internalType: "bytes32[]",
        name: "configs",
        type: "bytes32[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
    ],
    name: "execs",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeRuleRegistry",
    outputs: [
      {
        internalType: "contract IFeeRuleRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
    outputs: [
      {
        internalType: "contract IRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum Config.HandlerType",
        name: "handlerType",
        type: "uint8",
      },
    ],
    name: "setHandlerType",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "sig",
        type: "bytes4",
      },
      {
        internalType: "bytes32[]",
        name: "params",
        type: "bytes32[]",
      },
    ],
    name: "setPostProcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stack",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "updateTokenMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162002ae038038062002ae08339810160408190526200003491620000a7565b6001600160601b0319606083811b821660805282901b1660a0526200005862000060565b5050620000de565b7f37698e52cd5639897dae03c485a7870bceb6876f0e950fc063664398d5580c0c61138d5a039055565b80516001600160a01b0381168114620000a257600080fd5b919050565b60008060408385031215620000ba578182fd5b620000c5836200008a565b9150620000d5602084016200008a565b90509250929050565b60805160601c60a05160601c6129906200015060003960008181610489015261101e015260008181610119015281816101da01528181610334015281816104e80152818161069f0152818161087b0152818161093c01528181610b2801528181610be90152610ec001526129906000f3fe6080604052600436106100c65760003560e01c806387c139431161007f578063be19275b11610059578063be19275b14610573578063dc9031c414610593578063f835f309146105b3578063fa2901a51461060d57610117565b806387c139431461050a57806399eb59b914610526578063b5af492a1461055357610117565b80630f532d181461040f57806341f188e11461044457806357da6a9114610457578063678987bb1461047757806371938509146104c35780637b103999146104d657610117565b3661011757333b6101155760405162461bcd60e51b81526020600482015260146024820152734e6f7420616c6c6f7765642066726f6d20454f4160601b60448201526064015b60405180910390fd5b005b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ea750af66040518163ffffffff1660e01b815260040160206040518083038186803b15801561017057600080fd5b505afa158015610184573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101a89190612582565b156101c55760405162461bcd60e51b815260040161010c90612747565b604051630c81ee5560e11b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631903dcaa9060240160206040518083038186803b15801561022457600080fd5b505afa158015610238573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025c91906125ba565b156102795760405162461bcd60e51b815260040161010c90612727565b6000610283610641565b6001600160a01b031614156102d65760405162461bcd60e51b815260206004820152601960248201527814d95b99195c881a5cc81b9bdd081a5b9a5d1a585b1a5e9959603a1b604482015260640161010c565b6102df3361067d565b61031c5760405162461bcd60e51b815260206004820152600e60248201526d24b73b30b634b21031b0b63632b960911b604482015260640161010c565b604051637bbf4a3f60e01b81523360048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690637bbf4a3f9060240160206040518083038186803b15801561037e57600080fd5b505afa158015610392573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b691906125ba565b60601c90506000610402826000368080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506000199250610722915050565b8051909150602082018181f35b34801561041b57600080fd5b5061043160008051602061293b83398151915281565b6040519081526020015b60405180910390f35b6101156104523660046124c9565b610879565b61046a6104653660046123ef565b610a97565b60405161043b9190612714565b34801561048357600080fd5b506104ab7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161043b565b6101156104d136600461243a565b610b26565b3480156104e257600080fd5b506104ab7f000000000000000000000000000000000000000000000000000000000000000081565b34801561051657600080fd5b50610431670de0b6b3a764000081565b34801561053257600080fd5b506104316105413660046125a2565b60016020526000908152604090205481565b34801561055f57600080fd5b5061011561056e36600461232c565b610daa565b34801561057f57600080fd5b5061011561058e3660046125d2565b610e6f565b34801561059f57600080fd5b506104316105ae3660046125a2565b610e7d565b3480156105bf57600080fd5b506101156105ce36600461230b565b600080546001810182559080526001600160a01b0382167f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5639091015550565b34801561061957600080fd5b50610628636139148b60e11b81565b6040516001600160e01b0319909116815260200161043b565b60008051602061293b83398151915260005260016020527fe066822ceb6294079ebca45035319f95ccb12306128dbdf5a257f0d1235733c95490565b60405163bb1010e960e01b81526001600160a01b0382811660048301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063bb1010e9906024015b60206040518083038186803b1580156106e457600080fd5b505afa1580156106f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071c9190612582565b92915050565b606061072d84610e9e565b61076b5760405162461bcd60e51b815260206004820152600f60248201526e24b73b30b634b2103430b7323632b960891b604482015260640161010c565b6000806000855160208701886113885a03f490503d6040519250601f19601f6020830101168301604052808352806000602085013e5080610871576044825110156107e05760405162461bcd60e51b81526020600482015260056024820152645f6578656360d81b604482015260640161010c565b60048201915060001983141561081d578180602001905181019061080491906125f1565b60405162461bcd60e51b815260040161010c9190612714565b61082683610ef1565b8280602001905181019061083a91906125f1565b60405160200161084b92919061268f565b60408051601f198184030181529082905262461bcd60e51b825261010c91600401612714565b509392505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ea750af66040518163ffffffff1660e01b815260040160206040518083038186803b1580156108d257600080fd5b505afa1580156108e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090a9190612582565b156109275760405162461bcd60e51b815260040161010c90612747565b604051630c81ee5560e11b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631903dcaa9060240160206040518083038186803b15801561098657600080fd5b505afa15801561099a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109be91906125ba565b156109db5760405162461bcd60e51b815260040161010c90612727565b610a1782828080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525061101292505050565b610a8687878080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808b0282810182019093528a82529093508a9250899182918501908490808284376000920191909152508892506110d2915050565b610a8e6113b6565b50505050505050565b604080516000815260208101909152606090610ab281611012565b610aba611698565b610ac684846000610722565b9150610ad1846116c2565b610ae06247617360e81b611756565b610ae86113b6565b7f90c726ff5efa7268723ee48df835144384bc0f012e89750782886764b5e54f1682604051610b179190612714565b60405180910390a15092915050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ea750af66040518163ffffffff1660e01b815260040160206040518083038186803b158015610b7f57600080fd5b505afa158015610b93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb79190612582565b15610bd45760405162461bcd60e51b815260040161010c90612747565b604051630c81ee5560e11b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690631903dcaa9060240160206040518083038186803b158015610c3357600080fd5b505afa158015610c47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6b91906125ba565b15610c885760405162461bcd60e51b815260040161010c90612727565b6000610c92610641565b6001600160a01b03161415610ce55760405162461bcd60e51b815260206004820152601960248201527814d95b99195c881a5cc81b9bdd081a5b9a5d1a585b1a5e9959603a1b604482015260640161010c565b333014610d345760405162461bcd60e51b815260206004820152601d60248201527f446f6573206e6f7420616c6c6f772065787465726e616c2063616c6c73000000604482015260640161010c565b610da3858580806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506040805160208089028281018201909352888252909350889250879182918501908490808284376000920191909152508692506110d2915050565b5050505050565b80515b8015610e0a57610df882610dc260018461286b565b81518110610de057634e487b7160e01b600052603260045260246000fd5b602002602001015160006117c990919063ffffffff16565b80610e02816128b2565b915050610dad565b5060008054600180820183558280526001600160e01b031985167f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56392830155825480820184556001600160a01b038716920191909155610e6a9190611803565b505050565b610e7a600082611803565b50565b60008181548110610e8d57600080fd5b600091825260209091200154905081565b604051631a98d06960e31b81526001600160a01b0382811660048301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063d4c68348906024016106cc565b606081610f155750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610f3f5780610f29816128c9565b9150610f389050600a836127f9565b9150610f19565b6000816001600160401b03811115610f6757634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610f91576020820181803683370190505b5090505b841561100a57610fa660018361286b565b9150610fb3600a866128e4565b610fbe9060306127e1565b60f81b818381518110610fe157634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350611003600a866127f9565b9450610f95565b949350505050565b61101a61184d565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316637c4e1d1b611053610641565b846040518363ffffffff1660e01b81526004016110719291906126cb565b60206040518083038186803b15801561108957600080fd5b505afa15801561109d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110c191906125ba565b90506110ce6001826118e1565b5050565b6110da6121ae565b60008083518651146111385760405162461bcd60e51b815260206004820152602160248201527f546f7320616e64206461746173206c656e67746820696e636f6e73697374656e6044820152601d60fa1b606482015260840161010c565b84518651146111955760405162461bcd60e51b815260206004820152602360248201527f546f7320616e6420636f6e66696773206c656e67746820696e636f6e73697374604482015262195b9d60ea1b606482015260840161010c565b60005b8651811015610a8e5760008782815181106111c357634e487b7160e01b600052603260045260246000fd5b6020026020010151905060008783815181106111ef57634e487b7160e01b600052603260045260246000fd5b60200260200101519050600087848151811061121b57634e487b7160e01b600052603260045260246000fd5b6020026020010151905061122e8261195f565b61123e5761123e81838989611981565b600061124982611adc565b9050806001600160e01b031916846001600160a01b03167f1e4e60ae3aeb9909ff5e6502e86867f181eadfa0c215186eaf47665909d71eb18460405161128f9190612714565b60405180910390a360006112a4858489610722565b9050866112b0816128c9565b975050816001600160e01b031916856001600160a01b03167fc4c643b243548ed55ba2a304003e28a0a82c202984eb15e1d80d811e02dec47f836040516112f79190612714565b60405180910390a361130884611bc5565b156113955760ff60f085901c1660006113228b848c611be3565b905061132e828b6127e1565b81146113915760405162461bcd60e51b815260206004820152602c60248201527f52657475726e206e756d20616e64207061727365642072657475726e206e756d60448201526b081b9bdd081b585d18da195960a21b606482015260840161010c565b9850505b61139e856116c2565b505050505080806113ae906128c9565b915050611198565b600054156115dd5760006113ca6000611cc7565b9050600060a082901c60028111156113f257634e487b7160e01b600052602160045260246000fd5b9050600081600281111561141657634e487b7160e01b600052602160045260246000fd5b1415611529576040516370a0823160e01b815230600482015282906000906001600160a01b038316906370a082319060240160206040518083038186803b15801561146057600080fd5b505afa158015611474573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061149891906125ba565b905080156115225760405163a9059cbb60e01b8152336004820152602481018290526001600160a01b0383169063a9059cbb90604401602060405180830381600087803b1580156114e857600080fd5b505af11580156114fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115209190612582565b505b50506115d6565b600181600281111561154b57634e487b7160e01b600052602160045260246000fd5b141561159757600061155d6000611d0d565b6040805160048152602481019091526020810180516001600160e01b0316636139148b60e11b179052909150611522908290600019610722565b60405162461bcd60e51b8152602060048201526014602482015273496e76616c69642068616e646c6572207479706560601b604482015260640161010c565b50506113b6565b47801561161357604051339082156108fc029083906000818181858888f19350505050158015611611573d6000803e3d6000fd5b505b600160205260007fe3c27e9998c410cbc1bc99c043b2159f2223d768316452dd163c810fbf33d3938190557fb23c0bd6127fbb5e90a415ffb571bd6e4dfe0f2731ea5882703d050f6a0a0c9981905560008051602061293b83398151915281527fe066822ceb6294079ebca45035319f95ccb12306128dbdf5a257f0d1235733c95550565b7f37698e52cd5639897dae03c485a7870bceb6876f0e950fc063664398d5580c0c61138d5a039055565b6000546116cc5750565b600160a01b6116db6000611d3b565b1480156116fc57506116ef60006001611db8565b6001600160e01b03191615155b15610e7a57600080548061172057634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905561174a8160006117e190919063ffffffff16565b610e7a60006001611803565b7faf6ae684695362675b87dad33f48929dfb2daf9ddeda7c0bc0297cb70d1aeae7815a7f37698e52cd5639897dae03c485a7870bceb6876f0e950fc063664398d5580c0c5460ca19016117a9919061282c565b6040805192835260208301919091520160405180910390a1610e7a611698565b81546001810183556000928352602090922090910155565b8154600181018355600092835260209092206001600160a01b03909116910155565b8181600281111561182457634e487b7160e01b600052602160045260246000fd5b81546001810183556000928352602090922060a09190911b6001600160a01b0319169101555050565b6000611857610641565b6001600160a01b0316146118a55760405162461bcd60e51b815260206004820152601560248201527414d95b99195c881a5cc81a5b9a5d1a585b1a5e9959605a1b604482015260640161010c565b60008051602061293b8339815191526000526001602052337fe066822ceb6294079ebca45035319f95ccb12306128dbdf5a257f0d1235733c955565b6118ea82611e90565b1561192b5760405162461bcd60e51b81526020600482015260116024820152704665652072617465206e6f74207a65726f60781b604482015260640161010c565b7f142183525227cae0e4300fd0fc77d7f3b08ceb0fd9cb2a6c5488668fa0ea5ffa6000908152602092909252604090912055565b6000600160f81b821661197457506001919050565b506000919050565b919050565b60008061198d85611ec5565b9150915060005b8251811015610a8e57838382815181106119be57634e487b7160e01b600052603260045260246000fd5b602002602001015110611a135760405162461bcd60e51b815260206004820152601e60248201527f5265666572656e636520746f206f7574206f66206c6f63616c537461636b0000604482015260640161010c565b600085848381518110611a3657634e487b7160e01b600052603260045260246000fd5b60200260200101516101008110611a5d57634e487b7160e01b600052603260045260246000fd5b602002015190506000838381518110611a8657634e487b7160e01b600052603260045260246000fd5b602002602001015190506000670de0b6b3a764000090508160208b010180518015611ac2578481028582820414611abc57600080fd5b83900494505b509290925250819050611ad4816128c9565b915050611994565b6000601882600381518110611b0157634e487b7160e01b600052603260045260246000fd5b016020015183516001600160f81b031990911690911c9060109084906002908110611b3c57634e487b7160e01b600052603260045260246000fd5b016020015184516001600160f81b031990911690911c9060089085906001908110611b7757634e487b7160e01b600052603260045260246000fd5b016020015185516001600160f81b031990911690911c908590600090611bad57634e487b7160e01b600052603260045260246000fd5b01602001516001600160f81b03191617171792915050565b600060f082901c60ff16611bdb57506000919050565b506001919050565b8151600090611bf36020826128e4565b15611c405760405162461bcd60e51b815260206004820152601960248201527f696c6c6567616c206c656e67746820666f72205f706172736500000000000000604482015260640161010c565b611c4b6020826127f9565b611c5590846127e1565b9150610100821115611c9a5760405162461bcd60e51b815260206004820152600e60248201526d737461636b206f766572666c6f7760901b604482015260640161010c565b8260051b60005b82811015611cbd57602081870181015183830189015201611ca1565b5050509392505050565b6000611cd282611d3b565b905081805480611cf257634e487b7160e01b600052603160045260246000fd5b60019003818190600052602060002001600090559055919050565b6000611d1882611d3b565b60001c905081805480611cf257634e487b7160e01b600052603160045260246000fd5b805460009080611d7b5760405162461bcd60e51b815260206004820152600b60248201526a737461636b20656d70747960a81b604482015260640161010c565b82611d8760018361286b565b81548110611da557634e487b7160e01b600052603260045260246000fd5b9060005260206000200154915050919050565b815460009080611df85760405162461bcd60e51b815260206004820152600b60248201526a737461636b20656d70747960a81b604482015260640161010c565b828111611e475760405162461bcd60e51b815260206004820152601c60248201527f6e6f7420656e6f75676820656c656d656e747320696e20737461636b00000000604482015260640161010c565b836001611e54858461286b565b611e5e919061286b565b81548110611e7c57634e487b7160e01b600052603260045260246000fd5b906000526020600020015491505092915050565b7f142183525227cae0e4300fd0fc77d7f3b08ceb0fd9cb2a6c5488668fa0ea5ffa60009081526020829052604081205461071c565b606080611ed18361195f565b15611f0e5760405162461bcd60e51b815260206004820152600d60248201526c53746174696320706172616d7360981b604482015260640161010c565b60165b60ff848116148015611f235750600081115b15611f415780611f32816128b2565b915050600884901c9350611f11565b60008111611f845760405162461bcd60e51b815260206004820152601060248201526f4e6f2064796e616d696320706172616d60801b604482015260640161010c565b806001600160401b03811115611faa57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611fd3578160200160208202803683370190505b509250806001600160401b03811115611ffc57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015612025578160200160208202803683370190505b50915060005b8181101561207e57835160ff86169085908390811061205a57634e487b7160e01b600052603260045260246000fd5b602090810291909101015260089490941c9380612076816128c9565b91505061202b565b506000805b604081101561214c576001861615612133578282106120e45760405162461bcd60e51b815260206004820181905260248201527f4c6f636174696f6e20636f756e7420657863656564732072656620636f756e74604482015260640161010c565b6120ef81602061280d565b6120fa9060046127e1565b84838151811061211a57634e487b7160e01b600052603260045260246000fd5b60209081029190910101528161212f816128c9565b9250505b60019590951c9480612144816128c9565b915050612083565b508181146121a75760405162461bcd60e51b815260206004820152602260248201527f4c6f636174696f6e20636f756e74206c657373207468616e2072656620636f756044820152611b9d60f21b606482015260840161010c565b5050915091565b604051806120000160405280610100906020820280368337509192915050565b80356001600160a01b038116811461197c57600080fd5b60008083601f8401126121f6578182fd5b5081356001600160401b0381111561220c578182fd5b6020830191508360208260051b850101111561222757600080fd5b9250929050565b600082601f83011261223e578081fd5b8135602061225361224e83612797565b612767565b80838252828201915082860187848660051b8901011115612272578586fd5b855b858110156122b25781356001600160401b03811115612291578788fd5b61229f8a87838c01016122bf565b8552509284019290840190600101612274565b5090979650505050505050565b600082601f8301126122cf578081fd5b81356122dd61224e826127ba565b8181528460208386010111156122f1578283fd5b816020850160208301379081016020019190915292915050565b60006020828403121561231c578081fd5b612325826121ce565b9392505050565b600080600060608486031215612340578182fd5b612349846121ce565b92506020848101356001600160e01b031981168114612366578384fd5b925060408501356001600160401b03811115612380578283fd5b8501601f81018713612390578283fd5b803561239e61224e82612797565b8082825284820191508484018a868560051b87010111156123bd578687fd5b8694505b838510156123df5780358352600194909401939185019185016123c1565b5080955050505050509250925092565b60008060408385031215612401578182fd5b61240a836121ce565b915060208301356001600160401b03811115612424578182fd5b612430858286016122bf565b9150509250929050565b600080600080600060608688031215612451578081fd5b85356001600160401b0380821115612467578283fd5b61247389838a016121e5565b9097509550602088013591508082111561248b578283fd5b61249789838a016121e5565b909550935060408801359150808211156124af578283fd5b506124bc8882890161222e565b9150509295509295909350565b60008060008060008060006080888a0312156124e3578182fd5b87356001600160401b03808211156124f9578384fd5b6125058b838c016121e5565b909950975060208a013591508082111561251d578384fd5b6125298b838c016121e5565b909750955060408a0135915080821115612541578384fd5b61254d8b838c0161222e565b945060608a0135915080821115612562578384fd5b5061256f8a828b016121e5565b989b979a50959850939692959293505050565b600060208284031215612593578081fd5b81518015158114612325578182fd5b6000602082840312156125b3578081fd5b5035919050565b6000602082840312156125cb578081fd5b5051919050565b6000602082840312156125e3578081fd5b813560038110612325578182fd5b600060208284031215612602578081fd5b81516001600160401b03811115612617578182fd5b8201601f81018413612627578182fd5b805161263561224e826127ba565b818152856020838501011115612649578384fd5b61265a826020830160208601612882565b95945050505050565b6000815180845261267b816020860160208601612882565b601f01601f19169290920160200192915050565b600083516126a1818460208801612882565b605f60f81b90830190815283516126bf816001840160208801612882565b01600101949350505050565b6001600160a01b038316815260406020808301829052835191830182905260009184820191906060850190845b818110156122b2578451835293830193918301916001016126f8565b6020815260006123256020830184612663565b60208082526006908201526510985b9b995960d21b604082015260600190565b60208082526006908201526512185b1d195960d21b604082015260600190565b604051601f8201601f191681016001600160401b038111828210171561278f5761278f612924565b604052919050565b60006001600160401b038211156127b0576127b0612924565b5060051b60200190565b60006001600160401b038211156127d3576127d3612924565b50601f01601f191660200190565b600082198211156127f4576127f46128f8565b500190565b6000826128085761280861290e565b500490565b6000816000190483118215151615612827576128276128f8565b500290565b60008083128015600160ff1b85018412161561284a5761284a6128f8565b6001600160ff1b0384018313811615612865576128656128f8565b50500390565b60008282101561287d5761287d6128f8565b500390565b60005b8381101561289d578181015183820152602001612885565b838111156128ac576000848401525b50505050565b6000816128c1576128c16128f8565b506000190190565b60006000198214156128dd576128dd6128f8565b5060010190565b6000826128f3576128f361290e565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fdfeb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453aa2646970667358221220e842940eb03bd5ab8b69f4858f39153a9e8020efffa07208d830cd8a471627e764736f6c63430008040033";

export class ProxyMock__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    registry: string,
    feeRuleRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ProxyMock> {
    return super.deploy(
      registry,
      feeRuleRegistry,
      overrides || {}
    ) as Promise<ProxyMock>;
  }
  getDeployTransaction(
    registry: string,
    feeRuleRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      registry,
      feeRuleRegistry,
      overrides || {}
    );
  }
  attach(address: string): ProxyMock {
    return super.attach(address) as ProxyMock;
  }
  connect(signer: Signer): ProxyMock__factory {
    return super.connect(signer) as ProxyMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProxyMockInterface {
    return new utils.Interface(_abi) as ProxyMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyMock {
    return new Contract(address, _abi, signerOrProvider) as ProxyMock;
  }
}
