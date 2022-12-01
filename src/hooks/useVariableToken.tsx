import { ethers } from "ethers";
import { parseUnits } from "ethers/lib/utils";
import { useCallback } from "react";
import { IVariableDebtToken } from "../typechain";
import { variableTokenHandler } from "../contracts/Aava";
import useSigner from "./useSigner";

const useVariableToken = () => {
  const signer = useSigner();

  return useCallback(
    async (
      to: string,
      amount: number,
      address: string,
      decimal: number
    ): Promise<void> => {
      console.log(
        to,
        amount,
        ethers.utils.formatUnits(amount.toString(), 18),
        "data in variable token...."
      );
      if (signer !== undefined) {
        let contract: IVariableDebtToken = variableTokenHandler(
          signer,
          address
        );

        try {
          const tx = await contract.approveDelegation(
            to,
            parseUnits(amount.toString(), decimal)
            // ethers.utils.formatUnits(amount.toString(), 18)
          );
          //   await tx.wait();
          console.log(tx, "data in tx variable");
        } catch (error) {
          console.log(error, "error in exect mock");
        }
      }
    },
    [signer]
  );
};

export default useVariableToken;
