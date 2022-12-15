import { HAaveFactory, proxyMockFactory } from "../contracts_factories/aave";
import { hsCompoundFactory } from "../contracts_factories/Compound";

interface IContracts {
  [key: string]: Function;
}

const contractsLoader: IContracts = {
  "0x9ce5504a17f839F84D6F78Dc68dB4A50F266D30d": HAaveFactory,
  "0xDcDafE091Ac43e1F41CBbbcF78aCB5F4260ff52C": proxyMockFactory,
  "0xC86a4B4e3d1412C7338CD9A672dDEcE16Bb29D19": hsCompoundFactory,
};

export default contractsLoader;
