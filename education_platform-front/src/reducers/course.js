import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export const course = (courses = [], action) =>  {

  switch (action.type) {
    case FETCH_ALL:
      console.log(action.payload)
      return action.payload;
    case LIKE:
      return courses.map((course) => (course._id === action.payload._id ? action.payload : course));
    case CREATE:
      return [...courses, action.payload];
    case UPDATE:
      return courses.map((course) => (course._id === action.payload._id ? action.payload : course));
    case DELETE:
      return courses.filter((course) => course._id !== action.payload);
    default:
      return courses;
  }
};
