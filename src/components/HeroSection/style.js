import styled from 'styled-components';
import { greyColor, primaryColor, secondaryDark } from '../Global';

export const HeroSectionStyled=styled.div`
 margin-top:60px;
 border-bottom: 1px solid rgba(0, 0, 0, 0.1);
 padding-bottom: 10px;
.left-side{
&-title{
font-weight: 700;
font-size: 30px;
color: ${primaryColor};
letter-spacing: 1px;
}
&-subtitle{
margin-top: 14px;
color: ${greyColor};
font-size: 13px;
}
&-btn{
margin-top: 14px;
background-color: ${secondaryDark};
font-size: 16px;
border-radius: 3px;
padding: 5px 26px;
color: white;

@media screen and (min-width:768px){
margin-right: 80px;
}

}
}
.right-side{
&-img{
border-radius: 10px;
height: 260px;
}
}
`