import styled from 'styled-components';
import { greyColor1, primaryColor } from '../Global';

export const HowItWorksStyled = styled.div`

padding: 50px 0 80px 0;
.left-side{
&-img{
height: 460px;
border-radius: 3px;
}
} 
.right-side{
 &-title{
font-size: 24px;
color: ${primaryColor};
font-weight: 700;

 }  
 &-subtitle{
font-size: 14px;
color: ${greyColor1};
 } 
&-work-steps{
.step{
    margin-top: 12px;
&-title{
font-size: 16px;
font-weight: 700;
color: ${primaryColor};
}
&-subtitle{
font-size: 14px;
color: ${greyColor1};
}
} 
 }
  
}
`