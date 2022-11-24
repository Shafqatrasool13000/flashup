import { useMemo, useState } from "react";
import { ethers, Signer } from "ethers";
import { ethereum } from "../App";

const useSigner = () => {
  const [signer, setSigner] = useState<Signer>();
  useMemo(async () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    await provider.send("eth_requestAccounts", []);
    setSigner(provider.getSigner());
  }, []);
  return signer;
};

export default useSigner;
