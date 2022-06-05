import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import './App.css';

const App = () => {
  return (
    <div className='content'>
      <Router>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
      </Router>
    </div>
  );
};

export default App;
