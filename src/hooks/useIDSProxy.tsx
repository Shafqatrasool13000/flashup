import { constants } from "ethers";
import { useCallback } from "react";
import { IDSProxyRegistry } from "../typechain";
import { idsProxyRegistryFactory } from "../contracts/Compound";
import useSigner from "./useSigner";

const useIDSProxy = () => {
  const signer = useSigner();

  return useCallback(
    async (address: string): Promise<any> => {
      console.log(address, "data params drain token....");
      if (signer !== undefined) {
        let contract: IDSProxyRegistry = idsProxyRegistryFactory(signer);
        try {
          const constant = await contract.callStatic.proxies(address);
          console.log({ constant });
          if (constant == constants.AddressZero) {
            const result = await contract["build(address)"](address);
            return result;
          }
          return constant;
        } catch (error) {
          console.log(error, "error in drain token");
        }
      }
    },
    [signer]
  );
};

export default useIDSProxy;
