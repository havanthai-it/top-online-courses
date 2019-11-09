import api from './api';
import axios from 'axios';

const PlatformService = {};

PlatformService.getMany = async () => {
  const config = {
    method: 'GET',
    url: api.platform
  }
  return await axios(config);
}

export default PlatformService;
