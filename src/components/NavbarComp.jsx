import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="#">⚽ FIFA App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#players">Players</Nav.Link>
            <Nav.Link href="#matches">Matches</Nav.Link>
            <Nav.Link href="#teams">Teams</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
