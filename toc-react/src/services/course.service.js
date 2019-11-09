import api from './api';
import axios from 'axios';

const CourseService = {};

CourseService.add = async (course) => {
  const config = {
    method: 'POST',
    url: api.course,
    data: course
  }
  return await axios(config);
}

export default CourseService;
