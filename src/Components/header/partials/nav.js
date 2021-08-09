import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AddIcon from '@material-ui/icons/Add'
import Popup from './popup'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 20,
  },
  app: { backgroundColor: 'green' },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  tool: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  popup: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '100vw',
    height: '100vh',
    zIndex: 1000,
    top: 0,
    paddingTop: 10,
    boxSizing: 'border-box',
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const handleOpen = (e) => {
    setOpen(!open)
  }

  return (
    <div className={classes.root}>
      <AppBar color='transparent' position='static'>
        <Toolbar className={classes.tool}>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography
            data-unhide
            align='center'
            variant='h6'
            className={classes.title}
          >
            Обучение
          </Typography>
          <Button
            data-hide
            startIcon={<AddIcon />}
            onClick={handleOpen}
            color='inherit'
          >
            Запланировать
          </Button>
          <Button onClick={handleOpen}>
            <AddIcon data-unhide />
          </Button>
        </Toolbar>
      </AppBar>
      {open && (
        <div onClick={handleOpen} className={classes.popup}>
          <Popup close={handleOpen} />
        </div>
      )}
    </div>
  )
}
/* import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AddIcon from '@material-ui/icons/Add'
import Popup from '../../popup'

const useStyles = makeStyles((theme) => ({
  root: {},
  app: { backgroundColor: 'green' },
  menuButton: {},
  buttonCont: {
    padding: 8,
    marginTop: 10,
    marginLeft: 16,
  },
  title: {
    flexGrow: 1,
    width: 160,
    border: '1px solid ',
  },
  btn: {
    width: 160,
    position: 'relative',
    border: '1px solid ',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 16,
  },
  tool: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
  },
  popup: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '100vw',
    height: '100vh',
    zIndex: 1000,
    top: 0,
    paddingTop: 10,
    boxSizing: 'border-box',
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const handleOpen = (e) => {
    setOpen(!open)
  }

  return (
    <>
      <AppBar data-hide color='transparent' position='static'>
        <Toolbar className={classes.tool}>
          <IconButton
            className={classes.buttonCont}
            edge='start'
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon className={classes.menuButton} />
          </IconButton>
          <Typography align='center' variant='h6'>
            Обучение
          </Typography>

          <Button onClick={handleOpen}>
            <AddIcon />
          </Button>
        </Toolbar>
        {open && (
          <div onClick={handleOpen} className={classes.popup}>
            <Popup close={handleOpen} />
          </div>
        )}
      </AppBar>
      <AppBar data-hide color='transparent' position='static'>
        <Toolbar className={classes.tool}>
          <IconButton
            className={classes.buttonCont}
            edge='start'
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon className={classes.menuButton} />
          </IconButton>
          <Button
            className={classes.btn}
            startIcon={<AddIcon />}
            onClick={handleOpen}
            color='inherit'
          >
            Запланировать
          </Button>
        </Toolbar>
        {open && (
          <div onClick={handleOpen} className={classes.popup}>
            <Popup close={handleOpen} />
          </div>
        )}
      </AppBar>
    </>
  )
}
 */
