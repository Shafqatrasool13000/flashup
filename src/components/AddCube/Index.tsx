import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaArrowLeft } from "react-icons/fa";

function AddCube({ addCubeModal, setAddCubeModal, children }: any) {
  return (
    <Navbar expanded={addCubeModal} expand={addCubeModal}>
      <Container fluid>
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand"
          aria-labelledby="offcanvasNavbarLabel-expand"
          placement="top"
        >
          <Offcanvas.Header>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand">
              <FaArrowLeft
                color="white"
                fontWeight="bold"
                style={{
                  cursor: "pointer",
                  marginTop: "12px",
                  marginLeft: "16px",
                }}
                className="nav-link"
                onClick={() => setAddCubeModal(false)}
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>{children}</Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default AddCube;
