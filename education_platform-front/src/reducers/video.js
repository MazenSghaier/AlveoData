import {UPDATE_VIDEO_PROGRESS, FINISHED_VIDEO} from '../constants/actionTypes'

export const  video = (state = 0 , action) =>{
    switch (action.type) {
        case UPDATE_VIDEO_PROGRESS:
          return action.payload;
        case FINISHED_VIDEO:
          return action.payload;
        default:
          return state;
      }
} 