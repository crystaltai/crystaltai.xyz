import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
