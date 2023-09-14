import * as api from '../api/apiUser';

export const getUser = () => async (dispatch) => {

    try{
        const { data } = await api.fetchUser();

        dispatch({ type: 'FETCH_ALL', payload: data}) ;

    }catch(err){

    }

}