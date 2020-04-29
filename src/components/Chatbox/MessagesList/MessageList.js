import React, { Component } from 'react'
import './MessageList.css'

export default class MessageList extends Component {
  

    render() {
      return (
        <ul className="message-list" id="message-scroll">                 
          {this.props.messages.map((username, message ,id) => {
            return (
             <li key={id}>
               <div>
                 {username}:
                 {message}
          
               </div>
             </li>
           )
         })}
       </ul>
      )
    }
  }