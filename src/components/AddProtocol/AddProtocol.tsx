import { useContext, useEffect, useId, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaArrowAltCircleLeft,
  FaArrowDown,
  FaBehanceSquare,
  FaBitbucket,
  FaCannabis,
  FaCaretDown,
  FaPlus,
} from "react-icons/fa";
import { useExecMock } from "../../hooks/useExecMock";
import { ExchangerContext } from "../../layout/Create/Index";
import SelectToken from "../SelectToken/SelectToken";
import { AddProtocolStyled, RateModeStyled } from "../AddCube/style";
import { Spin, Switch } from "antd";
import { useNetwork, useAccount } from "wagmi";
import { Icon } from "@iconify/react";
import { useFormik, FormikProvider, Form, FieldArray } from "formik";
import * as Yup from "yup";
import InputField from "../InputField/InputField";
import { GetBalance } from "../../hooks/GetBalance";
import GetLtv from "../../hooks/GetLtv";
import UseApy from "../../utils/graphql/useApy";
import { LoadingOutlined } from "@ant-design/icons";
import { addresses } from "../../utils/constants";
import { useEncode } from "../../hooks/useEncode";
import useApprove from "../../hooks/useApprove";
import { AddProtocolInitValues } from "../../utils/types";
import { toast } from "react-toastify";
import { BigNumber, constants } from "ethers";
import useTransfer from "../../hooks/useTransfer";
import useStableToken from "../../hooks/useStableToken";
import useVariableToken from "../../hooks/useVariableToken";
import {
  getTokenAddress,
  getATokenSymbol,
  getStableDebt,
  getTokenDecimals,
  getVariableDebt,
  getATokenAddress,
} from "./functional";
import {
  AbiCoder,
  arrayify,
  Bytes,
  BytesLike,
  formatBytes32String,
  parseBytes32String,
  parseEther,
  parseUnits,
} from "ethers/lib/utils";
import useDrainToken from "../../hooks/useDrainToken";

const AddProtocol = ({ data, setAddCubeModal }: any) => {
  const { address } = useAccount();
  const protocol_id = useId();
  const { chain } = useNetwork();
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const abiCoder = new AbiCoder();
  //  get token symbol
  // const getTokenSymbol=() => {}

  // get amount
  // const getAmount = () => {};

  // Initial Values

  const initialValues: AddProtocolInitValues = {
    inputsData: chain?.id && data?.initialData,
  };

  // validate Values

  const validationSchema = Yup.object({
    inputsData: Yup.array().of(
      Yup.object().shape({
        amount: Yup.string().required("amount is required"),
      })
    ),
  });

  // Hooks

  const encoder = useEncode();
  const execMock = useExecMock();
  const approve = useApprove();
  const transfer = useTransfer();
  const stableToken = useStableToken();
  const variableToken = useVariableToken();
  const drainToken = useDrainToken();

  // Approve Hanlder
  const approveHandler = () => {
    approve(
      getTokenAddress(data, chain?.id, 0, formik),
      addresses.proxyMockAddress,
      parseUnits(
        formik.values.inputsData[0].amount.toString(),
        getTokenDecimals(data, chain?.id, 0, formik)
      )
    );
    // if (Object.keys(formik.errors).length !== 0) {
    //   (() => toast("plz fill all fields"))();
    //   return;
    // }
    // if (formik.values.inputsData[0].rateMode) {
    //   if (formik.values.inputsData[0].rateMode.toNumber() === 1) {
    //     stableToken(
    //       addresses.proxyMockAddress,
    //       parseUnits(
    //         formik.values.inputsData[0].amount.toString(),
    //         getTokenDecimals(data, chain?.id, 0, formik)
    //       ),
    //       getStableDebt(data, chain?.id, 0, formik),
    //       getTokenDecimals(data, chain?.id, 0, formik)
    //     );
    //   } else {
    //     variableToken(
    //       addresses.proxyMockAddress,
    //       formik.values.inputsData[0].amount,
    //       getVariableDebt(data, chain?.id, 0, formik),
    //       getTokenDecimals(data, chain?.id, 0, formik)
    //     );
    //   }
    // } else {
    //   if (data.methodName === "withdraw") {
    //     approve(
    //       // getATokenAddress(data, chain?.id, formik),
    //       // "0x22404B0e2a7067068AcdaDd8f9D586F834cCe2c5",
    //       getTokenAddress(data, chain?.id, 0, formik),
    //       addresses.proxyMockAddress,
    //       parseUnits(
    //         formik.values.inputsData[0].amount.toString(),
    //         getTokenDecimals(data, chain?.id, 0, formik)
    //       )
    //     );
    //   } else {
    //     console.log("simple approve handler");
    //     approve(
    //       getTokenAddress(data, chain?.id, 0, formik),
    //       addresses.proxyMockAddress,
    //       parseUnits(
    //         formik.values.inputsData[0].amount.toString(),
    //         getTokenDecimals(data, chain?.id, 0, formik)
    //       )
    //     );
    //   }
    // }
  };

  // Transfer Handler

  const transferHandler = async () => {
    if (Object.keys(formik.errors).length !== 0) {
      (() => toast("plz fill all fields"))();
      return;
    }
    const result = await transfer(
      getTokenAddress(data, chain?.id, 0, formik),
      addresses.proxyMockAddress,
      formik.values.inputsData[0].amount,
      getTokenDecimals(data, chain?.id, 0, formik)
    );
    return result;
  };

  // Execution Handler

  const executionHandler = async () => {
    const encoded = encoder(addresses.haaveAddress, data.methodName, [
      getTokenAddress(data, chain?.id, 0, formik),
      parseUnits(
        formik.values.inputsData[0].amount.toString(),
        getTokenDecimals(data, chain?.id, 0, formik)
      ),
      address,
    ]);
    console.log({ encoded });
    // if (Object.keys(formik.errors).length !== 0) {
    //   (() => toast("plz fill all fields"))();
    //   return;
    // }
    // const finalProtcoloData = formik.values.inputsData.map(
    //   (objData: any, index: number) => {
    //     delete objData["showTokens"];
    //     return {
    //       ...objData,
    //       token: getTokenAddress(data, chain?.id, 0, formik),
    //       amount: parseUnits(
    //         formik.values.inputsData[index].amount.toString(),
    //         getTokenDecimals(data, chain?.id, index, formik)
    //       ),
    //       rateMode: 2,
    //       // aToken: getATokenAddress(data, chain?.id, formik),
    //     };
    //   }
    // );
    // const encoded = encoder(addresses.haaveAddress, data.methodName, [
    //   ...Object.values(finalProtcoloData[0]),
    // ]);
    // console.log({ finalProtcoloData });

    // const encoded = encoder(addresses.haaveAddress, "withdrawETH", [
    //   parseEther("0.1"),
    //   "0x22404B0e2a7067068AcdaDd8f9D586F834cCe2c5",
    // ]);
    // const transferred: any = await transferHandler();

    // if (Object.keys(transferred).length !== 0) {
    //   (() => toast("transfer done"))();
    //   setEncodeData([...encodeData, encoded]);
    // }
    execMock(addresses.haaveAddress, encoded);
  };

  // Submit Handler

  const onSubmit = async () => {
    const newProtocol = { ...data, initialData: [...formik.values.inputsData] };
    newProtocol[protocol_id] = protocol_id;
    setSavedProtocols([...savedProtocols, newProtocol]);
    setExchageItems([]);
    if (data.methodName === "flashLoan") {
      let protocolData = formik.values.inputsData[0];

      const drainTokenResult = drainToken([], [], []);
      const encodedAbi = abiCoder.encode(
        ["address[]", "bytes32[]", "bytes[]"],
        [
          [addresses.hMock],
          [formatBytes32String("")],
          [drainTokenResult as BytesLike],
        ]
      );
      console.log({ drainTokenResult, encodedAbi });

      // delete protocolData["token"];
      // delete protocolData["amount"];
      // delete protocolData["showTokens"];

      const encoded = encoder(addresses.haaveAddress, data.methodName, [
        [getTokenAddress(data, chain?.id, 0, formik)],
        [parseEther("10")],
        [parseEther("0")],
        encodedAbi as BytesLike,
      ]);
      console.log({ encoded }, "finalEncodedData data ...");

      execMock(addresses.haaveAddress, encoded);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  // Token Toggle Handler
  const handleTokensToggle = (index: number) => {
    formik.setFieldValue(
      `inputsData.${index}.showTokens`,
      !formik.values.inputsData[index].showTokens
    );
  };

  const { totalData, loading, error } = UseApy(
    formik.values.inputsData[0].token,
    formik.values.inputsData[0].rateMode?.toNumber()
  );

  const { ltvData } = GetLtv(data?.ltv[chain?.id.toString() as string]);

  if (chain?.id) {
    for (
      let i = 0;
      i <
      data?.data?.function_configs?.inputs[chain?.id.toString() as string]
        .length;
      i++
    ) {
      formik.initialValues.inputsData.push(...data?.initialData);
    }
  }

  // console.log({ totalData, ltvData });
  useEffect(() => {
    if (!loading && chain?.id) {
      const finalArray: any = [];
      const objectArray = Object.entries(totalData);

      objectArray.forEach(([key, value]) => {
        finalArray.push({ name: key, value });
      });
      finalArray.push(...ltvData);
      const finalData = data?.attributes?.map(
        (obj: { name: string; value: any }) => {
          const { name } = obj;
          var result: any = finalArray.find((item: any) => item.name === name);
          return {
            ...obj,
            value: result?.value,
          };
        }
      );
    }
  }, [data, formik.values.inputsData[0].token, loading]);

  const repayHandler = () => {
    formik.values.inputsData[0].onBehalfOf = address;
    return null;
  };
  useEffect(() => {
    if (formik.values.inputsData[0].onBehalfOf) repayHandler();
  }, []);

  const {
    encodeData,
    setEncodeData,
    savedProtocols,
    setSavedProtocols,
    setExchageItems,
    addCubeModal,
    exchangeItems,
  } = useContext(ExchangerContext);

  return (
    <FormikProvider value={formik}>
      <Form>
        <AddProtocolStyled className="position-relative">
          <FaArrowAltCircleLeft
            onClick={() => {
              setExchageItems([]);
              setAddCubeModal(true);
            }}
            className="back-icon"
            fontSize={26}
          />
          <div className="d-flex justify-content-center">
            <h6 className="text-center">
              <FaCannabis fontSize={20} className="vertical-align-top" />
              <span className="ms-2 fs-4"> Aave V2</span>
            </h6>
          </div>
          <div className="d-flex justify-content-center">
            <button className="method-btn w-100 mt-3 fs-6">{data.name}</button>
          </div>

          <FieldArray name="tickets">
            {() =>
              data?.initialData?.map(
                ({ rateMode, onBehalfOf, modes }: any, index: number) => {
                  return (
                    <div key={index} className="input-section mt-3">
                      {onBehalfOf && (
                        <div className="mt-2">
                          <label htmlFor="address">Address</label>
                          <input
                            type="text"
                            value={formik.values.inputsData[index].onBehalfOf}
                            id="address"
                            onChange={(event) =>
                              formik.setFieldValue(
                                `inputsData.${index}.onBehalfOf`,
                                event.target.value
                              )
                            }
                            placeholder="ENS or Address"
                            className="w-100 mt-2 meta-address"
                          />
                        </div>
                      )}
                      <Row className="align-items-center">
                        <Col md={4}>
                          <p className="input">input</p>
                          <div className="d-flex align-items-center mb-2">
                            <h6 className="position-relative">
                              <span className="me-2">
                                <Icon
                                  icon={
                                    data?.function_configs.tokens[
                                      chain?.id as number
                                    ]?.find(
                                      ({ symbol }: any) =>
                                        symbol ===
                                        formik.values.inputsData[index].token
                                    )?.icon
                                  }
                                  width="24"
                                  height="24"
                                  color="white"
                                />
                              </span>
                              {formik.values.inputsData[index].token}
                              <span>
                                <FaCaretDown
                                  className="more-icon"
                                  fontSize={14}
                                  onClick={() => {
                                    handleTokensToggle(index);
                                  }}
                                />
                              </span>
                            </h6>
                          </div>
                          <div
                            className={`position-absolute ${
                              formik.values.inputsData[index].showTokens
                                ? "d-block"
                                : "d-none"
                            }`}
                          >
                            <SelectToken
                              showTokens={
                                formik.values.inputsData[index].showTokens
                              }
                              tokens={
                                data?.function_configs.tokens[
                                  chain?.id as number
                                ]
                              }
                              index={index}
                              name={`inputsData.${index}.token`}
                              formik={formik}
                              handleTokensToggle={handleTokensToggle}
                            />
                          </div>
                          <span
                            className={`input-text ${
                              data?.hasOwnProperty("isFlashloan")
                                ? "d-none"
                                : "d-block"
                            }`}
                          >
                            <FaArrowDown />
                          </span>
                        </Col>
                        <Col md={8}>
                          <InputField
                            name={`inputsData.${index}.amount`}
                            type="number"
                            placeholder="Amount"
                          />

                          <div className="d-flex justify-content-end mt-4">
                            <GetBalance
                              token={
                                data?.function_configs.tokens[
                                  chain?.id as number
                                ]?.find(
                                  ({ symbol }: any) =>
                                    symbol ===
                                    formik.values.inputsData[index].token
                                )?.address
                              }
                              decimal={getTokenDecimals(
                                data,
                                chain?.id,
                                0,
                                formik
                              )}
                            />
                            <button className="max-btn" type="button">
                              Max
                            </button>
                          </div>
                          {rateMode && (
                            <RateModeStyled>
                              <Switch
                                autoFocus={true}
                                checkedChildren="Variable"
                                onChange={(value) =>
                                  formik.setFieldValue(
                                    `inputsData.${index}.rateMode`,
                                    BigNumber.from(+value + 1)
                                  )
                                }
                                defaultChecked
                                unCheckedChildren="Stable"
                              />
                            </RateModeStyled>
                          )}
                        </Col>
                      </Row>
                      {!rateMode && !modes && (
                        <div className="output-section mt-3">
                          <Row className="align-items-center">
                            <Col md={4}>
                              <p className="input">Output</p>
                              <div className="d-flex align-items-center">
                                <h6>
                                  <span className="me-2">
                                    <Icon
                                      icon={
                                        data?.function_configs?.tokens[
                                          chain?.id.toString() as string
                                        ]?.find(
                                          (tokenData: any) =>
                                            tokenData.symbol ===
                                            formik.values.inputsData[0].token
                                        ).icon
                                      }
                                      width="24"
                                      height="24"
                                      color="white"
                                    />
                                  </span>
                                  {getATokenSymbol(data, chain?.id, formik)}
                                </h6>
                              </div>
                            </Col>
                            <Col md={8}>
                              <div className="d-flex justify-content-end mt-4">
                                <h6>{formik.values.inputsData[0].amount}</h6>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      )}

                      <div className="bottom-section mt-2">
                        {data?.attributes?.map(
                          ({ name, value }: any, index: number) => (
                            <div
                              key={index}
                              className="d-flex justify-content-between align-items-center"
                            >
                              <p className="fs-6 mb-0 mt-">{name}</p>
                              <p className="fs-6 mb-0 mt-1">
                                {loading ? (
                                  <Spin indicator={antIcon} />
                                ) : error ? (
                                  "N/A"
                                ) : (
                                  value + "%"
                                )}{" "}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  );
                }
              )
            }
          </FieldArray>
          <button
            type="submit"
            className="set-btn w-100 mt-3 rounded py-2 fs-5 fw-bold text-light border-0"
          >
            Set
          </button>
        </AddProtocolStyled>
      </Form>
      <div className="icon-container">
        <FaPlus
          className={`plus-icon top-icon ${
            (exchangeItems.length || savedProtocols.length) && "d-none"
          }`}
          color="white"
          onClick={() => {
            setAddCubeModal(!addCubeModal);
          }}
          fontSize={26}
        />
        <div
          className={`bottom-icon ${
            exchangeItems.length || savedProtocols.length ? "d-flex" : "d-none"
          }`}
        >
          <FaBitbucket
            className="plus-icon "
            color="white"
            onClick={approveHandler}
            fontSize={26}
          />
          <FaPlus
            className="plus-icon ms-3"
            color="white"
            onClick={() => {
              setAddCubeModal(!addCubeModal);
              setExchageItems([]);
            }}
            fontSize={26}
          />
          <FaBehanceSquare
            className="plus-icon ms-3"
            color="white"
            onClick={executionHandler}
            fontSize={26}
          />
        </div>
      </div>
    </FormikProvider>
  );
};

export default AddProtocol;
