import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from "react-player";
import { Container } from "@mui/material";
import {formatTime} from './Format'
import './Player.css'
import Comments from "./comments/Comments";
import Control from './Control';
import { data } from './videos'

import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';




let count = 0;

const Player = ({ url }) => {

  const videoPlayerRef = useRef(null);
  const controlRef = useRef(null);

  const [pause , setPause] = useState(false)

  const [videoState, setVideoState] = useState({
    playing: true,
    muted: false,
    volume: 0.5,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
    buffer: true,
  });
  

  //Destructuring the properties from the videoState
  const { playing, muted, volume, playbackRate, played, seeking, buffer } =
    videoState;

  const currentTime = videoPlayerRef.current
    ? videoPlayerRef.current.getCurrentTime()
    : "00:00";
  const duration = videoPlayerRef.current
    ? videoPlayerRef.current.getDuration()
    : "00:00";

  const formatCurrentTime = formatTime(currentTime);
  const formatDuration = formatTime(duration);

  const PausePlayHandler = () => {
    //plays and pause the video (toggling)
    setPause(!pause);
  };

  const playPauseHandler = () => {
    //plays and pause the video (toggling)
    setVideoState({ ...videoState, playing: !videoState.playing });
  };

  const rewindHandler = () => {
    //Rewinds the video player reducing 5
    videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 5);
  };

  const handleFastFoward = () => {
    //FastFowards the video player by adding 10
    videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 10);
  };

  //console.log("========", (controlRef.current.style.visibility = "false"));
  const progressHandler = (state) => {
    if (count > 2) {
      console.log("close");
      controlRef.current.style.visibility = "hidden"; // toggling player control container
    } else if (controlRef.current.style.visibility === "visible") {
      count += 1;
    }

    if (!seeking) {
      setVideoState({ ...videoState, ...state });
    }
  };

  const seekHandler = (e, value) => {
    setVideoState({ ...videoState, played: parseFloat(value / 100) });
    videoPlayerRef.current.seekTo(parseFloat(value / 100));
  };

  const seekMouseUpHandler = (e, value) => {
    console.log(value);

    setVideoState({ ...videoState, seeking: false });
    videoPlayerRef.current.seekTo(value / 100);
  };

  const volumeChangeHandler = (e, value) => {
    const newVolume = parseFloat(value) / 100;

    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: Number(newVolume) === 0 ? true : false, // volume === 0 then muted
    });
  };

  const volumeSeekUpHandler = (e, value) => {
    const newVolume = parseFloat(value) / 100;

    setVideoState({
      ...videoState,
      volume: newVolume,
      muted: newVolume === 0 ? true : false,
    });
  };

  const muteHandler = () => {
    //Mutes the video player
    setVideoState({ ...videoState, muted: !videoState.muted });
  };

  const onSeekMouseDownHandler = (e) => {
    setVideoState({ ...videoState, seeking: true });
  };

  const mouseMoveHandler = () => {
    controlRef.current.style.visibility = "visible";
    count = 0;
  };

  const bufferStartHandler = () => {
    console.log("Bufering.......");
    setVideoState({ ...videoState, buffer: true });
  };

  const bufferEndHandler = () => {
    console.log("buffering stoped ,,,,,,play");
    setVideoState({ ...videoState, buffer: false });
  };

  return (
    <main class="container">
      {/*Video section starts */}
      <div className="video_container">
        <Container maxWidth="md" justify="center">
          <div className="player__wrapper" onMouseMove={mouseMoveHandler}>
            <ReactPlayer
              ref={videoPlayerRef}
              className="player"
              url={url}
              width="100%"
              height="100%"
              playing={playing}
              volume={volume}
              muted={muted}
              onProgress={progressHandler}
              onBuffer={bufferStartHandler}
              onBufferEnd={bufferEndHandler}
            />

            {buffer && <p>Loading</p>}

            <Control
              controlRef={controlRef}
              onPlayPause={playPauseHandler}
              playing={playing}
              onRewind={rewindHandler}
              onForward={handleFastFoward}
              played={played}
              onSeek={seekHandler}
              onSeekMouseUp={seekMouseUpHandler}
              volume={volume}
              onVolumeChangeHandler={volumeChangeHandler}
              onVolumeSeekUp={volumeSeekUpHandler}
              mute={muted}
              onMute={muteHandler}
              playRate={playbackRate}
              duration={formatDuration}
              currentTime={formatCurrentTime}
              onMouseSeekDown={onSeekMouseDownHandler}
            />
          </div>
        </Container>
      </div>
      {/*Video section ends */}

      {/*Play List section starts */}
      <section class="video-playlist">
              <h3 class="title">Title of Video Playlist</h3>
              <p>10 lessions &nbsp; . &nbsp; 50m 48s</p>
              <div class="videos">
                  {data.map((data,index) => (
                    <div key={index} class="video" data-id={data.id} onClick={PausePlayHandler}>
                      <div key={index} data-id={data.id} className="icon__btn" >
                        {pause ? (
                            <PauseCircleIcon fontSize="large" />
                          ) : (
                            <PlayCircleIcon fontSize="large" />
                          )}{" "} 
                          <img style={{width:'100%', height:'100%'}} src={data.image} alt=""/>
                      </div>
                      <h3 class="title">{data.title}</h3>
                      <p class="time">{data.duration}</p>
                    </div>
                  ))}
              </div>
          </section>
          {/*Play List section ends */}

          {/*comments section starts */}
          <Comments commentsUrl="http://localhost:3004/comments"
        currentUserId="1"/>
           {/*Comments section ends */}
    </main>
  );
}
export default Player;

