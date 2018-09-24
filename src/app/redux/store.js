/**
 * Redux core imports.
 */
import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/**
 * Import Redux reducers.
 */
import UsersReducer from './reducers/users.reducer';
import PostsReducer from './reducers/posts.reducer';

/**
 * Define Redux middlewares.
 */
const thunkMiddleware = [thunk];
const reduxDevToolsMiddleware = __isBrowser__ ? window.devToolsExtension && window.devToolsExtension() : f => f;
const middleware = compose(applyMiddleware(...thunkMiddleware), reduxDevToolsMiddleware);

/**
 * Defined Redux reducers.
 */
const combinedReducers = combineReducers({
    users: UsersReducer,
    posts: PostsReducer,
});

const store = initialState => createStore(
    combinedReducers,
    initialState,
    middleware,
)

export default store;
