import React from 'react'

import './Home.css'
import Navbar from './Navbar/Navbar'

export default function () {
  return (
   <>
  <Navbar/>

   
    <div className='container'>
    <form className='form'>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1"><strong>Email address</strong></label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1"><strong>Password</strong></label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1"><strong>Remember Me</strong></label>
  </div>
  <button type="submit" className="btn btn-primary">Log in</button>
</form>

    </div>
    </>
  )
}
