import { HowItWorksStyled } from "./style";
import heroImg from "../../assets/images/heroImg.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { BsFlower2,BsFillShieldSlashFill,BsStarFill } from "react-icons/bs";

const Index = () => {
  const stepsData = [
    {
      title: "Arbitrage opportunities",
      subtitle:
        "You don't have to find opportunities by visiting different DeFi protocols",
      Icon: BsFillShieldSlashFill,
    },
    {
      title: "Curated Strategies ",
      subtitle:
        "Mostly used and profitable opportunities will be there for others to get benefit from them.",
      Icon: BsFlower2,
    },
    {
      title: "No Coding",
      subtitle: "No coding is required for complex flash loans ",
      Icon: BsStarFill,
    },
  ];
  return (
    <HowItWorksStyled>
      <Container>
        <Row>
          <Col md={6}>
            <div className="left-side">
              <img className="left-side-img" src={heroImg} alt="left-img" />
            </div>
          </Col>
          <Col md={6}>
            <div className="right-side mt-3 mt-md-0">
              <h5 className="right-side-title">How It works</h5>
              <p className="right-side-subtitle mt-3">
                Find Arbitrage opportunity, Arrange opportunities and execute
                them
              </p>
              <div className="right-side-work-steps mt-5">
                {stepsData.map(({ title, subtitle, Icon }, index) => (
                  <div key={index} className="step d-flex align-items-center">
                   <Icon fontSize={40} className='mb-2'/>
                    <div className="ms-3">
                      <h6 className="step-title">{title}</h6>
                      <p className="step-subtitle">{subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </HowItWorksStyled>
  );
};

export default Index;
