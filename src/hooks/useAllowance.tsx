import { useCallback, useState } from "react";
import { ethers } from "ethers";
import useSigner from "./useSigner";
import erc20Abi from "../utils/abi/erc20.json";

const useAllowance = () => {
  const signer = useSigner();

  return useCallback(
    async (token: string, owner: string, spender: any): Promise<void> => {
      console.log(owner, token, "params in useAllowance");
      if (signer !== undefined) {
        const contract = new ethers.Contract(token, erc20Abi, signer);
        try {
          console.log(signer, "signer in useAllowance");
          const allowance = await contract.allowance(owner, spender);
          return allowance;
        } catch (error) {
          console.log(error, "error in allowance");
        }
      }
    },
    [signer]
  );
};

export default useAllowance;
