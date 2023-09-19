// Write your JS code here

import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', errorText: ''}

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccessfulLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFailureLogin = errorMsg => {
    console.log(errorMsg)
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = response.json()

    if (response.ok === true) {
      this.onSuccessfulLogin()
    } else {
      this.onFailureLogin(data.error_msg)
      this.setState({errorText: "*Username and Password didn't match"})
    }
  }

  renderFormLogin = () => {
    const {username, password, errorText} = this.state
    return (
      <form className="login-form" onSubmit={this.submitForm}>
        <img
          className="form-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <div className="login-user-con">
          <label className="login-label" htmlFor="username">
            USERNAME
          </label>
          <br />
          <input
            className="login-input"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={this.updateUsername}
          />
        </div>
        <div className="login-pass-con">
          <label className="login-label" htmlFor="password">
            PASSWORD
          </label>
          <br />
          <input
            className="login-input"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.updatePassword}
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
        <p className="error-text">{errorText}</p>
      </form>
    )
  }

  render() {
    return (
      <div className="loginForm-con">
        <img
          className="website-login-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <div className="form-con">{this.renderFormLogin()}</div>
      </div>
    )
  }
}

export default Login
