import {combineReducers} from 'redux';
import mainReducer from './mainReducer';

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const appReducer = combineReducers({
  main: mainReducer,
});

export default rootReducer;
