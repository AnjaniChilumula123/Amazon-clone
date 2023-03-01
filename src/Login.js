/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useState } from 'react';
import './Login.css';
import {Link,useNavigate} from 'react-router-dom';
//import { auth}from './firebase';
import {auth} from "./firebase"
function Login() {
    const navigate = useNavigate();
    const [email,setEmail] =useState("");
    const[password,setPassword]=useState("");
    const signin=e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>
        {
          //console.log(auth);
          
          if(auth)
          {
            navigate("/");
          }
        })
        .catch(error=>alert(error.message))
    }

    const register=e=>{
        navigate("/signup");
    }
  return (
    <div className='login'>
       <Link to="/"> <img className="login__logo"src="./images/amazon.png" ></img></Link>
        <div className='login__container'>
            <h3>Sign-in</h3>
            <form>
                <h6>Email</h6>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                <br></br>
                <h6>Password</h6>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                <br></br>
                
                <button type="submit" onClick={signin}className='login__signInButton'>Sign in</button>
                 <br></br>
            </form>
            <p>By signing in you agree to the T&C's of Amazon-Clone .Please see our Privacy Notice and our Interest Based adds</p>
             <button type="submit" onClick={register}className='login__registerButton '>Create your Amazon Clone Account</button>
        </div>
    </div>
  )
}

export default Login
