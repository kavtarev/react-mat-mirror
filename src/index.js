import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createTheme, ThemeProvider } from '@material-ui/core'

const theme = createTheme({
  palette: {
    secondary: {
      light: '#89e976',
      main: '#89e976',
      dark: '#89e976',
    },
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/*  <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
