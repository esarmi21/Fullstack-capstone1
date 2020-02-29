import React, { Component } from 'react';
import Header from './Header/Header'
import Video from './Video/Video'
import Chatbox from './Chatbox/Chatbox';
import Login from './Login/Login'
import Register  from './Register/Register'
import '../App.css'
import AuthTokenService from '../services/AuthTokenService'
import AuthApiService from '../services/AuthApiService'

class App extends Component {

  state = {
    isLoggedIn: AuthTokenService.checkLogIn(),
    messages: []
  }
componentDidMount(){
  AuthApiService.getComments()
  .then((messages)=>{
    this.setState({
      messages:messages.map((message)=>message.text)
    })
  })
}
  render() {
    return (
      <div className='App'>
        <header className='App__header'>
     {!this.state.isLoggedIn && (
       <Login isLoggedIn = {this.state.isLoggedIn} logOut = {()=>{
        AuthTokenService.logout();
        this.setState({isLoggedIn:false})
      }} onLoginSuccess = {(username) =>{
        AuthTokenService.login(username);
        this.setState({isLoggedIn:true})
      }}/>
     )} 

     {this.state.isLoggedIn && ( 
     <button isLoggedIn = {this.state.isLoggedIn} 
     className = "submit" 
     onClick = {()=>{
      AuthTokenService.logout();
      this.setState({isLoggedIn:false})
     }} >
       Logout
       </button>)}

          {!this.state.isLoggedIn && <Register/> }
  
              <Header />
          </header>
          <Video/>
        <Chatbox isLoggedIn = {this.state.isLoggedIn} messages={this.state.messages} sendMessage = {(message)=>
        {
          AuthApiService.postComment(AuthTokenService.getUsername(), message)
          .then(data => {
              this.setState({messages:this.state.messages.concat(message)})
          })
          .catch(error => console.log(error));

        }}/>
      </div>
    )
  }
}

export default App

