import React, { Component } from 'react'
import './MessageList.css'

export default class MessageList extends Component {

    render() {
      return (
        <ul className="message-list">                 
          {this.props.messages.map((message,id) => {
            return (
             <li key={id}>
            
               <div>
                 {message}
               </div>
             </li>
           )
         })}
       </ul>
      )
    }
  }