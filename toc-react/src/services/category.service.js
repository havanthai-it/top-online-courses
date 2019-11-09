import api from './api';
import axios from 'axios';

const CategoryService = {};

/**
 * Get all categories
 */
CategoryService.getMany = async () => {
  const config = {
    method: 'GET',
    url: api.category
  }
  return await axios(config);
}

export default CategoryService;
