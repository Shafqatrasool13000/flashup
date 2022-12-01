// import React from "react";
// import UseApy from "../../utils/graphql/useApy";

// interface ProtocolDataProps {
//   token: string;
// }

// const ProtocolData: React.FC<ProtocolDataProps> = ({ token }): any => {
//   const { totalData, loading, error } = UseApy(token);
//   if (error) {
//     console.log({ error });
//   }
//   if (loading) {
//     console.log({ loading });
//   }
//   return {
//     apy: [
//       ((totalData?.reserves[0]?.liquidityRate / Math.pow(10, 27)) * 100).toFixed(2),
//     ],
//     borrow_Apy: (rateMode: number) =>
//       (
//         (totalData?.reserves[0]?.[
//           rateMode === 1 ? "stableBorrowRate" : "variableBorrowRate"
//         ] /
//           Math.pow(10, 27)) *
//         100
//       ).toFixed(2),
//     utilization: [(totalData?.reserves[0]?.utilizationRate * 1).toFixed(2)],
//     total_collateral: [
//       (
//         (totalData?.reserves[0]?.totalLiquidityAsCollateral / Math.pow(10, 27)) *
//         100
//       ).toFixed(2),
//     ],
//   };
// };

// export default ProtocolData;
import React from "react";

const ProtocolsData = () => {
  return <div>ProtocolsData</div>;
};

export default ProtocolsData;
