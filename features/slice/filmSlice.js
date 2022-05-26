import { createSlice } from "@reduxjs/toolkit"
import {LANGUAGES} from '../../src/constant/constant'



const initialState = {
    currentLanguage : LANGUAGES.en,
    currentPage: 1,
    searchFilm : '',
    currentCategory: 'now_playing',
}

const filmSlice = createSlice(
    {
        name: "film",
        initialState,
        reducers: {
            // change language to 'vi_VI'
            changeLanguage: (state, action) => {
                state.currentLanguage = action.payload
                console.log(action.payload)
            },
            changePage: (state, action) => {
                state.currentPage = action.payload
            },
            searchFilter: (state, action) => {
                state.searchFilm = action.payload
            },

        }
    }
)

export default filmSlice.reducer;
// export actions
export const { changeLanguage,changePage, searchFilter } = filmSlice.actions;

