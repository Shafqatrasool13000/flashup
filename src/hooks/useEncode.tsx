import { useCallback } from "react";
import { loaders } from "../utils/contracts";
import useSigner from "./useSigner";

export const useEncode = () => {
  const signer = useSigner();
  console.log(signer, "signer in use encoded");
  return useCallback(
    (address: string, functionName: string, params: Array<any>) => {
      try {
        console.log(
          {
            address,
            functionName,
          },
          params,
          "data in encode params"
        );
        const contract = loaders[address](signer);
        return contract.interface.encodeFunctionData(functionName, params);
      } catch (error) {
        console.log(error);
      }
    },
    [signer]
  );
};
