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
      <div className="body-view">
        <RouterOutlet />
      </div>
    );
  }
}

export default BodyView;
