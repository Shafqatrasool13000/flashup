import styled from 'styled-components';
import { greyColor, primaryColor } from '../Global';

export const ShowCaseStyled=styled.div`
border-bottom: 1px solid rgba(0, 0, 0, 0.1);
padding: 40px 0;
.inner-container{
padding: 70px 0;
background-color: rgba(121, 141, 163, 0.2);
.watch-text{
margin-top: 14px;
font-family: 'OpenSansBold';
font-size: 13px;
color: ${primaryColor};

}
.title{
margin-top: 14px;
color: ${primaryColor};
font-size: 24px;
font-family: 'OpenSansBold';
}
.subtitle{
width: 30%;
margin-top: 14px;
font-size: 13px;
font-family: 'OpenSans';
color: ${greyColor};
margin: 0 auto;
@media screen and (max-width: 768px) {
width: 80%;   
}
@media screen and (max-width: 480px) {
width: 90%;   
}
}
}


`