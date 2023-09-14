import * as api from '../api/apiCourse';

export const getCourse = () => async (dispatch) => {

    try{
        const { data } = await api.fetchCourse();

        dispatch({ type: 'FETCH_ALL', payload: data}) ;

    }catch(err){

    }

}