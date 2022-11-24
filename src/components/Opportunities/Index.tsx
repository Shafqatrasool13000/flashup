import Table from "react-bootstrap/Table";
import { OpportunitiesStyled } from "./style";
import { FaEye } from "react-icons/fa";
import { Container } from "react-bootstrap";

const Index = () => {
  const tableData = [
    {
      type: "Protocol",
      name: "UNISWAP/MOONSWAP",
      oppor: "yes",
      opporType: "Arbitrage",
    },
    {
      type: "Protocol",
      name: "UNISWAP/MOONSWAP",
      oppor: "yes",
      opporType: "Arbitrage",
    },
    {
      type: "Protocol",
      name: "UNISWAP/MOONSWAP",
      oppor: "yes",
      opporType: "Arbitrage",
    },
  ];
  return (
    <OpportunitiesStyled>
      <div className="mt-3 mb-3">
        <Container>
          <h5 className="title">Opportunities</h5>
          <div className="table-container p-3">
            <Table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Name</th>
                  <th>Oppor.</th>
                  <th>Oppor.Type</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map(({ name, oppor, opporType, type }, index) => (
                  <tr>
                    <td>{type}</td>
                    <td className="name">{name}</td>
                    <td>{oppor}</td>
                    <td>
                      <div className="d-flex">
                        {opporType}
                        <span className="ms-3">
                          <FaEye />
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
    </OpportunitiesStyled>
  );
};

export default Index;
