import { Theme } from 'theme-ui'

export interface GlobalTheme extends Theme {
  styles?: any
}

const GlobalTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: [
    '40em', '56em', '64em',
  ],
  fonts: {
    small: '"Lato", sans-serif',
    body: '"Lato", sans-serif',
    heading: '"Lato", sans-serif',
    monospace: '"Lato", sans-serif',
  },
  fontSizes: [8, 12, 16, 20, 24, 28, 32, 36, 40],
  fontWeights: {
    small: 300,
    body: 400,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  colors: {
    text: 'rgba(66, 66, 66,1)',
    background: 'rgba(255,255,255,1)',
    navy: 'rgba(29,49,78,1.0)',
    teal: 'rgba(53,119,147,1.0)',
    gray0: 'rgba(0,0,0,0.1)',
    gray1: 'rgba(0,0,0,0.2)',
    gray10: 'rgba(0,0,0,0.3)',
    gray100: 'rgba(0,0,0,0.4)',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      textDecoration: 'none',
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    img: {
      maxWidth: '100%',
    },
  },
}

export default GlobalTheme
