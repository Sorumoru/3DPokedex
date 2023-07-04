import React, { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import FilteredPagination from './components/FilteredPagination'
import Search from './components/Search'
import axios from 'axios'

import './styles/index.css'

// material ui stuff

function App () {
  const [checkedState, setCheckedState] = useState<string[]>([])
  const [inputPokemon, setInputPokemon] = useState('')
  const types = useRef<string[]>([])

  useEffect(() => {
    async function getTypes () {
      const result = await axios.get(
        'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/types.json'
      )
      types.current = result.data.map(
        (type: { english: string }) => type.english
      )
      setCheckedState(new Array(result.data.length).fill(false))
    }
    getTypes()
    console.log(types)
  }, [])

  return (
    <>
      <p>woah!!! deez</p>
      <Search
        types={types.current}
        checkedState={checkedState}
        setCheckedState={setCheckedState}
        setInputPokemon={setInputPokemon}
      />
      <FilteredPagination
        types={types.current}
        checkedState={checkedState}
        inputPokemon={inputPokemon}
      />
    </>
  )
}

export default App
