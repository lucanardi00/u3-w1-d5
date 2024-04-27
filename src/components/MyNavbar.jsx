import logo from './logo.png'
import React from 'react';
import { Navbar, Nav, NavItem, NavLink, Image } from 'react-bootstrap';
import styles from './MyNavbar.module.css';

const MyNavbar = () => {
  return (
    <Navbar bg="transparent" expand="lg" className="navbar" data-bs-theme="dark">
      <Navbar.Brand href="#home">
        <Image src={logo} alt="Logo" width="100" height="60" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavItem>
            <NavLink href="#home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about">TV Shows</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about">Movies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about">Recently Added</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about">My List</NavLink>
          </NavItem>
        </Nav>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavItem>
              <NavLink href="#">
                <i className="bi bi-search"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about" className={styles.kids}>KIDS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#notifications">
                <i className="bi bi-bell"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">
                <i className="bi bi-person-circle"></i>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
