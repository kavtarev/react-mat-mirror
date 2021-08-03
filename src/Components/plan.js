import { Button, Container, Typography, makeStyles } from '@material-ui/core'
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu'
import React, { useState } from 'react'

const useStyles = makeStyles({
  btns: {
    boxSizing: 'border-box',
    borderBottom: '1px solid grey',
  },
  active: {
    '&::after': {
      content: '""',
      position: 'absolute',
      transform: 'translateY(18px)',
      display: 'block',
      backgroundColor: 'red',
      width: '100%',
      height: 2,
      //border: '2px solid',
    },
  },
})

export default function Plan() {
  const classes = useStyles()
  let [active, setActive] = useState(true)
  return (
    <div>
      <Container>
        <Typography
          data-hide
          variant='body1'
          component='h2'
          color='textSecondary'
          align='start'
        >
          Glavnaya - Planirovanie
        </Typography>
        <Typography data-hide variant='h1' component='h1'>
          <RestaurantMenuIcon fontSize='large' /> Planing
        </Typography>
        <div className={classes.btns}>
          <Button
            onClick={() => setActive(!active)}
            className={active ? classes.active : null}
          >
            gruppovoe
          </Button>
          <Button
            onClick={() => setActive(!active)}
            className={!active ? classes.active : null}
          >
            individual
          </Button>
        </div>
      </Container>
    </div>
  )
}
