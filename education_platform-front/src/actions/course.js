import * as api from '../api/apiCourse';

export const getCourse = () => async (dispatch) => {

  try {
    const data = await api.fetchCourse(); // Fetch data from your API
    dispatch({ type: 'FETCH_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_FAILURE', payload: error.message });
  }
};
