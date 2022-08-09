import React from 'react'
import StarRating from './StarRating'
import './Rating.css'
import Navbar1 from './Navbar/Navbar3'

export default function() {
  return (
    <div>
    <Navbar1 />
    <div className=' Hocontainer'>
  
     <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Employee ID</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="btn-group btn-group-toggle" data-toggle="buttons">

  <label class="btn btn-secondary active mx-3">
    <input type="radio" name="options" id="option1" autocomplete="off" /> 1st quarter
  </label>
  <label class="btn btn-secondary mx-3">
    <input type="radio" name="options" id="option2" autocomplete="off"/> 2nd quarter
  </label>
  <label class="btn btn-secondary mx-3">
    <input type="radio" name="options" id="option3" autocomplete="off"/> 3rd quarter
  </label>
  <label class="btn btn-secondary mx-3">
    <input type="radio" name="options" id="option3" autocomplete="off"/> 4th quarter
  </label>
</div>
    
<div className='container my-3'>
<StarRating/>
</div>
<button type="submit" class="btn btn-primary my-3">Submit</button>
  
  
</form>
    </div>
</div>
  )
}