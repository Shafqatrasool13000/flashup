import styled from "styled-components";
import { secondaryDark } from "../Global";

export const CreateStyled = styled.div`

margin-top: 24px;

.list{
background-color: ${secondaryDark};
color: #ffffff;
padding: 8px 14px 16px 14px;
border-radius: 7px;
margin: 0 auto;

&-item{

.title{
font-weight: 700;
}

.chain{
margin-top: 10px;
padding-bottom: 10px;
.token-name{
font-weight: 700;
font-size: 16px;
margin-bottom: 1px;
}
.price{
font-size: 14px;
margin-bottom: 0;
}
}
.bottom-border{
border-bottom: 1px solid white;
width: 94%;
margin: 0 auto;
}
}
}
`