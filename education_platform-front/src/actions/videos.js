import {UPDATE_VIDEO_PROGRESS} from '../constants/actionTypes.js'


export const updateVideoProgress = (currentTime) => ({
    type: UPDATE_VIDEO_PROGRESS,
    payload: currentTime,
  });
  