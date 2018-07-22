import * as types from '../constants/ActionTypes'

const messages = (state = [], action) => {
  switch (action.type) {
    case types.RECV_MESSAGE:
    case types.SEND_MESSAGE:
      console.log(state)
      return state.concat([
        {
          messageData: action.messageData,
          author: action.author,
          id: action.id
        }
      ])
    default:
      return state
  }
}

export default messages
