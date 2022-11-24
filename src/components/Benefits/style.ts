import styled from 'styled-components';
import { greyColor, primaryColor } from '../Global';

export const BenefitsStyled = styled.div`
padding: 80px 0;
border-bottom: 1px solid rgba(0, 0, 0, 0.1);

.card{
border: none;
 &-title{
font-weight: 700;
font-size: 16px;
color: ${primaryColor};
 }  
 &-text{
color: ${greyColor};
font-size: 14px;
width: 50%;
margin: 0 auto;
padding-top: 8px;

@media screen and (max-width: 768px) {
width: 90%;   
}
@media screen and (max-width: 480px) {
width: 80%;   
}
 } 
}
`