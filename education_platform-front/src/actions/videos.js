import {UPDATE_VIDEO_PROGRESS, FINISHED_VIDEO} from '../constants/actionTypes.js'


export const updateVideoProgress = (currentTime, currentIndex) => ({
  type: UPDATE_VIDEO_PROGRESS,
  payload: {
    currentTime,
    currentIndex,
  },
});

export const finishedVideo  = (currentIndex) => ({
  type: FINISHED_VIDEO,
  payload: currentIndex,
});