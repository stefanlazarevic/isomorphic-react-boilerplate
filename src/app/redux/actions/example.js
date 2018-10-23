import { EXAMPLE_TYPE } from '../types/example';

export const exampleAction = () => dispatch => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: EXAMPLE_TYPE,
        data,
      })
    );
};
