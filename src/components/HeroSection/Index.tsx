import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HeroSectionStyled } from "./style";
import heroImg from "../../assets/images/heroImg.jpg";
import Container from "react-bootstrap/Container";

const Index = () => {
  return (
    <HeroSectionStyled>
      <Container>
      <Row className="justify-content-center">
        <Col md={6} className="left-side d-flex flex-column align-items-center">
          <h4 className="left-side-title">
            Monitor Arbitrage <br /> Opportunities{" "}
          </h4>
          <p className="left-side-subtitle">
            Create, Run and Execute Community Tested Best <br /> Flash Loan
            Strategies
          </p>
          <button className="left-side-btn">Create Strategy</button>
          
        </Col>
        <Col md={6} className="right-side mt-3 mt-md-auto d-flex flex-column align-items-center">
          <img src={heroImg} alt="" className="right-side-img" />
        </Col>
      </Row>
      </Container>
    </HeroSectionStyled>
  );
};

export default Index;
