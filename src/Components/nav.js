import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AddIcon from '@material-ui/icons/Add'

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
}))

export default function ButtonAppBar() {
  const classes = useStyles()

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
          <Button data-hide startIcon={<AddIcon />} color='inherit'>
            Запланировать
          </Button>
          <AddIcon data-unhide />
        </Toolbar>
      </AppBar>
    </div>
  )
}
