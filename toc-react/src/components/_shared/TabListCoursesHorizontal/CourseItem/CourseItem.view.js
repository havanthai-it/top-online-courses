import React, { useEffect, useState } from 'react';
import { Rating } from '@material-ui/lab';

import './CourseItem.view.scss';

const CourseItemView = ({ course, index }) => {

  return (
    <div className="course-item g-noselect">
      <div className="card-thumbnail">
        <img src="https://i.udemycdn.com/course/240x135/805992_d306_8.jpg" />
      </div>
      <div className="card-body">
        <div className="card-title">
          Machine Learning for Beginners | Build chatbot from scratch
        </div>
        <div className="card-author">
          Andrew Ng Baidu
        </div>
        <div className="card-level-platform g-clear-after">
          <div className="g-float-left">Begginer</div>
          <div className="g-float-right">Coursera</div>
        </div>
        <div className="card-rating g-clear-after">
          <div className="g-float-left">
            <span className="rating-star">
              <Rating name="read-only" value={4.3} precision={0.1} size="small" readOnly />
            </span>
            <span className="rating-value g-text-bold">4.3</span>&nbsp;&nbsp;
            <span className="rating-number">(365)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseItemView;
