import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

import './Footer.view.scss';

class FooterView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer-view">
        <Container maxWidth="lg">
          <footer>
            
          </footer>
        </Container>
      </div>
    );
  }
}

export default FooterView;
