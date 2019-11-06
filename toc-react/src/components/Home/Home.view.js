import React from 'react';
import { Link } from 'react-router-dom';

import ListCourses from '../_shared/ListCourses/ListCourses.container';
import GridNavigation from '../_shared/GridNavigation/GridNavigation.container';

import './Home.view.scss';

class HomeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listCourses: [],
      type: 'category',
      listNav: [
          { name: 'Web Development' },
          { name: 'Web Development' },
          { name: 'Web Development' },
          { name: 'Web Development' },
          { name: 'Web Development' },
          { name: 'Web Development' },
      ]
    }
  }

  render() {
    return (
      <div className="home-view">
        <div className="home-main-image">
        </div>
        <br />
        <div>
          <GridNavigation type={this.state.type} listNav={this.state.listNav} />  
        </div>
        
      </div>
    );
  }
}

export default HomeView;
