export const reducer = (state, action) =>{
    switch (action.type) {
        case "add-value":
            return { ...state, datas:[...state.datas, action.payload],string:!state.string}
            default: 
            return state;
    }
}
// redux is not only for react 
//stand alone library  - simmilar bootstarp 


//backward - to - forward 

//(cuurentstate at that time)prevalue => acion-state => somevalue (currentstate)

// every state will be there in the particular store 

// l-1 -> l2 +=add -> l3, l4, l5, -> l6 -> l30-> = UI



// 1. store                                shop [hotel] [nv, veg, snacks , dessert[99]]
//userlist - {name, pass} 
//user -{name, exsal, state, city}    

// 2. UI (view the data)                  customer [gets _the_order(dessert) ]
//userlist.name

//3. Action 
//emitted or invoking some action with payload   waiter[ gets _the_order(dessert), cancel_order()]
  //1.action providers
  //- dispatching a action 

  //4. Reducer part                           cook in the kitchen [gets _the_order(dessert)-> certains steps[100 -1] ]
  // the action type that you give
  // will do the operations in the reducer 
  // userList reducer
  //user reducer
  //isloggedin reducer

  //1. store will be changed as per the reducer    shop [hotel] [nv, veg, snacks , dessert[98]]
  // [prevalue -valu1 -> newvalue]