import React from 'react'
import { Navbar, Container, Nav} from "react-bootstrap";
import logo from "../assets/family.png";

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <Navbar.Brand>CityExplorer 
            <img src={logo} alt="logo" height="45" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link> 
              <i class="fa-solid fa-earth-europe"></i> Explore
            </Nav.Link>
            <Nav.Link>
            <i class="fa-solid fa-arrow-right-to-bracket"></i> Sign in
            </Nav.Link>
            <Nav.Link>
            <i class="fa-solid fa-user-plus"></i>Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar