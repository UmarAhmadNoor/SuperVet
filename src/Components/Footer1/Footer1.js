import React, { useState } from "react";
import "./Footer1.css";

const Footer1 = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <div className="mainfooter">
        <div className="footercont">
          <div className="styleee">
            <div id="heading1" className="heading">
              FAQ
            </div>
            <img
              id="style1"
              className="stline"
              src="../../../images/Vector 20 (1).png"
            />
          </div>
          <div className="pppmain">
            <div className="ppp">
              <img src="../../../images/Rectangle 87.png" />
              <p className="paraline">
                Can your provide us with a brief introduction to super vet ?
              </p>
            </div>
            <div className="ppp">
              <img src="../../../images/Rectangle 87.png" />
              <p className="paraline">What is the gameplay like briefly ?</p>
            </div>
            <div className="ppp">
              <img src="../../../images/Rectangle 87.png" />
              <p className="paraline">
                Where can i learn more about the game ?
              </p>
            </div>
            <div className="ppp">
              <img src="../../../images/Rectangle 87.png" />
              <p className="paraline">
                What are the different ways players can earn while they play ?
              </p>
            </div>
            <div className="ppp">
              <img src="../../../images/Rectangle 87.png" />
              <p className="paraline">
                If I’m an influencer/content creator/partner, who should i
                contact?
              </p>
            </div>
          </div>
          <div>
            <img
              className="footer1imagevector"
              style={{ width: "100%" }}
              src="../../../images/Vector 25 lineeeeeee.png"
            />
          </div>

          <div className="innerft">
            <div>
              <img className="footer1image" src="../../../images/logo.png" />
            </div>
            <div className="lastsec">
              <h2>LEARN MORE</h2>
              <br />
              <p>Home</p>
              <p>Gameplay</p>
              <p>Roadmap</p>
              <p>Superverse</p>
            </div>
            <div className="lastsec">
              <h2>MARKET PLACE</h2>
              <br />
              <p>Charcters</p>
              <p>In-Game Assets</p>
              <p>Buy/Sell</p>
              <p>NFT Staking</p>
            </div>
            <div className="lastsec">
              <h2>QUICK LINKS</h2>
              <br />
              <p>Whitepaper</p>
              <p>Pitch Deck</p>
              <p>Maeketplace</p>
              <p>Smart contract</p>
            </div>
            <div className="subscribediv">
              <h1
                className="innerftheading"
                style={{ fontFamily: " Rajdhani" }}
              >
                SUBSCRIBE US
              </h1>

              <div>
                <input
                  className="input-field"
                  type="text"
                  id="userInput"
                  name="userInput"
                  value={inputValue}
                  onChange={handleChange}
                />
                <button id="scbtn" className="searchbtn">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer1;
