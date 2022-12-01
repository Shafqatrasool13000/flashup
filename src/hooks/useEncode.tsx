import { parseEther } from "ethers/lib/utils";
import { useCallback } from "react";
import contractsLoader from "../utils/contractsLoader";
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
        console.log(parseEther("1"));
        const contract = contractsLoader[address](signer);
        return contract.interface.encodeFunctionData(
          functionName,
          params
          //    [
          //   // "0x887530F92fbeb3FD8f9F53390851D96aA7B9C164",
          //   // "0x75Ab5AB1Eef154C0352Fc31D2428Cef80C7F8B33",
          //   // parseEther("1"),
          // ]
        );
      } catch (error) {
        console.log(error);
      }
    },
    [signer]
  );
};
