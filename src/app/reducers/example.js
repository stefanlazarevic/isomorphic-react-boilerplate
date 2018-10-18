import { EXAMPLE_TYPE } from '@app/types/example';

export default (state = [], action) => {
  switch (action.type) {
    case EXAMPLE_TYPE: {
      return action.data;
    }
    default:
      return state;
  }
};
