import { useEffect, useRef } from 'react';
import { FaExchangeAlt, FaPlus } from 'react-icons/fa';
import Create from '../../components/Create/Index';
import CreateProtocolLayoutStyle from './style';
import AddCube from '../../components/AddCube/Index';
import CubeBody from '../../components/AddCube/CubeBody';
import { Col, Container, Row } from 'react-bootstrap';
import SavedProtocols from '../../components/SavedProtocols/SavedProtocols';
import useProtocolContext from '../../hooks/useProtocolContext';
import contractsAddress from '../../utils/contractsAddress';
import { AbiCoder, BytesLike, formatBytes32String, parseUnits } from 'ethers/lib/utils';
// import {
//   getTokenAddress,
//   getTokenDecimals,
// } from "../../components/ProtocolCards/aaveFunctions";
import { BigNumber } from 'ethers';
import useDrainToken from '../../hooks/useDrainToken';
import { useEncode } from '../../hooks/useEncode';
import { useExecMock } from '../../hooks/useExecMock';

const CreateProtocolLayout = () => {
  const abiCoder = new AbiCoder();
  const drainToken = useDrainToken();
  const bytesEncoder = useEncode();
  const execMock = useExecMock();

  const { savedProtocols, exchangeItems, addCubeModal, setAddCubeModal, flashLoanItems } =
    useProtocolContext();

  console.log;
  function flashLoanSubmit() {
    // formik: any,
    console.log('flasloan submit');
    console.log(
      flashLoanItems.map(({ encodeData }: { encodeData: string }) => encodeData as BytesLike),
      'encoded abi data ...'
    );
    const encodedAbi = abiCoder.encode(
      ['address[]', 'bytes32[]', 'bytes[]'],
      [
        flashLoanItems.map(({ protocolName }: any) =>
          protocolName == 'Aave' ? contractsAddress.haaveAddress : contractsAddress.hsCompondAddress
        ),
        flashLoanItems.map((_: any) => formatBytes32String('')),
        flashLoanItems.map(({ encodeData }: { encodeData: string }) => encodeData as BytesLike)
      ]
    );

    console.log({ encodedAbi });
    const encoded = bytesEncoder(contractsAddress.haaveAddress, savedProtocols[0].methodName, [
      ['0x75Ab5AB1Eef154C0352Fc31D2428Cef80C7F8B33'],
      [parseUnits('1', 18)],
      // [getTokenAddress(savedProtocols[0], chainId, formik)],
      // [
      //   parseUnits(
      //     formik.values.amount.toString(),
      //     getTokenDecimals(savedProtocols[0], chainId, formik)
      //   ),
      // ],
      [BigNumber.from('0')],
      encodedAbi as BytesLike
    ]);
    console.log({ encoded }, 'finalEncodedData data ...');

    execMock(contractsAddress.haaveAddress, encoded);
  }

  console.log({ savedProtocols });
  const messagesEndRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [exchangeItems]);

  return (
    <CreateProtocolLayoutStyle>
      <Container>
        <Row>
          <Col md={6} className="mt-3">
            <Create />
          </Col>
          <Col md={6} className="right-0 mt-3 protocol-section">
            <SavedProtocols />
            {exchangeItems?.map(({ Component, data }: any, index: any) => (
              <div
                key={index}
                style={{
                  cursor: 'pointer'
                }}
                ref={messagesEndRef}>
                <Component data={data} setAddCubeModal={setAddCubeModal} />
              </div>
            ))}
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
                }`}
              />
              <div className="d-flex">
                <FaExchangeAlt
                  className={`plus-icon bottom-icon ${exchangeItems.length ? 'd-none' : 'd-block'}`}
                  color="white"
                  onClick={() => flashLoanSubmit()}
                  fontSize={26}
                />
                <FaPlus
                  className={`plus-icon bottom-icon ms-5 ${
                    savedProtocols.length && !exchangeItems.length ? 'd-block' : 'd-none'
                  }`}
                  color="white"
                  onClick={() => {
                    setAddCubeModal(!addCubeModal);
                  }}
                  fontSize={26}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <AddCube addCubeModal={addCubeModal} setAddCubeModal={setAddCubeModal}>
        <CubeBody />
      </AddCube>
    </CreateProtocolLayoutStyle>
  );
};

export default CreateProtocolLayout;
