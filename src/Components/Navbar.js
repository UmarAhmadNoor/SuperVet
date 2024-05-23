import React from "react";
import "./Style.css";
const Navbar = () => {
  return (
    <> 
    <div className="catmain">
      <nav className="navbar">
        <div>
          <img src="../../images/logo.png" />
        </div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Roadmap</a>
            </li>
            <li>
              <a href="#">Squad</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              {" "}
              
              <button className="btn"> Lets Explore </button>
            </li>
          </ul>
        </div>
        
         
            
      </nav>
      </div>
    </>
  );
};

export default Navbar;
