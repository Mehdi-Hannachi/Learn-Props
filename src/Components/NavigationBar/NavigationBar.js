import React from "react";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">GoMyCode Team</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Members</Nav.Link>
        <Nav.Link href="#features">Skills</Nav.Link>
        <Nav.Link href="#pricing">Stories</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );
};

export default NavigationBar;
