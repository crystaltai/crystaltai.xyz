import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyles from './theme/globalStyles';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import styled from 'styled-components';

const App = () => {
  return (
    <Page>
      <GlobalStyles />
      <Header />
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </div>
      </BrowserRouter>
    </Page>
  );
};

const Page = styled.div`
  margin: auto;
  max-width: 1500px;

  ${'' /* TODO: Update when need to change for smaller screens */}
  ${
    '' /* @media ${device.laptopS} {
    max-width: 1800px;
  } */
  }
`;

export default App;
