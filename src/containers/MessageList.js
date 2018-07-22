import { connect } from 'react-redux'
import { updateInfo } from '../actions'
import MessageListComponent from '../components/MessageList'

const mapDispatchToProps = dispatch => ({
  dispatch: (moreInfo) => {
    dispatch(updateInfo(moreInfo))
  }
})

export const MessageList = connect(state => ({
  messages: state.messages
}), mapDispatchToProps)(MessageListComponent)
