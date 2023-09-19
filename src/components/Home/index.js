// Write your JS code here

import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="Home-con">
    <Header />

    <div className="inner-con">
      <div className="con1">
        <h1>Clothes That Get You Noticed</h1>
        <p>
          Fashion is part of the daily air Bright blue jeans might be a little
          bold, so wear darker-colored pants for some more versatility. You
          can&apos;t go wrong with a classic white T-shirt and jeans with a pair
          of sneakers, while a button-up or henley is perfect if you want to
          dress up your look a little bit more.
        </p>
        <button className="shop-button" type="button">
          Shop Now
        </button>
      </div>
      <img
        className="clothes-img"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
        alt="clothes that get you noticed"
      />
    </div>
  </div>
)

export default Home
