import {
  Container,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React, { useState } from 'react'
import Choice from './partials/choiceComponent'
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'
import Osnova from './osnovnoe'

const useStyle = makeStyles({
  container: {
    backgroundColor: 'salmon',
    width: '70vw',
    height: '100%',
    marginRight: 0,
    borderLeft: '3px solid grey',
    boxSizing: 'border-box',
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})
export default function Popup(props) {
  const classes = useStyle()
  let [active, setActive] = useState(true)
  const noHandle = (e) => {
    e.stopPropagation()
  }
  return (
    <Container onClick={noHandle} className={classes.container}>
      <div className={classes.head}>
        <Typography variant='h5'> planing</Typography>
        <div>
          <IconButton>
            <CheckIcon color='primary' />
          </IconButton>
          <IconButton onClick={props.close}>
            <CloseIcon />
          </IconButton>
        </div>
      </div>

      <Choice
        first='osnovnoe'
        second='uchastniki'
        active={active}
        setActive={setActive}
      />

      {active && <Osnova />}
      {!active && 'not so active'}
    </Container>
  )
}
