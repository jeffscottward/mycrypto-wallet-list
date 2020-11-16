/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Global } from '@emotion/core'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div
      className="layout"
      sx={{
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        '&::before, &::after': {
          display: 'none',
        },
      }}
    >
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet"/>
      </Head>
      {children}
      <Global
        styles={(theme) => ({
          '*': {
            boxSizing: 'border-box',
            position: 'relative',
            '*::before, *::after': {
              boxSizing: 'border-box',
              position: 'relative',
            },
          },
          html: {
            scrollBehavior: 'smooth',
            fontSize: '100%',
            WebkitTextSizeAdjust: '100%',
            fontVariantLigatures: 'none',
            WebkitFontVariantLigatures: 'none',
            textRendering: 'optimizeLegibility',
            MozOsxFontSmoothing: 'grayscale',
            fontSmoothing: 'antialiased',
            WebkitFontSmoothing: 'antialiased',
            textShadow: 'rgba(0, 0, 0, 0.01) 0 0 1px',
            '&::before, &::after': {
              display: 'none',
            },
          },
          body: {
            scrollBehavior: 'smooth',
            margin: '0',
            padding: '0',
            overflowX: 'hidden',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
            backgroundAttachment: 'scroll',
          },
          'html, body, #__next, .layout': {
            minHeight: '100vh',
          },
          'ul, ol, li': {
            margin: '0',
            padding: '0',
            listStyle: 'none',
          },
          'a, button, [type="button"], [type="reset"], [type="submit"], [type="file"], [type="file"]::-webkit-file-upload-button': {
            textTransform: 'none',
            appearance: 'none',
            cursor: 'pointer',
          },
          'h1, h2, h3, h4, h5, h6, p': {
            marginTop: '0',
          },
          'img, svg, picture, span, a, b, u, i, small, sub, strong, label': {
            display: 'inline-block',
          },
          'table, thead, tbody, tfoot, tr, td, th': {
            borderSpacing: '0',
            borderCollapse: 'collapse',
            textAlign: 'left',
          },
          'table tbody tr:nth-of-type(even)': {
            background: 'rgba(255, 255, 255, 0.04)',
          },
          'table tbody tr:hover': {
            background: 'rgba(255, 255, 255, 0.08)',
          },
        })}
      />
      <style jsx global>{`
        #__next {
          background: white;
          height: 100%;
        }
        
        body::before,
        body::after {
          display: none;
          z-index: -1;
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-attachment: scroll;
        }
      `}</style>
    </div>
  )
}
export default Layout
