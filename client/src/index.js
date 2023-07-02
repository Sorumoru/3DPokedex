import React, { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import FilteredPagination from './FilteredPagination'
import Search from './Search'
import axios from 'axios'

// material ui stuff

function Main () {
  const [checkedState, setCheckedState] = useState([])
  const [inputPokemon, setInputPokemon] = useState('')
  const types = useRef([])

  useEffect(() => {
    async function getTypes () {
      const result = await axios.get(
        'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/types.json'
      )
      types.current = result.data.map(type => type.english)
      setCheckedState(new Array(result.data.length).fill(false))
    }
    getTypes()
  }, [])

  return (
    <>
      <p>woah!!!</p>
      <Search
        types={types}
        checkedState={checkedState}
        setCheckedState={setCheckedState}
        setInputPokemon={setInputPokemon}
      />
      <FilteredPagination
        types={types}
        checkedState={checkedState}
        inputPokemon={inputPokemon}
      />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Main />)
