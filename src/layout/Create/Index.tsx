import { createContext, useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import Create from "../../components/Create/Index";
import { CreateLayoutStyled } from "./style";
import AddCube from "../../components/AddCube/Index";
import CubeBody from "../../components/AddCube/CubeBody";
import { Col, Container, Row } from "react-bootstrap";

import { Encode_Data } from "../../utils/types";
import SavedProtocols from "../../components/SavedProtocols/SavedProtocols";
import useProtocolContext from "../../hooks/useProtocolContext";

const Index = () => {
  const {
    encodeData,
    setEncodeData,
    savedProtocols,
    exchangeItems,
    setExchageItems,
    getExchangeBox,
    addCubeModal,
    setAddCubeModal,
  } = useProtocolContext();

  console.log({ savedProtocols });
  const dragItem = useRef<number>(0);
  const dragOverItem = useRef<number>(0);
  const messagesEndRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [exchangeItems]);

  // Drag Start
  const dragStart = (position: any) => {
    dragItem.current = position;
  };

  // In Dragging
  const dragEnter = (position: any) => {
    dragOverItem.current = position;
  };

  // Drop Dragged
  const drop = () => {
    const copyListItems = [...exchangeItems];
    const copyEncodeItems = [...encodeData];

    const dragItemContent = copyListItems[dragItem.current];
    const dragEncodeContent = copyEncodeItems[dragItem.current];

    copyListItems.splice(dragItem.current, 1);
    copyEncodeItems.splice(dragItem?.current, 1);

    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    copyEncodeItems.splice(dragOverItem.current, 0, dragEncodeContent);

    dragItem.current = 0;
    dragOverItem.current = 0;

    setExchageItems(copyListItems);
    setEncodeData(copyEncodeItems);
  };

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
                  onDragStart={() => dragStart(index)}
                  onDragEnter={() => dragEnter(index)}
                  onDragEnd={drop}
                  draggable
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
              </div>
            </Col>
          </Row>
        </Container>
        <AddCube addCubeModal={addCubeModal} setAddCubeModal={setAddCubeModal}>
          <CubeBody getExchangeBox={getExchangeBox} />
        </AddCube>
      </CreateLayoutStyled>
    </>
  );
};

export default Index;
