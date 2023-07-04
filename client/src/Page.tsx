import React from 'react'
import Pokemon from './Pokemon'

function page ({
  currentPokemons,
  currentPage
}: {
  currentPokemons: any[]
  currentPage: number
}) {
  return (
    <div>
      <h1>Page number {currentPage}</h1>
      <div className='pokemon-list'>
        {currentPokemons.map(item => {
          return <Pokemon key={item.id} pokemon={item} />
        })}
      </div>
    </div>
  )
}

export default page
