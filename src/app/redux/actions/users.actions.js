/**
 * 1. Import Reducer Types.
 */
import { FETCH_USERS } from '../types/users.types';

/**
 * Import request from api.
 */
import fetchUsers from '../../routes/api/users';

/**
 * Export fetch users action.
 */
export const fetchUsersAction = () => dispatch => {
  return fetchUsers().then(data => dispatch({
    type: FETCH_USERS,
    data
  }));
};
