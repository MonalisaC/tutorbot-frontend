import axios from "axios";
import * as types from '../constants/ActionTypes'

import { config } from '../config.js';

const apiUrl = config.tutorbotBaseUrl + config.apiEndpoint;

let nextMessageId = 0

const sendMessage = (messageData, author) => ({
  type: types.SEND_MESSAGE,
  id: nextMessageId++,
  messageData,
  author
})

const recvMessage = (messageData, author) => ({
  type: types.RECV_MESSAGE,
  id: nextMessageId++,
  messageData,
  author
})

const updateInfoInternal = (moreInfo) => ({
  type: types.UPDATE_INFO,
  detail: moreInfo.detail,
  source: moreInfo.source,
})

export function updateInfo(moreInfo) {
  return (dispatch) => {
    dispatch(updateInfoInternal(moreInfo));
  }
}

export function sendMessageToServer(message, author) {
  return (dispatch) => {
    let messageData = {'text': message}
    dispatch(sendMessage(messageData, author));
    axios.post(apiUrl, messageData).then((response)=>{
      dispatch(recvMessage(response.data, 'bot'));
    }).catch( (error) => {
      console.log("error getting response");
      console.log(error);
    } );
  }
}
