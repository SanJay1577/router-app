import { createStore } from "redux";
import reducers from "./ReduxReducers";


// store functionalies

export const store = createStore(
    reducers, 
    {}
)
