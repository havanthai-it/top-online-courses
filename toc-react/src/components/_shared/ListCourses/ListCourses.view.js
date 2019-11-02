import React from 'react';
import CourseItem from './CourseItem/CourseItem.container';

const ListCoursesView = ({ listCourses }) => {
  return (
    <div className="list-courses">
      { listCourses.map((course, index) => <CourseItem course={course} index={index} />) }
    </div>
  );
}

export default ListCoursesView;
