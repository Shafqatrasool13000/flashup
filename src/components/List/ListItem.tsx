import polygon from "../../assets/images/polygon.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { DraggableItemStyled } from "./style";
import { FaRegEdit } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";

type itemDataProp = {
  data: { methodName: string; price: number; quantity: number,exchanger:string };
};

const ListItem: React.FC<itemDataProp> = ({ data }) => {
  const { methodName, price, quantity,exchanger } = data;
  return (
    <Container>
      <DraggableItemStyled>
        <Row className="align-items-center">
          <Col md={4} className='d-flex justify-content-center'>
            <div className="left-img">
              <img src={polygon} alt="polygon" />
            </div>
          </Col>
          <Col md={8}>
            <Card>
              <Card.Body>
                <div className="d-flex align-items-center justify-content-between">
                  <button className="method-name">{methodName}</button>
                  <Card.Title>{exchanger}</Card.Title>
                  <div className="d-flex align-items-center justify-content-between">
                    <FaRegEdit className="icon" fontSize={25} />
                    <div className="ms-2">
                      <BsFillTrashFill className="icon" fontSize={25} />
                    </div>
                  </div>
                </div>
                <div className="card-text">
                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <h5>Price</h5>
                    <h4>{price}</h4>
                  </div>
                  <div className="quantity d-flex align-items-center justify-content-between mt-1">
                    <h5>Quantity</h5>
                    <h4>{quantity}</h4>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </DraggableItemStyled>
    </Container>
  );
};

export default ListItem;
