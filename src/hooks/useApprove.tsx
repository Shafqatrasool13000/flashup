import { useCallback } from "react";
import { ethers } from "ethers";
import useSigner from "./useSigner";
import erc20Abi from "../utils/abi/erc20.json";

const useApprove = () => {
  const signer = useSigner();

  return useCallback(
    async (token: string, sender: string, amount: any): Promise<void> => {
      console.log(amount, token, "params in useApprove");
      if (signer !== undefined) {
        const contract = new ethers.Contract(token, erc20Abi, signer);
        try {
          console.log(signer, "signer in useApprove");
          const result = await contract.approve(sender, amount);
          await result.wait();
          console.log(result, "result of useApprove");
        } catch (error) {
          console.log(error);
        }
      }
    },
    [signer]
  );
};

export default useApprove;
