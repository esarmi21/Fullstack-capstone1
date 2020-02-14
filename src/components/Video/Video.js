import React, { Component } from 'react'
import YouTube from 'react-youtube';


export default class Video extends Component{
    render() {
        const opts = {
          height: '400',
          width: '400',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
        };
    
        return (
          <YouTube
            videoId="XDlf2Z_IzPA"
            opts={opts}
            // onReady={this._onReady}
          />
        );
      }
    
      _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    }