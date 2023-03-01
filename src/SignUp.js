/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { auth}from './firebase';
import './SignUp.css'

function SignUp() {
    const navigate = useNavigate();
    // const[displayName,setName]=useState("");
    // const[phn,setPhn]=useState("");
    
    const [email,setEmail] =useState("");
    const[password,setPassword]=useState("");
    const register=e=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>
        {
          console.log(auth);
          if(auth)
           {
             navigate("/");
           }
        })
        .catch(error=>alert(error.message))
    }
  return (
    <div className='signUp'>
       <Link to="/"> <img className="signUp__logo" src="./images/amazon.png" ></img></Link>
        <div className='signUp__container'>
            <h3>Create Your Account</h3>
            <form>
                {/* <h6>Your Name</h6>
                <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
                <br></br>
                <h6>Mobile Number</h6>
                <input type="text" value={phn} onChange={e=>setPhn(e.target.value)}/>
                <br></br> */}
                <h6>Email</h6>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
                <br></br>
                <h6>Password</h6>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                <br></br>
                
               
            </form>
            <p>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.</p>
             <button type="submit" onClick={register}className='signUp__registerButton '>Continue</button>
        </div>
    </div>
  )
}

export default SignUp