//  get Atoken symbol
export const getATokenSymbol = (data: any, chain: any, formik: any) => {
  let aToken = data.function_configs.tokens[chain.toString() as string].find(
    (tokenData: any) => tokenData.symbol === formik.values.inputsData[0].token
  ).aTokenSymbol;
  return aToken;
};

// getAToken address
export const getATokenAddress = (data: any, chain: any, formik: any) => {
  let aToken = data.function_configs.tokens[chain.toString() as string].find(
    (tokenData: any) => tokenData.symbol === formik.values.inputsData[0].token
  ).aAddress;
  return aToken;
};
//  get decimals
export const getTokenDecimals = (
  data: any,
  chain: any,
  index: number,
  formik: any
) => {
  const decimals = data.function_configs.tokens[chain].find(
    ({ symbol }: any) => symbol === formik.values.inputsData[index].token
  ).decimals;
  console.log({ decimals });
  return decimals;
};
// get token addresss

export const getTokenAddress = (
  data: any,
  chain: any,
  index: number,
  formik: any
) => {
  const address = data.function_configs.tokens[chain].find(
    ({ symbol }: any) => symbol === formik.values.inputsData[index].token
  ).address;
  return address;
};
// get stable token addresss

export const getStableDebt = (
  data: any,
  chain: any,
  index: number,
  formik: any
) => {
  const address = data.function_configs.tokens[chain].find(
    ({ symbol }: any) => symbol === formik.values.inputsData[index].token
  ).stableDebtTokenAddress;
  return address;
};

// get variable token addresss

export const getVariableDebt = (
  data: any,
  chain: any,
  index: number,
  formik: any
) => {
  const address = data.function_configs.tokens[chain as number].find(
    ({ symbol }: any) => symbol === formik.values.inputsData[index].token
  ).variableDebtTokenAddress;
  return address;
};
