import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

import './Header.view.scss';

class HeaderView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-view">
        <Container maxWidth="lg">
          <header>
            <div className="logo-container">
              LOGO
            </div>

            <div className="nav-horizontal">
              <nav>
                <ul>
                  <li><Link to="/#">Topics</Link></li>
                  <li><Link to="/about">About</Link></li>
                </ul>
              </nav>
            </div>
          </header>
        </Container>
      </div>
    );
  }
}

export default HeaderView;
