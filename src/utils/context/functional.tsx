import AavaBox from "../../components/ProtocolCards/AaveBox";
import CompoundBox from "../../components/ProtocolCards/CompoundBox";
import useProtocolContext from "../../hooks/useProtocolContext";

const functionalContext = () => {
  const {
    userAddress,
    chainId,
    savedProtocols,
    setSavedProtocols,
    addCubeModal,
    setExchageItems,
    exchangeItems,
    setAddCubeModal,
  } = useProtocolContext();
  const toggleProtocoInputlBox = (data: any) => {
    switch (data.protocolName) {
      case "Aave":
        setExchageItems([...exchangeItems, { Component: AavaBox, data }]);
        break;
      case "Compound":
        setExchageItems([...exchangeItems, { Component: CompoundBox, data }]);
      default:
        setExchageItems([...exchangeItems, { Component: AavaBox, data }]);
        break;
    }
    setAddCubeModal(false);
  };
  return { toggleProtocoInputlBox };
};

export default functionalContext;
