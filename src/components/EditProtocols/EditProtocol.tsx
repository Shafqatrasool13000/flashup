import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaArrowAltCircleLeft,
  FaArrowDown,
  FaCannabis,
  FaCaretDown,
  FaEthereum,
} from "react-icons/fa";
import { useExecMock } from "../../hooks/useExecMock";
import SelectToken from "../SelectToken/SelectToken";
import { Icon } from "@iconify/react";
import { useFormik, FormikProvider, Form } from "formik";
import * as Yup from "yup";
import InputField from "../InputField/InputField";
import EditProtocolStyled from "./style";
import { useNetwork } from "wagmi";
import useProtocolContext from "../../hooks/useProtocolContext";

const EditProtocol = ({ data, setIsEdit, setEditData, setEditId }: any) => {
  console.log({ data }, "data in edit Handler");

  const [protocolData, setProtocolData] = useState<any>([]);
  const { chain } = useNetwork();

  console.log({ protocolData });

  interface initialValuesInterface {
    inputsData: { amount: string; token: string }[];
  }
  // Intial Values
  const initialValues: initialValuesInterface = {
    inputsData: [],
  };

  // console.log(
  //   {
  //     inputsData: data?.data?.function_configs?.inputs?.map(
  //       ({ token, amount }: any) => {
  //         return { token: token, amount: amount };
  //       }
  //     ),
  //   },
  //   "inital inputs values"
  // );
  const validationSchema = Yup.object({
    inputsData: Yup.array().of(
      Yup.object().shape({
        amount: Yup.string().required("amount is required"),
      })
    ),
  });

  // Token Toggle Handler
  const handleTokensToggle = (index: number) => {
    let data = {
      ...protocolData.data.function_configs.inputs[chain?.id as number],
    };
    data[index].showTokens = !data[index].showTokens;
    setProtocolData({
      ...protocolData,
      protocolData: {
        data: {
          function_configs: {
            inputs: { [chain?.id.toString() as string]: data },
          },
        },
      },
    });
  };

  useEffect(() => {
    setProtocolData(data);
  }, [data]);

  // const encoder = useEncode();
  // const methodName = data.name.toLowerCase();
  const { savedProtocols, setSavedProtocols } = useProtocolContext();

  const exactMock = useExecMock();

  const onSubmit = (event: any) => {
    const updatedData = {
      ...data,
      function_configs: {
        ...data.data.function_configs,
        inputs: {
          [chain?.id.toString() as string]: data.data.function_configs.inputs?.[
            chain?.id.toString() as string
          ].map((obj: any, index: any) => ({
            ...obj,
            token: formik.values.inputsData[index].token,
            amount: formik.values.inputsData[index].amount,
          })),
        },
      },
    };
    const editableDataIndex = savedProtocols.findIndex(
      (protocolData: any) => protocolData.protocol_id === data.protocol_id
    );
    const savedProtocolsData = savedProtocols.splice(editableDataIndex, 1, {
      protocol_id: data.protocol_id,
      data: updatedData,
      name: data.name,
    });
    console.log({ savedProtocolsData }, "protocols data");
    setSavedProtocols([...savedProtocols]);
    setIsEdit(false);
    setEditData({});
    setEditId();
  };

  // formik Handler

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  if (data !== null) {
    console.log(
      data?.data?.function_configs?.inputs[chain?.id as number].length,
      "data is not null"
    );
    for (
      let i = 0;
      i < data?.data?.function_configs?.inputs[chain?.id as number].length;
      i++
    ) {
      formik.initialValues.inputsData.push({
        amount:
          data?.data?.function_configs?.inputs[chain?.id as number][i].amount,
        token:
          data?.data?.function_configs?.inputs[chain?.id as number][i].token,
      });
    }
  }

  // Update Saved Protocols

  console.log(formik.values, "formik values.....");

  return (
    <FormikProvider value={formik}>
      <Form>
        <EditProtocolStyled className="position-relative">
          <FaArrowAltCircleLeft className="back-icon" fontSize={26} />
          <div className="d-flex justify-content-center">
            <h6 className="text-center">
              <FaCannabis fontSize={20} className="vertical-align-top" />
              <span className="ms-2 fs-4"> Aave V2</span>
            </h6>
          </div>
          <div className="d-flex justify-content-center">
            <button className="method-btn w-100 mt-3 fs-6">
              {data?.data?.name}
            </button>
          </div>
          {protocolData?.data?.function_configs?.inputs[
            chain?.id as number
          ]?.map(
            ({ token, amount, showTokens, tokenList }: any, index: number) => (
              <div key={index} className="input-section mt-3">
                <Row className="align-items-center">
                  <Col md={4}>
                    <p className="input">input</p>
                    <div className="d-flex align-items-center">
                      <h6 className="position-relative">
                        <span className="me-2">
                          <Icon
                            icon={
                              tokenList?.find(
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
                        showTokens ? "d-block" : "d-none"
                      }`}
                    >
                      <SelectToken
                        showTokens={showTokens}
                        tokens={tokenList}
                        index={index}
                        name={`inputsData.${index}.token`}
                        formik={formik}
                        handleTokensToggle={handleTokensToggle}
                      />
                    </div>
                    <span className="input-text">
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
                      <button className="max-btn">Max</button>
                    </div>
                  </Col>
                </Row>
              </div>
            )
          )}

          {
            <div
              className={`${
                protocolData?.data?.hasOwnProperty("isFlashloan")
                  ? "d-none"
                  : "d-block"
              }`}
            >
              <div className="output-section mt-3">
                <Row className="align-items-center">
                  <Col md={4}>
                    <p className="input">Output</p>
                    <div className="d-flex align-items-center">
                      <h6>
                        <span className="me-2">
                          <FaEthereum fontSize={22} />
                        </span>
                        aWETH
                      </h6>
                    </div>
                  </Col>
                  <Col md={8}>
                    <div className="d-flex justify-content-end mt-4">
                      <h6>0</h6>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="bottom-section mt-2">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="fs-6 mb-0 mt-">APY</p>
                  <p className="fs-6 mb-0 mt-1">1.03%</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="fs-6 mb-0 mt-1">Max LTV</p>
                  <p className="fs-6 mb-0 mt-1">82.5%</p>
                </div>
              </div>
            </div>
          }
          <button
            type="submit"
            className="set-btn w-100 mt-3 rounded py-2 fs-5 fw-bold text-light border-0"
          >
            Set
          </button>
        </EditProtocolStyled>
      </Form>
    </FormikProvider>
  );
};

export default EditProtocol;
