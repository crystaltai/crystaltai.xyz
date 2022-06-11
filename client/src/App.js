import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Repos from './pages/Repos/Repos';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='content'>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/stack'>
            <div>coming soon</div>
          </Route>
          <Route path='/repos'>
            <Repos />
          </Route>
          <Route path='/changelog'>
            <div>coming soon</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
