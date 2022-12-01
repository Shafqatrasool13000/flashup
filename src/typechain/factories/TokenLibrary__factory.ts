/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenLibrary, TokenLibraryInterface } from "../TokenLibrary";

const _abi = [
  {
    inputs: [],
    name: "PermitUnsupported",
    type: "error",
  },
  {
    inputs: [],
    name: "NATIVE_TOKEN",
    outputs: [
      {
        internalType: "contract Token",
        name: "",
        type: "Token",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a4610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c806331f7d964146038575b600080fd5b605273eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b6040516001600160a01b03909116815260200160405180910390f3fea2646970667358221220e70b4efd032e255ba162293b6fb3a9fcf8bcc19f60ffbbba36f49fb4b1766a1a64736f6c63430008040033";

export class TokenLibrary__factory extends ContractFactory {
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
  ): Promise<TokenLibrary> {
    return super.deploy(overrides || {}) as Promise<TokenLibrary>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TokenLibrary {
    return super.attach(address) as TokenLibrary;
  }
  connect(signer: Signer): TokenLibrary__factory {
    return super.connect(signer) as TokenLibrary__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenLibraryInterface {
    return new utils.Interface(_abi) as TokenLibraryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenLibrary {
    return new Contract(address, _abi, signerOrProvider) as TokenLibrary;
  }
}
