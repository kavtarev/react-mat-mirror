import { Button, Container, Divider, makeStyles } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
})
export default function SetSome() {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <span>total num</span>
      <Button> nastroit</Button>
      <Button> sbros</Button>
    </Container>
  )
}
