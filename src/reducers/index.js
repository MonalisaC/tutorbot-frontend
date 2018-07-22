import { combineReducers } from "redux"
import messages from "./messages"
import moreInfo from "./moreInfo"

const chat = combineReducers({
  messages,
  moreInfo,
});

export default chat
