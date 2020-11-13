import { ThemeProvider } from 'theme-ui'
import theme from '../theme'

import 'animate.css/animate.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />  
    </ThemeProvider>
  )
}

export default MyApp