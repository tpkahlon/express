import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Navbar, Nav, Image } from "react-bootstrap";

const Menu = ({ location }) => {
  return (
    <Navbar fixed="top" bg="light" expand="md" className="shadow">
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Ontario.svg/1600px-Flag_of_Ontario.svg.png"
          width="24"
          height="24"
          roundedCircle
        />
        <span className="ml-2">Ontario</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="menu" />
      <Navbar.Collapse id="menu">
        <Nav activeKey={location.pathname} className="ml-auto">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/alerts">
            Alerts
          </NavLink>
          <NavLink className="nav-link" to="/loads">
            Loads
          </NavLink>
          <NavLink className="nav-link" to="/roundabouts">
            RoundAbouts
          </NavLink>
          <NavLink className="nav-link" to="/inspectionstations">
            Inspection Stations
          </NavLink>
          <NavLink className="nav-link" to="/truckrestareas">
            TruckRestAreas
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Menu);
