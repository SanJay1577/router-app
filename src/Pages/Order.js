import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../Redux/ReduxAction/actionCreators';


const Order = () => {
  //varibles for the function...
  const reduxState = useSelector((state)=>state); 
  const dispatch = useDispatch();
// const purchaseDispatch = useDispatch(purchaseProduct)
// const restoreDispatch = useDispatch(restoreProduct)

   const {purchaseProduct, restoreProduct} = bindActionCreators(actionCreators, dispatch); 




  console.log(reduxState);
  console.log(reduxState.inventory);
  console.log(reduxState.userList);

  const [inventory, setInventory] = useState(0);
  const [restore, setRestore] = useState(5);
  const [purchase, setPurcase] = useState(0);
  console.log(restore);
  return (
    <div>
        <h1>Order your no of juice here</h1>
      OverAll Inventory : {reduxState.inventory} {" "}
      <div>
        <input 
        value = {restore} 
        placeholder="restore" 
        type="number"
        onChange={(e)=>setRestore(e.target.value)} />

        <input 
        value = {purchase} 
        placeholder="purchase" 
        type="number"
        onChange={(e)=>setPurcase(e.target.value)} />

      </div>
       <button
       onClick={()=>restoreProduct(restore)}
       >Add Inventory</button>

       {" "}
       <button
       onClick={()=>purchaseProduct(purchase)}
       >Purchase order</button>

       <hr/>

       Sate Inventory : {inventory} {" "}
       <button
       onClick={()=>setInventory(inventory + 100)}
       >Add Inventory</button>

       {" "}
       <button
       onClick={()=>setInventory(inventory - 50)}
       >Purchase order</button>




    </div>
  )
}

export default Order