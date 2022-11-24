import styled from "styled-components";

export const CubeBodyStyled = styled.div`
  .head-bar {
    .title {
      text-align: center;
      font-size: 16px;
    }
  }

  .method {
    &-btn {
      color: white;
      padding: 3px 9px;
      border: 1px solid white;
      border-radius: 7px;
      font-size: 14px;
      background: transparent;

      &:hover {
        background: rgb(255, 255, 255, 0.4);
        border: 1px solid rgb(255, 255, 255, 0.4);
      }
    }
  }
`;

export const AddProtocolStyled = styled.div`
  margin-top: 24px;

  .back-icon,
  .more-icon {
    cursor: pointer;
  }
  color: white;
  border-radius: 7px;
  background-color: #232535;
  max-width: 450px;
  padding: 20px;

  .method-btn {
    color: white;
    padding: 3px 9px;
    border: 1px solid white;
    border-radius: 7px;
    font-size: 14px;
    background: transparent;
    max-width: 200px;

    &:hover {
      background: rgb(255, 255, 255, 0.4);
      border: 1px solid rgb(255, 255, 255, 0.4);
    }
  }
  input {
    border: none;
    background: transparent;
    text-align: end;
    border-bottom: 0.5px solid rgb(255, 255, 255, 0.3);
    color: white;
    font-size: 20px;
    caret-color: white;

    &::placeholder {
      font-size: 22px;
      letter-spacing: 1px;
    }
  }
  label {
    font-size: 16px;
  }
  .meta-address {
    text-align: start;
  }
  .input-section {
    .max-btn {
      font-size: 14px;
      border-radius: 4px;
      padding: 0px 15px;
      background: transparent;
      color: white;
      border: 1px solid rgb(57, 59, 74);

      &:hover {
        background: rgb(255, 255, 255, 0.4);
        border: 1px solid rgb(255, 255, 255, 0.4);
      }
    }
  }

  .set-btn {
    background-color: rgb(58, 62, 91);
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const RateModeStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  .ant-switch-checked {
    background-color: rgb(58, 62, 91);
    border: 1px solid rgb(38, 105, 245);
  }
  .ant-switch-inner {
    width: 80px;
    font-size: 16px;
  }
`;

export const AddProtocol2Styled = styled.div`
  margin-top: 24px;
  .back-icon,
  .more-icon {
    cursor: pointer;
  }
  color: white;
  border-radius: 7px;
  background-color: #232535;
  max-width: 450px;
  padding: 20px;

  .method-btn {
    color: white;
    padding: 3px 9px;
    border: 1px solid white;
    border-radius: 7px;
    font-size: 14px;
    background: transparent;
    max-width: 200px;

    &:hover {
      background: rgb(255, 255, 255, 0.4);
      border: 1px solid rgb(255, 255, 255, 0.4);
    }
  }

  input {
    border: none;
    background: transparent;
    text-align: end;
    border-bottom: 0.5px solid rgb(255, 255, 255, 0.3);
    color: white;
    font-size: 22px;

    &::placeholder {
      font-size: 22px;
      letter-spacing: 1px;
    }
  }

  .input-section {
    .max-btn {
      font-size: 14px;
      border-radius: 4px;
      padding: 0px 15px;
      background: transparent;
      color: white;
      border: 1px solid rgb(57, 59, 74);

      &:hover {
        background: rgb(255, 255, 255, 0.4);
        border: 1px solid rgb(255, 255, 255, 0.4);
      }
    }
  }

  .set-btn {
    background-color: rgb(58, 62, 91);
    &:hover {
      opacity: 0.5;
    }
  }
`;
