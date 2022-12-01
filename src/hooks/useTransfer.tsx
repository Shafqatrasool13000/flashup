import { useCallback } from "react";
import { BigNumber, ethers } from "ethers";
import erc20Abi from "../utils/abi/erc20.json";
import useSigner from "./useSigner";

const useTransfer = () => {
  const signer = useSigner();

  return useCallback(
    async (
      token: string,
      recepient: string,
      amount: BigNumber
    ): Promise<void> => {
      console.log(amount, "useTrnasfer params...");
      if (signer !== undefined) {
        const contract = new ethers.Contract(token, erc20Abi, signer);
        try {
          console.log(signer, "signer in transfer");
          const tx = await contract.transfer(recepient, amount);
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
