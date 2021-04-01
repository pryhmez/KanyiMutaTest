import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import user from "../reducers/user";



export default () => {

    //store

    const store = createStore(
        combineReducers({
          user: user
        }),
        undefined,
        applyMiddleware(thunk)
    );

    return store;
}
