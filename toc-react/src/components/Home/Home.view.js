import React from 'react';
import { Link } from 'react-router-dom';

import ListCourses from '../_shared/ListCourses/ListCourses.container';

class HomeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listCourses: [
        {
          name: 'Machine Learning'
        },
        {
          name: 'Data Science'
        },
        {
          name: 'Software Engineering'
        }
      ]
    }
  }

  render() {
    return (
      <div className="home-view">
        <div>Home</div>
        <div>List courses:</div>
        <div>
          <ListCourses listCourses={this.state.listCourses} />
        </div>
      </div>
    );
  }
}

export default HomeView;
