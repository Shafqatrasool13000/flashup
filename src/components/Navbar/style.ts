import styled from 'styled-components';
import { primaryColor } from '../Global';

export const NavbarStyled = styled.div`
.navbar{
border-bottom: 1px solid rgba(0, 0, 0, 0.1);
padding-bottom: 14px;
background-color: unset !important;
.nav-link{
color: ${primaryColor} !important;
font-weight: 700;
@media screen and (min-width:992px) {
&:not(:first-child){
margin-left: 100px;
}
}
}

.connect-btn{
background-color: ${primaryColor};
font-size: 14px;
border-radius: 3px;
padding: 5px 26px;
color: white;
}
}
`