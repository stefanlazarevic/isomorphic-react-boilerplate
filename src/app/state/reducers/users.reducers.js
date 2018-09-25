/**
 * Import Reducer Types.
 */
import { FETCH_USERS } from '../types/users.types';

/**
 * Define Reducer initial data.
 */
const initialState = [];

/**
 * Export users reducer.
 */
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS: {
            return action.data;
        }
        default: return state;
    }
}
