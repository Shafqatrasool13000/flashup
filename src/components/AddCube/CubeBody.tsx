import { Col, Container, Row } from "react-bootstrap";
import HeadBar from "./HeadBar";
import { protocolsData } from "../../utils/ProtocolsData/ProtocolsData";
import { CubeBodyStyled } from "./style";
import useProtocolContext from "../../hooks/useProtocolContext";

const CubeBody: React.FC<any> = () => {
  const { toggleProtocoInputlBox } = useProtocolContext();

  return (
    <CubeBodyStyled>
      <Container>
        <h6 className="title text-center fs-4">New Cube</h6>
        <div className="exchangers">
          {protocolsData.map(({ title, exchanger }: any, index: number) => (
            <div key={index}>
              <HeadBar title={title} />
              <Row key={index} className="method">
                {exchanger.map((data: any, index: number) => (
                  <Col key={index} sm={6} md={3}>
                    <button
                      onClick={() => toggleProtocoInputlBox(data)}
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
