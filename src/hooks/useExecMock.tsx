import { arrayify, Bytes, parseEther } from "ethers/lib/utils";
import { useCallback } from "react";
import { ProxyMock } from "../typechain";
import { proxyMockHandler } from "../utils/contracts";
import useSigner from "./useSigner";

export const useExecMock = () => {
  const signer = useSigner();

  return useCallback(
    async (to: string, data: any): Promise<void> => {
      console.log(data, "data in execk....");
      if (signer !== undefined) {
        console.log(signer, "signer in exec mock");

        let contract: ProxyMock = proxyMockHandler(signer);
        try {
          const tx = await contract.execMock(to, arrayify(data), {
            value: parseEther("0"),
          });
          await tx.wait();
          console.log(tx, "data in tex");
        } catch (error) {
          console.log(error, "error in exect mock");
        }
      }
    },
    [signer]
  );
};
