import { Container } from "react-bootstrap";
import linkedin from '../../assets/icons/ic_linkedin.svg';
import insatagram from '../../assets/icons/ic_instagram.svg';
import facebook from '../../assets/icons/ic_facebook.svg';
import { FooterStyled } from "./style";

const Index = () => {
  return (
    <FooterStyled>
      <Container>
      <div className="inner-container d-flex justify-content-between align-items-center">
         <div className="social-icons">
          <img src={facebook} alt="icon" />
          <img src={insatagram} alt="icon" />
          <img src={linkedin} alt="icon" />
         </div>
         <h6 className="logo mb-0">Logo</h6>
         <div className="copyright-text">
          <p className="mb-0">© Copyright 2022</p>
         </div>
      </div>
      </Container>
    </FooterStyled>
  )
}

export default Index