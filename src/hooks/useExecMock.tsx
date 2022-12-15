import { arrayify, parseEther } from "ethers/lib/utils";
import { useCallback } from "react";
import { proxyMockFactory } from "../contracts_factories/aave";
import { ProxyMock } from "../typechain";
import useSigner from "./useSigner";

export const useExecMock = () => {
  const signer = useSigner();

  return useCallback(
    async (
      to: string,
      data: any,
      amount: string | null = null
    ): Promise<void> => {
      console.log(data, amount, to, "data in execk....");
      if (signer !== undefined) {
        console.log(signer, "signer in exec mock");

        let contract: ProxyMock = proxyMockFactory(signer);
        try {
          const tx = await contract.execMock(to, arrayify(data), {
            value: parseEther(amount ? amount.toString() : "0"),
          });
          console.log(tx);
          // await tx.wait();
          // console.log(tx, "data in tex");
        } catch (error) {
          console.log(error, "error in exect mock");
        }
      }
    },
    [signer]
  );
};
