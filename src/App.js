import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Homepage from './components/homepage/homepage.component';
import About from './components/about/about.component';
import SignInSignOut from './components/sign-in-sign-out/sign-in-sign-out.component';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Homepage} />
      <Route path='/about' component={About} />
      <Route path='/signin' component={SignInSignOut} />
    </div>
  );
}

export default App;
