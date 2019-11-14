import React from 'react';
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
          Machine Learning for Beginners
        </div>
        <div className="card-author">
          Andrew Ng
        </div>
        <div className="card-cert-level g-clear-after">
          <div className="g-float-left">Begginer</div>
          <div className="g-float-right">Certificate: yes</div>
        </div>
        <div className="card-rating g-clear-after">
          <div className="g-float-left">
            <span className="rating-star"><Rating name="read-only" value={4.3} precision={0.1} size="small" readOnly /></span>
            <span className="rating-value g-text-bold">4.3</span>&nbsp;&nbsp;
            <span className="rating-number">(365)</span>
          </div>
          <div className="g-float-right">
            <span className="enrollee-number">12,500 students</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseItemView;
