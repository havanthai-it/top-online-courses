import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Store from './redux/store';

import Header from './core/components/Header/Header.container';
import Body from './core/components/Body/Body.container';
import Footer from './core/components/Footer/Footer.container';

import './App.scss';

const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
