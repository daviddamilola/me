import React from 'react';
import { Nav, H2, Text } from 'components/Styles';
import { svgs } from 'assets';
import { NavLink } from 'react-router-dom';

/**
 *
 *
 * @return {*}
 */
function NavBar() {
  return (
    <Nav className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img src={svgs.davidLogo} alt="logo" />
        <H2 margin="0px" weight="800" size="15px">
          DAVID OLUWASUSI
        </H2>
      </div>
      <div className="d-flex">
        <NavLink to="/#about">
          <Text size="14px" margin="0px 27px 0px 0px ">ABOUT</Text>
        </NavLink>
        <NavLink to="/#portfolio">
          <Text size="14px" margin="0px 27px 0px 0px ">PORTFOLIO</Text>
        </NavLink>
        <NavLink to="/#contact">
          <Text size="14px" margin="0px 27px 0px 0px ">CONTACT</Text>
        </NavLink>
      </div>
    </Nav>
  );
}

export default NavBar;
