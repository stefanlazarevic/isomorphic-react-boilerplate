import { FETCH_USERS } from '../types/users.types';
import fetchUsers from '../../api/users';

export const fetchUsersAction = () => dispatch => {
    return fetchUsers().then(data => dispatch({
        type: FETCH_USERS,
        data
    }));
}
