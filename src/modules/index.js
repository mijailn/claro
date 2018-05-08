import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import home from 'Modules/home';

export default combineReducers({
  router: routerReducer,
  home
});
