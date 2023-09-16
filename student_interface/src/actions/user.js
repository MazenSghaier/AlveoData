import * as api from '../api/apiUser';

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