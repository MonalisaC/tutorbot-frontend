import * as types from '../constants/ActionTypes'

const initialState = {
  detail: '',
  source: '',
}

const moreInfo = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_INFO:
      return {
          detail: action.detail,
          source: action.source,
        };
    default:
      return state
  }
}

export default moreInfo
