import { Container } from "react-bootstrap"
import { ShowCaseStyled } from "./style";
import { BsPlayCircleFill } from "react-icons/bs";


const Index = () => {
  return (
    <ShowCaseStyled>
      <Container>
        <div className="inner-container text-center">
       <BsPlayCircleFill fontSize={44}/>
        <h6 className="watch-text">WATCH VIDEO</h6>
        <h5 className="title">Unlock the Potential</h5>
        <p className="subtitle">Introduce your video by telling your visitors how they'll benefit by watching this short clip. Provide a brief summary of the content, and describe the video's main take-aways for prospective customers.</p>
        </div>
      </Container>
    </ShowCaseStyled>
  )
}

export default Index