import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import fetchCircuits from "../api/circuits";

export const initializeSession = () => ({
    type: "INITIALIZE_SESSION",
});

const storeData = (data) => ({
    type: "STORE_DATA",
    data,
});

export const fetchData = () => (dispatch) =>
    fetchCircuits().then(res => dispatch(storeData(res)));

const sessionReducer = (state = false, action) => {
    switch (action.type) {
        case "INITIALIZE_SESSION":
            return true;
        default: return state;
    }
};

const dataReducer = (state = [], action) => {
    switch (action.type) {
        case "STORE_DATA":
            return action.data;
        default: return state;
    }
};

const reducer = combineReducers({
    loggedIn: sessionReducer,
    data: dataReducer,
});

let middleware;

if (__isBrowser__) {
    const reduxDevToolsMiddleware = window && window.devToolsExtension && window.devToolsExtension();
    middleware = compose(applyMiddleware(thunkMiddleware), reduxDevToolsMiddleware);
} else {
    middleware = applyMiddleware(thunkMiddleware);
}

export default initialState => createStore(reducer, initialState, middleware);
