import { combineReducers } from "redux";
import inventoryReducers from "./inventoryReducers";
import userListReducers from "./userListReducer";

// redux combined reducers

const reducers = combineReducers(
    {
    inventory : inventoryReducers,
    userList : userListReducers,
    }
); 


export default reducers;


