import actionPool from '../../redux/actionPool';

const sampleAction = (sample) => {
  return {
    type: actionPool.HOME_SAMPLE_ACTION,
    payload: {
      sample: sample
    }
  }
}

export {
  sampleAction
}
