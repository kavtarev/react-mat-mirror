import { Container } from '@material-ui/core'
import React from 'react'
import ButtonAppBar from './partials/nav'
import PlanBlock from './partials/plan'

const style = {
  padding: 0,
  height: 152,
}

export default function Header() {
  return (
    <Container style={style}>
      <ButtonAppBar />
      {/*   <PlanBlock /> */}
    </Container>
  )
}
