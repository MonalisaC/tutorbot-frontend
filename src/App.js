import React, { Component } from 'react';
import './App.css';
import tutorcuriebotImg from './tutorcuriebot.jpg';

import { Chatroom } from './containers/Chatroom'
import { MoreInformation } from './containers/MoreInformation'

import { config } from './config'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="TopNav">
            <a href={config.tutorbotBaseUrl} target="_blank"><img src={tutorcuriebotImg} alt="TutorCurieBot"/>TutorCurieBot</a>
            <a href={config.tutorbotBaseUrl+config.adminEndpoint} target="_blank">Admin</a>
        </div>
        <div className="App-container">
          <Chatroom />
          <MoreInformation />
        </div>
      </div>
    );
  }
}

export default App
