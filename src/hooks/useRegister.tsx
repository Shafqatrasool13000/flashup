import { parseEther } from "ethers/lib/utils";
import { useCallback } from "react";
import { Registry } from "../typechain";
import { registerHandler } from "../utils/contracts";
import useSigner from "./useSigner";

export const useRegister = () => {
  const signer = useSigner();

  return useCallback(
    async (to: string, data: string): Promise<void> => {
      console.log(to, data, "data in register callback");
      if (signer !== undefined) {
        console.log(signer, "signer in register callback");

        let contract: Registry = registerHandler(signer);
        try {
          const result = await contract.register(to, data);
          console.log(result, "data tx in register");
        } catch (error) {
          console.log(error, "error in register");
        }
      }
    },
    [signer]
  );
};

export const useRegisterCaller = () => {
  const signer = useSigner();

  return useCallback(
    async (to: string, data: string): Promise<void> => {
      console.log(to, data, "data in register caller callback");
      if (signer !== undefined) {
        console.log(signer, "sginer in register caller callback");

        let contract: Registry = registerHandler(signer);
        try {
          const tx = await contract.registerCaller(to, data);
          await tx.wait();
          console.log(tx, "data tx in register caller");
        } catch (error) {
          console.log(error, "error in register caller");
        }
      }
    },
    [signer]
  );
};
