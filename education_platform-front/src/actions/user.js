import * as api from '../api/apiUser';
import { AUTH } from '../constants/actionTypes';

export const getUser = (id) => async (dispatch) => {

    try{
        const { data } = await api.fetchUser(id);

        dispatch({ type: 'FETCH', payload: data}) ;

    }catch(err){

    }

}

export const updatedUser = (user) => async (dispatch) => {
    try{
        const {data} = await api.changeUser(user);
        dispatch({ type:'UPDATE', payload: data});
  
    }catch (error){
        console.log(error)
    }
  }

export const signin = (formData) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);
      console.log('User Data:', data);
      dispatch({ type: AUTH, payload: data });
      
    } catch (error) {
      console.log(error);
    }
  };
  
  export const signup = (formData) => async (dispatch) => {
    try {
      const { data } = await api.signUp(formData);
  
      dispatch({ type: AUTH, data });

    } catch (error) {
      console.log(error);
    }
  };