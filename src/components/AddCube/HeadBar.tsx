import { FaEthereum } from "react-icons/fa";

const HeadBar = ({ title }: any) => {
  return (
    <div className="d-flex head-bar mt-4">
      <FaEthereum fontSize={20} />
      <p className="title ms-2">{title}</p>
    </div>
  );
};

export default HeadBar;
