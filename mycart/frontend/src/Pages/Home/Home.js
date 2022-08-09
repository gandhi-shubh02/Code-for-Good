import React, { useState} from 'react';
import './Home.css'
import {Link} from 'react-router-dom'
import Navbar from './Navbar/Navbar'

export default function () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
   <>
  <Navbar/>

   
    <div className='maincontainer'>
    <form className='form'>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1"><strong>Email address</strong></label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1"><strong>Password</strong></label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1"><strong>Remember Me</strong></label>
  </div>
  <button type="submit" className="btn btn-warning" style={{color: 'black'}}><Link to= '/CommonDashboard'>Log in</Link></button>
</form>

    </div>
    </>
  )
}
