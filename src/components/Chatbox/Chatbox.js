import React, { Component } from 'react';
import MessageList from './MessagesList/MessageList'
import Title from './Title/Title'
import './Chatbox.css'
import SumbitMessage from './SubmitMessage/SubmitMessage'



class Chatbox extends Component {
      

    render() {
      return (
        <div className="app">
            <Title/>
          <MessageList messages={this.props.messages}/>
         {this.props.isLoggedIn &&
          <SumbitMessage sendMessage = {this.props.sendMessage}/> 
         }
       </div>
      )
    }
  }

export default Chatbox