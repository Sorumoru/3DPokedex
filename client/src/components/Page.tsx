import React from 'react'
import Pokecard from './Pokecard'
import { Pokemon } from '../Objects'

function Page({
  currentPokemons,
  currentPage,
  setCurrentPokemon
}: {
  currentPokemons: Pokemon[]
  currentPage: number
  setCurrentPokemon: Function
}) {
  console.log(currentPokemons)
  return (

    <div className='pokemon-list'>
      {currentPokemons.map(item => {
        return (
          <Pokecard
            key={item.id}
            pokemon={item}
            setCurrentPokemon={setCurrentPokemon}
          />
        )
      })}
    </div>
  )
}

export default Page
