import { BigNumber } from "ethers";
import { aavaTestnetTokens, aaveMainnetTokens } from "../tokens/aava";

const aave2ProtocolData = [
  {
    name: "Deposit",
    methodName: "deposit",
    signature: "",
    description: "",
    tag: [],
    protocolName: "Aava 2",
    protocolLogo: "",
    initialData: [{ token: "DAI", amount: "", showTokens: false }],
    function_configs: {
      tokens: {
        "1": aaveMainnetTokens,
        "5": aavaTestnetTokens,
      },
      outputs: [],
    },
    protocol_configs: {
      fee: 12,
      prices: 12,
    },
    ltv: {
      "1": "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
      "5": "0x4bd5643ac6f66a5237E18bfA7d47cF22f1c9F210",
    },
    attributes: [
      {
        name: "APY",
        value: 0,
      },
      {
        name: "Max LTV",
        value: 0,
      },
    ],
    pool: {
      name: "",
      pool_address: "",
      pool_apy: "",
    },
  },
  {
    name: "Withdraw",
    methodName: "withdraw",
    signature: "",
    description: "",
    tag: "",
    protocolName: "Aava 2",
    protocolLogo: "",
    initialData: [{ token: "USDT", amount: "", showTokens: false }],
    function_configs: {
      tokens: {
        "1": aaveMainnetTokens,
        "5": aavaTestnetTokens,
      },
      outputs: [],
    },
    attributes: [],
    protocol_configs: {
      fee: 12,
      prices: 12,
    },
    pool: {
      name: "",
      pool_address: "",
      pool_apy: "",
    },
    ltv: {
      "1": "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
      "5": "0x4bd5643ac6f66a5237E18bfA7d47cF22f1c9F210",
    },
  },
  {
    name: "Borrow",
    methodName: "borrow",
    signature: () => console.log(""),
    description: "",
    tag: "",
    protocolName: "Aava 2",
    protocolLogo: "",
    initialData: [
      {
        token: "USDT",
        amount: "",
        showTokens: false,
        rateMode: BigNumber.from(2),
      },
    ],
    function_configs: {
      tokens: {
        "1": aaveMainnetTokens,
        "5": aavaTestnetTokens,
      },
      outputs: [],
    },
    ltv: {
      "1": "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
      "5": "0x4bd5643ac6f66a5237E18bfA7d47cF22f1c9F210",
    },
    attributes: [
      {
        name: "Borrow APY",
        value: 234,
      },
      {
        name: "Total Debt",
        value: 234,
      },
      {
        name: "Total Collatrel",
        value: 234,
      },
      {
        name: "Utilization",
        value: 234,
      },
    ],
    protocol_configs: {
      tokenlist: [],
      fee: 12,
      prices: 12,
    },
    pool: {
      name: "",
      pool_address: "",
      pool_apy: "",
    },
  },
  {
    name: "Repay",
    methodName: "repay",
    signature: () => console.log(""),
    description: "",
    tag: "",
    protocolName: "Aava 2",
    protocolLogo: "",
    initialData: [
      {
        token: "USDT",
        amount: "",
        showTokens: false,
        rateMode: BigNumber.from(2),
        // onBehalfOf: +true,
      },
    ],
    function_configs: {
      tokens: {
        "1": aaveMainnetTokens,
        "5": aavaTestnetTokens,
      },
      outputs: [],
    },
    attributes: [
      {
        name: "ETH Debt",
        value: 234,
      },
      {
        name: "Total Debt",
        value: 234,
      },
      {
        name: "Total Collatrel",
        value: 234,
      },
      {
        name: "Utilization",
        value: 234,
      },
    ],
    protocol_configs: {
      tokenlist: [],
      fee: 12,
      prices: 12,
    },
    pool: {
      name: "",
      pool_address: "",
      pool_apy: "",
    },
    ltv: {
      "1": "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
      "5": "0x4bd5643ac6f66a5237E18bfA7d47cF22f1c9F210",
    },
  },
  {
    name: "Flashloan",
    signature: () => console.log(""),
    methodName: "flashLoan",
    description: "",
    tag: "",
    protocolName: "Aava 2",
    protocolLogo: "",
    initialData: [
      {
        token: "USDT",
        amount: "",
        assets: [],
        amounts: [],
        modes: [],
        params: [],
        showTokens: false,
      },
    ],
    function_configs: {
      tokens: {
        "1": aaveMainnetTokens,
        "5": aavaTestnetTokens,
      },
      outputs: [],
    },
    attributes: [],
    protocol_configs: {
      tokenlist: [],
      fee: 12,
      prices: 12,
    },
    pool: {
      name: "",
      pool_address: "",
      pool_apy: "",
    },
    ltv: {
      "1": "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
      "5": "0x4bd5643ac6f66a5237E18bfA7d47cF22f1c9F210",
    },
  },

  {
    name: "DepositETH",
    methodName: "depositETH",
    signature: () => console.log(""),
    description: "",
    tag: "",
    protocolName: "Aava 2",
    protocolLogo: "",
    initialData: [
      {
        amount: "",
      },
    ],
    function_configs: {
      tokens: {
        "1": aaveMainnetTokens,
        "5": aavaTestnetTokens,
      },
      outputs: [],
    },
    attributes: [],
    protocol_configs: {
      tokenlist: [],
      fee: 12,
      prices: 12,
    },
    pool: {
      name: "",
      pool_address: "",
      pool_apy: "",
    },
    ltv: {
      "1": "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
      "5": "0x4bd5643ac6f66a5237E18bfA7d47cF22f1c9F210",
    },
  },

  {
    name: "WithdrawETH",
    methodName: "withdrawETH",
    signature: () => console.log(""),
    description: "",
    tag: "",
    protocolName: "Aava 2",
    protocolLogo: "",
    initialData: [
      {
        amount: "",
      },
    ],
    function_configs: {
      tokens: {
        "1": aaveMainnetTokens,
        "5": aavaTestnetTokens,
      },
      outputs: [],
    },
    attributes: [],
    protocol_configs: {
      tokenlist: [],
      fee: 12,
      prices: 12,
    },
    pool: {
      name: "",
      pool_address: "",
      pool_apy: "",
    },
    ltv: {
      "1": "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
      "5": "0x4bd5643ac6f66a5237E18bfA7d47cF22f1c9F210",
    },
  },
  {
    name: "BorrowETH",
    methodName: "borrowETH",
    signature: () => console.log(""),
    description: "",
    tag: "",
    protocolName: "Aava 2",
    protocolLogo: "",
    initialData: [
      {
        amount: "",
      },
    ],
    function_configs: {
      tokens: {
        "1": aaveMainnetTokens,
        "5": aavaTestnetTokens,
      },
      outputs: [],
    },
    attributes: [],
    protocol_configs: {
      tokenlist: [],
      fee: 12,
      prices: 12,
    },
    pool: {
      name: "",
      pool_address: "",
      pool_apy: "",
    },
    ltv: {
      "1": "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
      "5": "0x4bd5643ac6f66a5237E18bfA7d47cF22f1c9F210",
    },
  },
  {
    name: "RepayETH",
    methodName: "repayETH",
    signature: () => console.log(""),
    description: "",
    tag: "",
    protocolName: "Aava 2",
    protocolLogo: "",
    initialData: [
      {
        amount: "",
        rate: 1,
      },
    ],
    function_configs: {
      tokens: {
        "1": aaveMainnetTokens,
        "5": aavaTestnetTokens,
      },
      outputs: [],
    },
    attributes: [],
    protocol_configs: {
      tokenlist: [],
      fee: 12,
      prices: 12,
    },
    pool: {
      name: "",
      pool_address: "",
      pool_apy: "",
    },
    ltv: {
      "1": "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
      "5": "0x4bd5643ac6f66a5237E18bfA7d47cF22f1c9F210",
    },
  },
];

export default aave2ProtocolData;
