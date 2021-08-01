import { Typography, Button, Container, TextField } from '@material-ui/core'
import SendRoundedIcon from '@material-ui/icons/SendRounded'
import './App.css'

import { useStyle } from './style/matHook'
import { useState } from 'react'

function App() {
  let [name, setName] = useState('')
  let [message, setMessage] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(name, message)
  }

  let style = useStyle()
  return (
    <Container>
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
        <Button
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
