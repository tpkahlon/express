import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Menu = ({ location }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Sandook
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="menu" />
      <Navbar.Collapse id="menu">
        <Nav activeKey={location.pathname} className="ml-auto">
          <NavLink className="nav-link" to="/jaanmahal">
            JaanMahal
          </NavLink>
          <NavLink className="nav-link" to="/mahalvlogs">
            MahalVlogs
          </NavLink>
          <NavLink className="nav-link" to="/punjabivlogger">
            PunjabiVlogger
          </NavLink>
          <NavLink className="nav-link" to="/primeasia">
            PrimeAsia
          </NavLink>
          <NavLink className="nav-link" to="/jusreign">
            JusReign
          </NavLink>
          <NavLink className="nav-link" to="/aktv">
            AKTV
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Menu);
