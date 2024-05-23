import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <footer className="footer">
      <div className="container">
        <img className="fimg" src="../../../images/footerimg.avif" />
        <div className="footer-content">
          <div className="footer-links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-copyright">
            <p>&copy; 2024 Cat App. All rights reserved.</p>
          </div>
        </div>

        <div className="search">
          <div className="searchdata">
            <label className="userInput">Enter here:</label>
          </div>
          <div>
            <input
              className="input-field"
              type="text"
              id="userInput"
              name="userInput"
              value={inputValue}
              onChange={handleChange}
            />
            <button className="searchbtn">Search</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
