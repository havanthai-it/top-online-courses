import ACTION from '../../redux/action-pool';

const INIT_STATE = {};

const homeReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case ACTION.HOME_SAMPLE_ACTION:
      return {
        ...state,
        sample: action.payload.sample
      };
    
    default:
      return state;
  }
}

export default homeReducer;
