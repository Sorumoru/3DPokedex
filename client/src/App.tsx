import React, { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import FilteredPagination from './components/FilteredPagination'
import Search from './components/Search'
import axios from 'axios'
import Pokedata from './components/Pokedata'
import { Pokemon } from './Objects'
import { Button, Drawer } from '@mui/material'

import './styles/index.css'

// material ui stuff

function App () {
  let poke: Pokemon = {
    id: 99999,
    name: {
      chinese: 'string',
      english: 'string',
      french: 'string',
      japanese: 'string'
    },
    type: ['normal'],
    base: {
      Attack: 1,
      Defense: 1,
      HP: 1,
      'Sp. Attack': 1,
      'Sp. Defense': 1,
      Speed: 1
    }
  }
  const [checkedState, setCheckedState] = useState<boolean[]>([])
  const [inputPokemon, setInputPokemon] = useState('')
  const [currentPokemon, setCurrentPokemon] = useState(poke)
  const [openSearchDrawer, setOpenSearchDrawer] = useState(false)
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
    console.log(inputPokemon + 'wowzers')
  }, [])

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }
      setOpenSearchDrawer(open)
    }

  return (
    <>
      <div className='whole-thing'>
        <div className='pokedex-half'>Pokedex half</div>
        <div className='search-half'>
          <Button onClick={toggleDrawer(true)}>Test Button</Button>
          <Drawer
            anchor='right'
            open={openSearchDrawer}
            onClose={toggleDrawer(false)}
          >
            <Search
              types={types.current}
              checkedState={checkedState}
              setCheckedState={setCheckedState}
              setInputPokemon={setInputPokemon}
            />
          </Drawer>

          {/* <Pokedata pokemon={currentPokemon} /> */}
          <FilteredPagination
            types={types.current}
            checkedState={checkedState}
            inputPokemon={inputPokemon}
          />
        </div>
      </div>
    </>
  )
}

export default App
