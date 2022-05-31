import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/logo.png';

const Intro = () => {
  return (
    <IntroWrapper>
      <IntroPicture>
        <img src={Logo} alt='Logo' width='250px' />
      </IntroPicture>
      <IntroMessageWrapper>
        <h2>Hey 👋</h2>
        <h3>My name is Crystal and I'm a Software Engineer.</h3>
        <h3>
          This is my digital garden, where I write about the things I'm working on and share what
          I've learned.
        </h3>
      </IntroMessageWrapper>
    </IntroWrapper>
  );
};

export default Intro;

const IntroWrapper = styled.section`
  max-width: 60%;
  margin: 40px auto;
  display: flex;
  align-items: center;
`;

const IntroPicture = styled.div`
  img {
    border-radius: 50%;
  }
`;

const IntroMessageWrapper = styled.div`
  margin-left: 30px;
`;
