import React from 'react';
import PropTypes from 'prop-types';
import BotImg from '../tutorcuriebot.jpg';
import './Chatroom.css';

class Message extends React.Component {

  hasMoreInfo() {
    const msgData = this.props.messageData;
    return ('extra_data' in msgData && 'answer_data' in msgData.extra_data && msgData.extra_data.answer_data !== '')
  }

  updateMoreInfo() {
    const msgData = this.props.messageData;
    if (this.hasMoreInfo()) {
      const data = {
        'detail': msgData.extra_data.answer_data.detail,
        'source': msgData.extra_data.answer_data.source
      }
      this.props.dispatch(data)
    }
  }

  render() {
    let text = "";
    if ('messageData' in this.props) {
      const msgData = this.props.messageData;
      text = msgData.text;
    }
    let user = 'you:'
    if (this.props.user === "bot") {
      user = <img src={BotImg} alt='bot' />
    }
    return (
      <li className={`chat ${this.props.user === "bot" ? "left" : "right"} ${this.hasMoreInfo() ? "hasMoreInfo" : ""}`}
        onClick={(e) => this.updateMoreInfo()}>
        {/* {user !== chat.username
        && <img src={chat.img} alt={`${chat.username}'s profile pic`} />
      } */}
      {user} {text}{this.hasMoreInfo() && '...'}
    </li>);
  }
}

Message.propTypes = {
  id: PropTypes.number.isRequired,
  // messageData: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
}

export default Message;
