import { useCallback, useContext } from "react";
import useSigner from "./useSigner";
import erc20Factory from "../contracts_factories/common";
import contractsAddress from "../utils/contractsAddress";
import { ProtocolContextData } from "../utils/context/ProtocolContext";
import { formatUnits } from "ethers/lib/utils";

const useAllowance = () => {
  const signer = useSigner();
  const { userAddress: owner, setAllowance } = useContext(ProtocolContextData);
  return useCallback(
    async (token: string): Promise<any> => {
      console.log(owner, token, "params in useAllowance");
      if (signer !== undefined) {
        const contract = erc20Factory(token, signer);
        try {
          console.log(signer, "signer in useAllowance");
          const allowance = await contract.allowance(
            owner,
            contractsAddress.proxyMockAddress
          );
          setAllowance(formatUnits(allowance, 18));
          console.log(allowance.toBigInt(), "result of useAllowance())");
          console.log(formatUnits(allowance, 18), "result of useAllowance())");
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
