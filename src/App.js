import React, { Component } from 'react';
import './App.css';
import tutorcuriebotImg from './tutorcuriebot.jpg';
import sitemaintainerImg from './site-maintainer.jpg';
import logotwitterImg from './logo-twitter.png';
import logolinkedinImg from './logo-linkedin.png';
import githubImg from './github-mark.png';


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
        <footer className="Footer">
          <div><img className="bot" src={tutorcuriebotImg} alt="TutorCurieBot"/> TutorCurieBot © 2018</div>
          <div className="maintainedby">
            <div>Site maintained by MonalisaC</div>
            <div className="hidden">
              <img className="rounded-corners" src={sitemaintainerImg} alt="myself"/>
            </div>
          </div>
          <div>
            <a href="https://twitter.com/madamecurie10"><img className="profile" src={logotwitterImg} alt="Twitter"/></a>
            <a href="https://www.linkedin.com/in/monalisa-chatterjee"><img className="profile" src={logolinkedinImg} alt="Linkedin"/></a>
            <a href="https://github.com/MonalisaC"><img className="profile" src={githubImg} alt="Github"/></a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App
