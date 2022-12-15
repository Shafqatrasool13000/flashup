import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import AppBar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { NavbarStyled } from "./style";
import { ConnectKitButton } from "connectkit";
import { NavbarBrand } from "react-bootstrap";

function Navbar() {
  return (
    <NavbarStyled>
      <AppBar bg="light" expand="lg">
        <Container>
          <AppBar.Toggle aria-controls="basic-navbar-nav" />
          <NavLink className="navbar-brand" to="/">
            Flashup UI
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
          <AppBar.Collapse id="basic-navbar-nav">
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
          </AppBar.Collapse>
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
      </AppBar>
    </NavbarStyled>
  );
}

export default Navbar;
