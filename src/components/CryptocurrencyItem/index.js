// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currData} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currData

  return (
    <li className="li">
      <div className="li-1">
        <img className="logo" alt={currencyName} src={currencyLogo} />
        <p className="li-title">{currencyName}</p>
      </div>

      <div className="li-2">
        <p className="li-cur">{usdValue}</p>
        <p className="li-cur">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
