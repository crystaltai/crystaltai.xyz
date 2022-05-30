import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import GithubLogo from '../../images/github.svg';
import LinkedinLogo from '../../images/linkedin.svg';
import TwitterLogo from '../../images/twitter.svg';
import Logo from '../../images/logo.png';

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to='/'>
        <img src={Logo} alt='Logo' width='50px' />
      </Link>
      <Navigation>
        <Navbar />
        <NavBtn
          onClick={() => {
            window.open('https://github.com/crystaltai');
          }}
        >
          <img src={GithubLogo} alt='Github Logo' width='18px' />
        </NavBtn>
        <NavBtn
          onClick={() => {
            window.open('https://linkedin.com/in/crystaltai');
          }}
        >
          <img src={LinkedinLogo} alt='Linkedin Logo' width='19px' />
        </NavBtn>
        <NavBtn
          onClick={() => {
            window.open('https://twitter.com/crystaltaixyz');
          }}
        >
          <img src={TwitterLogo} alt='Twitter Logo' width='18px' />
        </NavBtn>
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.section`
  ${'' /* background: blue; */}
  margin-top: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const NavBtn = styled.button`
  background: #f9f9f9;
  padding: 3px 15px;
  line-height: 0;
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
