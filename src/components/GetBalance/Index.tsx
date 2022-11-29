import { ethers } from "ethers";
import { useState } from "react";
import { useAccount } from "wagmi";
import { ethereum } from "../../App";
import erc20Abi from "../../utils/abi/erc20.json";

interface GetBalanceInterface {
  token: string;
  decimal: number;
}

export const GetBalance: React.FC<GetBalanceInterface> = ({
  token,
  decimal,
}: any) => {
  const [balance, setBalance] = useState<number | string>("");
  const { address } = useAccount();

  const web3Provider = new ethers.providers.Web3Provider(ethereum);

  (async () => {
    const contract = new ethers.Contract(token, erc20Abi, web3Provider);
    const balance = await contract.balanceOf(address);
    console.log({ balance }, "balance of token");
    const balanceInEthers = ethers.utils.formatUnits(balance, decimal);
    setBalance((+balanceInEthers).toFixed(1));
  })();

  return <p className="fs-5 me-2 mb-0">{balance}</p>;
};
