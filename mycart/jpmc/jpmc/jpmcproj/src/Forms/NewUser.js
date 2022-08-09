import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Navbar from './Navbar/Navbar';
import './NewUser.css';

const NewUser = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [number, setNumber] = useState('');
    const [location, setLocation] = useState('');
  
    return (
      <div className='layout'>
        <Navbar />
      <div className="create">
        <h3>Add New Employee</h3>
        
        <form className='container'>
          <label className='lbl'>First Name</label>
          <input 
            type="text" 
            required 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='First Name'
          />
           <br></br>
          <label className='lbl'>Last Name</label>
          <input 
            type="text" 
            required 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Last Name'
          />
          <br></br>
          <label className='lbl'>Email</label>
          <input 
            type="email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='xyz@gmail.com'
          />
          <br></br>
          <label className='lbl'>Phone Number</label>
          <input 
            type="number" 
            required 
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder='99999 00000'
          />
          <br></br>
          <label className='lbl'>Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="Female">Female</option>
          </select>
          <br></br>
          <label className='lbl'>Country</label>
          <input 
            type="text" 
            required 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder='India'
          />
          <br></br>
          <button>Add Employee</button>
        </form>
      </div>
      </div>
    );
}
 
export default NewUser;