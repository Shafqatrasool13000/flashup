import styled from 'styled-components';
import { primaryColor } from '../../components/Global';

const CreateProtocolLayoutStyle = styled.div`
  padding-bottom: 60px;
  position: relative;

  .protocol-section {
    height: 77vh;
    overflow-y: auto;

    /* width */
    &::-webkit-scrollbar {
      width: 10px;
      margin-top: 12px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: rgb(58, 62, 91);
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: rgb(58, 62, 91, 0.9);
    }
  }

  .icon-container {
    display: flex;
    justify-content: center;
    max-width: 450px;
    margin-top: 18px;

    .action-icon {
      background-color: ${primaryColor};
      border-radius: 50%;
      padding: 14px;
      width: 50px;
      height: 50px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      position: relative;
    }
    .plus-icon {
      z-index: 1;
      bottom: 2%;
      position: absolute;
    }
    .execute-icon {
      z-index: 1;
      bottom: 2%;
      position: absolute;
      right: 40%;
    }

    .top-icon {
      top: 2%;
    }
  }
`;

export default CreateProtocolLayoutStyle;
