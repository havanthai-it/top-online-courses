import actionPool from '../../redux/actionPool';

const INIT_STATE = {};

const homeReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case actionPool.HOME_SAMPLE_ACTION:
      return {
        ...state,
        sample: action.payload.sample
      };
    
    default:
      return state;
  }
}

export default homeReducer;
