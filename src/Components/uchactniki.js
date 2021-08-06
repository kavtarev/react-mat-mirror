import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import CheckSome from './partials/checkbox'
import ParticipantsSearch from './partials/ParticipantsSearch'
import SetSome from './partials/setPart'
const useStyles = makeStyles({})
export default function Partisipants() {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={6}>
        <h1>availible users</h1>
        <ParticipantsSearch />
        <SetSome />
        <CheckSome />
      </Grid>

      <Grid item xs={6}>
        <h1>participant od event</h1>
      </Grid>
    </Grid>
  )
}
