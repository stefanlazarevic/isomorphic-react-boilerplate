/**
 * Redux core imports.
 */
import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/**
 * Import Redux reducers.
 */
import UsersReducer from './reducers/users.reducer';

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
    users: UsersReducer
});

const store = initialState => createStore(
    combinedReducers,
    initialState,
    middleware,
)

export default store;

// import { compose, createStore, combineReducers, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
// import fetchUsers from "../api/circuits";

// export const initializeSession = () => ({
//     type: "INITIALIZE_SESSION",
// });

// const storeData = (data) => ({
//     type: "STORE_DATA",
//     data,
// });

// export const fetchData = () => (dispatch) =>
//     fetchUsers().then(res => dispatch(storeData(res)));

// const sessionReducer = (state = false, action) => {
//     switch (action.type) {
//         case "INITIALIZE_SESSION":
//             return true;
//         default: return state;
//     }
// };

// const dataReducer = (state = [], action) => {
//     switch (action.type) {
//         case "STORE_DATA":
//             return action.data;
//         default: return state;
//     }
// };

// const reducer = combineReducers({
//     loggedIn: sessionReducer,
//     data: dataReducer,
// });

// let middleware;

// if (__isBrowser__) {
//     const reduxDevToolsMiddleware = window && window.devToolsExtension && window.devToolsExtension();
//     middleware = compose(applyMiddleware(thunkMiddleware), reduxDevToolsMiddleware);
// } else {
//     middleware = applyMiddleware(thunkMiddleware);
// }

// export default initialState => createStore(reducer, initialState, middleware);
