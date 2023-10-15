import React , {useState} from 'react';

import './Player.css'

import { makeStyles, Slider, withStyles} from "@material-ui/core";

import FastForward from '@mui/icons-material/FastForward';
import FastRewind from '@mui/icons-material/FastRewind';
import Pause from '@mui/icons-material/Pause';
import PlayArrow from '@mui/icons-material/PlayArrow';
import SkipNext from '@mui/icons-material/SkipNext';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeOff from '@mui/icons-material/VolumeOff';


const useStyles = makeStyles({
  volumeSlider: {
    width: "100px",
    color: "#35bbe3",
  },

  bottomIcons: {
    color: "#999",
    padding: "12px 8px",

    "&:hover": {
      color: "#fff",
    },
  },
});

const PrettoSlider = withStyles({
  root: {
    height: "20px",
    color: "#35bbe3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#35bbe3",
    border: "2px solid currentColor",
    marginTop: -3,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 5,
    borderRadius: 4,
    width: "100%",
  },
  rail: {
    height: 5,
    borderRadius: 4,
  },
})(Slider);

const Control = ({
  onPlayPause,
  playing,
  onRewind,
  onForward,
  played,
  onSeek,
  onSeekMouseUp,
  onVolumeChangeHandler,
  onVolumeSeekUp,
  volume,
  mute,
  onMute,
  duration,
  currentTime,
  onMouseSeekDown,
  controlRef,
  toggleFullScreen,
  isFullScreen,
  title,
}) => {
  const classes = useStyles();

  const [selectedQuality, setSelectedQuality] = useState("auto");
  const [selectedSpeed, setSelectedSpeed] = useState(1);

  const qualityOptions = ["auto", "360p", "720p", "1080p"];
  const speedOptions = [0.5, 1, 1.5, 2];

  const handleQualityChange = (event) => {
    const newQuality = event.target.value;
    setSelectedQuality(newQuality);
    // You can implement logic to set the video quality based on the selected option
    // For example, using ReactPlayer's setPlaybackQuality method
  };
  
  const handleSpeedChange = (event) => {
    const newSpeed = event.target.value;
    setSelectedSpeed(newSpeed);
    // You can implement logic to set the video playback speed based on the selected option
    // For example, using ReactPlayer's setPlaybackRate method
  };

  return (
    <div className="control_Container" ref ={controlRef}>
      <div className="top_container">
        <h2 style={{ color:'white' }}>{title}</h2>
      </div>
      <div className="mid__container">
        <div className="icon__btn" onClick={onRewind}>
          <FastRewind fontSize="medium" />
        </div>

        <div className="icon__btn" onClick={onPlayPause}>
          {playing ? (
            <Pause fontSize="medium" />
          ) : (
            <PlayArrow fontSize="medium" />
          )}{" "}
        </div>

        <div className="icon__btn">
          <FastForward fontSize="medium" onClick={onForward} />
        </div>
      </div>
      <div className="bottom__container">
        <div className="slider__container">
          <PrettoSlider
            min={0}
            max={100}
            value={played * 100}
            onChange={onSeek}
            onChangeCommitted={onSeekMouseUp}
            onMouseDown={onMouseSeekDown}
          />
        </div>
        <div className="control__box">
          <div className="inner__controls">
            <div className="icon__btn" onClick={onPlayPause}>
              {playing ? (
                <Pause fontSize="medium" />
              ) : (
                <PlayArrow fontSize="medium" />
              )}{" "}
            </div>

            <div className="icon__btn">
              <SkipNext fontSize="medium" />
            </div>

            <div className="icon__btn" onClick={onMute}>
            {mute ? (
                  <VolumeOff fontSize="medium" />
                ) : (
                  <VolumeUp fontSize="medium" />
                )}
            </div>

            <Slider
              className={`${classes.volumeSlider}`}
              onChange={onVolumeChangeHandler}
              value={volume * 100}
              onChangeCommitted={onVolumeSeekUp}
            />

            <span className='spano'>{ currentTime} : {duration}</span>

            <div className="quality__speed">
            <div className="icon__btn" onClick={toggleFullScreen}>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Control;