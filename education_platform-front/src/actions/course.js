import * as api from '../api/apiCourse';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export const getCourse = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCourses();
    console.log(data)
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createCourse = (Course) => async (dispatch) => {
  try {
    const { data } = await api.createCourse(Course);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateCourse = (id, Course) => async (dispatch) => {
  try {
    const { data } = await api.updateCourse(id, Course);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likeCourse = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  try {
    const { data } = await api.likeCourse(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCourse = (id) => async (dispatch) => {
  try {
     await api.deleteCourse(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};