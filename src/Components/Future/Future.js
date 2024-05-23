import React from "react";
import "./Future.css";

const Future = () => {
  return (
    <>
      <div className="horsemain">
        <img className="hbg" src="../../../images/horsebg.png" />
        <div className="horsecont">
          <div className="headpara">
            <h1 className="fheading" style={{ fontFamily: "Rajdhani" }}>
              <span style={{ color: "#FFC810" }}>FUTURE </span>
              <span style={{ color: "white" }}>PLAN </span>
              <span style={{ color: "#10E2FF" }}>AI </span>
            </h1>
            <p className="pheading">
              Lorem ipsum dolor sit amet consectetur. Maecenas eu egestas sit
              fringilla. Magna cursus condimentum quis et in. Nec maecenas
              lobortis faucibus turpis. Morbi hendrerit imperdiet ornare aliquam
              turpis in lacus nulla orci. Odio viverra vehicula enim lorem
              fringilla. Ante ut dui nullam nunc condimentum condimentum mattis
              adipiscing vestibulum.
            </p>
          </div>
          <div className="horsepic">
            <img className="horseimage" src="../../../images/horse.png" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Future;
