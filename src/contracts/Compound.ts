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

const hsCompoundFactory = (signer: Signer): HSCompound => {
  return HSCompound__factory.connect(contractsAddress.hsCompondAddress, signer);
};

const idsProxyFactory = (address: string, signer: Signer): IDSProxy => {
  return IDSProxy__factory.connect(address, signer);
};
const dsGuardFactory = (signer: Signer): DSGuardFactory => {
  return DSGuardFactory__factory.connect(
    contractsAddress.dSGuardFactoryAddress,
    signer
  );
};

const idsProxyRegistryFactory = (signer: Signer): IDSProxyRegistry => {
  return IDSProxyRegistry__factory.connect(
    contractsAddress.proxyRegistry,
    signer
  );
};

export {
  hsCompoundFactory,
  idsProxyFactory,
  dsGuardFactory,
  idsProxyRegistryFactory,
};
