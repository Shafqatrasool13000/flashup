/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HWeth, HWethInterface } from "../HWeth";

const _abi = [
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
    name: "NATIVE_TOKEN_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "address",
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
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "postProcess",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061073f806100206000396000f3fe60806040526004361061009c5760003560e01c8063b6b55f2511610064578063b6b55f2514610186578063c272291614610199578063dc9031c4146101a1578063df2ebdbb146101c1578063f5f5ba72146101e9578063fa2901a51461021d57600080fd5b80630f532d18146100a15780632e1a7d4d146100e857806387c13943146100fd57806399eb59b914610119578063ad5c464814610146575b600080fd5b3480156100ad57600080fd5b506100d57fb2f2618cecbbb6e7468cc0f2aa43858ad8d153e0280b22285e28e853bb9d453a81565b6040519081526020015b60405180910390f35b6100fb6100f6366004610551565b610251565b005b34801561010957600080fd5b506100d5670de0b6b3a764000081565b34801561012557600080fd5b506100d5610134366004610551565b60016020526000908152604090205481565b34801561015257600080fd5b5061016e73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc281565b6040516001600160a01b0390911681526020016100df565b6100fb610194366004610551565b610337565b6100fb610469565b3480156101ad57600080fd5b506100d56101bc366004610551565b6104ad565b3480156101cd57600080fd5b5061016e73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b3480156101f557600080fd5b506040805180820182526005815264090aecae8d60db1b602082015290516100df91906105c9565b34801561022957600080fd5b50610238636139148b60e11b81565b6040516001600160e01b031990911681526020016100df565b604051632e1a7d4d60e01b81526004810182905273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc290632e1a7d4d90602401600060405180830381600087803b15801561029e57600080fd5b505af19250505080156102af575060015b610334576102bb610667565b806308c379a0141561030957506102d061067f565b806102db575061030b565b61030560405180604001604052806008815260200167776974686472617760c01b815250826104ce565b5050565b505b61033460405180604001604052806008815260200167776974686472617760c01b815250610524565b50565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc26001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561038657600080fd5b505af193505050508015610398575060015b61041d576103a4610667565b806308c379a014156103f357506103b961067f565b806103c457506103f5565b6103ed6040518060400160405280600781526020016619195c1bdcda5d60ca1b815250826104ce565b5061041d565b505b61041d6040518060400160405280600781526020016619195c1bdcda5d60ca1b815250610524565b6000805460018101825590805273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc27f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56390910155610334565b60405162461bcd60e51b8152602060048201526014602482015273496e76616c696420706f73742070726f6365737360601b60448201526064015b60405180910390fd5b600081815481106104bd57600080fd5b600091825260209091200154905081565b604080518082019091526005815264090aecae8d60db1b602082015282826040516020016104fe93929190610569565b60408051601f198184030181529082905262461bcd60e51b82526104a4916004016105c9565b610334816040518060400160405280600b81526020016a155b9cdc1958da599a595960aa1b8152506104ce565b600060208284031215610562578081fd5b5035919050565b6000845161057b8184602089016105fc565b605f60f81b90830190815284516105998160018401602089016105fc565b6101d160f51b6001929091019182015283516105bc8160038401602088016105fc565b0160030195945050505050565b60208152600082518060208401526105e88160408501602087016105fc565b601f01601f19169190910160400192915050565b60005b838110156106175781810151838201526020016105ff565b83811115610626576000848401525b50505050565b601f8201601f1916810167ffffffffffffffff8111828210171561066057634e487b7160e01b600052604160045260246000fd5b6040525050565b600060033d111561067c57600481823e5160e01c5b90565b600060443d101561068d5790565b6040516003193d81016004833e81513d67ffffffffffffffff81602484011181841117156106bd57505050505090565b82850191508151818111156106d55750505050505090565b843d87010160208285010111156106ef5750505050505090565b6106fe6020828601018761062c565b50909594505050505056fea2646970667358221220b91b711dd66f689ef6a246b6fe63131645353e0312a325bdacaeb872bb52421664736f6c63430008040033";

export class HWeth__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HWeth> {
    return super.deploy(overrides || {}) as Promise<HWeth>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): HWeth {
    return super.attach(address) as HWeth;
  }
  connect(signer: Signer): HWeth__factory {
    return super.connect(signer) as HWeth__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HWethInterface {
    return new utils.Interface(_abi) as HWethInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): HWeth {
    return new Contract(address, _abi, signerOrProvider) as HWeth;
  }
}