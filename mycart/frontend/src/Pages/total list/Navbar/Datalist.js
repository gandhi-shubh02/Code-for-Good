import React, { useState, useEffect } from 'react';
import Filters from './Filters';
import Navbar1 from './Navbar3'



function Datalist() {
    const [userList ,setuserList]= useState([])
     useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
    
    .then(response=> response.json())
    .then(result=> setuserList(result))
    .catch(error=> console.log('error'))
  },[])
    
  
    return (
        <>
        <Navbar1/>
        <Filters/>
        <div className='container' >
        
      <div className='my-5'>
        <table className="table table-bordered ">
  <thead>
    <tr>
      <th scope="col">First Name </th>
      <th scope="col">Last Name</th>
      <th scope="col">Mobile</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">Phases</th>
      <th scope="col">Age</th>
      <th scope="col">Department</th>
      <th scope="col">Location</th>


    </tr>
    <tbody>
        {userList && userList.length>0 ? userList.map((user)=>(
        <tr>
        <td colspan="2" className="table-active">{user.Firstname}</td>
            <td colspan="2" className="table-active">{user.Lastname}</td>
            <td colspan="2" className="table-active">{user.Mobile}</td>
            <td colspan="2" className="table-active">{user.Email}</td>

            <td colspan="2" className="table-active">{user.Phases}</td>
            <td colspan="2" className="table-active">{user.Age}</td>
            <td colspan="2" className="table-active">{user.Department}</td>
            <td colspan="2" className="table-active">{user.Location}</td>


        </tr>))
        :'Loading'
        }

    </tbody>
  </thead>
  </table>
      </div>
      </div>
      </>
    );
  }
  export default Datalist;