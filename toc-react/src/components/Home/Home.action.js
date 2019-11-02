import ACTION from '../../redux/action-pool';

const sampleAction = (sample) => {
  return {
    type: ACTION.HOME_SAMPLE_ACTION,
    payload: {
      sample: sample
    }
  }
}

export {
  sampleAction
}
