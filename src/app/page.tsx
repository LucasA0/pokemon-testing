import Providers from '@/components/Provider/page'
import SearchInput from '@/components/SearchInput/page'
import Preloader from '@/components/Preloader/page'

import { store } from '@/store/page'
import { setStartupPokemon } from "@/store/SearchSlice/page"

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search")
  const data = await req.json()
  store.dispatch(setStartupPokemon(data))

  return (
    <main>
      <Preloader pokemons={data} />
        <Providers>
          <SearchInput />
        </Providers>
    </main>
  )
}
