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
import { useEncode } from '../../hooks/useEncode';
import { useExecMock } from '../../hooks/useExecMock';

const CreateProtocolLayout = () => {
  const abiCoder = new AbiCoder();
  const bytesEncoder = useEncode();
  const execMock = useExecMock();

  const ProtocolAddresses: any = {
    Aave: contractsAddress.haaveAddress,
    Compound: contractsAddress.haaveAddress
  };

  const {
    savedProtocols,
    exchangeItems,
    addCubeModal,
    setAddCubeModal,
    flashLoanItems,
    setExchageItems
  } = useProtocolContext();
  console.log({ flashLoanItems });
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
        flashLoanItems.map(({ protocolName }: any) => ProtocolAddresses[protocolName]),
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
                <Component data={data} />
              </div>
            ))}
            <div className="icon-container">
              <FaPlus
                className={`action-icon top-icon ${
                  (exchangeItems.length || savedProtocols.length) && 'd-none'
                }`}
                color="white"
                onClick={() => {
                  setAddCubeModal(!addCubeModal);
                }}
                fontSize={20}
              />
              <div
                onClick={() => flashLoanSubmit()}
                className={`action-icon execute-icon ${
                  !flashLoanItems.length ? 'd-none' : 'd-block'
                }`}>
                <FaExchangeAlt color="white" fontSize={20} />
              </div>
              <div
                className="action-icon plus-icon"
                onClick={() => {
                  setAddCubeModal(!addCubeModal);
                }}>
                <FaPlus color="white" fontSize={26} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <AddCube>
        <CubeBody />
      </AddCube>
    </CreateProtocolLayoutStyle>
  );
};

export default CreateProtocolLayout;
