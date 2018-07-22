import React from 'react';
import PropTypes from 'prop-types';
import './Chatroom.css';

class Message extends React.Component {

  updateMoreInfo(msgData) {
    if ('extra_data' in msgData && 'answer_data' in msgData.extra_data && msgData.extra_data.answer_data !== '') {
      const data = {
        'detail': msgData.extra_data.answer_data.detail,
        'source': msgData.extra_data.answer_data.source
      }
      this.props.dispatch(data)
    }
  }

  render() {
    var text = "";
    // var details = ""
    // var source = ""
    if ('messageData' in this.props) {
      const msgData = this.props.messageData;
      text = msgData.text;
      // if ('extra_data' in msgData && 'answer_data' in msgData.extra_data) {
      //   details = msgData.extra_data.answer_data.detail
      //   source = msgData.extra_data.answer_data.source
      // }
    }
    return (
      <li className={`chat ${this.props.user === "bot" ? "left" : "right"}`}
        onClick={(e) => this.updateMoreInfo(this.props.messageData)}>
        {/* {user !== chat.username
        && <img src={chat.img} alt={`${chat.username}'s profile pic`} />
      } */}
      {this.props.user}: {text}
      {/* <div dangerouslySetInnerHTML={{__html: details}}></div>
      <div>{source}</div> */}
    </li>);
  }
}

Message.propTypes = {
  id: PropTypes.number.isRequired,
  // messageData: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
}

export default Message;
