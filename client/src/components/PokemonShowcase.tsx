import React from 'react'
import { Card, CardMedia, CardContent, Grid, Typography } from '@mui/material'
import { Pokemon } from '../Objects'
import { getThreeDigitId } from '../Utils'

function PokemonShowcase ({ pokemon }: { pokemon: Pokemon }) {
  return (
    <>
      <div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p># {pokemon.id}</p>
          <h1>{pokemon.name.english}</h1>
        </div>
        <h3>??? Pokemon</h3>
      </div>
      <div>
        <img
          src={`https://github.com/fanzeyi/pokemon.json/raw/master/images/${getThreeDigitId(
            pokemon.id
          )}.png`}
          alt={pokemon.name.english}
        />
      </div>
      {/* <Card>
        <CardMedia
          component='img'
          height='600'
          image={`https://github.com/fanzeyi/pokemon.json/raw/master/images/${getThreeDigitId(
            pokemon.id
          )}.png`}
          alt={`${pokemon.id}`}
        />
        <CardContent>
          <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='baseline'
          >
            <Grid item>
              <Typography gutterBottom variant='h2' component='div'>
                {`${pokemon.name.english}`}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='h5' color='text' dir='ltr'>
                {`${pokemon.type}`}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='baseline'
            spacing={2}
          >
            <Grid item xs={6}>
              <Typography variant='body1' color='text'>
                {`HP: ${pokemon.base.HP}`}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='body1' color='text'>
                {`Sp. Attack: ${pokemon.base['Sp. Attack']}`}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='body1' color='text'>
                {`Attack: ${pokemon.base.Attack}`}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='body1' color='text'>
                {`Sp. Defense: ${pokemon.base['Sp. Defense']}`}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='body1' color='text'>
                {`Defense: ${pokemon.base.Defense}`}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='body1' color='text'>
                {`Speed: ${pokemon.base.Speed}`}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card> */}
    </>
  )
}

export default PokemonShowcase
