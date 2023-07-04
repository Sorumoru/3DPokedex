import React, { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import FilteredPagination from './FilteredPagination'
import Search from './Search'
import axios from 'axios'

import './styles/index.css'

import { Canvas, useFrame } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'

// material ui stuff

function Main () {
  const [checkedState, setCheckedState] = useState<string[]>([])
  const [inputPokemon, setInputPokemon] = useState('')
  const types = useRef([])

  useEffect(() => {
    async function getTypes () {
      const result = await axios.get(
        'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/types.json'
      )
      types.current = result.data.map((type: { english: any }) => type.english)
      setCheckedState(new Array(result.data.length).fill(false))
    }
    getTypes()
  }, [])

  return (
    <>
      <p>woah!!! deez</p>
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

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<Main />)

// import { createRoot } from 'react-dom/client'
// import './styles/index.css'
// import App from './App'

// createRoot(document.getElementById('root')).render(<App />)
