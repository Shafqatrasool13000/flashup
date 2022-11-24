import { Signer } from "ethers";
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
import { addresses } from "./constants";

export const HAaveHandler = (signer: Signer): HAaveProtocol => {
  return HAaveProtocol__factory.connect(addresses.haaveAddress, signer);
};

export const proxyMockHandler = (signer: Signer): ProxyMock => {
  return ProxyMock__factory.connect(addresses.proxyMockAddress, signer);
};

export const registerHandler = (signer: Signer): Registry => {
  return Registry__factory.connect(addresses.haaveAddress, signer);
};

export const stableTokenHandler = (
  signer: Signer,
  address: string
): IStableDebtToken => {
  console.log({ address }, "address in stable");
  return IStableDebtToken__factory.connect(address, signer);
};
export const variableTokenHandler = (
  signer: Signer,
  address: string
): IVariableDebtToken => {
  console.log({ address }, "address in variable");
  return IVariableDebtToken__factory.connect(address, signer);
};
export const drainTokenHandler = (signer: Signer): HMock => {
  return HMock__factory.connect(addresses.hMock, signer);
};

interface IContracts {
  [key: string]: Function;
}

export const loaders: IContracts = {
  "0x9ce5504a17f839F84D6F78Dc68dB4A50F266D30d": HAaveHandler,
  "0xDcDafE091Ac43e1F41CBbbcF78aCB5F4260ff52C": proxyMockHandler,
};
