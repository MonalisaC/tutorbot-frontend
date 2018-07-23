import React from 'react';
import { MessageList } from '../containers/MessageList'
import { MessageInput } from '../containers/MessageInput'

class Chatroom extends React.Component {
    render() {
        return (
            <div className="chatroom">
                <h3>Chat with TutorCurieBot</h3>
                <MessageList />
                <MessageInput />
            </div>
        );
    }
}

export default Chatroom;
