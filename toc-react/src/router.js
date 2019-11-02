import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home.container';

const RouterOutlet = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
    </Switch>
  );
}

export default RouterOutlet;
