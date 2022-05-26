import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
    users: [
        user =  {
            user_name: '',
            user_email: '',
            user_password: '',
            user_confirmPassword: '',
            created_at: '',
        },
    ],
};

const authSlice = createSlice(
    {
    name: 'auth',
    initialState,
    reducers: {
      authSuccess: (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.users.push = action.payload;

      },
        register: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            // push user to users array
            state.users.push(action.payload);

        },
        logout: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.users = [];
        },
    },
  },
);

export default authSlice.reducer;
export const { authSuccess,logout, register } = authSlice.actions;
