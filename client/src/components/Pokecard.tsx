import React, { useEffect } from 'react'

// material ui stuff
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Grid from '@mui/material/Grid'

import { Pokemon } from '../Objects'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop: '30'
  }
}

// https://mui.com/material-ui/react-modal/
function Pokecard ({ pokemon }: { pokemon: Pokemon }) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const getThreeDigitId = (id: number) => {
    if (id < 10) return `00${id}`
    if (id < 100) return `0${id}`
    return id
  }

  return (
    <>
      <Button onClick={handleOpen}>
        <Card sx={{ maxWidth: 345 }}>
          <p>testestest</p>
          <CardMedia
            component='img'
            height='140'
            image={`https://github.com/fanzeyi/pokemon.json/raw/master/images/${getThreeDigitId(
              pokemon.id
            )}.png`}
            alt={`${pokemon.id}`}
          />
        </Card>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Card sx={style}>
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
        </Card>
      </Modal>
    </>
  )
}

export default Pokecard
