import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'


const Userdetails = () => {

  const [student, setStudent] = useState([]);
 
 const {id} = useParams();

 const history = useHistory();

 useEffect(() => {
const getUserDetails = async () =>{
  const respose = await fetch(`https://619e6ef57f09d50017fd2b3e.mockapi.io/users/${id}`, {
    method :"GET",
  }); 
  const data = await respose.json();
  setStudent(data);

}
getUserDetails(); 

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

 
   
  


  return (
    <div>
        <h1>Userdetails</h1>
        <div>
          <h1> Name : {student.name}</h1>
           <h3>City : {student.city}</h3>
           <h3>State : {student.state}</h3>
           <h3>Expected Salary Range :{student.expected} LPA</h3>


        </div>
  <button onClick={()=> history.push("/")}>
    Back to Home
  </button>
      
    </div>
  )
}

export default Userdetails