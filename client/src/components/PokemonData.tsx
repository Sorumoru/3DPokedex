import React from "react"
import { Pokemon } from "../Objects"

function PokemonData({ pokemon }: { pokemon: Pokemon }) {
    return (
        <div>
            <h1>{`HP: ${pokemon.base.HP}`}</h1>
            <h1>{`Attack: ${pokemon.base.Attack}`}</h1>
            <h1>{`Defense: ${pokemon.base.Defense}`}</h1>
            <h1>{`Sp. Attack: ${pokemon.base['Sp. Attack']}`}</h1>
            <h1>{`Sp. Defense: ${pokemon.base['Sp. Defense']}`}</h1>
            <h1>{`Speed: ${pokemon.base.Speed}`}</h1>
        </div>
    )
}

export default PokemonData