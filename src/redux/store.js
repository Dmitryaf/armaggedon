import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';

import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  dataReducer,
});

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(save(), thunk),
)(createStore);

const store = createStoreWithMiddleware(rootReducer, load());

export default store;
