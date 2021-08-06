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
