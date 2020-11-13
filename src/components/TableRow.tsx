/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

import tokenAsWholeUnits from '../utils/tokenAsWholeUnits'
import tokenFiatValue from '../utils/tokenFiatValue'

type TableRowProps = {
  token: any
  totalFiat: number
  idx: number
}

const TableRow = ({ token, totalFiat, idx }: TableRowProps) => {
  const fiatValue = tokenFiatValue(token)
  const perectOfFiatInWallet = fiatValue / totalFiat * 100
  return (
    <tr
      key={'token' + idx}
      onClick={()=>{window.open(
        `https://ethplorer.io/address/${token.tokenInfo.address}`
        ,'_blank')
      }}
    >
      <td>
        {token.tokenInfo.name ? (
          token.tokenInfo.name
        ) : (
          token.tokenInfo.address
        )}
      </td>
      <td>{perectOfFiatInWallet.toFixed(2) || Number(0).toFixed(2)}%</td>
      <td>
        <Box className="crypto">
          <span className="crypto-amount" sx={{ mr: 1 }}>
            {tokenAsWholeUnits(token).toFixed(4)}
          </span>
          <span className="crypto-symbol">{token.tokenInfo.symbol}</span>
        </Box>
        <Box className="fiat">
          <span className="fiat-symbol">
            {token.tokenInfo.price.currency === 'USD' && '$'}
          </span>
          <span className="fiat-value">
            {!token.tokenInfo.price.currency ? (
              <small>No Market</small>
            ) : (
              <span>{fiatValue.toFixed(2)}</span>
            )}
          </span>
        </Box>
      </td>
    </tr>
  )
}

export default TableRow
