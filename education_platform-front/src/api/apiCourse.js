import axios from 'axios'

const API = axios.create({ baseURL: 'https://tubular-souffle-e2811d.netlify.app/' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchCourses = (number) => API.get(`/courses/${number}`);
export const createCourse = (newCourse) => API.Course('/courses', newCourse);
export const likeCourse = (id) => API.patch(`/courses/${id}/likeCourse`);
export const updateCourse = (id, updatedCourse) => API.patch(`/courses/${id}`, updatedCourse);
export const deleteCourse = (id) => API.delete(`/courses/${id}`);