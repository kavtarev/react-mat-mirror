import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  main: {
    display: 'flex',
    marginLeft: 50,
  },
}))

export default function ThreeSelect(props) {
  const classes = useStyles()
  return (
    <div className={classes.main}>
      <form className={classes.container} noValidate>
        <TextField
          id='date'
          label='Birthday'
          type='date'
          defaultValue='2017-05-24'
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <form className={classes.container} noValidate>
        <TextField
          id='time'
          label='Alarm clock'
          type='time'
          defaultValue='07:30'
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </form>
      <form>
        <input type='text' />
      </form>
    </div>
  )
}
