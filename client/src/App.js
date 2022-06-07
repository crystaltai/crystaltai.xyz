import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='content'>
        <Header />
        <div className='main-content'>
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
              <div>coming soon</div>
            </Route>
            <Route path='/changelog'>
              <div>coming soon</div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
