import {
  IDSProxy,
  IDSProxy__factory,
  IDSProxyRegistry,
  IDSProxyRegistry__factory,
  HSCompound__factory,
  HSCompound,
  DSGuardFactory,
  DSGuardFactory__factory,
} from "../typechain";
import { Signer } from "ethers";
import contractsAddress from "../utils/contractsAddress";

const hsCompoundHandler = (signer: Signer): HSCompound => {
  return HSCompound__factory.connect(contractsAddress.hsCompondAddress, signer);
};

const idsProxyHandler = (address: string, signer: Signer): IDSProxy => {
  return IDSProxy__factory.connect(address, signer);
};
const dsGuardHandler = (signer: Signer): DSGuardFactory => {
  return DSGuardFactory__factory.connect(
    contractsAddress.dSGuardFactoryAddress,
    signer
  );
};

const idsProxyRegistryHandler = (signer: Signer): IDSProxyRegistry => {
  return IDSProxyRegistry__factory.connect(
    contractsAddress.proxyRegistry,
    signer
  );
};

export {
  hsCompoundHandler,
  idsProxyHandler,
  dsGuardHandler,
  idsProxyRegistryHandler,
};
