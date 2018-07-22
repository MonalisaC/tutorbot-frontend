import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import chat from './reducers'

export default function configureStore() {
  return createStore(
    chat,
    applyMiddleware(thunk)
  );
}
