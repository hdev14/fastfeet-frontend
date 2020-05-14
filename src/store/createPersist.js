import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => persistReducer({
  key: 'fastfeet',
  storage,
  whitelist: ['auth'],
}, reducers);
