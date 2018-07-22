import { connect } from 'react-redux'
import ChatroomComponent from '../components/Chatroom'
// import { sendMessage } from '../actions'

const mapDispatchToProps = dispatch => ({
  // dispatch: (message, author) => {
  //   dispatch(sendMessage(message, author))
  // }
})

export const Chatroom = connect(() => ({}), mapDispatchToProps)(ChatroomComponent)
