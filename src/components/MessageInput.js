import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './Chatroom.css';

class MessageInput extends React.Component {

  submitMessage(e) {
      e.preventDefault();

      var text = ReactDOM.findDOMNode(this.refs.msg).value
      if (text !== "") {
        ReactDOM.findDOMNode(this.refs.msg).value = "";
        this.props.dispatch(text, 'you');
      }
  }

  render() {
    return (
      <form className="input" onSubmit={(e) => this.submitMessage(e)}>
        <input type="text" ref="msg" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

MessageInput.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default MessageInput;
