import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SignupPage = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
// creating functionality 

const handleRegister = async (event) =>{
    event.preventDefault();
    try {
         const response = await fetch("https://619e6ef57f09d50017fd2b3e.mockapi.io/userlist", {
            method:"POST",
            body : JSON.stringify({
              name,
              password,
            }),
            headers :{
                "Content-Type" :"application/json"
            },
         }); 

         const data = await response.json(); 
         if(data) {
            setError("");
            history.push("/home"); 
         }

    } catch (error) {
        setError("Sorry some Error occured"); 

    }
}


  return (
    <div>
      <div className="login-page">
        <form onSubmit={handleRegister}>
        <input 
        placeholder="Name" 
        type ="text"
        value={name}
        onChange={(event)=>setName(event.target.value)}
        />

        <input 
        placeholder="Password"
        type ="text"
        value={password} 
        onChange={(event)=>setPassword(event.target.value)}
        />
        <button type="submit">Signup</button>
        </form>

      </div>
 {error && <div className="error-field"><h2>{error}</h2></div>}
      <h1>Preview-Name : {name}</h1>
      <h1> Preview-Password : {password} </h1>

      <h2>If already registerd please login </h2>

      <button onClick={() => history.push("/login")}>Login</button>
    </div>
  );
};

export default SignupPage;
