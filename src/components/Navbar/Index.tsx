import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { NavbarStyled } from "./style";
import { ConnectKitButton } from "connectkit";
import { NavbarBrand } from "react-bootstrap";

function Navbars() {
  return (
    <NavbarStyled>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <NavLink className="navbar-brand" to="/">
            Demo
          </NavLink>
          <NavbarBrand className="navbar-brand d-lg-none">
            <ConnectKitButton.Custom>
              {({ isConnected, show, truncatedAddress, ensName }) => {
                return (
                  <button onClick={show} className="connect-btn">
                    {isConnected
                      ? ensName ?? truncatedAddress
                      : "Connect Wallet"}
                  </button>
                );
              }}
            </ConnectKitButton.Custom>
          </NavbarBrand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto d-flex justify-content-between">
              <NavLink className="nav-link" to="/strategies">
                Strategies
              </NavLink>
              <NavLink className="nav-link" to="/opportunities">
                Opportunities
              </NavLink>
              <NavLink className="nav-link" to="/create">
                Create
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <NavbarBrand className="d-lg-block d-none">
          <ConnectKitButton.Custom>
              {({ isConnected, show, truncatedAddress, ensName }) => {
                return (
                  <button onClick={show} className="connect-btn">
                    {isConnected
                      ? ensName ?? truncatedAddress
                      : "Connect Wallet"}
                  </button>
                );
              }}
            </ConnectKitButton.Custom>
          </NavbarBrand>
        </Container>
      </Navbar>
    </NavbarStyled>
  );
}

export default Navbars;
