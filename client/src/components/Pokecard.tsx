import React, { useEffect } from 'react'

import { getThreeDigitId } from '../Utils'

import { Pokemon } from '../Objects'

// https://mui.com/material-ui/react-modal/
function Pokecard({
  pokemon,
  setCurrentPokemon
}: {
  pokemon: Pokemon
  setCurrentPokemon: Function
}) {

  const handleOpen = () => {
    // setOpen(true)
    setCurrentPokemon(pokemon)
  }

  return (
    <>
      <div onClick={handleOpen}>
        <p>{'#' + getThreeDigitId(pokemon.id)}</p>
        <img src={`https://github.com/fanzeyi/pokemon.json/raw/master/sprites/${getThreeDigitId(
          pokemon.id
        )}MS.png`} alt={`${pokemon.id}`} />
      </div>
    </>
  )
}

export default Pokecard
