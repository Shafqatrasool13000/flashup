export type Context_Api_Data = {
  encodeData: any;
  setEncodeData: any;
  savedProtocols: any;
  setSavedProtocols: any;
  exchangeItems: any;
  setExchageItems: any;
  chainId: string;
  setChainId: React.Dispatch<React.SetStateAction<string>>;
  userAddress: string;
  addCubeModal: any;
  setAddCubeModal: any;
  toggleProtocoInputlBox: any;
  setUserAddress: React.Dispatch<React.SetStateAction<string>>;
};

export type ProtocolContextProps = {
  children: React.ReactNode;
};
