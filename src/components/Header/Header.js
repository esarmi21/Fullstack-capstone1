import React, { Component } from 'react'
import './Header.css'


export default class Header extends Component {
 
    render() {
      return <>
        <nav className='Header'>
          <h1>
              {' '}
              Crossing Vibes
          </h1>
          <h2>
            Relax and Chat while listening to you favorite Animal Crossing tunes.<br/>
            Create an account to chat!
          </h2>
        </nav>
      </>
    }
  }