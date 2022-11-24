import Container from "react-bootstrap/Container";
import { BenefitsStyled } from "./style";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import { BsFillBarChartFill,BsFillCheckSquareFill,BsCreditCard2FrontFill } from "react-icons/bs";

const Index = () => {
  const benefitsData = [
    {
      Img: BsFillBarChartFill,
      title: "FlashLoan Execution",
      subtitle:
        "Build arbitrage strategies by monitoring opportunities you find most profitable in different DeFi protocols.",
    },
    {
      Img: BsFillCheckSquareFill,
      title: "Arbitrage Strategies",
      subtitle:
        "Look for arbitrage opportunities in different DeFi protocols for borrow, lend and exchange crypto assets.",
    },
    {
      Img: BsCreditCard2FrontFill,
      title: "Arbitrage Opportunities ",
      subtitle:
        "After creating and arranging different arbitraging opportunities, just execute the Flash Loans.",
    },
  ];
  return (
    <BenefitsStyled>
      <Container>
        <Row className="justify-content-center">
          {benefitsData.map(({ Img, title, subtitle }, index) => (
            <Col sm={6} md={4} key={index}>
              <Card className="text-center">
              <Img fontSize={30} className="card-img-top"/>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{subtitle}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </BenefitsStyled>
  );
};

export default Index;
