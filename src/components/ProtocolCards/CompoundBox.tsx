import { useEffect, useId, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  FaArrowAltCircleLeft,
  FaArrowDown,
  // FaBehanceSquare,
  // FaBitbucket,
  // FaBullseye,
  FaCannabis,
  FaCaretDown,
  FaPlus
} from 'react-icons/fa';
import { useExecMock } from '../../hooks/useExecMock';
import SelectToken from '../SelectToken/SelectToken';
import { Spin, Switch } from 'antd';
import { Icon } from '@iconify/react';
import { useFormik, FormikProvider, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import InputField from '../InputField/InputField';
import { GetBalance } from './GetBalance/Index';
import GetLtv from '../../hooks/GetLtv';
import UseApy from '../../utils/graphql/useApy';
import { LoadingOutlined } from '@ant-design/icons';
import contractsAddress from '../../utils/contractsAddress';
import { useEncode } from '../../hooks/useEncode';
import { AddProtocolInitValues } from '../../utils/types';
import { toast } from 'react-toastify';
import useTransfer from '../../hooks/useTransfer';
import { getTokenAddress, getATokenSymbol, getTokenDecimals, getATokenAddress } from './functional';
import { parseUnits } from 'ethers/lib/utils';
import useProtocolContext from '../../hooks/useProtocolContext';
import CustomButton from '../Custom/CustomButton/CustomButton';
import { primaryColor } from '../Global';
import AddProtocolStyled from './style';
import useAllowance from '../../hooks/useAllowance';
import useIDSProxyRegistry from '../../hooks/useIDSProxyRegistry';
import CustomModal from '../Custom/Modal/CustomModal';
import CheckUserProxy from '../Custom/CheckUserProxy/Index';
import { dsGuardFactory, idsProxyFactory } from '../../contracts_factories/Compound';
import useSigner from '../../hooks/useSigner';
import erc20Factory from '../../contracts_factories/common';
import { Item } from 'react-bootstrap/lib/Breadcrumb';

const CompoundBox = ({ data, setAddCubeModal }: any) => {
  const protocol_id = useId();
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const [isUserProxyModal, setIsUserProxyModal] = useState(false);
  // Hooks
  const encoder = useEncode();
  const execMock = useExecMock();
  const transfer = useTransfer();
  const allowance = useAllowance();
  const idsProxyRegistry = useIDSProxyRegistry();
  const signer = useSigner();

  // Build for user-proxy
  const handleUserProxy = async () => await idsProxyRegistry(userAddress, setIsUserProxyModal);

  const {
    userAddress,
    chainId,
    savedProtocols,
    setSavedProtocols,
    setExchageItems,
    addCubeModal,
    exchangeItems
  } = useProtocolContext();

  // Erc20
  const approveHander = async () => {
    if (signer !== undefined) {
      const erc20 = erc20Factory('0x0545a8eaF7ff6bB6F708CbB544EA55DBc2ad7b2a', signer);
      const tx = await erc20.approve(await handleUserProxy(), parseUnits('1000000', 8));
      console.log({ tx });
    }
  };

  // Initial Values
  const initialValues: any = chainId && data?.initialData;

  // formik validation
  const validationSchema = Yup.object({
    tokensData: Yup.array().of(
      Yup.object().shape({
        amount: Yup.string().required('toke amount is required')
      })
    )
  });

  // Formik Hanlder
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  // Execution Switcher
  const executionSwitcher = (methodName: string) => {
    switch (methodName) {
      case 'withdraw':
        return getATokenAddress(data, chainId, formik);
      default:
        return null;
    }
  };

  // transfer Switch
  const transferSwitch = async (methodName: string) => {
    const userProxy = await handleUserProxy();
    switch (methodName) {
      case 'deposit':
        return contractsAddress.proxyMockAddress;
      case 'withdraw':
        return userProxy;
      default:
        return contractsAddress.proxyMockAddress;
    }
  };

  // Transfer Handler
  const transferHandler = async () => {
    if (Object.keys(formik.errors).length !== 0) {
      (() => toast('plz fill all fields'))();
      return;
    }
    const result = await transfer(
      getTokenAddress(data, chainId, 0, formik),
      await transferSwitch(data.methodName),
      parseUnits(
        formik.values.tokensData[0].amount.toString(),
        getTokenDecimals(data, chainId, 0, formik)
      )
    );
    return result;
  };

  // Submit Handler
  async function onSubmit() {
    const encodeData = await executionHandler();
    console.log({ data }, 'data in onsubmit in compound');
    const newProtocol = { ...data, initialData: formik.values.tokensData[0] };
    newProtocol[protocol_id] = protocol_id;
    var encoded = encoder(contractsAddress.hsCompondAddress, data.methodName, [
      await handleUserProxy(),
      getTokenAddress(data, chainId, 0, formik)
    ]);
    newProtocol['encodeData'] = encodeData;
    setSavedProtocols((prevSavedData: any) => [...prevSavedData, newProtocol]);
    // execMock(
    //   contractsAddress.hsCompondAddress,
    //   encoded,
    //   formik.values.tokensData[0].amount
    // );
    setExchageItems([]);
  }

  // Set Authority by user
  const handleSetAuthority = async () => {
    if (signer !== undefined) {
      const userProxy = await handleUserProxy();
      const dsGuardContract = dsGuardFactory(signer);
      const idsProxyContract = idsProxyFactory(userProxy, signer);
      await dsGuardContract.callStatic.newGuard(true, contractsAddress.proxyMockAddress, userProxy);
      const guardAddr = await dsGuardContract.callStatic.guards(userAddress);
      await idsProxyContract.setAuthority(guardAddr);
      console.log({ guardAddr }, 'guard Address');
    }
  };

  // Execution Handlerasync
  async function executionHandler() {
    const userProxy = await handleUserProxy();
    const tokensData = formik.values.tokensData
      .map((_: any, index: number) =>
        Object.values({
          token: getTokenAddress(data, chainId, index, formik),
          amount: parseUnits(
            formik.values.tokensData[index].amount.toString(),
            getTokenDecimals(data, chainId, index, formik)
          )
        })
      )
      .flat();
    const addresess = tokensData.filter((item: any) => typeof item === 'string');
    const amounts = tokensData.filter((item: any) => typeof item !== 'string');
    const protocolData = [userProxy, ...addresess, ...amounts];
    if (data.methodName == 'repay' || data.methodName == 'borrow') {
      protocolData.push(false);
    }
    console.log(
      protocolData.filter((item) => typeof item !== 'string'),
      'zeroth'
    );
    console.log({ protocolData });
    var encoded = encoder(contractsAddress.hsCompondAddress, data.methodName, protocolData);
    return encoded;
    // execMock(contractsAddress.hsCompondAddress, encoded);
  }

  // Token Toggle Handler
  const handleTokensToggle = (index: number) => {
    console.log({ index }, 'index of token toggler', formik.values.tokensData[index].showTokens);
    formik.setFieldValue(
      `tokensData.${index}.showTokens`,
      !formik.values.tokensData[index].showTokens
    );
  };

  const { totalData, loading, error } = UseApy(formik.values.tokensData[0].token, 1);

  const { ltvData } = GetLtv(data?.ltv[chainId]);

  if (chainId) {
    for (let i = 0; i < data?.data?.function_configs?.inputs[chainId].length; i++) {
      formik.initialValues.push(...data?.initialData);
    }
  }
  console.log(formik.values, 'formik values');
  // console.log({ totalData, ltvData });
  useEffect(() => {
    if (!loading && chainId) {
      const finalArray: any = [];
      const objectArray = Object.entries(totalData);

      objectArray.forEach(([key, value]) => {
        finalArray.push({ name: key, value });
      });
      finalArray.push(...ltvData);
      const finalData = data?.attributes?.map((obj: { name: string; value: any }) => {
        const { name } = obj;
        var result: any = finalArray.find((item: any) => item.name === name);
        return {
          ...obj,
          value: result?.value
        };
      });
    }
  }, [data, formik.values.tokensData[0].token, loading]);

  console.log('formik Values', formik.values);

  useEffect(() => {
    allowance('0x75Ab5AB1Eef154C0352Fc31D2428Cef80C7F8B33');
  }, [formik.values]);

  // console.log(getAllowance(), "allowance in add protocol");

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
          <CustomModal
            isModalVisible={isUserProxyModal}
            setIsModalVisible={setIsUserProxyModal}
            centered={false}>
            <CheckUserProxy />
          </CustomModal>
          <div className="d-flex justify-content-center">
            <h6 className="text-center">
              <FaCannabis fontSize={20} className="vertical-align-top" />
              <span className="ms-2 fs-4">{data.protocolName}</span>
            </h6>
          </div>
          <div className="d-flex justify-content-center">
            <button className="method-btn w-100 mt-3 fs-6">{data.name}</button>
          </div>
          <div className="input-section mt-3">
            <FieldArray name="tickets">
              {() =>
                formik?.values?.tokensData.map(({ title }: any, index: number) => (
                  <Row key={index} className="align-items-center">
                    <Col md={4}>
                      <div className="mt-2">
                        <p className="text-label">{title}</p>
                        <div className="d-flex align-items-center mb-2">
                          <h6 className="position-relative">
                            <span className="me-2">
                              <Icon
                                icon={
                                  data?.function_configs.tokens[chainId]?.find(
                                    ({ symbol }: any) =>
                                      symbol === formik.values.tokensData[index].token
                                  )?.icon
                                }
                                width="24"
                                height="24"
                                color="white"
                              />
                            </span>
                            {formik.values.tokensData[index].token}
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
                            formik.values.tokensData[index].showTokens ? 'd-block' : 'd-none'
                          }`}>
                          <SelectToken
                            showTokens={formik.values.tokensData[index].showTokens}
                            tokens={data?.function_configs.tokens[chainId]}
                            index={index}
                            name={`tokensData.${index}.token`}
                            formik={formik}
                            handleTokensToggle={handleTokensToggle}
                          />
                        </div>
                        <span
                          className={`input-text ${
                            data?.hasOwnProperty('isFlashloan') ? 'd-none' : 'd-block'
                          }`}>
                          <FaArrowDown />
                        </span>
                      </div>
                    </Col>
                    <Col md={8}>
                      <InputField
                        name={`tokensData.${index}.amount`}
                        type="number"
                        placeholder="Amount"
                        textAlign="end"
                      />

                      <div className="d-flex justify-content-end mt-2">
                        <GetBalance
                          token={
                            data?.function_configs.tokens[chainId]?.find(
                              ({ symbol }: any) => symbol === formik.values.tokensData[index].token
                            )?.address
                          }
                          decimal={getTokenDecimals(data, chainId, index, formik)}
                        />
                        <button className="max-btn" type="button">
                          Max
                        </button>
                      </div>
                    </Col>
                  </Row>
                ))
              }
            </FieldArray>

            <div className="output-section mt-3">
              <Row className="align-items-center">
                <Col md={4}>
                  <p className="text-label">Output</p>
                  <div className="d-flex align-items-center">
                    <h6>
                      <span className="me-2">
                        {/* <Icon
                          icon={
                            data?.function_configs?.tokens[chainId]?.find(
                              (tokenData: any) =>
                                tokenData.symbol ===
                                formik.values.tokensData[0].token
                            ).icon
                          }
                          width="24"
                          height="24"
                          color="white"
                        /> */}
                      </span>
                      {/* {getATokenSymbol(data, chainId, formik)} */}
                    </h6>
                  </div>
                </Col>
                <Col md={8}>
                  <div className="d-flex justify-content-end mt-4">
                    {/* <h6>{formik.values.amount}</h6> */}
                  </div>
                </Col>
              </Row>
            </div>
            <div className="bottom-section mt-2">
              {data?.attributes?.map(({ name, value }: any, index: number) => (
                <div key={index} className="d-flex justify-content-between align-items-center">
                  <p className="fs-6 mb-0 mt-">{name}</p>
                  <p className="fs-6 mb-0 mt-1">
                    {loading ? <Spin indicator={antIcon} /> : error ? 'N/A' : value + '%'}{' '}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="set-btn w-100 mt-3 rounded py-2 fs-5 fw-bold text-light border-0">
            Set
          </button>
        </AddProtocolStyled>
      </Form>
      <div className="icon-container">
        <FaPlus
          className={`plus-icon top-icon ${
            (exchangeItems.length || savedProtocols.length) && 'd-none'
          }`}
          color="white"
          onClick={() => {
            setAddCubeModal(!addCubeModal);
          }}
          fontSize={26}
        />
        <div
          className={`bottom-icon ${
            exchangeItems.length || savedProtocols.length ? 'd-flex' : 'd-none'
          }`}>
          <div className="me-3">
            <CustomButton
              bgcolor={primaryColor}
              color="white"
              padding="8px 8px"
              width="60px"
              height="60px"
              type="submit"
              title="Build"
              fontSize="12px"
              borderRadius="50%"
              clicked={handleUserProxy}
            />
          </div>
          <div className="me-3">
            <CustomButton
              bgcolor={primaryColor}
              color="white"
              padding="8px 8px"
              width="60px"
              height="60px"
              type="submit"
              title="Transfer"
              fontSize="12px"
              borderRadius="50%"
              clicked={transferHandler}
            />
          </div>
          {/* <FaBitbucket
            className=""
            color="white"
            onClick={approveHandler}
            fontSize={26}
            title="Approve"
          /> */}

          <div className="">
            <CustomButton
              bgcolor={primaryColor}
              color="white"
              padding="8px 8px"
              width="60px"
              height="60px"
              type="submit"
              title="Add"
              fontSize="12px"
              borderRadius="50%"
              // disabled={
              // async()=> ( await allowance(
              //   getTokenAddress(data, chainId, 0, formik),
              //   userAddress,
              //   getTokenAddress(data, chainId, 0, formik)
              // ) > 0)
              //   ? true
              //   : false
              // }
              clicked={() => {
                setAddCubeModal(!addCubeModal);
                setExchageItems([]);
              }}
            />
          </div>
          {/* <FaPlus
            className="ms-3"
            color="white"
            onClick={() => {
              setAddCubeModal(!addCubeModal);
              setExchageItems([]);
            }}
            fontSize={26}
            title="Add"
          /> */}
          {/* <FaBehanceSquare
            className="ms-3"
            color="white"
            onClick={executionHandler}
            fontSize={26}
            title="Execute"
          /> */}
          <div className="ms-3">
            <CustomButton
              bgcolor={primaryColor}
              color="white"
              padding="8px 8px"
              width="60px"
              height="60px"
              type="submit"
              title="Execute"
              fontSize="12px"
              borderRadius="50%"
              clicked={executionHandler}
            />
          </div>
          <div className="ms-3">
            <CustomButton
              bgcolor={primaryColor}
              color="white"
              padding="8px 8px"
              width="60px"
              height="60px"
              type="submit"
              title="Authority"
              fontSize="12px"
              borderRadius="50%"
              clicked={handleSetAuthority}
            />
          </div>
        </div>
      </div>
    </FormikProvider>
  );
};

export default CompoundBox;
