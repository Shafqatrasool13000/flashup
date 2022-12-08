import { constants } from "ethers";
import { useCallback } from "react";
import { IDSProxyRegistry } from "../typechain";
import { idsProxyRegistryFactory } from "../contracts/Compound";
import useSigner from "./useSigner";

const useIDSProxyRegistry = () => {
  const signer = useSigner();

  return useCallback(
    async (address: string, setIsUserProxyModal: any): Promise<any> => {
      console.log(address, "data params drain token....");
      if (signer !== undefined) {
        let contract: IDSProxyRegistry = idsProxyRegistryFactory(signer);
        try {
          const constant = await contract.callStatic.proxies(address);
          console.log({ constant });
          if (constant == constants.AddressZero) {
            setIsUserProxyModal(true);
            const result = await contract["build(address)"](address);
            await result.wait();
            setIsUserProxyModal(false);
            return result;
          }
          return constant;
        } catch (error) {
          setIsUserProxyModal(false);
          console.log(error, "error in drain token");
        }
      }
    },
    [signer]
  );
};

export default useIDSProxyRegistry;
