import React from 'react';
import styled from 'styled-components';
import Intro from '../../components/Intro/Intro';

const Home = () => {
  return (
    <HomeWrapper>
      <Intro />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  ${'' /* background: blue; */}
  margin: 0 auto;
  display: flex:
  flex-direction: column;
`;
