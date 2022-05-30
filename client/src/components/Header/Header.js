import React from 'react';
import styled from 'styled-components';
import GithubLogo from '../../images/github.svg';
import LinkedinLogo from '../../images/linkedin.svg';
import TwitterLogo from '../../images/twitter.svg';
import Logo from '../../images/logo.png';

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <img src={Logo} alt='Logo' width='50px' />
      </div>
      <Navigation>
        <NavBtn>About</NavBtn>
        <NavBtn>Stack</NavBtn>
        <NavBtn>Repos</NavBtn>
        <NavBtn>Changelog</NavBtn>
        <NavBtn>
          <img src={GithubLogo} alt='Github Logo' width='18px' />
        </NavBtn>
        <NavBtn>
          <img src={LinkedinLogo} alt='Linkedin Logo' width='18px' />
        </NavBtn>
        <NavBtn>
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
  padding: 5px 15px;
  font-size: 11px;
  font-family: 'Nunito', sans-serif;
  text-transform: uppercase;
  text-align: center;
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
