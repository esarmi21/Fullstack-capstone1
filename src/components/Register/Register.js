import React, { Component } from "react";
import AuthApiService from '../../services/AuthApiService'
import './Register.css'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null, username:'',password:'' }

  handleSubmit = ev => {
    ev.preventDefault()
    const { username, password } = ev.target

    console.log({ username, password })
    console.log(username.value, password.value)
    this.setState({ error: null })
     AuthApiService.postUser({
       username: username.value,
       password: password.value,
     })
       this.setState({username:'', password:''})
  }

  render() {
    return (
      <div className= 'register'>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={(event)=>{
              this.setState({username:event.value})
            }}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={(event)=>{
              this.setState({password:event.value})
            }}
            required
          />

          <button className = "submit" type="submit">Register</button>
        </form>
      </div>
    );
  }
}