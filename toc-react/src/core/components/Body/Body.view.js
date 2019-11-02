import React from 'react';
import { Container } from '@material-ui/core';
import RouterOutlet from '../../../router'

import './Body.view.scss';

class BodyView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer-view">
        <Container maxWidth="lg">
          <RouterOutlet />
        </Container>
      </div>
    );
  }
}

export default BodyView;
