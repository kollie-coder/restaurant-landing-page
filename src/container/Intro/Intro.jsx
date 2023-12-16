import React, { useState } from 'react';

import { meal } from '../../constants';

import { BsPauseFill, BsFillPlayFill } from 'react-icons/bs';

import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
   // Reference to the video element
  const vidRef = React.useRef();

 // Function to handle play/pause of the video
  const handleVideo = () => {
    // Toggle the playVideo state
    setPlayVideo((prevPlayVideo) => !prevPlayVideo );

    // If playVideo is true, pause the video; otherwise, play the video
    if(playVideo) {
      vidRef.current.pause();

    }else {
      vidRef.current.play();
    }
  }

  return (
     <div className='app__video'>
    <video 
     src={meal} // Path to the video source
     ref={vidRef} // Reference to the video element
     type="video/mp4"
     loop // Enable video looping
     controls={false}  // Hide default video controls
     muted  // Mute the video
    />
    
     {/* Overlay div with a centered circle for play/pause button */}
    <div className='app__video-overlay flex__center'>

      <div 
      className='app__video-overlay_circle flex__center'
      onClick={handleVideo}
      >
        {/* Conditional rendering based on the playVideo state */}
        {playVideo ? (
          <BsPauseFill color="#fff" fontSize={30} />
          
        ) : <BsFillPlayFill color="#fff" fontSize={30} /> }

      </div>

    </div>
  </div>
  )
 
  }

export default Intro;
