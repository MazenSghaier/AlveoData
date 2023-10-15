import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from "react-player";
import { Container, Button } from "@mui/material";
import { formatTime } from './Tools/Format'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch, useSelector } from 'react-redux';
import { updateVideoProgress } from '../actions/videos'
import "@fontsource/poppins/400-italic.css";
import './Player.css';
import Comments from "./comments/Comments";
import Control from './Control';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

let count = 0;

const Player = (item) => {

  
  const dispatch = useDispatch();
  const subject = useSelector(state => state.subject);
  const data = subject.subject.subject.courses;
  const comments = subject.subject.subject.comments;

  const index = item.item;

  const url = `${process.env.PUBLIC_URL}/assests/videos/${data[0].video}`;


  const videoPlayerRef = useRef(null);
  const controlRef = useRef(null);

  const [pause, setPause] = useState(data.map(() => false));

  const savedProgress = localStorage.getItem(`lessonCompletion_${index}`);
  const initialLessonCompletion = savedProgress ? JSON.parse(savedProgress) : Array(data.length).fill(false);

  // Setting in state
  const [lessonCompletion, setLessonCompletion] = useState(initialLessonCompletion);
  
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);

  const [currentVideo, setCurrentVideo] = useState(url);

  const [title, setTitle] = useState('');

  const [videoState, setVideoState] = useState({
    playing: false,
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


  const PausePlayHandler = (index,video,title) => {
    //plays and pause the video (toggling)
    const newpauseStates = [...pause];
    newpauseStates[index] = !newpauseStates[index];
    setPause(newpauseStates);
    setCurrentVideo(video)
    setCurrentVideoIndex(index);
    setTitle(title)
  };
  
  const LessonComplete = () => {
    if (currentVideoIndex !== null) {
      const newLessonCompletion = [...lessonCompletion];
      newLessonCompletion[currentVideoIndex] = true;
      setLessonCompletion(newLessonCompletion);
      // Save the updated lessonCompletion to local storage
      localStorage.setItem(`lessonCompletion_${index}`, JSON.stringify(newLessonCompletion));
    }
  }
  
  const handleVideoEnded = () => {
    if (currentVideoIndex !== null) {
      const newLessonCompletion = [...lessonCompletion];
      newLessonCompletion[currentVideoIndex] = true;
      setLessonCompletion(newLessonCompletion);
      localStorage.setItem(`lessonCompletion_${index}`, JSON.stringify(newLessonCompletion));
    }
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
      controlRef.current.style.visibility = "hidden"; // toggling player control container
    } else if (controlRef.current.style.visibility === "visible") {
      count += 1;
    }
  
    if (!seeking) {
      setVideoState({ ...videoState, ...state });
    }
  
    const currentTiming = state.playedSeconds; // Get the current time in seconds
    if (currentTiming !== null && currentTiming !== undefined) {
      // Update local storage with currentTime
      localStorage.setItem(`videoProgress_${currentVideoIndex}`, currentTiming.toString());
  
      // Dispatch the action to update the Redux store
      dispatch(updateVideoProgress(currentTiming, currentVideoIndex));
    }
  };

  const seekHandler = (e, value) => {
    setVideoState({ ...videoState, played: parseFloat(value / 100) });
    videoPlayerRef.current.seekTo(parseFloat(value / 100));
  };

  const seekMouseUpHandler = (e, value) => {
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
    setVideoState({ ...videoState, buffer: true });
  };

  const bufferEndHandler = () => {
    console.log("buffering stoped ,,,,,,play");
    setVideoState({ ...videoState, buffer: false });
  };

  const handleClickFullscreen = () => {
    const videoPlayer = videoPlayerRef.current; // Get the video player element

  // Check if the video player is currently in full-screen
  if (
    document.fullscreenElement === videoPlayer ||
    document.mozFullScreenElement === videoPlayer ||
    document.webkitFullscreenElement === videoPlayer
  ) {
    // Exit full-screen mode for the video player
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  } else {
    // Enter full-screen mode for the video player
    if (videoPlayer.requestFullscreen) {
      videoPlayer.requestFullscreen();
    } else if (videoPlayer.mozRequestFullScreen) {
      videoPlayer.mozRequestFullScreen();
    } else if (videoPlayer.webkitRequestFullscreen) {
      videoPlayer.webkitRequestFullscreen();
    }
  }
};

useEffect(() => {
  // Retrieve the saved video progress from local storage
  const savedProgress = localStorage.getItem(`videoProgress_${currentVideoIndex}`);

  if (savedProgress && videoPlayerRef.current) {
    // Parse the saved progress as a float
    const savedProgressFloat = parseFloat(savedProgress);

    // Check if savedProgressFloat is not NaN before seeking
    if (!isNaN(savedProgressFloat)) {
      // Set the video's current time to the saved progress
      videoPlayerRef.current.seekTo(savedProgressFloat);
    }
  }
}, [currentVideoIndex]); 

return (
  <main className="container">
    {/* Video section starts */}
    <div className="video_container">
      <Container maxWidth="md" justify="center">
        <div className="player__wrapper" onMouseMove={mouseMoveHandler}>
          <ReactPlayer
            ref={videoPlayerRef}
            className="player"
            url={`${process.env.PUBLIC_URL}/assests/videos/${currentVideo}`}
            width="100%"
            height="100%"
            playing={playing}
            volume={volume}
            muted={muted}
            onProgress={progressHandler}
            onBuffer={bufferStartHandler}
            onBufferEnd={bufferEndHandler}
            onEnded={handleVideoEnded}
          />

          {buffer && <p>Loading</p>}

          <Control
            controlRef={controlRef}
            title={title}
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
            toggleFullScreen={handleClickFullscreen}
            isFullScreen={isFullScreen}
          />
        </div>
        <Button
          variant='outlined'
          className='btna'
          sx={{ mt: 4 }}
          onClick={LessonComplete}
        >
          Lesson complete
        </Button>
      </Container>
    </div>
    {/* Video section ends */}

    {/* Play List section starts */}
    <section className="video-playlist">
      <h3 className="title ">Title of Video Playlist</h3>
      <p className='duration ml-3 text-sm font-semibold'>
        10 lessons &nbsp; . &nbsp; 50m 48s
      </p>
      <div className="videos">
        {data.map((video, index) => (
          <div
            key={video.id}
            className="video"
            data-id={video.id}
            onClick={() =>
              PausePlayHandler(index, video.video, video.title)
            }
          >
            <div key={video.id} className="icon__btn flex">
              <div className='mr-4'>
                {currentVideoIndex === index && pause[index] ? (
                  <PauseCircleIcon fontSize="large" />
                ) : (
                  <PlayCircleIcon fontSize="large" />
                )}
              </div>
              <img
                style={{ width: '5rem', height: '3rem' }}
                src={`${process.env.PUBLIC_URL}/assests/images/${video.image}`}
                alt=""
              />
            </div>
            <h3 className="title">{video.title}</h3>
            {lessonCompletion[index] && (
              <CheckCircleIcon sx={{ color: 'green' }} />
            )}
            <p className="time">{video.duration}</p>
          </div>
        ))}
      </div>
    </section>
    {/* Play List section ends */}

    {/* comments section starts */}
    <Comments
      commentsUrl={comments}
      currentUserId="1"
    />
    {/* comments section ends */}
  </main>
);
};
export default Player;