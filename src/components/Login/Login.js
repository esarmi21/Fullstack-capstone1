import React, { Component } from 'react'
import AuthApiService from '../../services/AuthApiService'
import './Login.css'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }
  

  state = { error: null }

  handleSubmit= ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { usernameField, passwordField } = ev.target
    
    AuthApiService.postLogin({
      username: usernameField.value,
      password: passwordField.value,
    })
      .then(res => {
        this.props.onLoginSuccess(usernameField.value)
        console.log('success login')
        usernameField.value = ''
        passwordField.value = ''
      })
      .catch(res => {
        console.log(res.error)
        this.setState({ error: res.error })
      })
  }


  render() {
    return (
      <div className= 'login'>
        <form 
        className ="form"
        onSubmit={this.handleSubmit}>
          <input
            type="username"
            name="usernameField"
            placeholder="username"
            required
          />

          <input
            type="password"
            name="passwordField"
            placeholder="password"
            required
          />

          <button className = "submit" type="submit">Login</button>
        
        </form>

    
        {/* {this.props.isLoggedIn && <button className = "submit" onClick= {this.props.logOut}>Logout</button>} */}
      </div>
    );
  }
}