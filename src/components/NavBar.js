import React from 'react'
import { Navbar, Container, Nav} from "react-bootstrap";
import logo from "../assets/family.png";
import styles from '../styles/NavBar.module.css';
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
        <Navbar.Brand className={styles.LogoT}>CityExplorer 
            <img src={logo} alt="logo" height="45" className={styles.LogoM} />
        </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
          <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fa-solid fa-earth-europe"></i>Explore
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/signin"
            >
              <i className="fa-solid fa-arrow-right-to-bracket"></i>Sign in
            </NavLink>
            <NavLink
              to="/signup"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fa-solid fa-user-plus"></i>Sign up
            </NavLink>
            <NavLink
              to="/contact"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fa-solid fa-envelopes-bulk"></i>Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar