import React from "react"
import { Pokemon } from "../Objects"
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';

import { Radar } from 'react-chartjs-2'

function PokemonData({ pokemon }: { pokemon: Pokemon }) {

    ChartJS.register(
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Tooltip,
        Legend
    );

    var data = {
        labels: ['HP', 'Attack', 'Defense', 'Sp. Attack', 'Sp. Defense', 'Speed'],
        datasets: [{
            // label: pokemon.name.english,
            label: 'pokestats',
            data: [pokemon.base.HP, pokemon.base.Attack, pokemon.base.Defense, pokemon.base['Sp. Attack'], pokemon.base['Sp. Defense'], pokemon.base.Speed],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        }]
    }

    const options = {
        scales: {
            r: {
                beginAtZero: true,
                max: 250
            }
        },
        plugins: {
            title: {
                display: false
            }
        }
    }
    return (
        <div className="radar-chart">
            <Radar data={data} options={options} />
        </div>
    )
}

export default PokemonData