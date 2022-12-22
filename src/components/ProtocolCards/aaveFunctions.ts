import { BigNumber } from "ethers";
import { BytesLike, formatBytes32String, parseUnits } from "ethers/lib/utils";
import contractsAddress from "../../utils/contractsAddress";

//  get Atoken symbol
export const getATokenSymbol = (data: any, chain: any, formik: any) => {
  const aToken = data.function_configs.tokens[chain].find(
    (tokenData: any) => tokenData.symbol === formik.values.token
  ).aTokenSymbol;
  return aToken;
};

// getAToken address
export const getATokenAddress = (data: any, chain: any, formik: any) => {
  console.log(formik.values, "formik values in getAToken");
  const aToken = data.function_configs.tokens[chain].find(
    ({ symbol }: any) => symbol === formik.values.token
  ).aAddress;
  return aToken;
};
//  get decimals
export const getTokenDecimals = (data: any, chain: any, formik: any) => {
  console.log({ data, chain, formik }, "in decimals function");
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

export async function onSubmitHandle({
  data,
  encodeData,
  chainId,
  formik,
  flashLoanItems,
  bytesEncoder,
  execMock,
  setSavedProtocols,
  protocol_id,
  setExchageItems,
  drainToken,
  abiCoder,
}: any) {
  const newProtocol = { ...data, encodeData };
  newProtocol["initialData"] = formik.values;
  if (data.methodName === "flashLoan") {
    console.log("in flasloan mode");
    const drainTokenResult = drainToken(
      [contractsAddress.faucet],
      [getTokenAddress(data, chainId, formik)],
      [
        parseUnits(
          formik.values.amount.toString(),
          getTokenDecimals(data, chainId, formik)
        ),
      ]
    );
    const encodedAbi = abiCoder.encode(
      ["address[]", "bytes32[]", "bytes[]"],
      [
        [contractsAddress.hMock],
        [formatBytes32String("")],
        [drainTokenResult as BytesLike],
      ]
    );
    console.log({ drainTokenResult, encodedAbi });
    const encoded = bytesEncoder(
      contractsAddress.haaveAddress,
      data.methodName,
      [
        [getTokenAddress(data, chainId, formik)],
        [
          parseUnits(
            formik.values.amount.toString(),
            getTokenDecimals(data, chainId, formik)
          ),
        ],
        [BigNumber.from("0")],
        encodedAbi as BytesLike,
      ]

      // [getTokenAddress(data, chainId, formik)],
      //   [
      //     parseUnits(
      //       formik.values.amount.toString(),
      //       getTokenDecimals(data, chainId, formik)
      //     ),
      //   ],
    );
    console.log({ encoded }, "finalEncodedData data ...");
    console.log(
      flashLoanItems.map(({ encodeData }: any) => encodeData),
      "encoded abi data ..."
    );

    execMock(contractsAddress.haaveAddress, encoded);
  } else {
    return;
  }
  if (data.methodName == "flashLoan") {
    setSavedProtocols((oldData: any) => [
      ...oldData,
      {
        "flashLoan-start": true,
        "flashLoan-end": false,
        notDraggable: true,
        ...newProtocol,
        protocol_id: protocol_id,
      },
    ]);
    setSavedProtocols((oldData: any) => [
      ...oldData,
      {
        "flashLoan-end": true,
        "flashLoan-start": false,
        notDraggable: true,
        ...newProtocol,
        protocol_id: protocol_id,
      },
    ]);
    // delete newProtocol["flashLoan-start"];
  } else {
    setSavedProtocols((oldData: any) => [...oldData, newProtocol]);
  }
  setExchageItems([]);
}
