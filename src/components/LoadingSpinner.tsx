/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Grid } from 'theme-ui'

const LoadingSpinner = () => {
  return (
    <Grid sx={{
      height: '50%',
      placeItems: 'center'
    }}>
      <Box
        sx={{
          pointerEvents: 'none',
          width: '2.5em',
          height: '2.5em',
          border: '0.4em solid transparent',
          borderColor: '#eee',
          borderTopColor: 'navy',
          borderRadius: '50%',
          animation: 'loadingspin 1s linear infinite',
          '@keyframes loadingspin': {
            '0%': {
              transform: 'rotate(0deg)',
            },
            '100%': {
              transform: 'rotate(360deg)',
            }
          }
        }}
      ></Box>
    </Grid>
  )
}

export default LoadingSpinner
