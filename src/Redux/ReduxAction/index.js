export const restoreProduct = (products) =>{
   //dispatching the type and payload
    return {
        
            type:"restore_the_inventory",
            payload : products,
        
    }

}

export const purchaseProduct = (purchase) => {
  //dispatching the type and payload
     return {
        
            type:"purchase_list",
            payload:purchase,
     
     }
}



