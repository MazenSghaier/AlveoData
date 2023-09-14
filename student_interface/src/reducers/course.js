
export const course =( course = [ ] , action ) => {

    switch (action.type) {

        case 'FETCH_ALL' :

            return action.payload;

        case 'CREATE':

            return course;

        default:
            
            return course;
    }
}