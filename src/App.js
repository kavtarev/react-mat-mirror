import './App.css'
import PersistentDrawerLeft from './Components/nav'
import Plan from './Components/plan'

import TableRow from './Components/table'
import TableHeader from './Components/tableHeader'
import Search from './Components/search'
const tableData = [
  { date: 12, name: 'business', num: 12, coach: '', progress: 12 },
  { date: 123, name: 'sport', num: 22, coach: '', progress: 1762 },
  { date: 12, name: 'dodta', num: 2, coach: '', progress: 172 },
  { date: -2, name: 'pivo', num: 12, coach: '', progress: 72 },
]

function App() {
  return (
    <div>
      <PersistentDrawerLeft />
      <Plan />
      <Search />
      <TableHeader color='textPrimary' />
      {tableData.map((item, i) => (
        <TableRow item={item} key={i} color='textSecondary' />
      ))}
    </div>
  )
}
/* let [name, setName] = useState('')
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
} */

export default App
