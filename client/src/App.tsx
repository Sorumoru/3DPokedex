import React, { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import FilteredPagination from './components/FilteredPagination'
import Search from './components/Search'
import axios from 'axios'
import PokemonShowcase from './components/PokemonShowcase'
import { Pokemon } from './Objects'

import './styles/index.css'
import PokemonData from './components/PokemonData'


function App() {
  let missingno: Pokemon = {
    id: 0,
    name: {
      chinese: '失踪了。',
      english: 'Missingno.',
      french: 'Non manquant.',
      japanese: '行方不明。'
    },
    type: ['???'],
    base: {
      Attack: 0,
      Defense: 0,
      HP: 0,
      'Sp. Attack': 0,
      'Sp. Defense': 0,
      Speed: 0
    }
  }

  const [checkedState, setCheckedState] = useState<boolean[]>([])
  const [inputPokemon, setInputPokemon] = useState('')
  const [currentPokemon, setCurrentPokemon] = useState(missingno)
  const [openSearchDrawer, setOpenSearchDrawer] = useState(false)
  const types = useRef<string[]>([])

  useEffect(() => {
    async function getTypes() {
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
    console.log(inputPokemon + 'wowzers')
  }, [])

  const toggleDrawer = () => {
    setOpenSearchDrawer(!openSearchDrawer)
  }

  return (
    <>
      <div className='whole-thing'>
        <div className='left-half'>
          <PokemonShowcase pokemon={currentPokemon} />
        </div>
        <div className='right-half'>
          <div className='poke-box'>
            <PokemonData pokemon={currentPokemon} />


            <FilteredPagination
              types={types.current}
              checkedState={checkedState}
              inputPokemon={inputPokemon}
              setCurrentPokemon={setCurrentPokemon}
            />
            <button onClick={toggleDrawer}>Advanced Search</button>
            {openSearchDrawer && (
              <div className='advanced-search'></div>
            )}
            {/* <Button onClick={toggleDrawer(true)}>Test Button</Button>
              <Drawer
                anchor='top'
                open={openSearchDrawer}
                onClose={toggleDrawer(false)}
                hideBackdrop={false}
              >
                <Search
                  types={types.current}
                  checkedState={checkedState}
                  inputPokemon={inputPokemon}
                  setCheckedState={setCheckedState}
                  setInputPokemon={setInputPokemon}
                />
              </Drawer> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
