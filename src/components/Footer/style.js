import styled from 'styled-components';
import { greyColor1,greyColor4 } from '../Global';

export const FooterStyled=styled.div`
padding: 16px 0;
/* position: fixed; */
bottom: 0;
width: 100%;
border-top: 1px solid ${greyColor4};

.inner-container{
.social-icons{
img{
height: 22px;
:not(:first-child){
margin-left: 14px;
}
}
}
.copyright-text{
font-size: 16px;
color: ${greyColor1};
}
}
`