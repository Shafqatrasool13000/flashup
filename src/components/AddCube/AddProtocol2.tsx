import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaArrowAltCircleLeft,
  FaArrowDown,
  FaArrowUp,
  FaCannabis,
  FaCaretDown,
  FaEthereum
} from "react-icons/fa";
import { AddProtocol2Styled } from "./style";

const AddProtocol2 = ({ name = null }: any) => {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  return (
    <AddProtocol2Styled>
      <FaArrowAltCircleLeft className="back-icon" fontSize={26} />
      <div className="d-flex justify-content-center">
        <h6 className="text-center">
          <FaCannabis fontSize={20} className="vertical-align-top" />
          <span className="ms-2 fs-4">Uniswap V2</span>
        </h6>
      </div>
      <div className="d-flex justify-content-center">
        <button className="method-btn w-100 mt-3 fs-6">Swap Token</button>
      </div>
      <div className="input-section mt-3">
        <Row className="align-items-center">
          <Col md={4}>
            <p className="input fs-5">Input</p>
            <div className="d-flex align-items-center">
              <h6>
                <span className="me-2">
                  <FaEthereum fontSize={22} />
                </span>
                ETH
                <span>
                  <FaCaretDown className="more-icon" fontSize={14} />
                </span>
              </h6>
            </div>
            <span className="d-flex">
              <FaArrowDown />
              <FaArrowUp />
            </span>
          </Col>
          <Col md={8}>
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-100"
            />
            <div className="d-flex justify-content-end mt-4">
              <button className="max-btn">Max</button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="output-section mt-3">
        <Row className="align-items-center">
          <Col md={4}>
            <p className="input fs-5">Output</p>
            <div className="d-flex align-items-center">
              <h6>
                <span className="me-2">
                  <FaEthereum fontSize={22} />
                </span>
                BAT
                <span>
                  <FaCaretDown className="more-icon" fontSize={14} />
                </span>
              </h6>
            </div>
          </Col>
          <Col md={8}>
            <input type="number" placeholder="Amount" className="w-100" />
          </Col>
        </Row>
      </div>
      <div className="bottom-section mt-2">
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0 mt-1">Unit Price</p>
          <p className="mb-0 mt-1">1 ETH = 4213.1448 BAT ($1,300.72)</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0 mt-1">Price Impact</p>
          <p className="mb-0 mt-1">- %</p>
        </div>
      </div>
      <button className="set-btn w-100 mt-3 rounded py-2 fs-5 fw-bold text-light border-0">
        Set
      </button>
    </AddProtocol2Styled>
  );
};

export default AddProtocol2;
