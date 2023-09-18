import * as api from '../api/apiUser';
import { AUTH } from '../constants/actionTypes';

export const getUser = () => async (dispatch) => {

    try{
        const { data } = await api.fetchUser();

        dispatch({ type: 'FETCH_ALL', payload: data}) ;

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

export const signin = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signIn(formData);
  
      dispatch({ type: AUTH, payload: data });
  
      router.push('/students');
    } catch (error) {
      console.log(error);
    }
  };
  
  export const signup = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signUp(formData);
  
      dispatch({ type: AUTH, data });
  
      router.push('/students');
    } catch (error) {
      console.log(error);
    }
  };