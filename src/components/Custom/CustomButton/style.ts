import styled from "styled-components";
import { ButtonProps } from "./CustomButton";

const CustormButtonStyle: any = styled.div`
  width: ${(props: any) => props.width};

  .ant-btn {
    border: none;
    outline: none;
    background-color: ${(props: any) => props.bgcolor};
    color: ${(props: any) => props.color};
    padding: ${(props: any) => props.padding};
    font-size: ${(props: any) => props.fontSize};
    border-radius: ${(props: any) => props.borderRadius};
    width: -moz-available;
    width: -webkit-fill-available;
    height: ${(props: any) => props.height};
    font-family: ${(props: any) => props.fontFamily};
    cursor: pointer;
    &:hover {
      outline: none;
    }
  }
`;

export default CustormButtonStyle;
