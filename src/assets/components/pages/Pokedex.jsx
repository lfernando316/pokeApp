import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../pokedex/CardPoke'
import InputSearch from '../pokedex/InputSearch'
import Pagination from '../pokedex/Pagination'
import SelectByType from '../pokedex/SelectByType'
import './styles/pokedex.css'
import Header from '../shared/Header'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [typeSelect, setTypeSelect] = useState('All pokemons')

  useEffect(() => {
    if (typeSelect !== 'All pokemons') {
      axios.get(typeSelect)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))
    } else {
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
      axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    }
  }, [typeSelect])


  const userName = useSelector(state => state.userName)

  /* logica de paginacion */
  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(8)
  const initialPoke = (page - 1) * pokePerPage
  const finalPoke = (page * pokePerPage)

  return (
    <div>
      <Header />
      <header className='header'>
        <p className='header__text'><span className='header__span'>Welcome {userName}</span>, here you can find your favorite pokemon</p>
      </header>
      <aside className='aside__container'>
        <InputSearch ca />
        <SelectByType
          setTypeSelect={setTypeSelect}
          setPage={setPage} />
      </aside>
      <main>
        <div className='card-container'>
          {
            pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
              <CardPoke
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          }
        </div>
      </main>
      <div className='pagination'>
        <Pagination
          page={page}
          pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
          setPage={setPage} />
      </div>
    </div>
  )
}

export default Pokedex 
