import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'

import FormControl from '@material-ui/core/FormControl'

import NativeSelect from '@material-ui/core/NativeSelect'

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    marginTop: 10,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export default function FormControlSelect() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  })

  const handleChange = (event) => {
    const name = event.target.name
    setState({
      ...state,
      [name]: event.target.value,
    })
  }

  return (
    <div>
      <FormControl
        onChange={() => console.log(1)}
        fullWidth
        className={classes.formControl}
      >
        <InputLabel shrink htmlFor='age-native-label-placeholder'>
          some event
        </InputLabel>
        <NativeSelect
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-label-placeholder',
          }}
        >
          <option value=''>None Lorem ipsum dolor sit amet.</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </div>
  )
}
