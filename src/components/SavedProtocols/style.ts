import styled from "styled-components";
import { secondaryDark } from "../Global";

export const SavedProtocolStyled = styled.div`
  margin-top: 24px;

  .list {
    .box {
      background-color: ${secondaryDark};
      color: #ffffff;
      padding: 14px;
      border-radius: 7px;
      margin: 0 auto;

      .method-btn {
        color: white;
        padding: 3px 9px;
        border: 1px solid rgb(38, 105, 245);
        border-radius: 7px;
        font-size: 14px;
        max-width: 160px;
        background-color: transparent;

        &:hover {
          background: rgb(255, 255, 255, 0.4);
          border: 1px solid rgb(80, 132, 236);
        }
      }

      .title {
        font-weight: 700;
        font-size: 18px;
      }

      .token {
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 0;
      }
      .price {
        font-size: 18px;
        margin-bottom: 0;
        font-weight: 700;
      }

      .bottom-border {
        border-bottom: 1px solid white;
        height: 6px;
        width: 90%;
        margin: 0 auto;
      }
    }
  }
`;
