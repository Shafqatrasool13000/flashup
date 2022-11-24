import styled from "styled-components";
import { greyColor2, greyColor3, primaryColor, secondaryDark } from "../Global";

export const StrategyStyled=styled.div`

color: #ffffff;
margin: 0 auto;

.search-bar{
position: relative;
input{
border-radius: 10px;
padding: 4px 0;
width: 40%;
margin:  0 auto;
border: 1px solid ${greyColor2};
background: transparent;
padding-left: 5%;
&::placeholder{
color: ${greyColor3};
}
}
.icon{
position: absolute;
left: 30%;
display: flex;
justify-content: center;
}

}

.table-container{
background-color: ${primaryColor};
border-radius: 12px;
height: 64vh;
margin-top: 14px;
}
.table{
margin-top: 14px;
    th{
border: none;

}

.strategy-section{

.table-index{
font-size: 18px;
}

.method-btn{
background-color: ${secondaryDark};
color: #ffffff;
font-size: 12px;
border-radius: 7px;
padding: 4px 16px;
margin: 0;
height: 30px;
}
.title{
font-size: 16px;
margin-bottom: 0;
}

.description{
font-size: 14px;
}
}

td{
border: none;
color: white !important;
}

tr{
border: none;
color: white !important;
}
}


`