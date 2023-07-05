import React from 'react'
import Pokecard from './Pokecard'
import { Pokemon } from '../Objects'

function Page({
  currentPokemons,
  currentPage
}: {
  currentPokemons: Pokemon[]
  currentPage: number
}) {
  console.log(currentPokemons)
  return (
    <div>
      <p>Page number {currentPage}</p>
      <div className='pokemon-list'>
        {currentPokemons.map(item => {
          return <Pokecard key={item.id} pokemon={item} />
        })}
      </div>
    </div>
  )
}

export default Page
