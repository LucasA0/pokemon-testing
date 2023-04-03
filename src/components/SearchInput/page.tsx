'use client'

import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux/es/types"

import PokemonTable from "../PokemonTable/page"

import { RootState, AppDispatch } from "@/store/page"
import { setSearch } from "@/store/SearchSlice/page"
import { pokemonApi } from "@/store/PokemonAPI"
import { iPokemon } from "@/interfaces"
import { useEffect } from "react"

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default function SearchInput() {
    const dispatch = useAppDispatch();
    const search = useAppSelector((state) => state.search.search)
    const startupPokemon = useAppSelector((state) => state.search.startupPokemon)
    const data = useAppSelector((state) => state.pokemonApi.queries[`search("${search}")`]?.data as iPokemon[])

    useEffect(() => {
        dispatch(pokemonApi.endpoints.search.initiate(search));
    }, [dispatch, search])

    return (
        <div>
            <input type="text" value={search} onChange={(event) => dispatch(setSearch(event.target.value))} />
            <PokemonTable pokemons={search.length ? data ?? [] : startupPokemon} />
        </div>
    )
}