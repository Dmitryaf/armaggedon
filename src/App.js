import React from 'react';
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Asteroids from './pages/Asteroids/Asteroids';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='container'>
          <Header />
          <Switch>
            <Route path='/asteroids' component={Asteroids} />
            <Route path='/destruction' />
            <Redirect to='/asteroids' />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
