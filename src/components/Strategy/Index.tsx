import Table from "react-bootstrap/Table";
import { StrategyStyled } from "./style";
import { FaDollarSign } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { AiFillThunderbolt } from "react-icons/ai";
import {
  IoChevronForwardCircle,
  IoChevronBackCircle,
  IoAtCircleOutline,
  IoSearchCircleSharp,
} from "react-icons/io5";

const Index = () => {
  const tableData = [
    {
      strategyName: "Debt Swap ",
      returns: "-",
      liquidity: "-",
      receivingToken: "USDC",
    },
    {
      strategyName: "Debt Swap ",
      returns: "-",
      liquidity: "-",
      receivingToken: "USDC",
    },
  ];

  return (
    <StrategyStyled className="mb-3">
      <div className="search-bar w-100 d-flex flex flex-column align-items-center">
        <input
          type="text"
          placeholder="Search for protocol and token strategies"
          className=""
        />
        <div className="icon">
          <IoSearchCircleSharp fontSize={35} color="black" />
        </div>
      </div>
      <Container>
        <div className="p-3 table-container">
          <Table>
            <thead>
              <tr>
                <th>Strategy Name</th>
                <th>Returns</th>
                <th>Liquidity</th>
                <th>Receiving Token</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map(
                (
                  { strategyName, returns, liquidity, receivingToken },
                  index
                ) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center strategy-section">
                        <p className="me-2 table-index">
                          {index} <AiFillThunderbolt fontSize={40} />
                        </p>
                        <div>
                          <div className="d-flex align-items-center">
                            <button className="method-btn">
                              <span className="me-2">
                                {" "}
                                <FaDollarSign />
                              </span>
                              AAVE
                            </button>
                            <p className="ms-2 title">{strategyName}</p>
                          </div>
                          <p className="description mt-2">
                            Directly exchange your debt in Aave without upfront
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>{returns}</td>
                    <td>{liquidity}</td>
                    <td>
                      <div className="d-flex">
                        <span className="me-2">
                          <FaDollarSign />
                        </span>
                        {receivingToken}
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </div>
        <div className="pagination d-flex justify-content-center mt-3">
          <IoChevronBackCircle fontSize={36} color="black" />
          <IoAtCircleOutline fontSize={36} color="black" className="ms-2" />
          <IoAtCircleOutline fontSize={36} color="black" className="ms-2" />
          <IoAtCircleOutline fontSize={36} color="black" className="ms-2" />
          <IoChevronForwardCircle
            fontSize={36}
            color="black"
            className="ms-2"
          />
        </div>
      </Container>
    </StrategyStyled>
  );
};

export default Index;
