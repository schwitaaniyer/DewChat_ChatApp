import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets';
import { signup, login, resetPass } from '../../config/firebase';

const Login = () => {

  const [currState, setCurrState] = useState("Sign Up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currState === "Sign Up") {
      signup(userName, email, password);
    } else {
      login(email, password);
    }
  }

  return (
    <div className='login'>
      <img className='logo' src={assets.logo_big} alt="" />
      <form onSubmit={onSubmitHandler} className='login-form' >
        <h2>{currState}</h2>
        {currState === "Sign Up" ? <input onChange={(e) => setUserName(e.target.value)} value={userName} className='form-input' type="text" placeholder='Username' required /> : null}
        <input onChange={(e) => setEmail(e.target.value)} value={email} className='form-input' type="email" placeholder='Email Address' required />
        <input onChange={(e) => setPassword(e.target.value)} value={password} className='form-input' type="password" placeholder='Password' required />
        <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className='login-term'>
          <input type="checkbox" />
          <p>Agree to the Terms and Conditions & Privacy Policy.</p>
        </div>
        <div className='login-forgot'>
          {
            currState === "Sign Up"
              ? <p className='login-toggle'>Already have an account? <span onClick={() => setCurrState("Sign In")}>Click here</span></p>
              : <p className='login-toggle'>Don't have an account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
          }
          {currState === "Sign In" ? <p className='login-toggle'>Forgot Password? <span onClick={()=>resetPass(email)}>Click here</span></p> : null}
        </div>
      </form>
    </div>
  )
}

export default Login
