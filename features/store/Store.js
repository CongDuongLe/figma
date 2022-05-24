import { configureStore } from '@reduxjs/toolkit';
import filmReducer from '../slice/filmSlice';
import { setupListeners } from '@reduxjs/toolkit/query'
import {
    filmAPI
} from '../slice/buttonSlice';

// create store instance
export const store = configureStore({
    reducer: {
        [filmAPI.reducerPath]: filmAPI.reducer,
        film : filmReducer,

     },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(filmAPI.middleware),

})
