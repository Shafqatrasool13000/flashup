import styled from "styled-components";

export const InputFieldStyled = styled.div`

input{
text-align: end;
border-bottom: .5px solid rgb(255,255,255,0.3);
color: white !important;
font-size: 20px;
caret-color: white;
border-radius: unset !important;
background-color: transparent !important;
}
input:focus{
box-shadow: unset;
border-bottom: .5px solid rgb(255,255,255,0.3);
}

.valid{
border-bottom: .5px solid green !important;
background-color: transparent !important;
box-shadow: unset !important;
color: white;
border-radius: unset;

}

.invalid{
border-bottom: .5px solid red !important;
background-color: transparent !important;
box-shadow: unset !important;
border-radius: unset;


}
`