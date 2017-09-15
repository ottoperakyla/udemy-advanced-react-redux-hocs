import { combineReducers } from 'redux';
import authenticationReducer from './reducer_authentication'

const rootReducer = combineReducers({
  authenticated: authenticationReducer
});

export default rootReducer;
