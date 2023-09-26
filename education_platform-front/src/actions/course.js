import * as api from '../api/apiCourse';
import {START_LOADING, FETCH_Course, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export const getCourse = (number) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchCourses(number);
    console.log(data)
    dispatch({ type: FETCH_Course, payload: { subject: data } });
  } catch (error) {
    console.log(error);
  }
};

export const createCourse = (subject) => async (dispatch) => {
  try {
    const { data } = await api.createCourse(subject);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateCourse = (id, subject) => async (dispatch) => {
  try {
    const { data } = await api.updateCourse(id, subject);

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