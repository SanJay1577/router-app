import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Userdetails = () => {
    const {id} = useParams(); 
    const [user, setUser] = useState([])

 useEffect(()=> {
      async function getUserDetails () {
          const response = await fetch(`https://619e6ef57f09d50017fd2b3e.mockapi.io/users/${id}`, {
              method:"GET"

          }); 
          const data = await response.json(); 
          setUser(data);
          console.log(user)
      }

      getUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

   
  


  return (
    <div>
        <h1>Userdetails</h1>
        <h2>Hi guys welcome to the information of {id}</h2>
      
    </div>
  )
}

export default Userdetails