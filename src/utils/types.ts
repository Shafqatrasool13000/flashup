import React from "react";

export interface ProtectedRouteProps {
  isMetamaskConnect: boolean;
  children: React.ReactNode;
}
export type Save_Protocol_Type = {
  amount: number;
  token: string;
  name: string;
};

export type Encode_Data = {
  encodeData: string[];
  setEncodeData: React.Dispatch<React.SetStateAction<string[]>>;
  savedProtocols: [];
  setSavedProtocols: React.Dispatch<
    React.SetStateAction<[] | Save_Protocol_Type[]>
  >;
  setExchageItems: React.Dispatch<React.SetStateAction<Exchange_Items>>;
};

export type Exchange_Items = { Component: React.ComponentType; data: {} }[];

// export type CubeBodyProps = {
//   getExchangeBox: (data: {}) => void;
// };

export type SelectTokenProps = {
  showTokens: boolean;
  setShowTokens: React.Dispatch<React.SetStateAction<boolean>>;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  tokens: {};
};

export interface ProtocolInputs {
  token: string;
  amount: string;
}

export interface AddProtocolInitValues {
  inputsData: any;
}

export interface ProtocotInputStyleProps {
  textAlign: string;
}
