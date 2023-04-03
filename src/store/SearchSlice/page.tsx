import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

import { iPokemon } from "@/interfaces";

export interface SearchState {
    search: string;
    startupPokemon: iPokemon[]
}

const initialState: SearchState = {
    search: "",
    startupPokemon: []
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setStartupPokemon: (state, action: PayloadAction<iPokemon[]>) => {
            state.startupPokemon = action.payload
        }
    }
})

export const { setSearch, setStartupPokemon } = searchSlice.actions;
export default searchSlice.reducer;