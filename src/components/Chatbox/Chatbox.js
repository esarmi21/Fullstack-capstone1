import React, { Component } from 'react';
import MessageList from './MessagesList/MessageList'
import Title from './Title/Title'
import './Chatbox.css'

const data = [
    {
      senderId: "Isabelle",
      text: "Hello mayor!"
    },
    {
      senderId: "Tom Nook",
      text: "Shutup Isabelle"
    }
  ]

class Chatbox extends Component {
      
    constructor() {
      super()
      this.state = {
         messages: data
      }
    }
    
    render() {
      return (
        <div className="app">
            <Title/>
          <MessageList messages={this.state.messages}/>
       </div>
      )
    }
  }

export default Chatbox