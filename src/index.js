import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from 'styled-components'
import theme from './styled/theme'

render(
  <ThemeProvider theme={theme}>
  <App />
  </ThemeProvider>,
  document.getElementById('root')
)
