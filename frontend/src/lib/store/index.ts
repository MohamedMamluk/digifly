import { configureStore } from '@reduxjs/toolkit';
import users from './features/users/usersSlice';

export const makeStore = () => {
  return configureStore({
    reducer: { users },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
