import { useRef, useState } from "react";
import ListItem from "./ListItem";

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
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  // 1.locate the item to be dragged
  const dragStart = (e: React.DragEvent<HTMLDivElement>, position: any) => {
    dragItem.current = position;
    console.log(e.target,'event');
  };

  //2. Track items being dragged
  const dragEnter = (e: React.DragEvent<HTMLDivElement>, position: any) => {
    dragOverItem.current = position;
    console.log(e.target,'event');
  };

  // 3.Rearrange the list
  const drop = () => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current as number];
    copyListItems.splice(dragItem.current as number, 1);
    copyListItems.splice(dragOverItem.current as number, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  return (
    <>
      {list.map((data, index) => (
        <div
          draggable
          onDragStart={(e) => dragStart(e, index)}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragEnd={drop}
          key={index}
        >
          <ListItem data={data} />
        </div>
      ))}
    </>
  );
}

export default List;
