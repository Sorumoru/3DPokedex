import React, { useEffect, useState } from 'react'
import Page from './Page'
import Pagination from './Pagination';
import axios from 'axios'
function FilteredPagination({ types, checkedState, inputPokemon }) {
  const [pokemons, setPokemons] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(10);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
      .then(res => res.data)
      .then(data => {
        // filter based on the checkedState
        console.log(checkedState);
        console.log(inputPokemon);
        data = (data.filter(pokemon => checkedState.every((checked, i) => !checked || pokemon.type.includes(types.current[i]))));
        data = (data.filter(pokemon => pokemon.name.english.toLowerCase().includes(inputPokemon.toLowerCase())));
        console.log(data);
        return data
      })
      .then(res => {
        setPokemons(res)
      })
      .catch(err => console.log("err", err))
  }, [checkedState, inputPokemon])



  const indexOfLastRecord = currentPage * pokemonsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstRecord, indexOfLastRecord)
  const numberOfPages = Math.ceil(pokemons.length / pokemonsPerPage);

  return (
    <>
      < Page currentPokemons={currentPokemons} currentPage={currentPage} />
      < Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default FilteredPagination