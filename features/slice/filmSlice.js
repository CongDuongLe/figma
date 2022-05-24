import { createSlice } from "@reduxjs/toolkit"
import {LANGUAGES} from '../../src/constant/constant'


const initialState = {
    currentLanguage : 'LANGUAGES.en',
    currentPage: 1,
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

        }
    }
)

export default filmSlice.reducer;
// export actions
export const { changeLanguage,changePage } = filmSlice.actions;

