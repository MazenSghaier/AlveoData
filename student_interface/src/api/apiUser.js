import axios from 'axios'

const url = 'http://localhost:5000/users';

export const fetchUser = () => axios.get(url);
console.log(fetchUser)