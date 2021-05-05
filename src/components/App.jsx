import React from 'react';
import {
  Route, Redirect, BrowserRouter, Switch,
} from 'react-router-dom';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import AsteroidItem from '../pages/AsteroidItem/AsteroidItem';
import Asteroids from '../pages/Asteroids/Asteroids';
import Destruction from '../pages/Destruction/Destruction';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <Switch>
            <Route path="/asteroids" component={Asteroids} />
            <Route path="/destruction" component={Destruction} />
            <Route path="/asteroid/:id" component={AsteroidItem} />
            <Redirect to="/asteroids" />
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
