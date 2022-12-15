import {
  ProxyMock,
  ProxyMock__factory,
  Registry,
  Registry__factory,
  IStableDebtToken__factory,
  IStableDebtToken,
  IVariableDebtToken,
  IVariableDebtToken__factory,
  HMock__factory,
  HMock,
  HAaveProtocol__factory,
  HAaveProtocol,
} from "../typechain";
import { Signer } from "ethers";
import contractsAddress from "../utils/contractsAddress";

const HAaveFactory = (signer: Signer): HAaveProtocol => {
  return HAaveProtocol__factory.connect(contractsAddress.haaveAddress, signer);
};

const proxyMockFactory = (signer: Signer): ProxyMock => {
  return ProxyMock__factory.connect(contractsAddress.proxyMockAddress, signer);
};

const registerFactory = (signer: Signer): Registry => {
  return Registry__factory.connect(contractsAddress.haaveAddress, signer);
};

const stableTokenFactory = (
  signer: Signer,
  address: string
): IStableDebtToken => {
  console.log({ address }, "address in stable");
  return IStableDebtToken__factory.connect(address, signer);
};
const variableTokenFactory = (
  signer: Signer,
  address: string
): IVariableDebtToken => {
  console.log({ address }, "address in variable");
  return IVariableDebtToken__factory.connect(address, signer);
};
const drainTokenFactory = (signer: Signer): HMock => {
  return HMock__factory.connect(contractsAddress.hMock, signer);
};

export {
  HAaveFactory,
  drainTokenFactory,
  variableTokenFactory,
  stableTokenFactory,
  registerFactory,
  proxyMockFactory,
};
