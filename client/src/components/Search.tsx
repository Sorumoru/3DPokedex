import React, { useEffect, useState } from 'react'

function Search ({
  types,
  checkedState,
  setCheckedState,
  setInputPokemon
}: {
  types: string[]
  checkedState: string[]
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
          placeholder='Search..'
          onChange={onHandleSearch}
        ></input>
      </div>
      <div>
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
              />
              <label htmlFor={type}>{type}</label>
              <br />
            </span>
          )
        })}
      </div>
    </>
  )
}

export default Search
