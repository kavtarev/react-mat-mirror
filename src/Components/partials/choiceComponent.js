import React from 'react'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
  btns: {
    boxSizing: 'border-box',
    borderBottom: '1px solid grey',
  },
  active: {
    '&::after': {
      content: '""',
      position: 'absolute',
      transform: 'translateY(11px)',
      display: 'block',
      backgroundColor: 'red',

      width: '100%',
      height: 2,
      //border: '2px solid',
    },
    position: 'relative !important',
    marginRight: 20,
    marginBottom: 10,
    boxSizing: 'border-box',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    display: 'inline-block',
    cursor: 'pointer',
  },
  span: {
    position: 'relative !important',
    marginRight: 20,
    marginBottom: 10,
    boxSizing: 'border-box',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    display: 'inline-block',
    cursor: 'pointer',
  },
})

export default function Choice(props) {
  const classes = useStyles()
  return (
    <div className={classes.btns}>
      <span
        onClick={() => props.setActive(!props.active)}
        className={props.active ? classes.active : classes.span}
      >
        {props.first}
      </span>
      <span
        onClick={() => props.setActive(!props.active)}
        className={!props.active ? classes.active : classes.span}
      >
        {props.second}
      </span>
    </div>
  )
}
