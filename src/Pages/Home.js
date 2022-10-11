import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const [students, setStudents] = useState([])
    const history = useHistory();
    useEffect(()=>{
        const getUserDetails = async () =>{
            const response = await fetch("https://619e6ef57f09d50017fd2b3e.mockapi.io/users", {
                method:"GET"

            }); 
            const data = await response.json(); 
            setStudents(data); 
        }
        getUserDetails(); 
    }, [])
  return (
    <div>
              <h2>Browser Router Application</h2>
              <h1>Home</h1>
              {students.map((stud, idx) => 
              <div key={idx}>
                <h1>{stud.name}</h1>
                <button
                onClick={()=>history.push(`/user/${stud.id}`)}
                >Details</button>
                </div>)}
    </div>
  )
}

export default Home