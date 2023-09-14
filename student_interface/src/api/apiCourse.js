import axios from 'axios'

const url = 'http://localhost:5000/courses';

export const fetchCourse = () => axios.get(url);
console.log(fetchCourse)