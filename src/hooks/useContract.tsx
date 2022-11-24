import { useMemo, useState } from "react";
import { loaders } from "../utils/contracts";
import useSigner from "./useSigner";
import { HAaveProtocol } from "../typechain";

type Contracts = HAaveProtocol;

const useContract = (name: string): Contracts => {
  const signer = useSigner();
  const [contract, setContract] = useState<Contracts>(
    loaders[name ?? "proxy"](signer)
  );
  useMemo(() => {
    if (signer !== undefined) {
      setContract(loaders[name](signer));
    }
  }, [name]);

  return contract;
};

export default useContract;
