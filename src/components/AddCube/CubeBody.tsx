import { Col, Container, Row } from "react-bootstrap";
import HeadBar from "./HeadBar";
import { protocolsData } from "../../utils/ProtocolsData/ProtocolsData";
import { CubeBodyStyled } from "./style";
import useProtocolContext from "../../hooks/useProtocolContext";

const CubeBody: React.FC<any> = () => {
  const { toggleProtocoInputlBox, savedProtocols } = useProtocolContext();

  const isFlashLoanAvailable = (method: string) => {
    if (method === "flashLoan") {
      const flashLoanAvailable = savedProtocols.filter(
        ({ methodName }: any) => methodName === method
      );
      console.log({ flashLoanAvailable });
      return flashLoanAvailable.length > 0 ? true : false;
    }
    return false;
  };
  const flashLoanItems = () => {
    const flashLoanFirst = savedProtocols.findIndex(
      ({ methodName }: any) => methodName === "flashLoan"
    );
    const flashLoanLast = savedProtocols.findLastIndex(
      ({ methodName }: any) => methodName === "flashLoan"
    );
    console.log(
      savedProtocols.filter(
        (_: any, index: number) =>
          index > flashLoanFirst && index < flashLoanLast
      ),
      "flashLoan Items"
    );
  };
  flashLoanItems();

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
                      disabled={isFlashLoanAvailable(data.methodName)}
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
