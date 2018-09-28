// @flow
type actionObject = { type: string, data: any };

import { FETCH_USERS } from '../types/users.types';

const initialState = [];

export default (state: any = initialState, action: actionObject) => {
  switch (action.type) {
  case FETCH_USERS: {
    return action.data;
  }
  default: return state;
  }
};
