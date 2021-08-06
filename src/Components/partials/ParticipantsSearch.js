import {
  Container,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  makeStyles,
} from '@material-ui/core'
import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'

import TuneIcon from '@material-ui/icons/Tune'
const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  select: { width: '100%' },
  container: {
    marginBottom: 20,
    marginTop: 20,
  },
  search: {
    transform: 'translateY(16px)',
    width: '100%',
    marginBottom: 16,
  },
  btn: {
    display: 'none',
    position: 'absolute',
  },
}))
export default function ParticipantsSearch() {
  const [currency, setCurrency] = useState('EUR')
  let [textValue, setTextValue] = useState('')
  const classes = useStyles()
  const handleChange = (event) => {
    setCurrency(event.target.value)
  }
  const handleText = (e) => {
    setTextValue(e.target.value)
    console.log(textValue)
  }
  const formHandler = (e) => {
    e.preventDefault()

    console.log(e.target[0].value)
  }

  return (
    <Container className={classes.container}>
      <form action='' onSubmit={formHandler}>
        <Grid container>
          <Grid item xs={6}>
            <TextField
              value={textValue}
              onChange={handleText}
              className={classes.search}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='start'>
                    <TuneIcon data-unhide />
                  </InputAdornment>
                ),
              }}
              id='standard-basic'
              placeholder='Placeholder'
            />
          </Grid>

          <Grid data-hide item xs={6}>
            <TextField
              label='Программа'
              className={classes.select}
              id='standard-select-currency'
              select
              value={currency}
              onChange={handleChange}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid data-hide item xs={6}>
            <TextField
              label='Период'
              className={classes.select}
              id='standard-select-currency'
              select
              value={currency}
              onChange={handleChange}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid data-hide item xs={6}>
            <TextField
              label='Статус'
              className={classes.select}
              id='standard-select-currency'
              select
              value={currency}
              onChange={handleChange}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <button className={classes.btn}></button>
      </form>
    </Container>
  )
}
