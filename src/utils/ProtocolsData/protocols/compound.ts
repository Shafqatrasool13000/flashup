import {
  compoundMainnetTokens,
  compoundTestnetTokens,
} from "../tokens/compound";
import { mainnetTokens, testnetTokens } from "./tokens";

const compoundProtocolData = [
  {
    name: "Deposit",
    methodName: "deposit",
    signature: "",
    description: "",
    tag: [],
    protocolName: "Compound",
    protocolLogo: "",
    initialData: {
      userProxy: "",
      tokensData: [
        { title: "Input", token: "DAI", amount: "", showTokens: false },
      ],
    },
    function_configs: {
      tokens: {
        "1": mainnetTokens,
        "5": testnetTokens,
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
    protocolName: "Compound",
    protocolLogo: "",
    initialData: {
      userProxy: "",
      tokensData: [
        {
          title: "Input",
          userProxy: "",
          token: "DAI",
          amount: "",
          showTokens: false,
        },
      ],
    },
    function_configs: {
      tokens: {
        "1": mainnetTokens,
        "5": testnetTokens,
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
    protocolName: "Compound",
    protocolLogo: "",
    initialData: {
      userProxy: "",
      tokensData: [
        {
          title: "Borrow Amount",
          showTokens: false,
          token: "cETH",
          amount: "",
        },
        { title: "cAmount In", showTokens: false, token: "cDAI", amount: "" },
      ],
    },
    function_configs: {
      tokens: {
        "1": compoundMainnetTokens,
        "5": compoundTestnetTokens,
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
    name: "Repay Borrow",
    methodName: "repayBorrow",
    signature: () => console.log(""),
    description: "",
    tag: "",
    protocolName: "Compound",
    protocolLogo: "",
    initialData: {
      userProxy: "",
      tokensData: [
        {
          title: "cWithdrawAmount",
          showTokens: false,
          token: "cDAI",
          amount: "",
        },
        { title: "Repay Amount", showTokens: false, token: "cETH", amount: "" },
      ],
    },
    function_configs: {
      tokens: {
        "1": compoundMainnetTokens,
        "5": compoundTestnetTokens,
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
];

export default compoundProtocolData;
