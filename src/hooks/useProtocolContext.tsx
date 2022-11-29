import { useContext } from "react";
import { ProtocolContextData } from "../utils/context/ProtocolContext";

const useProtocolContext = () => {
  const protcolsContextData = useContext(ProtocolContextData);

  return protcolsContextData;
};

export default useProtocolContext;
