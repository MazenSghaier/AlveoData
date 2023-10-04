// Actions.js
import { UPDATE_VIDEO_PROGRESS, FINISHED_VIDEO } from '../constants/actionTypes';

export const updateVideoProgress = (currentTime, currentIndex) => ({
  type: UPDATE_VIDEO_PROGRESS,
  payload: {
    progress: currentTime, // Use "progress" instead of "currentTime"
    currentIndex,
  },
});

export const markLessonComplete = (lessonIndex) => ({
  type: FINISHED_VIDEO,
  payload: lessonIndex,
});