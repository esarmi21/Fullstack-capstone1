import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './Header/Header'
import Video from './Video/Video'
import Chatbox from './Chatbox/Chatbox';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <Header />
        </header>
        <Video/>
        <Chatbox/>
      </div>
    )
  }
}

export default App