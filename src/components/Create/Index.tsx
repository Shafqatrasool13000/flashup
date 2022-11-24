import { Col, Row } from "react-bootstrap";
import { CreateStyled } from "./style";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { useState } from "react";


const Index: React.FC = () => {
  const [data, setData] = useState([1, 2]);

  return (
    <CreateStyled>
            <div className="list px-4">
              {data.map((title, index) => (
                <Row key={index} className="list-item mt-4">
                  <Col xs={6}>
                    <h6 className="title">
                      Balance Require
                      <span className="ms-3">
                        <BsFillQuestionCircleFill />
                      </span>
                    </h6>
                    <div className="chain d-flex align-items-center">
                      <FaEthereum />
                      <p className="token-name ms-2 mt-1">WBTC</p>
                      <p className="price ms-2">1.00201</p>
                    </div>
                    <div className="chain d-flex align-items-center">
                      <FaEthereum />
                      <p className="token-name ms-2 mt-1">WBTC</p>
                      <p className="price ms-2">1.00201</p>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <h6 className="title">
                      Wallet Balance
                      <span className="ms-3">
                        <BsFillQuestionCircleFill />
                      </span>
                    </h6>
                    <div className="chain d-flex align-items-center">
                      <FaEthereum />
                      <p className="token-name ms-2 mt-1">WBTC</p>
                      <p className="price ms-2">1.00201</p>
                    </div>
                    <div className="chain d-flex align-items-center">
                      <FaEthereum />
                      <p className="token-name ms-2 mt-1">WBTC</p>
                      <p className="price ms-2">1.00201</p>
                    </div>
                  </Col>
                  <div className="bottom-border" />
                </Row>
              ))}
            </div>
    </CreateStyled>
  );
};

export default Index;
