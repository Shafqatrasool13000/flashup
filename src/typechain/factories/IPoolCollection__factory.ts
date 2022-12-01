/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IPoolCollection,
  IPoolCollectionInterface,
} from "../IPoolCollection";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Token",
        name: "token",
        type: "address",
      },
    ],
    name: "createPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultTradingFeePPM",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "contextId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "contract Token",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "baseTokenAmount",
        type: "uint256",
      },
    ],
    name: "depositFor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Token",
        name: "pool",
        type: "address",
      },
    ],
    name: "depositingEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Token",
        name: "pool",
        type: "address",
      },
    ],
    name: "isPoolStable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Token",
        name: "pool",
        type: "address",
      },
    ],
    name: "isPoolValid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Token",
        name: "pool",
        type: "address",
      },
      {
        components: [
          {
            internalType: "contract IPoolToken",
            name: "poolToken",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "tradingFeePPM",
            type: "uint32",
          },
          {
            internalType: "bool",
            name: "tradingEnabled",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "depositingEnabled",
            type: "bool",
          },
          {
            components: [
              {
                internalType: "uint32",
                name: "blockNumber",
                type: "uint32",
              },
              {
                components: [
                  {
                    internalType: "uint112",
                    name: "n",
                    type: "uint112",
                  },
                  {
                    internalType: "uint112",
                    name: "d",
                    type: "uint112",
                  },
                ],
                internalType: "struct Fraction112",
                name: "rate",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint112",
                    name: "n",
                    type: "uint112",
                  },
                  {
                    internalType: "uint112",
                    name: "d",
                    type: "uint112",
                  },
                ],
                internalType: "struct Fraction112",
                name: "invRate",
                type: "tuple",
              },
            ],
            internalType: "struct AverageRates",
            name: "averageRates",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint128",
                name: "bntTradingLiquidity",
                type: "uint128",
              },
              {
                internalType: "uint128",
                name: "baseTokenTradingLiquidity",
                type: "uint128",
              },
              {
                internalType: "uint256",
                name: "stakedBalance",
                type: "uint256",
              },
            ],
            internalType: "struct PoolLiquidity",
            name: "liquidity",
            type: "tuple",
          },
        ],
        internalType: "struct Pool",
        name: "data",
        type: "tuple",
      },
    ],
    name: "migratePoolIn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Token",
        name: "pool",
        type: "address",
      },
      {
        internalType: "contract IPoolCollection",
        name: "targetPoolCollection",
        type: "address",
      },
    ],
    name: "migratePoolOut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "networkFeePPM",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Token",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "feeAmount",
        type: "uint256",
      },
    ],
    name: "onFeesCollected",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "poolCount",
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
    inputs: [
      {
        internalType: "contract Token",
        name: "pool",
        type: "address",
      },
    ],
    name: "poolLiquidity",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "bntTradingLiquidity",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "baseTokenTradingLiquidity",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "stakedBalance",
            type: "uint256",
          },
        ],
        internalType: "struct PoolLiquidity",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Token",
        name: "pool",
        type: "address",
      },
    ],
    name: "poolToken",
    outputs: [
      {
        internalType: "contract IPoolToken",
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
        internalType: "contract Token",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "baseTokenAmountToDistribute",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "protocolPoolTokenAmount",
        type: "uint256",
      },
    ],
    name: "poolTokenAmountToBurn",
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
    inputs: [
      {
        internalType: "contract Token",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "poolTokenAmount",
        type: "uint256",
      },
    ],
    name: "poolTokenToUnderlying",
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
    name: "poolType",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pools",
    outputs: [
      {
        internalType: "contract Token[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "contextId",
        type: "bytes32",
      },
      {
        internalType: "contract Token",
        name: "sourceToken",
        type: "address",
      },
      {
        internalType: "contract Token",
        name: "targetToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "sourceAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minReturnAmount",
        type: "uint256",
      },
    ],
    name: "tradeBySourceAmount",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tradingFeeAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "networkFeeAmount",
            type: "uint256",
          },
        ],
        internalType: "struct TradeAmountAndFee",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "contextId",
        type: "bytes32",
      },
      {
        internalType: "contract Token",
        name: "sourceToken",
        type: "address",
      },
      {
        internalType: "contract Token",
        name: "targetToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "targetAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSourceAmount",
        type: "uint256",
      },
    ],
    name: "tradeByTargetAmount",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tradingFeeAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "networkFeeAmount",
            type: "uint256",
          },
        ],
        internalType: "struct TradeAmountAndFee",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Token",
        name: "sourceToken",
        type: "address",
      },
      {
        internalType: "contract Token",
        name: "targetToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "targetAmount",
        type: "uint256",
      },
    ],
    name: "tradeInputAndFeeByTargetAmount",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tradingFeeAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "networkFeeAmount",
            type: "uint256",
          },
        ],
        internalType: "struct TradeAmountAndFee",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Token",
        name: "sourceToken",
        type: "address",
      },
      {
        internalType: "contract Token",
        name: "targetToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "sourceAmount",
        type: "uint256",
      },
    ],
    name: "tradeOutputAndFeeBySourceAmount",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tradingFeeAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "networkFeeAmount",
            type: "uint256",
          },
        ],
        internalType: "struct TradeAmountAndFee",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Token",
        name: "pool",
        type: "address",
      },
    ],
    name: "tradingEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Token",
        name: "pool",
        type: "address",
      },
    ],
    name: "tradingFeePPM",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Token",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "baseTokenAmount",
        type: "uint256",
      },
    ],
    name: "underlyingToPoolToken",
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
    name: "version",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "contextId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "contract Token",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "poolTokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "baseTokenAmount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Token",
        name: "pool",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "poolTokenAmount",
        type: "uint256",
      },
    ],
    name: "withdrawalAmounts",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "totalAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "bntAmount",
            type: "uint256",
          },
        ],
        internalType: "struct WithdrawalAmounts",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IPoolCollection__factory {
  static readonly abi = _abi;
  static createInterface(): IPoolCollectionInterface {
    return new utils.Interface(_abi) as IPoolCollectionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPoolCollection {
    return new Contract(address, _abi, signerOrProvider) as IPoolCollection;
  }
}
