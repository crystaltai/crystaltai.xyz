import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <>
      <StyledNavLink to='/about'>About</StyledNavLink>
      <StyledNavLink to='/stack'>Stack</StyledNavLink>
      <StyledNavLink to='/repos'>Repos</StyledNavLink>
      <StyledNavLink to='/changelog'>Changelog</StyledNavLink>
    </>
  );
};

export default Navbar;

const StyledNavLink = styled(NavLink)`
  background: #f9f9f9;
  padding: 3px 15px;
  font-size: 11px;
  font-family: 'Nunito', sans-serif;
  text-transform: uppercase;
  line-height: 2;
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &:hover {
    filter: brightness(95%);
  }
  &:active {
    filter: brightness(90%);
  }
`;
