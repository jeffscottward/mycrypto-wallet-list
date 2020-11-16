/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useState } from 'react'
import { jsx, Box, Flex } from 'theme-ui'
import { useRouter } from 'next/router'

import Header from '../components/Header'
import Layout from '../components/Layout'
import LoadingSpinner from '../components/LoadingSpinner'
import TableRow from '../components/TableRow'

import addrShortener from '../utils/addrShortener'
import calculateTotalFiatValueInWallet from '../utils/calculateTotalFiatValueInWallet'
import sortTokensByFiatValue from '../utils/sortTokensByFiatValue'
import getAddressData from '../utils/getAddressData'
import ethAddressValidator from '../utils/ethAddressValidator'
import { validatorRegexRawString } from '../utils/addressRegex'
import ethFiatValue from '../utils/ethFiatValue'

// Shortcut to stop banging on the API
// import data from '../../test/__mocks__/ethplorer-response-tokens-unsorted-mock'

// Long polling object that
// doesn't get re-triggered from renders
let longPoll

export const Index = () => {
  const router = useRouter()
  const [ethData, setEthData]: any = useState({})
  const [searching, setSearching] = useState(false)
  const [ethDataLoaded, setEthDataLoaded] = useState(false)
  const [ethAddress, setETHAddress] = useState('')
  const [tokensSorted, setTokensSorted] = useState([])
  const [inputText, setInputText] = useState('')

  const resetState = () => {
    setSearching(false)
    setETHAddress('')
    setEthDataLoaded(false)
    setTokensSorted([])
    setEthData({})
  }

  const updateStateWithData = async (address: string) => {
    let dataResult = await getAddressData(address)
    // Shortcut to stop banging on the API
    // let dataResult = data
    setETHAddress(address)
    setEthDataLoaded(dataResult.hasOwnProperty('ETH'))
    if (dataResult.tokens) {
      setTokensSorted(sortTokensByFiatValue(dataResult.tokens))
    }
    setEthData(dataResult)
    setSearching(false)
  }

  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    // Prevent browser default
    e.preventDefault()
    // Get entered Address
    let address = e.target[0].value
    // Check for valid address
    if (ethAddressValidator(address)) {
      initApp(address)
    } else {
      resetState()
    }
  }

  const initApp = (address: string) => {
    // Flush any old state
    resetState()
    // Set searching
    setSearching(true)
    // Update UI
    updateStateWithData(address)
    // Push new route for easy sharing
    router.push(`/?address=${address}`)
  }

  // Auto Init App from shareable links
  useEffect(() => {
    if (router.query.address !== undefined) {
      let addr = String(router.query.address)
      if (ethAddressValidator(addr)) {
        setInputText(addr)
        initApp(addr)
      }
    } else {
      resetState()
    }
  }, [router.query.address])

  // Start long polling once we have an address
  useEffect(() => {
    if (ethAddress !== '') {
      longPoll = setInterval(() => {
        updateStateWithData(ethAddress)
      }, 10000)
    } else {
      clearInterval(longPoll)
    }
  }, [ethAddress])

  return (
    <Layout>
      <Header />
      <main
        sx={{ width: '100%', maxWidth: '800px', m: 'auto', p: 3, placeItems: 'center' }}
      >
        <form
          className="search-area"
          onSubmit={handleSubmit}
          autoComplete="true"
          sx={{ display: 'flex', border: '1px solid teal', mb: 4 }}
        >
          <Box
            sx={{
              width: '40px',
              height: '40px',
              position: 'absolute',
              top: 1,
              left: 1,
              zIndex: 10,
              filter: 'brightness(0.5)',
            }}
          >
            <img
              sx={{
                display: 'block',
                maxWidth: '30px',
                maxHeight: '30px',
                p: 2,
              }}
              src="images/icons/search.svg"
              alt="search-btn"
            />
          </Box>
          <Box sx={{ flex: 1, display: 'flex', height: '40px' }}>
            <input
              type="text"
              pattern={validatorRegexRawString}
              placeholder="Enter an Ethereum address"
              name="address"
              value={inputText}
              onChange={(e: React.BaseSyntheticEvent) => {
                setInputText(e.target.value)
              }}
              sx={{
                height: '100%',
                border: 'none',
                flex: 1,
                px: 3,
                pl: 4,
                fontSize: 2,
                '&:focus, &:invalid, &:required': {
                  outline: 'none',
                  boxShadow: 'none',
                },
              }}
            />
            <input
              type="submit"
              value="Search"
              sx={{
                width: '100px',
                height: '100%',
                border: 'none',
                backgroundColor: 'teal',
                color: 'white',
                fontSize: 3,
                outline: 'none',
                appearance: 'none',
                borderRadius: '0',
              }}
            />
          </Box>
        </form>
        {searching && (
          <div>
            <div sx={{ position: 'absolute', height: '1px', left: '45%' }}>
              <LoadingSpinner />
            </div>
          </div>
        )}
        {!searching && ethDataLoaded && (
          <Box className="results-area">
            <Box className="wallet-info" sx={{ mb: 4, px: 2 }}>
              <Flex className="address" sx={{ justifyContent: 'space-between' }}>
                <span>Address:</span>
                <span>
                  <a
                    href={`https://ethplorer.io/address/${ethAddress}`}
                    target="_BLANK"
                    sx={{
                      color: 'text',
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    <span sx={{ display: ['none', 'inline-block', 'inline-block'] }}>
                      {ethAddress}
                    </span>
                    <span sx={{ display: ['inline-block', 'none', 'none'] }}>
                      {addrShortener(ethAddress)}
                    </span>
                  </a>
                </span>
              </Flex>
              <Flex className="balance-total" sx={{ justifyContent: 'space-between' }}>
                <b>Balances:</b>
                <b>
                  <span className="currency-symbol">$</span>
                  <span className="currency-amount">
                    {calculateTotalFiatValueInWallet(ethData).toFixed(2)}
                  </span>
                </b>
              </Flex>
            </Box>
            <table
              className="wallet-holdings"
              sx={{
                width: '100%',
                thead: {
                  borderBottom: '1px solid black',
                  tr: {
                    cursor: 'default !important',
                    '&:hover': {
                      backgroundColor: 'white !important',
                    },
                  },
                },
                tr: {
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'gray1',
                  },
                  'td:first-of-type': { width: '40%' },
                  'td:nth-of-type(2)': { textAlign: 'center' },
                  '&:nth-of-type(even)': {
                    backgroundColor: 'gray0',
                    '&:hover': {
                      backgroundColor: 'gray1',
                    },
                  },
                },
                'th,td': {
                  px: 2,
                  py: 1,
                  '&:last-of-type': {
                    textAlign: 'right',
                  },
                },
              }}
            >
              <thead>
                <tr>
                  <th>Asset</th>
                  <th sx={{ textAlign: 'center' }}>% of Total Value</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {ethDataLoaded && ethData.ETH.balance > 0 && (
                  <tr
                    onClick={() => {
                      window.open(
                        `https://ethplorer.io/address/${'0x0000000000000000000000000000000000000000'}`,
                        '_blank',
                      )
                    }}
                  >
                    <td>Ethereum</td>
                    <td>
                      {(
                        (ethFiatValue(ethData) /
                          calculateTotalFiatValueInWallet(ethData)) *
                        100
                      ).toFixed(2)}
                      %
                    </td>
                    <td>
                      <Box className="crypto">
                        <span className="crypto-amount" sx={{ mr: 1 }}>
                          {ethData.ETH.balance.toFixed(4)}
                        </span>
                        <span className="crypto-symbol">ETH</span>
                      </Box>
                      <Box className="fiat">
                        <span className="fiat-symbol">$</span>
                        <span className="fiat-value">
                          <span>
                            {ethFiatValue(ethData).toFixed(2)}
                          </span>
                        </span>
                      </Box>
                    </td>
                  </tr>
                )}
                {ethDataLoaded &&
                  tokensSorted.length > 0 &&
                  tokensSorted.map((token: any, idx: number) => {
                    return (
                      <TableRow
                        key={'token' + idx}
                        token={token}
                        idx={idx}
                        totalFiat={calculateTotalFiatValueInWallet(ethData)}
                      />
                    )
                  })}
              </tbody>
            </table>
          </Box>
        )}
      </main>
    </Layout>
  )
}

export default Index
