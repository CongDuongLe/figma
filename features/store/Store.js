import { configureStore } from '@reduxjs/toolkit';
import filmReducer from '../slice/filmSlice';
import authReducer from '../slice/authSlice';
import { setupListeners } from '@reduxjs/toolkit/query'


// create store instance
export const store = configureStore({
    reducer: {
        film : filmReducer,
        auth : authReducer,

     },


})
