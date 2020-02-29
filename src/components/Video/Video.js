import React, { Component } from 'react'
import YouTube from 'react-youtube';
import './Video.css'


export default class Video extends Component{
    render() {
        const opts = {
          height: '400',
          width: '600',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
        };
    
        return (
          <div className='video'>
          <YouTube
            videoId="6BZuG0erHBY"
            opts={opts}
          />
          </div>
        );
      }
    
      _onReady(event) {
        event.target.pauseVideo();
      }
    }