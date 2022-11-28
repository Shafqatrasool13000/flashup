import { parseEther } from "ethers/lib/utils";
import { useCallback } from "react";
import { HMock } from "../typechain";
import { addresses } from "../utils/constants";
import { drainTokenHandler } from "../utils/contracts";
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
        let contract: HMock = drainTokenHandler(signer);
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
