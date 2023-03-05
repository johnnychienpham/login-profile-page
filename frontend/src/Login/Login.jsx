import React, { useState } from 'react'
import "./login.css"

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    
  return (
    <>
        <div className="login-container">
            <div className="login-title">Login</div>
            <div className="input-container">
                <label >Email:</label>
                <input type="email"  placeholder='example@kyanon.digital'/>
                <label >Password:</label>
                <input type={passwordShown?"text":"password"} placeholder='******'/>
                <div className='check-form'>
                    <div className='check-password'>
                        <input type="checkbox" onClick={()=>setPasswordShown(!passwordShown)} className='checkbox'/> 
                        <label>Show password</label>
                    </div>
                    <button onClick="" className='signin-button'>Sign in</button>
                </div>
               
            </div>
            
        </div> 
    </>
  )
}

export default Login