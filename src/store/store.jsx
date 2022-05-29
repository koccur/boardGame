import { users } from './user';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    users: users.reducer,
    // todo: add reducers
    games: null,
    events:null
  },
})
