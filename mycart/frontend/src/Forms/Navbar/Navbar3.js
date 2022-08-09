import logo from './logo2.png';
import { useState } from "react"
import './navbar.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Navbar1() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
   
    
  
    return (
      <nav className= "navigation">
        {/* <a href="/" className="brand-name">
          MacroSoft
        </a> */}

        <img src={logo}></img>
        <h3>Kotak Education</h3>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
       <i class="bi bi-list"></i>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a href="/CommonDashboard" >Home</a>
            </li>
            <li>
              <a href="/DataList">Employees</a>
            </li>
            
          </ul>
        </div>
      </nav>
    );
  }