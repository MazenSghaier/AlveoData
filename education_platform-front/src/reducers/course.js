import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_BY_CREATOR, FETCH_Course, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes';

export const subject = (state = { isLoading: true, subject: [] }, action) =>  {

  switch (action.type) {
    case 'START_LOADING':
      console.log(state)
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
        return {
          ...state,
          subject: action.payload.data,
          currentPage: action.payload.currentPage,
          numberOfPages: action.payload.numberOfPages,
        };
    case FETCH_BY_CREATOR:
      return { ...state, subject: action.payload.data };
    case FETCH_Course:
      return { ...state, subject: action.payload.subject };
    case LIKE:
      return { ...state, subject: state.subject.map((subject) => (subject._id === action.payload._id ? action.payload : subject)) };
        case COMMENT:
            return {
              ...state,
              subject: state.subject.map((subject) => {
                if (subject._id == +action.payload._id) {
                  return action.payload;
                }
                return subject;
              }),
            };
          case CREATE:
            return { ...state, subject: [...state.subject, action.payload] };
          case UPDATE:
            return { ...state, subject: state.subject.map((subject) => (subject._id === action.payload._id ? action.payload : subject)) };
          case DELETE:
            return { ...state, subject: state.subject.filter((subject) => subject._id !== action.payload) };
          default:
            return state;
        }
};
