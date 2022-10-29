const userListReducers = (state = 15, action) => {
    switch (action.type){
        case "add_a_user": 
        return state + action.payload;

        default :
        return state;
    }
}

export default userListReducers; 