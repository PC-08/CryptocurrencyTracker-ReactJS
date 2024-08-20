// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyData: '', isLoading: true}

  componentDidMount() {
    this.getCurrDta()
  }

  getCurrDta = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formatedData = data.map(eachCurr => ({
      currencyLogo: eachCurr.currency_logo,
      currencyName: eachCurr.currency_name,
      euroValue: eachCurr.euro_value,
      id: eachCurr.id,
      usdValue: eachCurr.usd_value,
    }))

    this.setState({currencyData: formatedData, isLoading: false})
  }

  render() {
    const {isLoading, currencyData} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <h1 className="head">Cryptocurrency Tracker</h1>
            <img
              className="logo-m"
              alt="cryptocurrency"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            />
            <ul className="ul">
              <li className="head-container">
                <div>
                  <p>Coin-Type</p>
                </div>
                <div className="cur-con">
                  <p className="cur">USD</p>
                  <p>EURO</p>
                </div>
              </li>

              {currencyData.map(eachCurr => (
                <CryptocurrencyItem key={eachCurr.id} currData={eachCurr} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
