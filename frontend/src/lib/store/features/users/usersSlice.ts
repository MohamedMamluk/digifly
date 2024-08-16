import { UserResponse } from '@/types/user';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface UsersState {
  data: UserResponse[];
}

// Define the initial state using that type
const initialState: UsersState = {
  data: [],
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addSingleUser: (state, action: PayloadAction<UserResponse>) => {
      state.data.push(action.payload);
    },
    addUsers: (state, action: PayloadAction<UserResponse[]>) => {
      state.data = action.payload;
    },
  },
});

export const { addUsers, addSingleUser } = userSlice.actions;

export default userSlice.reducer;
