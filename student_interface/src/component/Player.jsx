import React from 'react';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

export default function Player ({url}) {

  
    return <ShakaPlayer playbackRate autoPlay={false} src ={ url } />;
    
  };
  