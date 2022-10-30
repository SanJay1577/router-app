import { createStore, applyMiddleware } from "redux";
import reducers from "./ReduxReducers";
import thunk from "redux-thunk";




// store functionalies

export const store = createStore(
    reducers, 
    {}, 
   applyMiddleware(thunk),
)
