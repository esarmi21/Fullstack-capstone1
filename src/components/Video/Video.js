import React, { Component } from 'react'
import YouTube from 'react-youtube';
import './Video.css'


export default class Video extends Component{
    render() {
        const opts = {
          // horizontal
          height: '400',
          width: '600',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0
          }
        };
    
        return (
          <div className='video'>
          <YouTube
            videoId="6BZuG0erHBY"
            opts={opts}
            // onReady={this._onReady}
          />
          </div>
        );
      }
    
      _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    }