import api from './api';
import axios from 'axios';

const CategoryService = {};

CategoryService.get_many = async () => {
  const config = {
    method: 'GET',
    url: api.category
  }
  return await axios(config);
}

export default CategoryService;
