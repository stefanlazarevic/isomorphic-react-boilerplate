// @flow
declare var __isBrowser__:string;

import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import UsersReducer from '../reducers/users.reducers';

const thunkMiddleware = [thunk];
const reduxDevToolsMiddleware = __isBrowser__ ? window.devToolsExtension && window.devToolsExtension() : f => f;
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
