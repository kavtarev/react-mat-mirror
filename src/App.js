import {
  Typography,
  Button,
  Container,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  FormGroup,
  RadioGroup,
} from '@material-ui/core'
import SendRoundedIcon from '@material-ui/icons/SendRounded'
import './App.css'
import { myList } from './notes.js'
import { useStyle } from './style/matHook'
import { useState, useEffect } from 'react'

function App() {
  let [name, setName] = useState('')
  let [message, setMessage] = useState('')
  let [radioValue, setRadioValue] = useState('Putin')
  let [list, setList] = useState(myList)
  let [cards, setCards] = useState([])
  useEffect(() => {
    console.log(list)
    console.log('1 cards ', cards)
    setCards(list.map((item) => <p>{item.name}</p>))
    console.log('2 cards ', cards)
  }, [list])
  const submitHandler = (e) => {
    e.preventDefault()
    setList((prev) => [...prev, { name, message, for: radioValue }])
  }

  let style = useStyle()
  return (
    <Container>
      <div> 1234{cards}</div>
      <Typography
        variant='body1'
        component='h2'
        color='textPrimary'
        align='center'
      >
        hi there
      </Typography>
      <form onSubmit={submitHandler}>
        <TextField
          required
          onChange={(e) => setName(e.target.value)}
          variant='outlined'
          fullWidth
          size='small'
          margin='dense'
          label='name'
          // inputProps={{ style: { fontSize: 40 } }}
        />
        <TextField
          required
          onChange={(e) => setMessage(e.target.value)}
          variant='outlined'
          fullWidth
          multiline
          minRows='4'
          size='medium'
          margin='normal'
          label='message text'
        />
        <FormControl fullWidth className={style.group}>
          <FormLabel>pick wisely</FormLabel>

          <RadioGroup
            value={radioValue}
            onChange={(e) => setRadioValue(e.target.value)}
          >
            <FormControlLabel control={<Radio />} value='Putin' label='Putin' />
            <FormControlLabel
              control={<Radio />}
              value='ne Putin'
              label='ne Putin'
            />
            <FormControlLabel
              control={<Radio />}
              value='kto esli ne Putin'
              label='kto esli ne Putin'
            />
          </RadioGroup>
        </FormControl>
        <Button
          //   className={style.btn}
          variant='contained'
          color='primary'
          endIcon={<SendRoundedIcon color='secondary' />}
          type='submit'
        >
          Primary
        </Button>
      </form>
    </Container>
  )
}

export default App
