import React from 'react';

const CourseItemView = ({ course, index }) => {
  return (
    <div className="course-item">
      <div>
        {index}
      </div>
    </div>
  );
}

export default CourseItemView;
