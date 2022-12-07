import { aavaMainTokens, aavaTestTokens } from "../tokens/aava";

const compound = [
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
        "1": aavaMainTokens,
        "5": aavaTestTokens,
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
        "1": aavaMainTokens,
        "5": aavaTestTokens,
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
        { title: "cAmount In", showTokens: false, token: "DAI", amount: "" },
        {
          title: "Borrow Amount",
          showTokens: false,
          token: "DAI",
          amount: "",
        },
      ],
    },
    function_configs: {
      tokens: {
        "1": aavaMainTokens,
        "5": aavaTestTokens,
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
    protocolName: "Compound",
    protocolLogo: "",
    initialData: {
      userProxy: "",
      tokensData: [
        { title: "Repay Amount", showTokens: false, token: "cDAI", amount: "" },
        {
          title: "cWithdrawAmount",
          showTokens: false,
          token: "cEth",
          amount: "",
        },
      ],
    },
    function_configs: {
      tokens: {
        "1": aavaMainTokens,
        "5": aavaTestTokens,
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

export default compound;

//{userProxy:'',tokensData: [{ title:'Input',token: "DAI", amount: "", showTokens: false }]}

// {userProxy:'',tokensData:[{title:'Input', userProxy:'',token: "DAI", amount: "", showTokens: false }]}

// {
//     userProxy:'',
// tokensData: [
//       {title:'cAmountIn',showTokens:false,token:'cDAI',amount:''},
// {title:'Borrow Amount',showTokens:false,token:'cEth',amount:''}]
// },

// {
//     userProxy:'',
// tokensData: [
//       {title:'Repay Amount',showTokens:false,token:'cDAI',amount:''},
// {title:'cWithdrawAmount',showTokens:false,token:'cEth',amount:''}]
// },
