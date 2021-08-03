import { Container, Grid, makeStyles } from '@material-ui/core'

import React from 'react'
const useStyles = makeStyles({
  item: {},
  text: {
    display: 'flex',
    justifyContent: 'center',
  },
  span: {
    fontSize: 11,
    color: '#ccc',
  },
})

export default function TableHeader(props) {
  const classes = useStyles()
  return (
    <Container>
      <Grid container>
        <Grid data-hide className={classes.item} item xs={2}>
          <span className={classes.span}>date</span>
        </Grid>
        <Grid className={classes.item} item xs={4}>
          <span className={classes.span}>name</span>
        </Grid>
        <Grid className={classes.item} item xs={2}>
          <span className={classes.span}>number</span>
        </Grid>
        <Grid className={classes.item} item xs={2}>
          <span className={classes.span}>coach</span>
        </Grid>
        <Grid className={classes.item} item xs={2}>
          <span className={classes.span}>progress</span>
        </Grid>
      </Grid>
    </Container>
  )
}
