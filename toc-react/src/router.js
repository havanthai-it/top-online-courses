import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from './admin/Admin.container';
import Home from './components/Home/Home.container';
import Category from './components/Category/Category.container';
import Topic from './components/Topic/Topic.container';
import Tag from './components/Tag/Tag.container';
import Blog from './components/Blog/Blog.container';

const RouterOutlet = () => {
  return (
    <Switch>
      <Route exact path='/admin' component={Admin} />
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/courses/:category' component={Category} />
      <Route exact path='/courses/:category/:topic' component={Topic} />
      <Route exact path='/courses/:category/:topic/:tag' component={Tag} />
    </Switch>
  );
}

export default RouterOutlet;
