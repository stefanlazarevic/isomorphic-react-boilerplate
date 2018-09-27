// @flow
declare var __isBrowser__:string;

import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import UsersReducer from '../reducers/users.reducers';

const thunkMiddleware = [thunk];

let reduxDevToolsMiddleware = f => f;

if (__isBrowser__) {
    reduxDevToolsMiddleware = window.devToolsExtension ? window.devToolsExtension() : f => f;
}

const middleware = compose(applyMiddleware(...thunkMiddleware), reduxDevToolsMiddleware);

const combinedReducers = combineReducers({
    users: UsersReducer
});

const store = (initialState: any) => createStore(
    combinedReducers,
    initialState,
    middleware,
);

export default store;
