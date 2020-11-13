/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

const Header = () => {
  return (
    <header sx={{ backgroundColor: 'navy', p: 2 }}>
      <Box className="brand">
        <a className="logo" href="/" sx={{ display: 'flex' }}>
          <img src="images/logo-mycrypto.svg" alt="logo" sx={{ maxHeight: '40px' }} />
        </a>
      </Box>
    </header>
  )
}

export default Header
