const initialState = {
    // Initial user data here
    FirstName: '',
    LastName: '',
    Phone: '',
    Email: '',
    birthdate: '',
    gender: '',
    country: '',
  };

export const user = ( user = initialState , action ) => {

    switch (action.type) {

        case 'FETCH_ALL' :

            return action.payload;

        case 'UPDATE':

            return action.payload;

        default:
            
            return user;
    }
}