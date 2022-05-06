import React from 'react'
import './VideoPlayer.css'

import {useParams} from 'react-router-dom';

function VideoPlayer() {
  const {videoId} = useParams();

  return (
    <div>
      <div className="title-container">
        <h1 className="text-center">Video Player</h1>
      </div>

      <div className="video-container">
        <iframe class="yt-iframe"  src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

    </div>
  )
}

export default VideoPlayer