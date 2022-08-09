
import React from 'react'

export default function Filters() {
    return (
        <div className='container'>
            <h4> Filters</h4>
            <div className='container'>
            <div class="btn-group mx-5">
  <button class="btn btn-secondary btn-sm" type="button">
    Phase
  </button>
  <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split " data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Active</a></li>
                                <li><a class="dropdown-item" href="#">On hold</a></li>
                                <li><a class="dropdown-item" href="#">Retired</a></li>
  </ul>
</div>
<div class="btn-group mx-5">
  <button class="btn btn-secondary btn-sm" type="button">
    Department
  </button>
  <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Event Coordination</a></li>
                                <li><a class="dropdown-item" href="#">Teaching</a></li>
                                <li><a class="dropdown-item" href="#">IT</a></li>
   
  </ul>
</div>
<div class="btn-group mx-5">
  <button class="btn btn-secondary btn-sm" type="button">
    Location
  </button>
  <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">India</a></li>
                                <li><a class="dropdown-item" href="#">Europe</a></li>
                                <li><a class="dropdown-item" href="#">USA</a></li>
  </ul>
</div>
<div class="btn-group mx-5">
  <button class="btn btn-secondary btn-sm" type="button">
    Role
  </button>
  <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Project Managerr</a></li>
                                <li><a class="dropdown-item" href="#">Trainee Coordinator
                                </a></li>
                                <li><a class="dropdown-item" href="#">Senior Teacher Associate
                                </a></li>
  </ul>
</div>
</div>
</div>
                       
        
    )
} 
