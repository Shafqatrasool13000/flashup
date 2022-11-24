import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { ethereum } from "../App";
import ltvAbi from "../utils/abi/ltv.json";

const GetLtv = (token: any) => {
  const [tokenLtv, setTokenLtv] = useState<any>();
  const [totalDebt, setTotalDebt] = useState<any>();
  const [totalColletralEth, setTotalColletralEth] = useState<any>();
  const { address } = useAccount();

  const web3Provider = new ethers.providers.Web3Provider(ethereum);
  useEffect(() => {
    if (token) {
      (async () => {
        const contract = new ethers.Contract(token, ltvAbi, web3Provider);
        const { ltv, totalCollateralETH, totalDebtETH } =
          await contract.getUserAccountData(address);
        console.log({ ltv }, "token in ............");

        const parsedLtv = ethers.utils.formatEther(ltv);
        const parsedDebt = ethers.utils.formatEther(totalDebtETH);
        const parsedCollectral = ethers.utils.formatEther(totalCollateralETH);
        const finalLtv = (+parsedLtv / 1000) * 100;
        const finalDebt = (+parsedDebt / 1000) * 100;
        const finalCollectral = (+parsedCollectral / 1000) * 100;
        setTokenLtv(finalLtv);
        setTotalDebt(finalDebt);
        setTotalColletralEth(finalCollectral);
      })();
    }
  }, [token]);

  return {
    ltvData: [
      {
        name: "Max LTV",
        value: tokenLtv,
      },
      { name: "Total Collatrel", value: totalColletralEth },
      { name: "Total Debt", value: totalDebt },
    ],
  };
};

export default GetLtv;
