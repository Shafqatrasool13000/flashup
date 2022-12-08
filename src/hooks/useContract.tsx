import { useMemo, useState } from "react";
import useSigner from "./useSigner";
import { HAaveProtocol } from "../typechain";
import contractsLoader from "../utils/contractsLoader";

type Contracts = HAaveProtocol;

const useContract = (name: string): Contracts => {
  const signer = useSigner();
  const [contract, setContract] = useState<Contracts>(
    contractsLoader[name ?? "proxy"](signer)
  );
  useMemo(() => {
    if (signer !== undefined) {
      setContract(contractsLoader[name](signer));
    }
  }, [name]);

  return contract;
};

export default useContract;
