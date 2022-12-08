import { useCallback } from "react";
import { HMock } from "../typechain";
import { drainTokenFactory } from "../contracts/Aava";
import useSigner from "./useSigner";

const useDrainToken = () => {
  const signer = useSigner();

  return useCallback(
    (
      faucetAddress: Array<any>,
      tokenAddress: Array<any>,
      amounts: Array<any>
    ) => {
      console.log(
        faucetAddress,
        tokenAddress,
        amounts,
        "data params drain token...."
      );
      if (signer !== undefined) {
        let contract: HMock = drainTokenFactory(signer);
        try {
          const result = contract.interface.encodeFunctionData("drainTokens", [
            faucetAddress,
            tokenAddress,
            amounts,
          ]);
          console.log(result, "data in drain token");
          return result;
        } catch (error) {
          console.log(error, "error in drain token");
        }
      }
    },
    [signer]
  );
};

export default useDrainToken;
