import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const URL = 'https://imdb-api.com/en/API/MostPopularMovies/k_xlchixgs'


export const filmAPI = createApi({
    reducerPath: 'filmAPI',
    baseQuery: fetchBaseQuery({baseUrl : URL}),
    endpoints : (buider) => ({
        fetchFilms : buider.query({
            endpoint : 'MostPopularMovies/k_xlchixgs'
        })
    })
})








const buttonSlice   = createSlice({
    name : 'button'
    ,initialState : {
       currentLanguage : 'en-US'
    },
    reducers : {
        changeLanguage : (state,action) => {
            state.currentLanguage = action.payload
        }

    }

})






export default buttonSlice.reducer;
export const { } = buttonSlice.actions;
