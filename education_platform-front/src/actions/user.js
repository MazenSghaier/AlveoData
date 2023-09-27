import * as api from '../api/apiUser';
import { AUTH, UPDATE } from '../constants/actionTypes';

export const getUser = (id) => async (dispatch) => {

    try{

        const { data } = await api.fetchUser(id);

        dispatch({ type: 'FETCH', payload: data}) ;

    }catch(err){
      console.log(err)
    }
}

export const updatedUser = (id,user) => async (dispatch) => {
    try{

        const {data} = await api.changeUser(id,user);

        dispatch({ type: UPDATE, data});
  
    }catch (error){

        console.log(error)
    }
}

export const signin = (formData) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);

      dispatch({ type: AUTH, data });
      
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