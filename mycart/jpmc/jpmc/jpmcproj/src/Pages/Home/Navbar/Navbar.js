import logo from './logo2.png';
import { useState } from "react"
import './navbar.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
   
    
  
    return (
      <nav className= "navigation">
        {/* <a href="/" className="brand-name">
          MacroSoft
        </a> */}

        <img src={logo}></img>
        <h3>Kotak Education</h3>
        
        
      </nav>
    );
  }