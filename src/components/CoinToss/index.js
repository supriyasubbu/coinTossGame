// Write your code here
import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onclickToss = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let image = ''
    let latestHeads = headsCount
    let latestTails = tailsCount
    if (tossResult === 0) {
      image = HEADS_IMG_URL
      latestHeads += 1
    } else {
      image = TAILS_IMG_URL
      latestTails += 1
    }

    this.setState({
      tossResultImage: image,
      headsCount: latestHeads,
      tailsCount: latestTails,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const tossResult = headsCount + tailsCount
    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="image" />
          <button type="button" className="btn" onClick={this.onclickToss}>
            Toss Coin
          </button>
          <div className="totals-container">
            <p className="count">Total:{tossResult}</p>
            <p className="count">Heads:{headsCount}</p>
            <p className="count">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
