import React from 'react';
import CourseItem from './CourseItem/CourseItem.container';

import './ListCoursesHorizontalView.view.scss';

const ListCoursesHorizontalView = ({ listCourses }) => {
  return (
    <div className="list-courses-horizontal">
      { listCourses.map((course, index) => <CourseItem course={course} index={index} />) }
    </div>
  );
}

export default ListCoursesHorizontalView;
