import { useState } from "react";
import ListItem from "./CreateItemBox";

const listData = [
  {
    methodName: "Add Liquidity",
    price: 30,
    quantity: 2,
    exchanger: "Uniswap v2",
  },
  { methodName: "Flash Loan", price: 50, quantity: 6, exchanger: "Aave v1" },
  { methodName: "Swap Token", price: 50, quantity: 6, exchanger: "Paraswap" },
  {
    methodName: "Unstake Token",
    price: 50,
    quantity: 6,
    exchanger: "Furocomb",
  },
  { methodName: "Deposit", price: 50, quantity: 6, exchanger: "Aave v2" },
];

function List() {
  const [list, setList] = useState(listData);

  return (
    <>
      {list.map((data, index) => (
        <ListItem key={index} data={data} />
      ))}
    </>
  );
}

export default List;
