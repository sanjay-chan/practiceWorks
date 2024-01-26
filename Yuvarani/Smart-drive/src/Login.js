
 import React from "react";
 import './Login.css';
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
const navigate = useNavigate();
  return (
    <div className="container">
    <div className="main-box">
    <h2>Login</h2>

        
    <label for="uname"><b>Username</b></label>
    <div style={{ position: 'relative' }}>
    <FaUser size={15} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
      <input  type="text" placeholder="    Type your username" name="uname" required /><br></br>
      </div>
    

    <label for="psw"><b>Password</b></label>
    <div style={{ position: 'relative' }}>
    <FaLock size={15} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
      <input type="password" placeholder="    Type your password" name="psw" required /><br></br>
      </div>
    
        
    <button onClick={()=>navigate('/home')} type="submit" >LOGIN</button>
    
    <h5>Signup Using</h5>
    <div className="icon-container">
    
      <FaFacebook className="icon" size={30} />
    
      <AiFillTwitterCircle className="icon" size={30} />
     <FcGoogle className="icon" size={30} />
   
    </div>

    
  
    
    </div>
   
  </div>
  

  
  );
}

export default Login;