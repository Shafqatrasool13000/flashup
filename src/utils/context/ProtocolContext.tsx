import { createContext, useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import AavaBox from "../../components/ProtocolCards/AavaBox";
import CompoundBox from "../../components/ProtocolCards/CompoundBox";
import { Exchange_Items } from "../types";
import { Context_Api_Data, ProtocolContextProps } from "./types";

export const ProtocolContextData = createContext<Context_Api_Data>(
  {} as Context_Api_Data
);

const ProtocolsContextProvider: React.FC<ProtocolContextProps> = ({
  children,
}) => {
  const [addCubeModal, setAddCubeModal] = useState(false);
  const [exchangeItems, setExchageItems] = useState<Exchange_Items>([]);
  const [savedProtocols, setSavedProtocols] = useState<any>([]);
  const [encodeData, setEncodeData] = useState<string[]>([]);
  const { chain } = useNetwork();
  const { address } = useAccount();
  const [chainId, setChainId] = useState("");
  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    setSavedProtocols([]);
    setExchageItems([]);
    setChainId(chain?.id.toString() as string);
    setUserAddress(address as string);
    console.log("useEffect rerun");
  }, [chain?.id, address]);

  const toggleProtocoInputlBox = (data: any) => {
    switch (data.protocolName) {
      case "Aava 2":
        setExchageItems([...exchangeItems, { Component: AavaBox, data }]);
        break;
      case "Compound":
        setExchageItems([...exchangeItems, { Component: CompoundBox, data }]);
        break;

      default:
        setExchageItems([...exchangeItems, { Component: AavaBox, data }]);
        break;
    }
    setAddCubeModal(false);
  };

  const data = {
    encodeData,
    setEncodeData,
    savedProtocols,
    setSavedProtocols,
    exchangeItems,
    setExchageItems,
    chainId,
    setChainId,
    // getExchangeBox,
    toggleProtocoInputlBox,
    addCubeModal,
    setAddCubeModal,
    userAddress,
    setUserAddress,
  };

  return (
    <ProtocolContextData.Provider value={data}>
      {children}
    </ProtocolContextData.Provider>
  );
};

export default ProtocolsContextProvider;
