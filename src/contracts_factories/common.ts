import { Signer } from "ethers";
import { ERC20, ERC20__factory } from "../typechain";

const erc20Factory = (address: string, signer: Signer): ERC20 => {
  return ERC20__factory.connect(address, signer);
};

export default erc20Factory;
