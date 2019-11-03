import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Store from './redux/store';

import { ThemeProvider } from '@material-ui/styles';

import Header from './core/components/Header/Header.container';
import Body from './core/components/Body/Body.container';
import Footer from './core/components/Footer/Footer.container';

import DefaultTheme from './core/themes/default-theme';

import './App.scss';

const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <ThemeProvider theme={DefaultTheme}>
          <div className="app">
            <Header />
            <Body />
            <Footer />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
