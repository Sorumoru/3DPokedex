import React from 'react'
import { Card, CardMedia, CardContent, Grid, Typography } from '@mui/material'
import { Pokemon } from '../Objects'
import { getThreeDigitId } from '../Utils'

function PokemonShowcase({ pokemon }: { pokemon: Pokemon }) {
  return (
    <>
      {
        /**
         * TODO: for angled cutoff bug, we can clip-path the black part
         * instead of the green part.
         */
      }
      <div className='top-info'>
        <div className='name-card'>
          <div className='name-card-left'>
            <img
              src={`https://github.com/fanzeyi/pokemon.json/raw/master/sprites/${getThreeDigitId(
                pokemon.id
              )}MS.png`}
              alt={pokemon.name.english}
            />
            <p>No. {getThreeDigitId(pokemon.id)}</p>
            <div className='name-card-cutoff'></div>
          </div>
          <div className='name-card-right'>
            <h1>{pokemon.name.english}</h1>
          </div>
        </div>
        <h3>??? Pokemon</h3>
      </div>

      {/* <div className='pokemon-img'>
        <img
          src={`https://github.com/fanzeyi/pokemon.json/raw/master/images/${getThreeDigitId(
            pokemon.id
          )}.png`}
          alt={pokemon.name.english}
        />
      </div> */}
    </>
  )
}

export default PokemonShowcase
