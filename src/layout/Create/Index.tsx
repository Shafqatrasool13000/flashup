import { useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import Create from "../../components/Create/Index";
import { CreateLayoutStyled } from "./style";
import AddCube from "../../components/AddCube/Index";
import CubeBody from "../../components/AddCube/CubeBody";
import { Col, Container, Row } from "react-bootstrap";
import SavedProtocols from "../../components/SavedProtocols/SavedProtocols";
import useProtocolContext from "../../hooks/useProtocolContext";

const Index = () => {
  const { savedProtocols, exchangeItems, addCubeModal, setAddCubeModal } =
    useProtocolContext();

  console.log({ savedProtocols });
  const messagesEndRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [exchangeItems]);

  return (
    <>
      <CreateLayoutStyled>
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
                    cursor: "pointer",
                  }}
                  ref={messagesEndRef}
                >
                  <Component data={data} setAddCubeModal={setAddCubeModal} />
                </div>
              ))}
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
                    exchangeItems.length || savedProtocols.length
                      ? "d-flex"
                      : "d-none"
                  }`}
                ></div>
                <FaPlus
                  className={`plus-icon bottom-icon ${
                    savedProtocols.length ? "d-block" : "d-none"
                  }`}
                  color="white"
                  onClick={() => {
                    setAddCubeModal(!addCubeModal);
                  }}
                  fontSize={26}
                />
              </div>
            </Col>
          </Row>
        </Container>
        <AddCube addCubeModal={addCubeModal} setAddCubeModal={setAddCubeModal}>
          <CubeBody />
        </AddCube>
      </CreateLayoutStyled>
    </>
  );
};

export default Index;
