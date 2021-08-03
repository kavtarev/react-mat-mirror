import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import React from 'react'
const useStyles = makeStyles({
  item: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center' },
  text: {
    display: 'flex',
    justifyContent: 'center',
  },
  span: {
    display: 'flex',
    alignItems: 'center',
    color: 'red',
  },
  trans: {
    transform: 'translateY(2px)',
  },
  opa: {
    opacity: 0.4,
  },
})

export default function TableRow({ item }) {
  const classes = useStyles()

  return (
    <Container>
      <Grid className={item.date < 0 ? classes.opa : null} container>
        <Grid className={classes.item} item xs={2}>
          <span>{item.date}</span>
        </Grid>
        <Grid className={classes.item} item xs={4}>
          <span>{item.name}</span>
        </Grid>
        <Grid className={classes.item} item xs={2}>
          <span>{item.num}</span>
        </Grid>
        <Grid data-hide className={classes.item} item xs={2}>
          <span>{item.coach}</span>
        </Grid>
        <Grid className={classes.item} item xs={2}>
          <RotateLeftIcon className={classes.trans} />
          <span className={classes.span}>{item.progress}%</span>
        </Grid>
      </Grid>
    </Container>
  )
}
