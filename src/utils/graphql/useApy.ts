import { gql, useQuery } from "@apollo/client";

const APY_DATA = gql`
  query ApyDetails($symbol: String) {
    reserves(where: { symbol: $symbol }) {
      liquidityRate
      variableBorrowRate
      stableBorrowRate
      utilizationRate
      totalLiquidityAsCollateral
    }
  }
`;

const UseApy = (symbol: string, rateMode: any = null) => {
  const { data, error, loading } = useQuery(APY_DATA, {
    variables: { symbol },
  });
  console.log({ rateMode }, "rate mod ein use papy");

  return {
    totalData: {
      APY: (
        (data?.reserves[0]?.liquidityRate / Math.pow(10, 27)) *
        100
      ).toFixed(2),

      "Borrow APY": (
        (data?.reserves[0]?.[
          rateMode === 1 ? "stableBorrowRate" : "variableBorrowRate"
        ] /
          Math.pow(10, 27)) *
        100
      ).toFixed(2),

      Utilization: (data?.reserves[0]?.utilizationRate * 1).toFixed(2),
      "Total Collatrel": (
        (data?.reserves[0]?.totalLiquidityAsCollateral / Math.pow(10, 27)) *
        100
      ).toFixed(2),
    },
    error,
    loading,
  };
};

export default UseApy;
