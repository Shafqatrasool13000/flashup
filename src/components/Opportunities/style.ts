import styled from "styled-components";
import { secondaryDark } from "../Global";

export const OpportunitiesStyled=styled.div`
margin-top: 10px;
margin: 0 auto;

.title{
font-size: 26px;
}

.table-container{
background-color: ${secondaryDark};
border-radius: 12px;

.table{

color: #ffffff;
margin-top: 12px;

.name{
font-size: 10px;
padding: 0.8rem 0.5rem;
}

th{
border: none;

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
}

`