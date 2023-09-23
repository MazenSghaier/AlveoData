import {UPDATE_VIDEO_PROGRESS} from '../constants/actionTypes'

export const  video = (state = 0 , action) =>{
    switch (action.type) {
        case UPDATE_VIDEO_PROGRESS:
          return action.payload;
        default:
          return state;
      }
} 