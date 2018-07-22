import { connect } from 'react-redux'
import MessageInputComponent from '../components/MessageInput'
import { sendMessageToServer } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(sendMessageToServer(message, author))
  }
})

export const MessageInput = connect(() => ({}), mapDispatchToProps)(MessageInputComponent)
