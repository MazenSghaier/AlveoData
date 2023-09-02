import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import ReactPlayer from "react-player";
import { Container } from "@mui/material";
import './Player.css'

import { Slider, withStyles, Button,  Tooltip,  Popover,Grid } from "@material-ui/core";

import FastForward from '@mui/icons-material/FastForward';
import FastRewind from '@mui/icons-material/FastRewind';
import Pause from '@mui/icons-material/Pause';
import PlayArrow from '@mui/icons-material/PlayArrow';
import SkipNext from '@mui/icons-material/SkipNext';
import VolumeUp from '@mui/icons-material/VolumeUp';
 
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


const Control = ({onPlayPause , playing ,onRewind , onForward}) => {

  const useStyles= makeStyles((theme) => ({
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
  }));

  const classes = useStyles();

  

  return (
    <Container maxWidth="md" justify="center">
        <div className="mid__container">
            <div className="icon__btn">
                <FastRewind fontSize="medium" onDoubleClick={onRewind}/>
            </div>

            <div className="icon__btn" onClick={onPlayPause}>
               
                <Pause fontSize="medium" />
            </div>

            <div className="icon__btn">
                <FastForward fontSize="medium" onDoubleClick={onForward}/>
            </div>

        </div>
        <div className="bottom__container">
            <div className="slider__container">
                <PrettoSlider />
            </div>
            <div className="control__box">
                <div className="inner__controls">
                <div className="icon__btn">
                    <PlayArrow fontSize="medium" />
                </div>
                <div className="icon__btn">
                    <SkipNext fontSize="medium" />
                </div>
                <div className="icon__btn">
                    <VolumeUp fontSize="medium" />
                </div>

                <Slider className={`${classes.volumeSlider}`} />
                <span className='spano'>5/20</span>
                </div>
            </div>
        </div>
    </Container>
  );
}

// Add prop type validation for the Control component
Control.propTypes = {
    onPlayPause: PropTypes.func.isRequired,
    playing: PropTypes.bool.isRequired,
    onRewind: PropTypes.func.isRequired,
    onForward: PropTypes.func.isRequired,
  };

export default Control;

