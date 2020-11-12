import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user from './user';
import conversation from './conversation';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
}

const rootReducer = combineReducers({
  // reducerName
  user,
  conversation,
});

export default persistReducer(persistConfig, rootReducer);