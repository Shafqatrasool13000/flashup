import { parseUnits } from "ethers/lib/utils";
import { useCallback } from "react";
import { IStableDebtToken } from "../typechain";
import { stableTokenHandler } from "../utils/contracts";
import useSigner from "./useSigner";

const useStableToken = () => {
  const signer = useSigner();

  return useCallback(
    async (
      to: string,
      amount: any,
      address: string,
      decimal: number
    ): Promise<void> => {
      console.log(to, amount, "data in stable token....");
      if (signer !== undefined) {
        let contract: IStableDebtToken = stableTokenHandler(signer, address);
        try {
          const tx = await contract.approveDelegation(
            to,
            parseUnits(amount.toString(), decimal)
          );
          await tx.wait();
          console.log(tx, "data in tx stable");
        } catch (error) {
          console.log(error, "error in exect mock");
        }
      }
    },
    [signer]
  );
};

export default useStableToken;