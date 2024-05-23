import React from "react";
import "./Galaxy.css";

const Galaxy = () => {
  return (
    <>
      <div className="galaxymain">
        <div className="galaxycont">
          <div className="gal1">
            <div className="gal1img">
              <h3 className="galheading">SECURED BY</h3>
              <img className="gal1img" src="../../../images/galaxyvector.png" />
            </div>
            <div className="innergal1">
              <div>
                <img
                  className="imagesincontainers"
                  src="../../../images/hacken 1 (1).png"
                />
              </div>
              <div>
                <img
                  className="imagesincontainers"
                  src="../../../images/rd 1 (1).png"
                />
              </div>
            </div>
          </div>

          <div className="gal1">
            <div className="gal1img">
              <h3 className="galheading"> PUBLISHED BY</h3>
              <img className="gal1img" src="../../../images/galaxyvector.png" />
            </div>
            <div id="innergal2" className="innergal1">
              <div>
                <img
                  className="imagesincontainers"
                  id="imagesincontainers2"
                  src="../../../images/ben 1 (1).png"
                />
              </div>
              <div>
                <img
                  className="imagesincontainers"
                  id="imagesincontainers2"
                  src="../../../images/global 1 (1).png"
                />
              </div>
              <div>
                <img
                  className="imagesincontainers"
                  id="imagesincontainers2"
                  src="../../../images/yahoo 1 (1).png"
                />
              </div>
            </div>
          </div>
          <div className="gal1">
            <div className="gal1img">
              <h3 className="galheading">TECHNOLOGIES</h3>
              <img className="gal1img" src="../../../images/galaxyvector.png" />
            </div>
            <div className="innergal1">
              <div className="maindiv">
                <div className="innerofmain">
                  <div>
                    <img
                      className="imagesincontainers"
                      src="../../../images/solidity 1 (1).png"
                    />
                  </div>
                  <div>
                    <img
                      className="imagesincontainers"
                      src="../../../images/aws 1 (2).png"
                    />
                  </div>
                </div>

                <div className="innerofmain">
                  <div>
                    <img
                      className="imagesincontainers"
                      src="../../../images/ocu 1 (1).png"
                    />
                  </div>
                  <div>
                    <img
                      className="imagesincontainers"
                      src="../../../images/unreal 1 (1).png"
                    />
                  </div>
                </div>

                <div className="innerofmain">
                  <div>
                    <img
                      className="imagesincontainers"
                      src="../../../images/binance 1 (1).png"
                    />
                  </div>
                  <div>
                    <img
                      className="imagesincontainers"
                      src="../../../images/unity 1 (1).png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Galaxy;
