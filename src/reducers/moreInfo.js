import * as types from '../constants/ActionTypes'

const initialState = {
  detail: '',
  source: '',
}

const moreInfo = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_INFO:
      return action.moreInfo;
    default:
      return state
  }
}

export default moreInfo
