import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ExampleReducer from './reducers/example';

const thunkMiddleware = [thunk];

let reduxDevToolsMiddleware = f => f;

if (__isBrowser__) {
  reduxDevToolsMiddleware = window.devToolsExtension
    ? window.devToolsExtension()
    : f => f;
}

const middleware = compose(
  applyMiddleware(...thunkMiddleware),
  reduxDevToolsMiddleware
);

const combinedReducers = combineReducers({
  example: ExampleReducer,
});

const store = initialState =>
  createStore(combinedReducers, initialState, middleware);

export default store;
