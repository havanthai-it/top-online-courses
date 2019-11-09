import React from 'react';

import AddCourse from './AddCourse/AddCourse.container';
import './Admin.view.scss';

class AdminView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="admin-view">
        <AddCourse />
      </div>
    );
  }
}

export default AdminView;
