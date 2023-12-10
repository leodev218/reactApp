import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink
} from "reactstrap";
import logo from "../assets/img/kairos.png";

function ReactBar() {
  return (
    <div>
      <Navbar className="my-2 mt-0 reactbar">
        <NavbarBrand href="/" className="text-light">
          <img
            alt="Kairos Tower"
            src={logo}
            style={{
              height: 40,
              width: 40,
              marginRight: 5
            }}
          />
          Kairos Tower
        </NavbarBrand>
        <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
      </Navbar>
    </div>
  );
}

export default ReactBar;
