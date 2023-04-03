import PokemonTable from "../PokemonTable/page";

import { store } from "@/store/page";

export default function SSRPokemonTable() {
    return (
        <div>
            <PokemonTable pokemons={store.getState().search.startupPokemon} />
        </div>
    )
}