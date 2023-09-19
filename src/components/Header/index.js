// Write your JS code here

import './index.css'

const Header = () => (
  <nav>
    <div className="nav-con">
      <img
        className="website-login-img1"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="nav-ul">
        <li className="para">Home</li>
        <li className="para">Products</li>
        <li className="para">cart</li>
        <li className="para1">Logout</li>
      </ul>
    </div>
  </nav>
)

export default Header
