import React from "react";
import Navbar from "./Navbar";
import "./Style.css";

const Hero = () => {
  return (
    <>
      <div className="Container">
        <Navbar />
        <div className="hero1">
          <div className="btnpara">
            <div className="buttons">
              <button className="btn1">WATCH TRAILER</button>
              <button className="btn1 font-glaive" id="btn1">
                HIT & PLAY
              </button>
            </div>
            <div className="heropara">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
                penatibus felis diam purus augue lectus nullam. Purus mauris a
                scelerisque turpis le o duis. Rhoncus, mauris fringilla mi, et
                ac. Suscipit amet quam amet lectus
              </p>
            </div>
          </div>
          <div className="herocont">
            <div className="iconsofherosection">
              <div>
                <img className="iconsstyle" src="../../images/fb icon.png" />
              </div>
              <div>
                <img className="iconsstyle" src="../../images/twit.png" />
              </div>
              <div>
                <img className="iconsstyle" src="../../images/link.png" />
              </div>
              <div>
                <img className="iconsstyle" src="../../images/meta.png" />
              </div>
              <div>
                <img className="iconsstyle" src="../../images/git.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
