import React, { useContext, useState } from 'react'
import { ReducerContext } from '../App';

export const Context = () => {

  const [state, dispatch] = useContext(ReducerContext); 
  const [field, setFeild] = useState("");

  return (
    <div>
      <input 
      type="text" 
      value={field}
      onChange={(e)=>setFeild(e.target.value)}
       />

      <button
      onClick={()=>dispatch({type:"add-value", payload:field})}
      >Add me</button>


    <ul> {state.datas.map((item, idx)=><li key={idx}>{item}</li>)} </ul> 




    </div>
  )
}
