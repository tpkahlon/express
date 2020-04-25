import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Menu = ({ location }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        JuGaadi
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="menu" />
      <Navbar.Collapse id="menu">
        <Nav activeKey={location.pathname} className="ml-auto">
          <NavLink className="nav-link" to="/one">
            JaanMahal
          </NavLink>
          <NavLink className="nav-link" to="/two">
            MahalVlogs
          </NavLink>
          <NavLink className="nav-link" to="/three">
            PunjabiVlogger
          </NavLink>
          <NavLink className="nav-link" to="/four">
            PrimeAsia
          </NavLink>
          <NavLink className="nav-link" to="/five">
            JusReign
          </NavLink>
          <NavLink className="nav-link" to="/six">
            AKTV
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Menu);
