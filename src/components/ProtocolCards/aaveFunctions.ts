import { BigNumber } from 'ethers';
import { BytesLike, formatBytes32String, parseUnits } from 'ethers/lib/utils';
import contractsAddress from '../../utils/contractsAddress';

//  get Atoken symbol
export const getATokenSymbol = (data: any, chain: any, formik: any) => {
  const aToken = data.function_configs.tokens[chain].find(
    (tokenData: any) => tokenData.symbol === formik.values.token
  ).aTokenSymbol;
  return aToken;
};

// getAToken address
export const getATokenAddress = (data: any, chain: any, formik: any) => {
  console.log(formik.values, 'formik values in getAToken');
  const aToken = data.function_configs.tokens[chain].find(
    ({ symbol }: any) => symbol === formik.values.token
  ).aAddress;
  return aToken;
};
//  get decimals
export const getTokenDecimals = (data: any, chain: any, formik: any) => {
  console.log({ data, chain, formik }, 'in decimals function');
  const decimals = data.function_configs.tokens[chain].find(
    ({ symbol }: any) => symbol === formik.values.token
  ).decimals;
  console.log({ decimals });
  return decimals;
};
// get token addresss

export const getTokenAddress = (data: any, chain: any, formik: any) => {
  console.log({ data, chain, formik });
  const address = data.function_configs.tokens[chain].find(
    ({ symbol }: any) => symbol === formik.values.token
  ).address;
  return address;
};
// get stable token addresss

export const getStableDebt = (data: any, chain: any, formik: any) => {
  const address = data.function_configs.tokens[chain].find(
    ({ symbol }: any) => symbol === formik.values.token
  ).stableDebtTokenAddress;
  return address;
};

// get variable token addresss

export const getVariableDebt = (data: any, chain: any, formik: any) => {
  const address = data.function_configs.tokens[chain].find(
    ({ symbol }: any) => symbol === formik.values.token
  ).variableDebtTokenAddress;
  return address;
};
