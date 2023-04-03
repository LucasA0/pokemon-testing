"use client"

import { useRef } from 'react';
import { store } from '@/store/page';
import { setStartupPokemon } from '@/store/SearchSlice/page';
import { iPokemon } from '@/interfaces';

export default function Preloader({ pokemons }: { pokemons: iPokemon[] }) {
    const loaded  = useRef(false)
    if (!loaded.current) {
        store.dispatch(setStartupPokemon(pokemons))
        loaded.current = true
    }

    return null
}