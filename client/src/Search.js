import React, { useEffect, useState } from 'react'

function Search({ types, checkedState, setCheckedState, setInputPokemon }) {

  const onHandleSearch = (e) => {
    console.log(e.target.value)
    setInputPokemon(e.target.value);
  }

  const onChangeHandle = (type) => {
    const index = types.current.indexOf(type);
    const newCheckedState = checkedState.map((item, i) => i === index ? !item : item);
    setCheckedState(newCheckedState);
  }

  return (
    <>
      <div>
        <input type="text" placeholder="Search.." onChange={onHandleSearch}></input>
      </div>
      <div>
        {
          types.current.map(type => {
            return (
              <span key={type}>
                <input type="checkbox" name="pokeTypes" value={type} id={type} onChange={() => { onChangeHandle(type) }} />
                <label htmlFor={type}>{type}</label>
                <br />
              </span>
            )
          })
        }
      </div>
    </>
  )
}

export default Search