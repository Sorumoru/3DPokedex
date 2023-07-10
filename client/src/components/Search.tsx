import { Checkbox, FormControlLabel } from '@mui/material'
import React, { useEffect, useState } from 'react'

function Search ({
  types,
  checkedState,
  inputPokemon,
  setCheckedState,
  setInputPokemon
}: {
  types: string[]
  checkedState: boolean[]
  inputPokemon: string
  setCheckedState: Function
  setInputPokemon: Function
}) {
  const onHandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setInputPokemon(e.target.value)
  }

  const onChangeHandle = (type: string) => {
    const index = types.indexOf(type)
    const newCheckedState = checkedState.map((item, i) =>
      i === index ? !item : item
    )
    setCheckedState(newCheckedState)
  }

  return (
    <>
      <div>
        <input
          type='text'
          placeholder='Search...'
          onChange={onHandleSearch}
          value={inputPokemon}
        ></input>
      </div>
      <div className='poketype-checkboxes'>
        {types.map((type: string) => {
          return (
            <span key={type}>
              <input
                type='checkbox'
                name='pokeTypes'
                value={type}
                id={type}
                onChange={() => {
                  onChangeHandle(type)
                }}
                checked={checkedState[types.indexOf(type)]}
              />
              <label htmlFor={type}>{type}</label>
            </span>
            // <FormControlLabel
            //   control={
            //     <Checkbox
            //       value={type}
            //       id={type}
            //       onChange={() => {
            //         onChangeHandle(type)
            //       }}
            //     />
            //   }
            //   label={type}
            // />
          )
        })}
      </div>
    </>
  )
}

export default Search
