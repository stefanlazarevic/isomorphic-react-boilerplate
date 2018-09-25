// @flow
import { FETCH_USERS } from '../types/users.types';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS: {
            return action.data;
        }
        default: return state;
    }
}
