import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme'
import { GeoProvider } from './context/GeoContext'

function App() {
  return (
    <>
      <GeoProvider>
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>

          <GlobalStyles />
        </ThemeProvider>
      </GeoProvider>
    </>
  )
}

export default App
