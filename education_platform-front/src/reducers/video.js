import { UPDATE_VIDEO_PROGRESS, FINISHED_VIDEO } from '../constants/actionTypes';

const initialState = {
  videoProgress: {},
  lessonCompletion: [], // Initialize it as an empty array
};

const video = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VIDEO_PROGRESS:
      return {
        ...state,
        videoProgress: {
          ...state.videoProgress,
          [action.payload.videoIndex]: action.payload.progress,
        },
      };
    case FINISHED_VIDEO:
      console.log('lessonCompletion:', state.lessonCompletion);
      console.log('FINISHED_VIDEO payload:', action.payload);
      return {
        ...state,
        lessonCompletion: [...state.lessonCompletion, action.payload],
      };
    default:
      return state;
  }
};

export default video;