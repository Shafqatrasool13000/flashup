import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadBar from "./HeadBar";
import { protocolsData } from "../../utils/ProtocolsData/ProtocolsData";
import { CubeBodyStyled } from "./style";
import { ExchangerContext } from "../../layout/Create/Index";

const CubeBody: React.FC<any> = () => {
  const { getExchangeBox } = useContext(ExchangerContext);
  return (
    <CubeBodyStyled>
      <Container>
        <h6 className="title">New Cube</h6>
        <div className="exchangers">
          {protocolsData.map(({ title, exchanger }, index) => (
            <div key={index}>
              <HeadBar title={title} />
              <Row key={index} className="method">
                {exchanger.map((data, index) => (
                  <Col key={index} sm={6} md={3}>
                    <button
                      onClick={() => getExchangeBox(data)}
                      key={index}
                      className="method-btn w-100 mt-3"
                    >
                      {data.name}
                    </button>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </div>
      </Container>
    </CubeBodyStyled>
  );
};

export default CubeBody;
