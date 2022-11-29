import { createContext, useEffect, useState } from "react";
import { useAccount, useNetwork } from "wagmi";
import AddProtocol from "../../components/AddProtocol/AddProtocol";
import { Exchange_Items } from "../types";

type Context_Api_Data = {
  encodeData: any;
  setEncodeData: any;
  savedProtocols: any;
  setSavedProtocols: any;
  exchangeItems: any;
  setExchageItems: any;
  chainId: string;
  setChainId: React.Dispatch<React.SetStateAction<string>>;
  userAddress: string;
  getExchangeBox: any;
  addCubeModal: any;
  setAddCubeModal: any;
};

type ProtocolContextProps = {
  children: React.ReactNode;
};
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
  }, [chain?.id, address]);

  const getExchangeBox = (data: any) => {
    const nameConversion = data.name.toLowerCase();
    console.log(nameConversion.includes("swap"));
    if (nameConversion.includes("swap")) {
      setExchageItems([...exchangeItems, { Component: AddProtocol, data }]);
      setAddCubeModal(false);
    } else {
      setExchageItems([...exchangeItems, { Component: AddProtocol, data }]);
      setAddCubeModal(false);
    }
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
    getExchangeBox,
    addCubeModal,
    setAddCubeModal,
    userAddress,
  };

  return (
    <ProtocolContextData.Provider value={data}>
      {children}
    </ProtocolContextData.Provider>
  );
};

export default ProtocolsContextProvider;
