import { useCallback } from "react";
import { ethers } from "ethers";
import erc20Abi from "../utils/abi/erc20.json";
import useSigner from "./useSigner";
import { parseUnits } from "ethers/lib/utils";

const useTransfer = () => {
  const signer = useSigner();

  return useCallback(
    async (
      token: string,
      recepient: string,
      amount: string,
      decimals: number
    ): Promise<void> => {
      console.log(
        parseUnits(`${amount}`, decimals).toNumber(),
        amount,
        "value i..."
      );
      if (signer !== undefined) {
        const contract = new ethers.Contract(token, erc20Abi, signer);
        try {
          console.log(signer, "signer in transfer");
          const tx = await contract.transfer(
            recepient,
            parseUnits(`${amount}`, decimals).toNumber()
          );
          console.log(tx, "data in tex");
          await tx.wait();
          return tx;
        } catch (error) {
          console.log(error);
        }
      }
    },
    [signer]
  );
};

export default useTransfer;
