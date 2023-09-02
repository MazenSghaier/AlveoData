import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from "react-player";
import { Container } from "@mui/material";
import './Player.css'
import Control from './Control';


const Player = ({ url }) => {

  const videoPlayerRef = useRef(null);

  const setVideoPlayerRef = (ref) => {
    videoPlayerRef.current = ref;
  };

  const [videoState, setVideoState] = useState({
    playing: true,
    muted: false,
    volume: 0.5,
    played: 0,
    seeking: false,
    Buffer : true
    });

    useEffect(() => {
      // This code will run after the component is mounted
      if (videoPlayerRef.current) {
        // You can safely access videoPlayerRef.current here
        console.log(videoPlayerRef.current.getCurrentTime());
      }
    }, []); // The empty dependency array ensures this effect runs once after mounting
  

    const {playing, muted, volume, playbackRate, played, seeking, buffer} = videoState

    const playPauseHandler = () => {
      //plays and pause the video (toggling)
      try {
        setVideoState({ ...videoState, playing: !videoState.playing });
      } catch (error) {
        console.error('Error in onPlayPause:', error);
      }
      };
    const rewindHandler = () => {
      //Rewinds the video player reducing 5
      videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 5);
    };
    const fastFowardHandler = () => {
    //FastFowards the video player by adding 10
      videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 10);
    };

    const progressHandler = (state) => {
 
      if (!seeking) {
    setVideoState({ ...videoState, ...state });
      }
    };

  return (
    <div className="video_container">
      <Container maxWidth="md" justify="center">
      <div className="player__wrapper">
        <ReactPlayer ref={setVideoPlayerRef}
                  className="player"
                  url={url}
                  width="100%"
                  height="100%"
                  playing={playing}
                  muted={muted}
                  onProgress = {progressHandler}
                />
      </div>
      <Control  onPlayPause={playPauseHandler}
           playing={playing}
           onRewind={rewindHandler}
           onForward ={fastFowardHandler }
           played ={played}
           />
      </Container>
    </div>
  );
}
export default Player;

