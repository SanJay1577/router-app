import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [datas, setDatas] = useState([]); 
  const [error, setError] = useState(""); 

  useEffect(()=>{
    const getUserList = async () =>{
        const response = await fetch("https://619e6ef57f09d50017fd2b3e.mockapi.io/userlist", {
            method:"GET",
        }); 
        const data = await response.json(); 
        setDatas(data);


    }
    getUserList();
  }, []); 


  //login functionality
  const handleLogin = (event) =>{
     event.preventDefault(); 
     const check = datas.find(elm => elm.name === name && elm.password === password); 
     if(!check) {
        setError("Sorry you have entered incorrect credentials")
     } else {
        setError("");
        history.push("/home");
     }
  }


  return (
    <div>
      <div className="login-page">
        <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
        </form>
      </div>
      {error && <div className="error-field"><h2>{error}</h2></div>}
      <h1>Preview-Name : {name}</h1>
      <h1> Preview-Password : {password} </h1>

      <h2>If not registerd please signup </h2>

      <button onClick={() => history.push("/register")}>Signup</button>
    </div>
  );
};

export default LoginPage;
