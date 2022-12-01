import React, { useEffect } from "react";
import { useAccount, useNetwork } from "wagmi";
import useProtocolContext from "../../hooks/useProtocolContext";

const useContextData = (): void => {
  const { chain } = useNetwork();
  const { address } = useAccount();
  const {
    userAddress,
    chainId,
    savedProtocols,
    setSavedProtocols,
    setExchageItems,
    addCubeModal,
    exchangeItems,
    setAddCubeModal,
    setChainId,
    // setUserAddress,
  } = useProtocolContext();
  useEffect(() => {
    setSavedProtocols([]);
    setExchageItems([]);
    setChainId(chain?.id.toString() as string);
    // setUserAddress(address as string);
  }, [chain?.id, address]);
};

export default useContextData;
