import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import Message from './Message'
import './Chatroom.css'

class MessageList extends React.Component {

  componentDidMount() {
      this.scrollToBottom();
  }

  componentDidUpdate() {
      this.scrollToBottom();
      this.updateMoreInfo(this.props.messages[this.props.messages.length - 1].messageData)
  }

  updateMoreInfo(msgData) {
    if ('extra_data' in msgData && 'answer_data' in msgData.extra_data && msgData.extra_data.answer_data !== '') {
      const data = {
        'detail': msgData.extra_data.answer_data.detail,
        'source': msgData.extra_data.answer_data.source
      }
      this.props.dispatch(data)
    }
  }

  scrollToBottom() {
      ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
  }

  render() {
    return (
      <ul className='chats' ref='chats'>
          {
            this.props.messages.map(chat => (
                  <Message key={chat.id}
                    id={chat.id}
                    messageData={chat.messageData}
                    user={chat.author}
                    dispatch={this.props.dispatch}
                    updateMoreInfo={this.updateMoreInfo}
                  />
              ))
          }
      </ul>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // messageData: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default MessageList
